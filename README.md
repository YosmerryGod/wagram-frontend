# WAGRAM Frontend

Frontend WAGRAM yang diekstrak dari folder `miniapp/` pada repository backend `YosmerryGod/waTelegramConnector`.

## Teknologi dan struktur

- Vite digunakan untuk development server dan production build.
- Antarmuka, CSS, DOM, serta logika fitur asli tetap dipertahankan selama tahap migrasi awal.
- Entry point Vite: `src/main.js`, yang memuat skrip lama dalam urutan aslinya.
- Belum dilakukan konversi komponen ke React. Konversi React dilakukan bertahap setelah setiap bagian memiliki pemeriksaan kesetaraan visual dan perilaku.
- Target rilis saat ini hanya Web App, Telegram Mini App, dan PWA installable.
- APK, AAB, dan Capacitor berada di luar cakupan tahap ini.

## PWA dan Telegram Mini App

- Web App diakses melalui domain web.
- Telegram Mini App tetap menggunakan Telegram Web App SDK dan backend yang sama.
- PWA menggunakan `manifest.webmanifest` dan `public/sw.js` untuk instalasi serta cache app shell.
- Service worker tidak melakukan cache terhadap endpoint `/api/`, sehingga data API tetap diminta ke backend.
- Instalasi PWA memerlukan HTTPS dan browser yang mendukung instalasi aplikasi web.

## Perintah

```bash
npm install
npm run dev
npm run build
npm run preview
```

Hasil production build berada di folder `dist/`.

## Prinsip migrasi

- Tidak melakukan redesign.
- Mempertahankan struktur HTML dan stylesheet asli.
- Mempertahankan urutan pemuatan `app.js`, `ai-chat-enhancements.js`, dan `connection.js`.
- Tidak mengubah kontrak REST API dan WebSocket backend.
- Perubahan UI hanya boleh dilakukan jika diminta secara terpisah.

## Source

Repository sumber: https://github.com/YosmerryGod/waTelegramConnector/tree/main/miniapp

## Status aset

Ekstraksi file inti sebelumnya telah dilakukan, tetapi sebagian aset biner dari repository sumber belum seluruhnya dipindahkan. Karena itu kesetaraan visual 100% belum dapat dinyatakan selesai sampai inventaris aset sumber dan target dibandingkan serta semua aset yang dipakai aplikasi tersedia.

## Konfigurasi backend

Frontend membaca `window.MINIAPP_API_BASE` dengan fallback `/api/miniapp`. Untuk deployment frontend dan backend pada origin berbeda, konfigurasi alamat API harus disediakan sebelum skrip aplikasi dimuat. Environment Variable Vercel tidak otomatis tersedia di browser pada aplikasi statis.

Jangan menaruh token bot, API key, atau secret backend di frontend.
