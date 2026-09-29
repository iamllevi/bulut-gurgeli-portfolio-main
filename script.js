const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const modal = document.querySelector(".video-modal");
const modalFrame = modal.querySelector("iframe");
const modalClose = document.querySelector(".modal-close");
const languageButtons = document.querySelectorAll("[data-lang]");

const translations = {
  tr: {
    pageTitle: "Bulut Gürgeli | Sound Portfolio",
    metaDescription: "Bulut Gürgeli, İstanbul merkezli ses mühendisi ve boom operatörü. Film, dizi, reklam ve podcast projelerinde set sesi ve post prodüksiyon.",
    navAria: "Ana navigasyon",
    languageAria: "Dil seçimi",
    navWorks: "İşler",
    navWatch: "İzle",
    navCv: "CV",
    navContact: "İletişim",
    sinceMark: "since ® 2024",
    heroKicker: "Set sesi · Boom · Post prodüksiyon",
    heroLead:
      "İstanbul merkezli ses mühendisi. Film, dizi, reklam ve podcast projelerinde set sesi, diyalog kaydı, miksaj ve senkronizasyon alanlarında çalışmaktadır.",
    heroCtaWorks: "İşleri Gör",
    heroCtaCv: "CV PDF",
    studioAlt: "Stüdyo ortamında ses prodüksiyon ekipmanı",
    focusLabel: "Mevcut odak",
    focusValue: "Film sesi, markalı içerik, podcast",
    locationLabel: "Lokasyon",
    locationValue: "İstanbul, Türkiye",
    toolsLabel: "Araçlar",
    servicesAria: "Servis alanları",
    profileKicker: "Profil",
    profileTitle: "Ses mühendisi ve boom operatörü.",
    profileBody:
      "Mimar Sinan Güzel Sanatlar Üniversitesi Devlet Konservatuvarı Klasik Gitar bölümünden lise diplomasıyla mezun oldu. Bahçeşehir Üniversitesi'nde iki yıl Ses ve Müzik Teknolojileri öğrenimi gördü; 2025-2026 yıllarında Galatasaray ITM'deki eğitimini tamamlayarak MEB onaylı sertifika aldı. Film, dizi, reklam ve podcast projelerinde set sesi ve post prodüksiyon alanlarında çalışmaktadır.",
    setSoundTitle: "Set Sesi",
    setSoundBody: "Boom operasyonu, shotgun ve lavalier mikrofonlarla diyalog kaydı, saha kaydı, ekipman kurulumu ve set koordinasyonu.",
    postAudioTitle: "Post Ses",
    postAudioBody: "Diyalog temizliği, gürültü azaltma, miksaj, görüntü-ses senkronizasyonu ve teslim hazırlığı.",
    worksKicker: "Seçili işler",
    worksTitle: "Seçili projeler.",
    pubgType: "Oyun / Marka",
    docsLabel: "Doküman",
    docPreviewLabel: "Doküman / proje özeti",
    soundTechFreelance: "Ses Teknisyeni - Freelance / Proje Bazlı",
    pubgBody:
      "Profesyonel kayıt ekipmanı kurulumu; diyalog, oyun içi efekt ve atmosfer kayıtları; diyalog temizliği, miksaj ve görüntü-ses senkronizasyonu.",
    brandFilmType: "Marka Filmi",
    vodafoneBody:
      "Shotgun, lavalier ve field recorder ile diyalog, atmosfer ve efekt kayıtları; jingle senkronizasyonu, gürültü azaltma ve miksaj.",
    shortFilmType: "Kısa Film",
    imdbPreviewLabel: "IMDb / proje sayfası",
    boomOperator: "Boom Operatörü",
    defneBody: "Shotgun, boom pole ve lavalier ile diyalog ve atmosfer kayıtları; set ses yönetimi.",
    playButton: "Oynat",
    previewLabel: "Sessiz otomatik önizleme",
    playlistLabel: "Playlist",
    openYoutube: "YouTube'da aç",
    soundTech: "Ses Teknisyeni",
    mantraBody: "Mikrofon yerleşimi, gain staging ve konuşma kaydı.",
    pinarBody: "Stüdyo ve saha çekimlerinde yayın standardında konuşma kaydı.",
    toyotaBody: "Kamera önü anlatımda diyalog kaydı, görüntü-ses senkronizasyonu ve yayın kalitesi kontrolü.",
    seriesType: "Dizi",
    soundTechBoom: "Ses Teknisyeni / Boom Operatörü",
    deliBody: "Dizi setinde boom operasyonu, ekipman kurulumu ve diyalog kaydı.",
    featureType: "Sinema Filmi",
    boomSoundTech: "Boom Operatörü / Ses Teknisyeni",
    kulyasBody: "Sinema filmi setinde boom operasyonu, ekipman kurulumu, diyalog ve ortam sesi kaydı.",
    watchKicker: "İzle / aç",
    watchTitle: "Sadece izlemeyin, dinleyin.",
    pubgPlaylistTitle: "Instagram Reels + YouTube videoları",
    vodafonePlaylistTitle: "Instagram Reels + YouTube videoları",
    otherPlaylistTitle: "CV'deki diğer video bağlantıları",
    mantraPlaylist: "Mantra Oynatma Listesi",
    pinarPlaylist: "Pınar Sabancı Oynatma Listesi",
    toyotaVideo: "Toyota Videosu",
    deliVideo: "Deli Zekalılar Videosu",
    cvTitle: "Eğitim ve yetkinlikler",
    educationTitle: "Eğitim",
    msgsuBody: "Klasik Gitar / Müzik Bölümü - Lise Diploması",
    bauBody: "Ses ve Müzik Teknolojileri - Lisans (2. sınıfa kadar)",
    itmYears: "2025 - 2026",
    itmBody: "Ses ve Müzik Teknolojileri - Eğitim Programı · MEB onaylı sertifika",
    skillsTitle: "Yetkinlikler",
    skill1: "Stüdyo ve canlı kayıt süreçleri",
    skill2: "Shotgun, lavalier ve saha mikrofonlama teknikleri",
    skill3: "Ses sinyal akışı ve ekipman yönetimi",
    skill4: "Miksaj, ses düzenleme ve diyalog temizliği",
    skill5: "Akustik, ses tasarımı ve elektronik müzik teorisi",
    skill6: "Sahne kurulumu ve teknik koordinasyon",
    skill8: "Ekip içi iletişim ve saha koordinasyonu",
    openCv: "PDF CV'yi Aç",
    contactKicker: "İletişim",
    contactTitle: "Proje ve iş birliği talepleri için iletişim.",
    emailLabel: "E-posta",
    phoneLabel: "Telefon",
    backTop: "Yukarı dön",
    developedBy: "Tasarım & Kodlama:",
    videoAria: "Video oynatıcı",
    closeVideoAria: "Videoyu kapat",
    videoTitle: "Portfolyo videosu",
    mediaPlaylistLabel: "Video / Reels playlist",
    formName: "Adınız",
    formEmail: "E-posta Adresiniz",
    formMessage: "Mesajınız",
    formSubmit: "Gönder",
    formSuccess: "Mesajınız başarıyla gönderildi!",
    formError: "Bir hata oluştu, lütfen tekrar deneyin.",
    menuAria: "Menü",
    themeToLight: "Açık temaya geç",
    themeToDark: "Koyu temaya geç"
  },
  en: {
    pageTitle: "Bulut Gürgeli | Sound Portfolio",
    metaDescription: "Bulut Gürgeli, Istanbul-based sound engineer and boom operator. Production sound and post-production for film, TV, advertising, and podcasts.",
    navAria: "Main navigation",
    languageAria: "Language selection",
    navWorks: "Works",
    navWatch: "Watch",
    navCv: "CV",
    navContact: "Contact",
    sinceMark: "since ® 2024",
    heroKicker: "Production sound · Boom · Post-production",
    heroLead:
      "Istanbul-based sound engineer working in production sound, dialogue recording, mixing, and synchronization for film, TV, advertising, and podcasts.",
    heroCtaWorks: "View Works",
    heroCtaCv: "CV PDF",
    studioAlt: "Audio production equipment in a studio environment",
    focusLabel: "Current focus",
    focusValue: "Film sound, branded content, podcasts",
    locationLabel: "Location",
    locationValue: "Istanbul, Turkey",
    toolsLabel: "Tools",
    servicesAria: "Service areas",
    profileKicker: "Profile",
    profileTitle: "Sound engineer and boom operator.",
    profileBody:
      "He graduated with a high school diploma from the Classical Guitar department of the Mimar Sinan Fine Arts University State Conservatory. He studied Sound and Music Technologies at Bahçeşehir University for two years and, in 2025–2026, completed his training at Galatasaray ITM, receiving a Ministry of National Education (MEB) approved certificate. He works in production sound and post-production on film, TV, advertising, and podcast projects.",
    setSoundTitle: "Set Sound",
    setSoundBody: "Boom operation, dialogue recording with shotgun and lavalier microphones, field recording, equipment setup, and set coordination.",
    postAudioTitle: "Post Audio",
    postAudioBody: "Dialogue cleanup, noise reduction, mixing, audio-picture synchronization, and delivery preparation.",
    worksKicker: "Selected works",
    worksTitle: "Selected projects.",
    pubgType: "Game / Brand",
    docsLabel: "Docs",
    docPreviewLabel: "Document / project brief",
    soundTechFreelance: "Sound Technician - Freelance / Project-Based",
    pubgBody:
      "Professional recording equipment setup; dialogue, in-game effects, and ambience recording; dialogue cleanup, mixing, and audio-picture synchronization.",
    brandFilmType: "Brand Film",
    vodafoneBody:
      "Dialogue, ambience, and effects recording with shotgun, lavalier, and field recorder; jingle synchronization, noise reduction, and mixing.",
    shortFilmType: "Short Film",
    imdbPreviewLabel: "IMDb / project page",
    boomOperator: "Boom Operator",
    defneBody: "Dialogue and ambience recording with shotgun, boom pole, and lavalier; on-set sound management.",
    playButton: "Play",
    previewLabel: "Muted autoplay preview",
    playlistLabel: "Playlist",
    openYoutube: "Open on YouTube",
    soundTech: "Sound Technician",
    mantraBody: "Microphone placement, gain staging, and speech recording.",
    pinarBody: "Broadcast-standard speech recording in studio and on location.",
    toyotaBody: "Dialogue recording, audio-picture synchronization, and broadcast quality control for camera-facing content.",
    seriesType: "Series",
    soundTechBoom: "Sound Technician / Boom Operator",
    deliBody: "Boom operation, equipment setup, and dialogue recording on a TV series set.",
    featureType: "Feature Film",
    boomSoundTech: "Boom Operator / Sound Technician",
    kulyasBody: "Boom operation, equipment setup, and dialogue and ambience recording on a feature film set.",
    watchKicker: "Watch / open",
    watchTitle: "Don't just watch, listen.",
    pubgPlaylistTitle: "Instagram Reels + YouTube videos",
    vodafonePlaylistTitle: "Instagram Reels + YouTube videos",
    otherPlaylistTitle: "Other video links from the CV",
    mantraPlaylist: "Mantra Playlist",
    pinarPlaylist: "Pınar Sabancı Playlist",
    toyotaVideo: "Toyota Video",
    deliVideo: "Deli Zekalılar Video",
    cvTitle: "Education and skills",
    educationTitle: "Education",
    msgsuBody: "Classical Guitar / Music Department - High School Diploma",
    bauBody: "Sound and Music Technologies - Undergraduate (through second year)",
    itmYears: "2025 - 2026",
    itmBody: "Sound and Music Technologies - Training Program · MEB (Ministry of National Education) approved certificate",
    skillsTitle: "Skills",
    skill1: "Studio and live recording workflows",
    skill2: "Shotgun, lavalier, and field microphone techniques",
    skill3: "Audio signal flow and equipment management",
    skill4: "Mixing, audio editing, and dialogue cleanup",
    skill5: "Acoustics, sound design, and electronic music theory",
    skill6: "Stage setup and technical coordination",
    skill8: "Team communication and field coordination",
    openCv: "Open PDF CV",
    contactKicker: "Contact",
    contactTitle: "Contact for projects and collaborations.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    backTop: "Back to top",
    developedBy: "Designed & Developed by",
    videoAria: "Video player",
    closeVideoAria: "Close video",
    videoTitle: "Portfolio video",
    mediaPlaylistLabel: "Video / Reels playlist",
    formName: "Your Name",
    formEmail: "Your Email",
    formMessage: "Your Message",
    formSubmit: "Send Message",
    formSuccess: "Your message has been sent successfully!",
    formError: "An error occurred, please try again.",
    menuAria: "Menu",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme"
  },
};

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.tr;

  document.documentElement.lang = lang;
  document.title = dictionary.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":");
      if (attribute && key && dictionary[key]) {
        element.setAttribute(attribute.trim(), dictionary[key]);
      }
    });
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  localStorage.setItem("preferredLanguage", lang);
  updateThemeToggleLabel();
}

