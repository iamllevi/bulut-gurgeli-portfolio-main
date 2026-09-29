export async function onRequestPost(context) {
  const webhookUrl = context.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    return new Response("Contact service is not configured.", { status: 503 });
  }

  let payload;
  try {
    payload = await context.request.json();
  } catch {
    return new Response("Invalid request body.", { status: 400 });
  }

  const { name, email, message, ip, lang } = payload;
  if (![name, email, message].every((value) => typeof value === "string" && value.trim())) {
    return new Response("Name, email, and message are required.", { status: 400 });
  }

  const discordPayload = {
    embeds: [{
      title: "📩 Yeni İletişim Formu Mesajı",
      color: 10617599,
      fields: [
        { name: "👤 İsim", value: name.trim().slice(0, 1024), inline: true },
        { name: "📧 E-posta", value: email.trim().slice(0, 1024), inline: true },
        { name: "🌐 IP Adresi", value: typeof ip === "string" ? ip.slice(0, 1024) : "Alınamadı", inline: true },
        { name: "💬 Mesaj", value: message.trim().slice(0, 1024) }
      ],
      footer: { text: "Bulut Gürgeli Portfolio" },
      timestamp: new Date().toISOString()
    }]
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(discordPayload)
  });

  if (!response.ok) {
    return new Response("Unable to send message.", { status: 502 });
  }

  return Response.json({ ok: true, lang });
}
