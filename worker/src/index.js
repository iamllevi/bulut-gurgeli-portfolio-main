const ALLOWED_ORIGINS = [
  "https://bulutgurgeli.net",
  "https://www.bulutgurgeli.net",
  "https://iamllevi.github.io",
  "http://localhost:8000",
  "http://127.0.0.1:8000"
];

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}

function reply(body, status, origin) {
  const headers = corsHeaders(origin);
  if (typeof body === "string") {
    return new Response(body, { status, headers });
  }
  return Response.json(body, { status, headers });
}

async function postToDiscord(webhookUrl, discordPayload) {
  return fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(discordPayload)
  });
}

// İletişim formu → Discord
async function handleContact(request, env, origin) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return reply("Invalid request body.", 400, origin);
  }

  const { name, email, message, lang } = payload;
  if (![name, email, message].every((v) => typeof v === "string" && v.trim())) {
    return reply("Name, email, and message are required.", 400, origin);
  }

  // IP sunucu tarafında Cloudflare'den alınır; istemciye güvenilmez.
  const ip = request.headers.get("CF-Connecting-IP") || "Alınamadı";

  const discordPayload = {
    allowed_mentions: { parse: [] },
    embeds: [{
      title: "📩 Yeni İletişim Formu Mesajı",
      color: 10617599,
      fields: [
        { name: "👤 İsim", value: name.trim().slice(0, 1024), inline: true },
        { name: "📧 E-posta", value: email.trim().slice(0, 1024), inline: true },
        { name: "🌐 IP Adresi", value: ip, inline: true },
        { name: "💬 Mesaj", value: message.trim().slice(0, 1024) }
      ],
      footer: { text: "Bulut Gürgeli Portfolio" },
      timestamp: new Date().toISOString()
    }]
  };

  const response = await postToDiscord(env.DISCORD_WEBHOOK_URL, discordPayload);
  if (!response.ok) {
    return reply("Unable to send message.", 502, origin);
  }
  return reply({ ok: true, lang }, 200, origin);
}

// Ziyaretçi analizi → Discord
const ANALYTICS_FIELDS = [
  ["ref", "🔗 Nereden Geldi?", false],
  ["loc", "📍 Konum", true],
  ["ip", "🌐 IP Adresi", true],
  ["isp", "🏢 Servis Sağlayıcı", true],
  ["bat", "🔋 Batarya Durumu", true],
  ["cookie", "🍪 Çerez (Cookie) İzni", true],
  ["win", "🪟 Pencere Boyutu", true],
  ["ratio", "💎 Ekran Kalitesi (Ratio)", true],
  ["ab", "🛡️ AdBlocker", true],
  ["net", "📡 İnternet Bağlantısı", true],
  ["orient", "📐 Ekran Yönü", true],
  ["os", "💻 İşletim Sistemi", true],
  ["br", "🌐 Tarayıcı", true],
  ["dev", "📱 Cihaz Tipi", true],
  ["res", "🖥️ Ekran Çözünürlüğü", true],
  ["lang", "🌍 Dil & Saat Dilimi", true],
  ["time", "⏰ Yerel Saat", true],
  ["theme", "🎨 Tema Tercihi", true]
];

async function handleAnalytics(request, env, origin) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return reply("Invalid request body.", 400, origin);
  }

  const clean = (v) => {
    const s = typeof v === "string" ? v : String(v ?? "");
    return s && s !== "undefined" && s !== "null" ? s.slice(0, 1024) : "Bilinmiyor";
  };

  // IP güvenilir kaynaktan: Cloudflare
  const cfIp = request.headers.get("CF-Connecting-IP");
  const data = { ...payload };
  if (cfIp) data.ip = cfIp;

  const fields = ANALYTICS_FIELDS.map(([key, name, inline]) => ({
    name,
    value: clean(data[key]),
    inline
  }));

  const discordPayload = {
    allowed_mentions: { parse: [] },
    embeds: [{
      title: "👀 Yeni Ziyaretçi Analizi (Özelleştirilmiş)",
      color: 5793266,
      fields,
      footer: { text: "Bulut Gürgeli Analytics" },
      timestamp: new Date().toISOString()
    }]
  };

  const response = await postToDiscord(env.DISCORD_WEBHOOK_URL, discordPayload);
  if (!response.ok) {
    return reply("Unable to send analytics.", 502, origin);
  }
  return reply({ ok: true }, 200, origin);
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");
    if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
      return new Response("Forbidden.", { status: 403 });
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (request.method !== "POST") {
      return reply("Method not allowed.", 405, origin);
    }
    if (!env.DISCORD_WEBHOOK_URL) {
      return reply("Contact service is not configured.", 503, origin);
    }

    const path = new URL(request.url).pathname;
    if (path === "/analytics") {
      return handleAnalytics(request, env, origin);
    }
    return handleContact(request, env, origin);
  }
};