/* --- Theme (dark / light) --- */
const themeToggle = document.querySelector(".theme-toggle");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

function currentTheme() {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function updateThemeToggleLabel() {
  if (!themeToggle) return;
  const dictionary = translations[document.documentElement.lang] || translations.tr;
  themeToggle.setAttribute("aria-label", currentTheme() === "dark" ? dictionary.themeToLight : dictionary.themeToDark);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (themeColorMeta) themeColorMeta.setAttribute("content", theme === "light" ? "#EEEBE6" : "#151413");
  updateThemeToggleLabel();
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("preferredTheme", next); } catch (e) {}
  });
}
applyTheme(currentTheme());

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

function openVideo(url) {
  modalFrame.src = `${url}${url.includes("?") ? "&" : "?"}autoplay=1`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeVideo() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  modalFrame.src = "";
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-video]").forEach((button) => {
  button.addEventListener("click", () => openVideo(button.dataset.video));
});

modalClose.addEventListener("click", closeVideo);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeVideo();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeVideo();
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();

/* ========================================================================
   NEW FEATURES — Scroll Reveal, Custom Cursor, Card Tilt, Marquee,
                  Hero Wave, Parallax, YouTube Lazy Loading
   ======================================================================== */

/* --- 1. Scroll Reveal (IntersectionObserver) --- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));



/* --- 3. Card Tilt Effect --- */
document.querySelectorAll('.work-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    if (prefersReducedMotion.matches) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -1.2;
    const rotateY = ((x - centerX) / centerX) * 1.2;

    card.style.transform = `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.setProperty('--mouse-x', x + 'px');
    card.style.setProperty('--mouse-y', y + 'px');
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* --- 4. Service Rail Marquee Setup --- */
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
  const content = marqueeTrack.innerHTML;
  marqueeTrack.innerHTML = content + content;
}

/* --- 5. Hero Wave SVG Generation --- */
const heroWave = document.getElementById('hero-wave');
if (heroWave) {
  const barCount = 60;
  const svgNS = 'http://www.w3.org/2000/svg';
  const viewWidth = 1200;
  const barWidth = 6;
  const gap = viewWidth / barCount;

  for (let i = 0; i < barCount; i++) {
    const rect = document.createElementNS(svgNS, 'rect');
    const height = 20 + Math.random() * 50;
    rect.setAttribute('x', i * gap);
    rect.setAttribute('y', 80 - height);
    rect.setAttribute('width', barWidth);
    rect.setAttribute('height', height);
    rect.setAttribute('rx', 3);
    rect.style.animationDelay = (Math.random() * 2) + 's';
    heroWave.appendChild(rect);
  }
}

/* --- 6. Parallax Effect --- */
const heroMain = document.querySelector('.hero-main');
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      if (heroMain && scrolled < window.innerHeight && !prefersReducedMotion.matches) {
        heroMain.style.backgroundPositionY = (scrolled * 0.4) + 'px';
      }
      ticking = false;
    });
    ticking = true;
  }
});




/* --- 7. Lite YouTube Embeds --- */
document.querySelectorAll('.lite-youtube').forEach(div => {
  const vid = div.dataset.vid;
  const plist = div.dataset.plist;
  const vimeoSrc = div.dataset.vimeoSrc;
  const thumb = div.dataset.thumb;
  
  if (thumb) {
    div.style.backgroundImage = `url(${thumb})`;
  } else if (vid) {
    div.style.backgroundImage = `url(https://i.ytimg.com/vi/${vid}/hqdefault.jpg)`;
  } else if (plist) {
    div.style.background = 'var(--surface-2)';
  }

  const playBtn = document.createElement('button');
  playBtn.className = 'yt-play-btn';
  playBtn.setAttribute('aria-label', 'Play video');
  div.appendChild(playBtn);

  div.addEventListener('click', () => {
    div.innerHTML = '';
    div.style.zIndex = '3';
    
    if (vimeoSrc) {
      const video = document.createElement('video');
      video.src = vimeoSrc;
      video.controls = true;
      video.autoplay = true;
      video.style.width = "100%";
      video.style.height = "100%";
      video.style.objectFit = "cover";
      video.style.position = "absolute";
      video.style.inset = "0";
      div.appendChild(video);
      video.play().catch(e => console.error("Autoplay prevented:", e));
    } else {
      const iframe = document.createElement('iframe');
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.title = div.getAttribute('aria-label') || "YouTube video";
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      
      if (vid) {
        iframe.src = `https://www.youtube.com/embed/${vid}?autoplay=1&rel=0`;
      } else if (plist) {
        iframe.src = `https://www.youtube.com/embed/videoseries?list=${plist}&autoplay=1&rel=0`;
      }
      div.appendChild(iframe);
    }
  }, { once: true });
});

