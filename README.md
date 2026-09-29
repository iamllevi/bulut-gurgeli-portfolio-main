# Bulut Gürgeli Portfolyo Sitesi

Bulut Gürgeli için modern glassmorphism temalı statik portfolyo sitesi.

## İçerik

- CV'den alınan özet, eğitim, yetkinlik ve proje bilgileri.
- Google Docs, IMDb ve YouTube bağlantıları ayrı link alanlarında görünür.
- YouTube video ve playlist bağlantıları sayfa içinde açılır modal olarak oynar.
- CV PDF dosyası `assets/bulut-gurgeli-cv.pdf` yolu üzerinden yayınlanır.

## Düzenleme

- Ana içerik: `index.html`
- Görsel tema: `styles.css`
- Mobil menü ve video modalı: `script.js`
- CV dosyası: `assets/bulut-gurgeli-cv.pdf`

Instagram video linkleri eklenecekse `index.html` içindeki `#linkler` bölümüne ayrı buton veya kart olarak eklenebilir. Instagram gömme davranışı platform izinlerine bağlı olduğundan doğrudan link de görünür tutulmalıdır.

## Yayın

Site GitHub Pages üzerinde yayınlanır:

https://bulutgurgeli.net (GitHub Pages: https://iamllevi.github.io/bulut-gurgeli-portfolio-main/)

## İletişim formu (Cloudflare Worker)

Form, `worker/` klasöründeki Cloudflare Worker'a gönderir; Worker mesajı Discord webhook'una iletir. Webhook adresi koda yazılmaz.

```bash
cd worker
npx wrangler login
npx wrangler secret put DISCORD_WEBHOOK_URL   # webhook adresini yapıştır
npx wrangler deploy
```

Deploy çıktısındaki `https://bulut-contact.<hesap>.workers.dev` adresini `script.js` içindeki `CONTACT_ENDPOINT` değerine yaz. Worker yalnızca `worker/src/index.js` içindeki `ALLOWED_ORIGINS` listesindeki sitelerden gelen isteği kabul eder.
