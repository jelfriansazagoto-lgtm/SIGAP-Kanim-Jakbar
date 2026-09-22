SIGAP - PAKET PWA SIAP DIKEMAS MENJADI APK

Isi:
- index.html       : tampilan SIGAP
- data.js          : data kosakata SIGAP yang dapat diedit
- manifest.json    : identitas PWA
- service-worker.js: dukungan offline/cache
- assets/          : aset yang tersedia

PENTING:
1. Paket ini bukan APK. Ini adalah versi PWA yang menjadi bahan untuk dibuat APK.
2. Android Studio tidak diperlukan untuk tahap pengemasan berbasis PWABuilder.
3. Untuk membuat APK, aplikasi web harus tersedia melalui URL HTTPS publik. Setelah online, URL tersebut dapat dimasukkan ke PWABuilder untuk membuat paket Android.
4. Data KTP pada data.js masih menunjuk ke assets/KTP.jpg. File KTP belum tersedia di folder sumber yang ditemukan, jadi jangan menganggap gambar KTP sudah termasuk dalam paket ini.