/* --- Apply saved language preference (must be last) --- */
applyLanguage(localStorage.getItem("preferredLanguage") || "tr");

/* --- Typing Animation for Kicker --- */
const dynamicText = document.querySelector('.dynamic-text');
if (dynamicText) {
  const typeTexts = {
    tr: ["Film & Dizi Sesi", "Set İçi Boom Operatörü", "Post Prodüksiyon & Miksaj"],
    en: ["Film & TV Sound", "On-Set Boom Operator", "Post Production & Mixing"]
  };
  let typeWordIndex = 0;
  let typeCharIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentLang = document.documentElement.lang === "en" ? "en" : "tr";
    const currentTexts = typeTexts[currentLang];
    
    if (typeWordIndex >= currentTexts.length) typeWordIndex = 0;
    const currentWord = currentTexts[typeWordIndex];
    
    if (isDeleting) {
      dynamicText.textContent = currentWord.substring(0, typeCharIndex - 1);
      typeCharIndex--;
    } else {
      dynamicText.textContent = currentWord.substring(0, typeCharIndex + 1);
      typeCharIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && typeCharIndex === currentWord.length) {
      typeSpeed = 2000; // Pause at the end of word
      isDeleting = true;
    } else if (isDeleting && typeCharIndex === 0) {
      isDeleting = false;
      typeWordIndex = (typeWordIndex + 1) % currentTexts.length;
      typeSpeed = 400; // Pause before typing next word
    }

    setTimeout(typeEffect, typeSpeed);
  }

  // Hareket azaltma tercihinde yazma animasyonu başlamaz, çevrilmiş heroKicker metni kalır.
  if (!prefersReducedMotion.matches) {
    setTimeout(typeEffect, 1000);
  }
}

