# Bulut Gürgeli — Design System (MASTER)

Tek doğru kaynak. Değerlerin uygulaması `styles.css` içindeki `:root` token'larıdır; bu belge ile
çelişirse `styles.css` geçerlidir ve bu belge güncellenir.

- Başlangıç: `ui-ux-pro-max` (`"luxury editorial portfolio minimal" --design-system --variance 3 --motion 3 --density 3`).
- Görsel referans (kullanıcı seçimi): rulebase.co — yalnızca tasarım dili; içerik, marka öğesi veya
  görsel alınmadı.
- Vurgu renkleri kullanıcıdan: koyuda kırık beyaz, açıkta altın şampanya.

## Yön

- Modern editoryal grotesk. Profesyonel, elit, prestijli, sade.
- Sıcak nötrler; açık temada koyu bantlar (hero, İzle) ile ritim.
- Bölünmüş hero: solda metin, sağda kenara taşan portre.
- Kompakt kontroller, cümle düzeninde etiketler (büyük harf yok).
- Gölge yok; ayrım zemin tonu ve kıl çizgilerle. Köşeler 2–4px.
- **Kaçınılanlar:** gradyan metin, glow, glassmorphism kart, neon/mor-pembe, emoji ikon, büyük tilt/parallax.

## Tema

`<html data-theme="dark|light">`. İlk ziyaret sistem tercihini izler, başlıktaki düğme ile değişir,
`localStorage.preferredTheme` içinde saklanır. Head'deki satır içi betik flaş olmadan uygular.

| Token | Koyu | Açık | Açık tema koyu bant |
|---|---|---|---|
| `--bg` | `#151413` | `#EEEBE6` | `#1E1C1B` |
| `--surface` | `#1D1C1A` | `#F8F7F4` | `#282624` |
| `--surface-2` | `#262422` | `#E4E0D9` | `#312F2C` |
| `--band-bg` | `#1A1917` | `#1E1C1B` | — |
| `--text` | `#E7E3DC` | `#1E1C1B` | `#EDEAE4` |
| `--heading` | `#F4F1EB` | `#141312` | `#F7F5F0` |
| `--muted` | `#A39E96` | `#5F5A53` | `#A8A39B` |
| `--accent` (dolgu) | `#F4F1EB` kırık beyaz | `#C6A66B` altın şampanya | `#C6A66B` |
| `--on-accent` | `#151413` | `#1E1C1B` | `#1E1C1B` |
| `--accent-text` | `#F4F1EB` | `#7A5C27` | `#D2B67F` |
| `--accent-line` | kırık beyaz %50 | `#B8975E` | `#B8975E` |

Koyu bant, açık temada `.hero-main` ve `.watch-section` üzerinde token'ları yeniden tanımlayarak çalışır;
bileşenler bant içinde otomatik uyum sağlar.

**Bant tonu (açık tema):** hero ve "İzle" bantlarının ikisi de sıcak kahve: `--bg`/`--band-bg #38332D`,
`--surface #423C35`, `--surface-2 #4A433B`, `--muted #B8B2A8`. Kontrast: başlık 11.48, metin 10.41,
ikincil 5.94, altın metin 6.39. (Tablodaki "Açık tema koyu bant" sütunundaki `#1E1C1B` temel değer; bu kural onu ezer.)

### Kontrast (WCAG)

| Çift | Oran |
|---|---|
| Koyu: metin / zemin | 14.39 |
| Koyu: ikincil / zemin | 6.91 |
| Koyu: buton metni / kırık beyaz | 16.32 |
| Açık: metin / zemin | 14.28 |
| Açık: ikincil / zemin | 5.75 |
| Açık: altın metin / zemin | 5.21 |
| Açık: buton metni / altın şampanya | 7.33 |
| Bant: metin / zemin | 14.14 |
| Bant: ikincil / yüzey | 6.01 |
| Bant: altın metin / zemin | 8.68 |

`--accent-line` yalnızca dekoratiftir; bilgi taşıyan hiçbir şey onunla çizilmez.

## Tipografi

- **Başlık:** Inter Tight 400/500, `letter-spacing: -0.03em` (hero -0.035em), satır yüksekliği 0.98–1.04.
  Hero `clamp(2.75rem … 5.25rem)`, bölüm başlığı `clamp(2.25rem … 3.75rem)`.
- **Gövde:** Inter 400–600, 16px taban, satır yüksekliği 1.6, `-0.006em`.
- **Etiketler (kicker):** Inter 500, 14px, ikincil renk, önünde 6px vurgu karesi. Büyük harf kullanılmaz.
- Her iki font Google Fonts, SIL OFL 1.1, latin-ext (Türkçe) kapsar.

## Boşluk ve yerleşim

- 8pt ritim: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- Konteyner `1280px`, kenar boşluğu `clamp(20px, 3vw, 40px)`, bölüm aralığı `clamp(88px, 11vw, 144px)`.
- Başlık yüksekliği 64px (telefonda 60px).
- Hero: iki eşit sütun, `min-height: calc(100svh - header)`; 960px altında tek sütun, portre 4:5.
- İzle bölümü tam genişlik bant, içerik konteyner hizasında.
- Kırılımlar: 1100 (işler 2 sütun), 960 (mobil menü, tek sütun), 640 (telefon), 340 (isim gizlenir).

## Hareket

- `--dur-fast 160ms`, `--dur 240ms`, `--dur-slow 700ms`; çıkış `ease-in`, giriş `ease-out`.
- Scroll reveal 14px + fade. Kart tilt en fazla 1.2°. Marquee 60 sn, üzerine gelince durur.
- `prefers-reduced-motion`: animasyon, parallax, tilt ve yazma efekti kapanır; içerik son halinde görünür.

## Bileşenler

- **Buton:** 44px yükseklik, 18px yatay iç boşluk, 4px köşe, 14px/500, cümle düzeni.
  `dark` = vurgu dolgu, `light` = kıl çizgi.
- **Başlık çubuğu:** logo/isim yok. Masaüstü: soluk 14px menü solda (hero metniyle aynı hizada), TR/EN hap
  düğmeleri ve 36px kare tema düğmesi sağda. Mobil (≤960px): TR/EN solda, tema + hamburger sağda.
- **İş kartı:** `--surface` zemin, kenar yok, 2px köşe. Üstte tür etiketi + kompakt bağlantı düğmesi
  (↗ / ▸), kenardan kenara 16:9 medya, altta grotesk başlık, altın rol satırı, açıklama.
- **Medya:** 16:9, `data-label` sol üstte küçük koyu etiket, oynat düğmesi 52px (ızgarada 40px) yuvarlatılmış kare.
- **Çip (IG):** 30px yükseklik, kıl çizgi, 4px köşe, tabular rakam.
- **Hizmet şeridi:** Inter Tight, 20–28px, ikincil renk, logo şeridi gibi kayar.
- **Form:** görünür etiketler, 46px dolu alanlar, 4px köşe, odakta vurgu kenarı + 3px yumuşak halka;
  başarı/hata tema renkleri.
- **Modal:** `--scrim`, 16:9 çerçeve, 44px kare kapat düğmesi.
