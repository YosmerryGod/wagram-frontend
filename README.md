# WAGRAM Frontend

Frontend WAGRAM yang diekstrak dari folder `miniapp/` pada repository backend `YosmerryGod/waTelegramConnector`.

## Prinsip ekstraksi

- Mempertahankan HTML, CSS, dan JavaScript asli; tidak melakukan redesign atau migrasi framework.
- Source awal tetap menggunakan Vanilla JavaScript.
- Kontrak REST API dan WebSocket tetap mengikuti backend WAGRAM.
- Perubahan konfigurasi alamat backend dilakukan terpisah setelah alamat deployment backend ditetapkan.

## Source

Repository sumber: https://github.com/YosmerryGod/waTelegramConnector/tree/main/miniapp

File inti yang sudah disalin:
- `index.html`
- `style.css`
- `app.js`
- `connection.js`
- `ai-chat-enhancements.js`
- `manifest.webmanifest`
- SVG yang digunakan oleh antarmuka serta metadata brand berbasis teks.

## Status ekstraksi

Ekstraksi file inti selesai. Aset biner (PNG, ICO, GIF, dan WebP), termasuk aset di paket brand, belum seluruhnya dipindahkan. Karena itu repository ini belum dinyatakan sebagai salinan 100% lengkap.

## Konfigurasi backend

Frontend sumber menggunakan `window.MINIAPP_API_BASE` dengan fallback `/api/miniapp`. Untuk hosting frontend dan backend pada origin berbeda, nilai ini perlu diarahkan ke URL API backend WAGRAM. Endpoint WebSocket mengikuti konfigurasi base API yang sama.

Jangan menaruh token bot, API key, atau secret backend di frontend.