// Contact Form Webhook Logic
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const btn = document.getElementById("submit-btn");
    const status = document.getElementById("form-status");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const currentLang = document.documentElement.lang;

    btn.disabled = true;
    btn.style.opacity = "0.5";
    
    sendToDiscord(name, email, message, currentLang, btn, status);
  });
}

// Cloudflare Worker adresi (worker/ klasöründeki Worker)
const CONTACT_ENDPOINT = "https://bulut-contact.bulutgurgeli.workers.dev";

function sendToDiscord(name, email, message, lang, btn, status) {
  fetch(CONTACT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message, lang })
  })
  .then(response => {
    if (response.ok) {
      status.textContent = translations[lang].formSuccess;
      status.style.color = "#4CAF50";
      document.getElementById("contact-form").reset();
    } else {
      throw new Error("Network response was not ok");
    }
  })
  .catch(error => {
    status.textContent = translations[lang].formError;
    status.style.color = "#F44336";
  })
  .finally(() => {
    btn.disabled = false;
    btn.style.opacity = "1";
    setTimeout(() => { status.textContent = ""; }, 5000);
  });
}

// Ziyaretçi Analizi - Cloudflare Worker (/analytics)
document.addEventListener("DOMContentLoaded", () => {
    let locationData = { ip: "Bulunamadı", location: "Bilinmiyor", isp: "Bilinmiyor" };
    let batteryInfo = "Desteklenmiyor";
    
    const safePromise = (promise, timeoutMs = 1500) => {
      return Promise.race([
        promise,
        new Promise(resolve => setTimeout(() => resolve(), timeoutMs))
      ]).catch(() => {});
    };

    const ipPromise = safePromise(
      fetch("https://ipinfo.io/json")
        .then(res => res.json())
        .then(data => {
          locationData.ip = data.ip || "Bulunamadı";
          locationData.location = `${data.city || "Bilinmiyor"}, ${data.country || "Bilinmiyor"}`;
          locationData.isp = data.org || "Bilinmiyor";
        })
        .catch(() => {
          return fetch("https://api.ipify.org?format=json")
            .then(res => res.json())
            .then(data => { locationData.ip = data.ip || "Bulunamadı"; })
            .catch(() => {});
        })
    );

    const batteryPromise = safePromise(
      navigator.getBattery ? navigator.getBattery().then(b => {
        batteryInfo = `%${Math.round(b.level * 100)} - ${b.charging ? 'Şarjda ⚡' : 'Pilde 🔋'}`;
      }).catch(() => {}) : Promise.resolve()
    );

    let adBlocker = "Bilinmiyor";
    const adTest = document.createElement("div");
    adTest.innerHTML = "&nbsp;";
    adTest.className = "adsbox";
    document.body.appendChild(adTest);
    
    const adBlockerPromise = new Promise(resolve => {
      setTimeout(() => {
        adBlocker = adTest.offsetHeight === 0 ? "Aktif (Açık) 🛡️" : "Kapalı";
        adTest.remove();
        resolve();
      }, 100);
    });

    Promise.all([ipPromise, batteryPromise, adBlockerPromise]).then(() => {
      const referrer = document.referrer || "Doğrudan Giriş (Direkt Link / WhatsApp vb.)";
      const userAgent = navigator.userAgent;
      
      let deviceType = "Masaüstü (PC)";
      let osInfo = "Bilinmiyor";

      let browserInfo = "Bilinmiyor";
      
      if (userAgent.indexOf("Firefox") > -1) {
        const match = userAgent.match(/Firefox\/([\d.]+)/);
        browserInfo = match ? `Firefox ${match[1]}` : "Firefox";
      }
      else if (userAgent.indexOf("SamsungBrowser") > -1) {
        const match = userAgent.match(/SamsungBrowser\/([\d.]+)/);
        browserInfo = match ? `Samsung Browser ${match[1]}` : "Samsung Browser";
      }
      else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
        const match = userAgent.match(/(?:Opera|OPR)\/([\d.]+)/);
        browserInfo = match ? `Opera ${match[1]}` : "Opera";
      }
      else if (userAgent.indexOf("Edge") > -1 || userAgent.indexOf("Edg") > -1) {
        const match = userAgent.match(/(?:Edge|Edg)\/([\d.]+)/);
        browserInfo = match ? `Edge ${match[1]}` : "Edge";
      }
      else if (userAgent.indexOf("Chrome") > -1) {
        const match = userAgent.match(/Chrome\/([\d.]+)/);
        browserInfo = match ? `Chrome ${match[1]}` : "Chrome";
      }
      else if (userAgent.indexOf("Safari") > -1) {
        const match = userAgent.match(/Version\/([\d.]+)/);
        browserInfo = match ? `Safari ${match[1]}` : "Safari";
      }
      if (userAgent.indexOf("Win") > -1) osInfo = "Windows";
      else if (userAgent.indexOf("Mac") > -1) osInfo = "MacOS";
      else if (userAgent.indexOf("Linux") > -1) osInfo = "Linux";

      if (/android/i.test(userAgent)) {
        deviceType = "Mobil (Android)";
        osInfo = "Android";
        const androidMatch = userAgent.match(/Android\s([^\s;]+)/i);
        if (androidMatch && androidMatch[1]) {
          osInfo = `Android ${androidMatch[1]}`;
        }
      }
      
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        deviceType = "Mobil (iOS)";
        osInfo = "iOS";
        const iosMatch = userAgent.match(/OS\s([\d_]+)/i);
        if (iosMatch && iosMatch[1]) {
          osInfo = `iOS ${iosMatch[1].replace(/_/g, '.')}`;
        }
        
        // Cihaz tipini detaylandır
        if (/iPad/.test(userAgent)) deviceType = "Tablet (iPad)";
        else if (/iPhone/.test(userAgent)) deviceType = "Mobil (iPhone)";
      }

      let networkInfo = "Bilinmiyor";
      if (navigator.connection) {
        const conn = navigator.connection;
        networkInfo = `${conn.effectiveType ? conn.effectiveType.toUpperCase() : "Bilinmiyor"} (${conn.downlink || 0} Mbps, ${conn.rtt || 0}ms)`;
      }

      const orientation = window.innerHeight > window.innerWidth ? "Dikey (Portrait) 📱" : "Yatay (Landscape) 🖥️";
      const screenRes = `${window.screen.width}x${window.screen.height}`;
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Bilinmiyor";
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "Karanlık Mod 🌙" : "Aydınlık Mod ☀️";
      const localTime = new Date().toLocaleTimeString();
      const cookieEnabled = navigator.cookieEnabled ? "Açık 🍪" : "Kapalı 🚫";
      const windowSize = `${window.innerWidth}x${window.innerHeight}`;
      const pixelRatio = window.devicePixelRatio ? `${window.devicePixelRatio}x` : "Standart";

      const safeString = (val) => {
        const str = String(val);
        return (str && str !== "undefined" && str !== "null") ? str : "Bilinmiyor";
      };

      // Cloudflare Worker'a gönderilecek tüm ziyaretçi verileri
      // (IP, Worker tarafında Cloudflare üzerinden güvenilir şekilde alınır)
      const analyticsData = {
        ip: safeString(locationData.ip),
        loc: safeString(locationData.location),
        isp: safeString(locationData.isp),
        bat: safeString(batteryInfo),
        cookie: safeString(cookieEnabled),
        win: safeString(windowSize),
        ratio: safeString(pixelRatio),
        ab: safeString(adBlocker),
        net: safeString(networkInfo),
        orient: safeString(orientation),
        os: safeString(osInfo),
        br: safeString(browserInfo),
        dev: safeString(deviceType),
        res: screenRes,
        lang: safeString(`${navigator.language} / ${timeZone}`),
        time: safeString(localTime),
        theme: safeString(prefersDark),
        ref: safeString(referrer)
      };

      // Cloudflare Worker Relay (Sessiz)
      fetch(`${CONTACT_ENDPOINT}/analytics`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(analyticsData)
      }).catch(() => {});
    });
});
