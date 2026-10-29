# Profil SDM Universitas Negeri Jakarta

Dashboard statis profil sumber daya manusia UNJ untuk asesmen akreditasi perguruan tinggi (IAPT 4.1). Situs ini hanya memuat angka rekap, tanpa nama, NIP, atau data pribadi dosen dan tenaga kependidikan.

## Isi

- `index.html`: halaman dashboard
- `assets/style.css`, `assets/app.js`: tampilan dan logika grafik (Chart.js 4.4.1 dari jsDelivr)
- `data/data.js`: seluruh angka rekap; perbarui berkas ini untuk memperbarui dashboard

## Menerbitkan dengan GitHub Pages

1. Buat repositori baru di GitHub, misalnya `profil-sdm-unj`.
2. Unggah seluruh isi folder ini (termasuk `.nojekyll`) ke cabang `main`.
3. Buka **Settings → Pages**, pilih **Deploy from a branch**, cabang `main`, folder `/ (root)`, lalu **Save**.
4. Setelah satu sampai dua menit, dashboard tersedia di `https://<nama-akun>.github.io/profil-sdm-unj/`.

Catatan: situs GitHub Pages dapat dibuka siapa saja yang mengetahui alamatnya, termasuk bila repositorinya privat pada akun berbayar.

## Memperbarui data

Ganti `data/data.js` dengan versi baru (dibangun dari DUK, rekap tendik, rekap BKD, dan PDDikti terbaru), lalu unggah ulang ke repositori. Halaman otomatis memakai data baru setelah GitHub Pages selesai diperbarui.
