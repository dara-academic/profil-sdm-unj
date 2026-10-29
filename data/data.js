// Data rekap SDM UNJ untuk dashboard asesor. Dibangun otomatis; tidak memuat nama atau NIP.
window.SDM_DATA = {
 "meta": {
  "judul": "Profil Sumber Daya Manusia Universitas Negeri Jakarta",
  "diperbarui": "29 Oktober 2026",
  "sumber": [
   "DUK Dosen September 2026 (Direktorat SDM UNJ)",
   "Rekapitulasi Data Tendik per 8 Oktober 2026",
   "Rekap BKD enam semester dari SISTER, Ganjil 2023/2024 sampai Genap 2025/2026",
   "Renstra UNJ 2025–2029 (IKK 8.6.1–8.6.8, subbab 3.4.5.3, Gambar 1.22)",
   "PDDikti Oktober 2026",
   "Instrumen IAPT 4.1 (PerBAN-PT 35/2025)"
  ]
 },
 "kpi": {
  "dosen": 1249,
  "tendik": 770,
  "doktor": 466,
  "doktor_pct": 37.3,
  "gb": 141,
  "lk": 231,
  "gblk_pct": 29.8,
  "ja_pct": 85.3,
  "tanpa_jabatan": 184,
  "cpns25": 173,
  "bkd_pct": 98.6,
  "bkd_sem": "Genap 2025/2026",
  "bkd_awal_pct": 93.1,
  "bkd_awal_sem": "Ganjil 2023/2024",
  "tendik_s1_pct": 50.3,
  "tendik_s2_pct": 5.2,
  "tendik_jft": 103,
  "pppk": 81
 },
 "indikator": [
  {
   "id": "I01",
   "indikator": "Proporsi dosen tidak tetap",
   "rumus": "Dosen tidak tetap ÷ seluruh dosen",
   "ambang_terakreditasi": "Paling tinggi 40%",
   "ambang_unggul": "Paling tinggi 40%",
   "capaian": "3,0% (39 dari 1.288 dosen)",
   "status_terakreditasi": "Memenuhi",
   "status_unggul": "Memenuhi",
   "sumber_capaian": "DUK Dosen September 2026",
   "tabel_lkpt": "Tabel 6"
  },
  {
   "id": "I02",
   "indikator": "Guru Besar pada program doktor",
   "rumus": "Guru Besar homebase per program doktor",
   "ambang_terakreditasi": "Minimal 2 orang per program doktor",
   "ambang_unggul": "Seluruh program doktor punya minimal 50% dosen Guru Besar",
   "capaian": "11 program doktor; semua punya minimal 2 Guru Besar; 10 dari 11 mencapai 50% (S3 Ilmu Akuntansi 40%)",
   "status_terakreditasi": "Memenuhi",
   "status_unggul": "Belum memenuhi",
   "sumber_capaian": "DUK Dosen September 2026",
   "tabel_lkpt": "Tabel 7"
  },
  {
   "id": "I03",
   "indikator": "Dosen tetap bergelar doktor",
   "rumus": "Dosen tetap S3 ÷ seluruh dosen tetap",
   "ambang_terakreditasi": "Tidak ada ambang angka",
   "ambang_unggul": "Minimal 50% (PTNBH)",
   "capaian": "37,3% (466 dari 1.249)",
   "status_terakreditasi": "Tidak ada ambang",
   "status_unggul": "Belum memenuhi",
   "sumber_capaian": "DUK Dosen September 2026",
   "tabel_lkpt": "Tabel 5"
  },
  {
   "id": "I04",
   "indikator": "Dosen tetap dengan jabatan akademik",
   "rumus": "(GB + LK + L + AA) ÷ dosen tetap; untuk unggul (GB + LK) ÷ dosen tetap",
   "ambang_terakreditasi": "Minimal 90%",
   "ambang_unggul": "(GB + LK) minimal 30% (PTNBH)",
   "capaian": "85,3% berjabatan akademik (1.065 dari 1.249); 173 dari 184 dosen yang belum berjabatan adalah CPNS angkatan 2025. GB + LK 29,8% (372 orang)",
   "status_terakreditasi": "Belum memenuhi",
   "status_unggul": "Belum memenuhi",
   "sumber_capaian": "DUK Dosen September 2026",
   "tabel_lkpt": "Tabel 8"
  }
 ],
 "renstra": [
  {
   "kunci": "s3",
   "indikator": "Dosen tetap bergelar S3",
   "rujukan": "IKK 8.6.1",
   "capaian": 37.3,
   "jumlah": 466,
   "target": {
    "2026": 40,
    "2027": 41,
    "2028": 42,
    "2029": 43
   }
  },
  {
   "kunci": "gb",
   "indikator": "Guru Besar",
   "rujukan": "IKK 8.6.2",
   "capaian": 11.3,
   "jumlah": 141,
   "target": {
    "2026": 13,
    "2027": 14,
    "2028": 15,
    "2029": 16
   }
  },
  {
   "kunci": "lk",
   "indikator": "Lektor Kepala",
   "rujukan": "IKK 8.6.3",
   "capaian": 18.5,
   "jumlah": 231,
   "target": {
    "2026": 19,
    "2027": 20,
    "2028": 21,
    "2029": 22
   }
  },
  {
   "kunci": "tendik_s1",
   "indikator": "Tendik berkualifikasi S1",
   "rujukan": "Subbab 3.4.5.3",
   "capaian": 50.3,
   "jumlah": 387,
   "target": {
    "2026": 49,
    "2027": 50,
    "2028": 51,
    "2029": 52
   }
  },
  {
   "kunci": "tendik_s2",
   "indikator": "Tendik berkualifikasi S2 ke atas",
   "rujukan": "Subbab 3.4.5.3",
   "capaian": 5.2,
   "jumlah": 40,
   "target": {
    "2026": 8,
    "2027": 9,
    "2028": 10,
    "2029": 11
   }
  }
 ],
 "kebutuhan": [
  {
   "tahun": 2026,
   "t_s3": 500,
   "t_gb": 163,
   "t_lk": 238,
   "s3": 36,
   "gb": 22,
   "lk": 32
  },
  {
   "tahun": 2027,
   "t_s3": 513,
   "t_gb": 175,
   "t_lk": 250,
   "s3": 59,
   "gb": 40,
   "lk": 70
  },
  {
   "tahun": 2028,
   "t_s3": 525,
   "t_gb": 188,
   "t_lk": 263,
   "s3": 95,
   "gb": 64,
   "lk": 122
  },
  {
   "tahun": 2029,
   "t_s3": 538,
   "t_gb": 200,
   "t_lk": 275,
   "s3": 129,
   "gb": 86,
   "lk": 168
  }
 ],
 "pensiun": [
  {
   "tahun": 2026,
   "label": "2026 (Okt–Des)",
   "dosen": 4,
   "dosen_s3": 2,
   "guru_besar": 0,
   "lektor_kepala": 3,
   "tendik_tetap": 10
  },
  {
   "tahun": 2027,
   "label": "2027",
   "dosen": 19,
   "dosen_s3": 10,
   "guru_besar": 6,
   "lektor_kepala": 8,
   "tendik_tetap": 20
  },
  {
   "tahun": 2028,
   "label": "2028",
   "dosen": 30,
   "dosen_s3": 24,
   "guru_besar": 11,
   "lektor_kepala": 15,
   "tendik_tetap": 17
  },
  {
   "tahun": 2029,
   "label": "2029",
   "dosen": 31,
   "dosen_s3": 21,
   "guru_besar": 10,
   "lektor_kepala": 12,
   "tendik_tetap": 13
  }
 ],
 "fakultas": [
  {
   "kode": "FT",
   "nama": "Fakultas Teknik",
   "dosen": 217,
   "doktor": 65,
   "gb": 12,
   "lk": 46,
   "l": 76,
   "aa": 28,
   "tanpa": 55,
   "tb": 4,
   "pppk": 11,
   "np": {
    "gb": 12,
    "lk": 46,
    "l": 75,
    "aa": 18,
    "tanpa": 55
   }
  },
  {
   "kode": "FBS",
   "nama": "Fakultas Bahasa dan Seni",
   "dosen": 206,
   "doktor": 64,
   "gb": 15,
   "lk": 25,
   "l": 81,
   "aa": 66,
   "tanpa": 19,
   "tb": 2,
   "pppk": 8,
   "np": {
    "gb": 15,
    "lk": 25,
    "l": 81,
    "aa": 58,
    "tanpa": 19
   }
  },
  {
   "kode": "FIP",
   "nama": "Fakultas Ilmu Pendidikan",
   "dosen": 198,
   "doktor": 86,
   "gb": 32,
   "lk": 34,
   "l": 41,
   "aa": 52,
   "tanpa": 39,
   "tb": 2,
   "pppk": 15,
   "np": {
    "gb": 32,
    "lk": 34,
    "l": 41,
    "aa": 37,
    "tanpa": 39
   }
  },
  {
   "kode": "FISH",
   "nama": "Fakultas Ilmu Sosial dan Hukum",
   "dosen": 161,
   "doktor": 60,
   "gb": 17,
   "lk": 26,
   "l": 50,
   "aa": 41,
   "tanpa": 27,
   "tb": 4,
   "pppk": 13,
   "np": {
    "gb": 17,
    "lk": 26,
    "l": 50,
    "aa": 28,
    "tanpa": 27
   }
  },
  {
   "kode": "FMIPA",
   "nama": "Fakultas Matematika dan Ilmu Pengetahuan Alam",
   "dosen": 160,
   "doktor": 68,
   "gb": 26,
   "lk": 33,
   "l": 42,
   "aa": 34,
   "tanpa": 25,
   "tb": 6,
   "pppk": 9,
   "np": {
    "gb": 26,
    "lk": 33,
    "l": 42,
    "aa": 25,
    "tanpa": 25
   }
  },
  {
   "kode": "FEB",
   "nama": "Fakultas Ekonomi dan Bisnis",
   "dosen": 149,
   "doktor": 55,
   "gb": 22,
   "lk": 22,
   "l": 45,
   "aa": 52,
   "tanpa": 8,
   "tb": 6,
   "pppk": 11,
   "np": {
    "gb": 22,
    "lk": 22,
    "l": 45,
    "aa": 41,
    "tanpa": 8
   }
  },
  {
   "kode": "FIKK",
   "nama": "Fakultas Ilmu Keolahragaan dan Kesehatan",
   "dosen": 111,
   "doktor": 57,
   "gb": 16,
   "lk": 35,
   "l": 25,
   "aa": 25,
   "tanpa": 10,
   "tb": 2,
   "pppk": 12,
   "np": {
    "gb": 16,
    "lk": 35,
    "l": 25,
    "aa": 13,
    "tanpa": 10
   }
  },
  {
   "kode": "FPsi",
   "nama": "Fakultas Psikologi",
   "dosen": 46,
   "doktor": 11,
   "gb": 1,
   "lk": 10,
   "l": 7,
   "aa": 28,
   "tanpa": 0,
   "tb": 3,
   "pppk": 2,
   "np": {
    "gb": 1,
    "lk": 10,
    "l": 7,
    "aa": 26,
    "tanpa": 0
   }
  }
 ],
 "jabatan": {
  "semua": {
   "gb": 141,
   "lk": 231,
   "l": 367,
   "aa": 326,
   "tanpa": 184
  },
  "tanpa_pppk": {
   "gb": 141,
   "lk": 231,
   "l": 366,
   "aa": 246,
   "tanpa": 184
  }
 },
 "doktor": [
  {
   "prodi": "Ilmu Akuntansi",
   "dosen_tetap": 5,
   "guru_besar": 2
  },
  {
   "prodi": "Ilmu Manajemen",
   "dosen_tetap": 5,
   "guru_besar": 4
  },
  {
   "prodi": "Linguistik Terapan",
   "dosen_tetap": 5,
   "guru_besar": 4
  },
  {
   "prodi": "Manajemen Bisnis",
   "dosen_tetap": 5,
   "guru_besar": 3
  },
  {
   "prodi": "Manajemen Pendidikan",
   "dosen_tetap": 5,
   "guru_besar": 4
  },
  {
   "prodi": "Pendidikan Anak Usia Dini",
   "dosen_tetap": 4,
   "guru_besar": 2
  },
  {
   "prodi": "Pendidikan Dasar",
   "dosen_tetap": 5,
   "guru_besar": 5
  },
  {
   "prodi": "Pendidikan Jasmani",
   "dosen_tetap": 6,
   "guru_besar": 5
  },
  {
   "prodi": "Pendidikan Kependudukan dan Lingkungan Hidup",
   "dosen_tetap": 5,
   "guru_besar": 5
  },
  {
   "prodi": "Penelitian Dan Evaluasi Pendidikan",
   "dosen_tetap": 5,
   "guru_besar": 4
  },
  {
   "prodi": "Teknologi Pendidikan",
   "dosen_tetap": 5,
   "guru_besar": 4
  }
 ],
 "bkd": {
  "ringkas": [
   {
    "semester": "Ganjil 2023/2024",
    "urut": 1,
    "lembar": "23-24 Ganjil",
    "format": "Rekap dua asesor",
    "dosen": 915,
    "memenuhi": 852,
    "tidak_memenuhi": 10,
    "asesor_berbeda": 11,
    "belum_dinilai": 42,
    "dinilai_aktif": 828,
    "kk_memenuhi": 736,
    "kk_dinilai": 742,
    "profesor": 112,
    "profesor_kk": 105,
    "tanpa_jabfung": 95,
    "lebih_median": 25.0,
    "lebih_ada": 796,
    "lebih_100": 15,
    "pp_kurang_9": 31,
    "kinerja_kurang_12": 17,
    "tugas_belajar": 45,
    "tugas_tambahan": 305,
    "tak_terpetakan": 28
   },
   {
    "semester": "Genap 2023/2024",
    "urut": 2,
    "lembar": "23-24 Genap",
    "format": "Rekap dua asesor",
    "dosen": 928,
    "memenuhi": 882,
    "tidak_memenuhi": 12,
    "asesor_berbeda": 7,
    "belum_dinilai": 27,
    "dinilai_aktif": 862,
    "kk_memenuhi": 766,
    "kk_dinilai": 772,
    "profesor": 115,
    "profesor_kk": 114,
    "tanpa_jabfung": 90,
    "lebih_median": 18.49,
    "lebih_ada": 817,
    "lebih_100": 16,
    "pp_kurang_9": 24,
    "kinerja_kurang_12": 11,
    "tugas_belajar": 43,
    "tugas_tambahan": 248,
    "tak_terpetakan": 18
   },
   {
    "semester": "Ganjil 2024/2025",
    "urut": 3,
    "lembar": "24-25 Ganjil",
    "format": "Rekap dua asesor",
    "dosen": 1099,
    "memenuhi": 1021,
    "tidak_memenuhi": 44,
    "asesor_berbeda": 16,
    "belum_dinilai": 18,
    "dinilai_aktif": 1047,
    "kk_memenuhi": 857,
    "kk_dinilai": 860,
    "profesor": 117,
    "profesor_kk": 117,
    "tanpa_jabfung": 189,
    "lebih_median": 24.73,
    "lebih_ada": 924,
    "lebih_100": 15,
    "pp_kurang_9": 62,
    "kinerja_kurang_12": 50,
    "tugas_belajar": 36,
    "tugas_tambahan": 243,
    "tak_terpetakan": 20
   },
   {
    "semester": "Genap 2024/2025",
    "urut": 4,
    "lembar": "24-25 Genap",
    "format": "Rekap dua asesor",
    "dosen": 1113,
    "memenuhi": 1076,
    "tidak_memenuhi": 6,
    "asesor_berbeda": 4,
    "belum_dinilai": 27,
    "dinilai_aktif": 1059,
    "kk_memenuhi": 884,
    "kk_dinilai": 889,
    "profesor": 129,
    "profesor_kk": 128,
    "tanpa_jabfung": 172,
    "lebih_median": 19.62,
    "lebih_ada": 1012,
    "lebih_100": 21,
    "pp_kurang_9": 25,
    "kinerja_kurang_12": 15,
    "tugas_belajar": 31,
    "tugas_tambahan": 248,
    "tak_terpetakan": 20
   },
   {
    "semester": "Ganjil 2025/2026",
    "urut": 5,
    "lembar": "2025-2026 Ganjil",
    "format": "SISTER",
    "dosen": 1262,
    "memenuhi": 1239,
    "tidak_memenuhi": 23,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai_aktif": 1232,
    "kk_memenuhi": 1017,
    "kk_dinilai": 1030,
    "profesor": 135,
    "profesor_kk": 133,
    "tanpa_jabfung": 202,
    "lebih_median": 26.95,
    "lebih_ada": 1190,
    "lebih_100": 32,
    "pp_kurang_9": 30,
    "kinerja_kurang_12": 26,
    "tugas_belajar": 30,
    "tugas_tambahan": 213,
    "tak_terpetakan": 21
   },
   {
    "semester": "Genap 2025/2026",
    "urut": 6,
    "lembar": "2025-2026 Genap",
    "format": "SISTER",
    "dosen": 1247,
    "memenuhi": 1230,
    "tidak_memenuhi": 17,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai_aktif": 1221,
    "kk_memenuhi": 1024,
    "kk_dinilai": 1035,
    "profesor": 136,
    "profesor_kk": 136,
    "tanpa_jabfung": 186,
    "lebih_median": 19.5,
    "lebih_ada": 1172,
    "lebih_100": 11,
    "pp_kurang_9": 25,
    "kinerja_kurang_12": 24,
    "tugas_belajar": 26,
    "tugas_tambahan": 207,
    "tak_terpetakan": 21
   }
  ],
  "fakultas": [
   {
    "semester": "Ganjil 2023/2024",
    "fakultas": "FT",
    "dosen": 151,
    "memenuhi": 142,
    "tidak_memenuhi": 0,
    "asesor_berbeda": 4,
    "belum_dinilai": 5,
    "dinilai": 138,
    "median_pendidikan": 10.0,
    "median_penelitian": 1.45,
    "median_pengabdian": 2.0,
    "median_penunjang": 0.94,
    "median_lebih": 27.33,
    "lebih_di_atas_64": 13
   },
   {
    "semester": "Ganjil 2023/2024",
    "fakultas": "FBS",
    "dosen": 152,
    "memenuhi": 138,
    "tidak_memenuhi": 3,
    "asesor_berbeda": 3,
    "belum_dinilai": 8,
    "dinilai": 137,
    "median_pendidikan": 10.0,
    "median_penelitian": 1.87,
    "median_pengabdian": 0.88,
    "median_penunjang": 0.75,
    "median_lebih": 22.0,
    "lebih_di_atas_64": 7
   },
   {
    "semester": "Ganjil 2023/2024",
    "fakultas": "FIP",
    "dosen": 133,
    "memenuhi": 125,
    "tidak_memenuhi": 1,
    "asesor_berbeda": 2,
    "belum_dinilai": 5,
    "dinilai": 124,
    "median_pendidikan": 9.78,
    "median_penelitian": 1.65,
    "median_pengabdian": 2.0,
    "median_penunjang": 0.75,
    "median_lebih": 30.3,
    "lebih_di_atas_64": 7
   },
   {
    "semester": "Ganjil 2023/2024",
    "fakultas": "FISH",
    "dosen": 113,
    "memenuhi": 106,
    "tidak_memenuhi": 2,
    "asesor_berbeda": 0,
    "belum_dinilai": 5,
    "dinilai": 103,
    "median_pendidikan": 10.0,
    "median_penelitian": 1.47,
    "median_pengabdian": 1.0,
    "median_penunjang": 0.62,
    "median_lebih": 30.0,
    "lebih_di_atas_64": 15
   },
   {
    "semester": "Ganjil 2023/2024",
    "fakultas": "FMIPA",
    "dosen": 117,
    "memenuhi": 111,
    "tidak_memenuhi": 0,
    "asesor_berbeda": 0,
    "belum_dinilai": 6,
    "dinilai": 104,
    "median_pendidikan": 10.0,
    "median_penelitian": 1.7,
    "median_pengabdian": 1.12,
    "median_penunjang": 0.62,
    "median_lebih": 16.0,
    "lebih_di_atas_64": 3
   },
   {
    "semester": "Ganjil 2023/2024",
    "fakultas": "FEB",
    "dosen": 96,
    "memenuhi": 92,
    "tidak_memenuhi": 0,
    "asesor_berbeda": 0,
    "belum_dinilai": 4,
    "dinilai": 83,
    "median_pendidikan": 10.0,
    "median_penelitian": 2.0,
    "median_pengabdian": 1.12,
    "median_penunjang": 1.0,
    "median_lebih": 30.5,
    "lebih_di_atas_64": 8
   },
   {
    "semester": "Ganjil 2023/2024",
    "fakultas": "FIKK",
    "dosen": 93,
    "memenuhi": 82,
    "tidak_memenuhi": 2,
    "asesor_berbeda": 1,
    "belum_dinilai": 8,
    "dinilai": 82,
    "median_pendidikan": 11.0,
    "median_penelitian": 1.6,
    "median_pengabdian": 0.5,
    "median_penunjang": 0.62,
    "median_lebih": 24.63,
    "lebih_di_atas_64": 9
   },
   {
    "semester": "Ganjil 2023/2024",
    "fakultas": "FPsi",
    "dosen": 32,
    "memenuhi": 30,
    "tidak_memenuhi": 2,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 32,
    "median_pendidikan": 10.5,
    "median_penelitian": 1.2,
    "median_pengabdian": 2.0,
    "median_penunjang": 0.62,
    "median_lebih": 11.88,
    "lebih_di_atas_64": 0
   },
   {
    "semester": "Ganjil 2023/2024",
    "fakultas": "Tidak terpetakan",
    "dosen": 28,
    "memenuhi": 26,
    "tidak_memenuhi": 0,
    "asesor_berbeda": 1,
    "belum_dinilai": 1,
    "dinilai": 25,
    "median_pendidikan": 9.0,
    "median_penelitian": 1.47,
    "median_pengabdian": 2.0,
    "median_penunjang": 1.25,
    "median_lebih": 25.64,
    "lebih_di_atas_64": 0
   },
   {
    "semester": "Genap 2023/2024",
    "fakultas": "FT",
    "dosen": 152,
    "memenuhi": 147,
    "tidak_memenuhi": 2,
    "asesor_berbeda": 2,
    "belum_dinilai": 1,
    "dinilai": 146,
    "median_pendidikan": 10.0,
    "median_penelitian": 1.58,
    "median_pengabdian": 1.06,
    "median_penunjang": 1.0,
    "median_lebih": 18.15,
    "lebih_di_atas_64": 9
   },
   {
    "semester": "Genap 2023/2024",
    "fakultas": "FBS",
    "dosen": 151,
    "memenuhi": 143,
    "tidak_memenuhi": 3,
    "asesor_berbeda": 0,
    "belum_dinilai": 5,
    "dinilai": 138,
    "median_pendidikan": 9.25,
    "median_penelitian": 1.7,
    "median_pengabdian": 1.19,
    "median_penunjang": 0.62,
    "median_lebih": 18.21,
    "lebih_di_atas_64": 10
   },
   {
    "semester": "Genap 2023/2024",
    "fakultas": "FIP",
    "dosen": 143,
    "memenuhi": 136,
    "tidak_memenuhi": 1,
    "asesor_berbeda": 0,
    "belum_dinilai": 6,
    "dinilai": 131,
    "median_pendidikan": 10.0,
    "median_penelitian": 2.0,
    "median_pengabdian": 1.88,
    "median_penunjang": 0.5,
    "median_lebih": 20.0,
    "lebih_di_atas_64": 10
   },
   {
    "semester": "Genap 2023/2024",
    "fakultas": "FISH",
    "dosen": 114,
    "memenuhi": 110,
    "tidak_memenuhi": 1,
    "asesor_berbeda": 0,
    "belum_dinilai": 3,
    "dinilai": 104,
    "median_pendidikan": 10.0,
    "median_penelitian": 2.0,
    "median_pengabdian": 1.27,
    "median_penunjang": 0.75,
    "median_lebih": 22.99,
    "lebih_di_atas_64": 12
   },
   {
    "semester": "Genap 2023/2024",
    "fakultas": "FMIPA",
    "dosen": 122,
    "memenuhi": 118,
    "tidak_memenuhi": 1,
    "asesor_berbeda": 0,
    "belum_dinilai": 3,
    "dinilai": 114,
    "median_pendidikan": 9.5,
    "median_penelitian": 2.15,
    "median_pengabdian": 2.0,
    "median_penunjang": 0.62,
    "median_lebih": 17.71,
    "lebih_di_atas_64": 4
   },
   {
    "semester": "Genap 2023/2024",
    "fakultas": "FEB",
    "dosen": 105,
    "memenuhi": 100,
    "tidak_memenuhi": 0,
    "asesor_berbeda": 1,
    "belum_dinilai": 4,
    "dinilai": 97,
    "median_pendidikan": 9.0,
    "median_penelitian": 1.7,
    "median_pengabdian": 0.88,
    "median_penunjang": 0.5,
    "median_lebih": 29.0,
    "lebih_di_atas_64": 11
   },
   {
    "semester": "Genap 2023/2024",
    "fakultas": "FIKK",
    "dosen": 91,
    "memenuhi": 80,
    "tidak_memenuhi": 4,
    "asesor_berbeda": 3,
    "belum_dinilai": 4,
    "dinilai": 85,
    "median_pendidikan": 10.0,
    "median_penelitian": 1.72,
    "median_pengabdian": 1.12,
    "median_penunjang": 0.5,
    "median_lebih": 16.38,
    "lebih_di_atas_64": 1
   },
   {
    "semester": "Genap 2023/2024",
    "fakultas": "FPsi",
    "dosen": 32,
    "memenuhi": 30,
    "tidak_memenuhi": 0,
    "asesor_berbeda": 1,
    "belum_dinilai": 1,
    "dinilai": 29,
    "median_pendidikan": 10.0,
    "median_penelitian": 1.47,
    "median_pengabdian": 1.17,
    "median_penunjang": 1.0,
    "median_lebih": 9.94,
    "lebih_di_atas_64": 0
   },
   {
    "semester": "Genap 2023/2024",
    "fakultas": "Tidak terpetakan",
    "dosen": 18,
    "memenuhi": 18,
    "tidak_memenuhi": 0,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 18,
    "median_pendidikan": 9.0,
    "median_penelitian": 2.28,
    "median_pengabdian": 0.94,
    "median_penunjang": 1.38,
    "median_lebih": 14.06,
    "lebih_di_atas_64": 0
   },
   {
    "semester": "Ganjil 2024/2025",
    "fakultas": "FT",
    "dosen": 167,
    "memenuhi": 162,
    "tidak_memenuhi": 0,
    "asesor_berbeda": 5,
    "belum_dinilai": 0,
    "dinilai": 162,
    "median_pendidikan": 10.0,
    "median_penelitian": 2.0,
    "median_pengabdian": 0.8,
    "median_penunjang": 1.0,
    "median_lebih": 26.77,
    "lebih_di_atas_64": 12
   },
   {
    "semester": "Ganjil 2024/2025",
    "fakultas": "FBS",
    "dosen": 185,
    "memenuhi": 164,
    "tidak_memenuhi": 17,
    "asesor_berbeda": 2,
    "belum_dinilai": 2,
    "dinilai": 177,
    "median_pendidikan": 9.0,
    "median_penelitian": 2.0,
    "median_pengabdian": 1.0,
    "median_penunjang": 0.75,
    "median_lebih": 21.0,
    "lebih_di_atas_64": 14
   },
   {
    "semester": "Ganjil 2024/2025",
    "fakultas": "FIP",
    "dosen": 172,
    "memenuhi": 161,
    "tidak_memenuhi": 6,
    "asesor_berbeda": 2,
    "belum_dinilai": 3,
    "dinilai": 164,
    "median_pendidikan": 10.0,
    "median_penelitian": 2.0,
    "median_pengabdian": 1.0,
    "median_penunjang": 0.75,
    "median_lebih": 26.62,
    "lebih_di_atas_64": 13
   },
   {
    "semester": "Ganjil 2024/2025",
    "fakultas": "FISH",
    "dosen": 128,
    "memenuhi": 119,
    "tidak_memenuhi": 2,
    "asesor_berbeda": 1,
    "belum_dinilai": 6,
    "dinilai": 117,
    "median_pendidikan": 9.95,
    "median_penelitian": 2.0,
    "median_pengabdian": 1.25,
    "median_penunjang": 0.88,
    "median_lebih": 29.93,
    "lebih_di_atas_64": 13
   },
   {
    "semester": "Ganjil 2024/2025",
    "fakultas": "FMIPA",
    "dosen": 137,
    "memenuhi": 136,
    "tidak_memenuhi": 0,
    "asesor_berbeda": 0,
    "belum_dinilai": 1,
    "dinilai": 133,
    "median_pendidikan": 9.0,
    "median_penelitian": 2.27,
    "median_pengabdian": 1.5,
    "median_penunjang": 0.75,
    "median_lebih": 24.07,
    "lebih_di_atas_64": 8
   },
   {
    "semester": "Ganjil 2024/2025",
    "fakultas": "FEB",
    "dosen": 144,
    "memenuhi": 137,
    "tidak_memenuhi": 1,
    "asesor_berbeda": 2,
    "belum_dinilai": 4,
    "dinilai": 137,
    "median_pendidikan": 10.0,
    "median_penelitian": 2.0,
    "median_pengabdian": 0.5,
    "median_penunjang": 0.75,
    "median_lebih": 27.33,
    "lebih_di_atas_64": 15
   },
   {
    "semester": "Ganjil 2024/2025",
    "fakultas": "FIKK",
    "dosen": 100,
    "memenuhi": 94,
    "tidak_memenuhi": 2,
    "asesor_berbeda": 3,
    "belum_dinilai": 1,
    "dinilai": 95,
    "median_pendidikan": 10.0,
    "median_penelitian": 1.96,
    "median_pengabdian": 0.5,
    "median_penunjang": 0.75,
    "median_lebih": 19.0,
    "lebih_di_atas_64": 5
   },
   {
    "semester": "Ganjil 2024/2025",
    "fakultas": "FPsi",
    "dosen": 46,
    "memenuhi": 31,
    "tidak_memenuhi": 14,
    "asesor_berbeda": 1,
    "belum_dinilai": 0,
    "dinilai": 43,
    "median_pendidikan": 8.0,
    "median_penelitian": 2.0,
    "median_pengabdian": 0.5,
    "median_penunjang": 0.62,
    "median_lebih": 12.5,
    "lebih_di_atas_64": 1
   },
   {
    "semester": "Ganjil 2024/2025",
    "fakultas": "Tidak terpetakan",
    "dosen": 20,
    "memenuhi": 17,
    "tidak_memenuhi": 2,
    "asesor_berbeda": 0,
    "belum_dinilai": 1,
    "dinilai": 19,
    "median_pendidikan": 9.0,
    "median_penelitian": 2.3,
    "median_pengabdian": 1.25,
    "median_penunjang": 1.0,
    "median_lebih": 28.52,
    "lebih_di_atas_64": 2
   },
   {
    "semester": "Genap 2024/2025",
    "fakultas": "FT",
    "dosen": 169,
    "memenuhi": 163,
    "tidak_memenuhi": 2,
    "asesor_berbeda": 3,
    "belum_dinilai": 1,
    "dinilai": 164,
    "median_pendidikan": 10.5,
    "median_penelitian": 1.6,
    "median_pengabdian": 0.75,
    "median_penunjang": 0.62,
    "median_lebih": 18.0,
    "lebih_di_atas_64": 8
   },
   {
    "semester": "Genap 2024/2025",
    "fakultas": "FBS",
    "dosen": 184,
    "memenuhi": 180,
    "tidak_memenuhi": 0,
    "asesor_berbeda": 0,
    "belum_dinilai": 4,
    "dinilai": 177,
    "median_pendidikan": 9.8,
    "median_penelitian": 1.93,
    "median_pengabdian": 2.0,
    "median_penunjang": 0.62,
    "median_lebih": 17.0,
    "lebih_di_atas_64": 7
   },
   {
    "semester": "Genap 2024/2025",
    "fakultas": "FIP",
    "dosen": 180,
    "memenuhi": 173,
    "tidak_memenuhi": 2,
    "asesor_berbeda": 0,
    "belum_dinilai": 5,
    "dinilai": 174,
    "median_pendidikan": 10.0,
    "median_penelitian": 2.0,
    "median_pengabdian": 1.31,
    "median_penunjang": 0.62,
    "median_lebih": 21.5,
    "lebih_di_atas_64": 13
   },
   {
    "semester": "Genap 2024/2025",
    "fakultas": "FISH",
    "dosen": 129,
    "memenuhi": 121,
    "tidak_memenuhi": 0,
    "asesor_berbeda": 0,
    "belum_dinilai": 8,
    "dinilai": 118,
    "median_pendidikan": 9.28,
    "median_penelitian": 2.0,
    "median_pengabdian": 2.0,
    "median_penunjang": 0.56,
    "median_lebih": 24.88,
    "lebih_di_atas_64": 13
   },
   {
    "semester": "Genap 2024/2025",
    "fakultas": "FMIPA",
    "dosen": 137,
    "memenuhi": 135,
    "tidak_memenuhi": 0,
    "asesor_berbeda": 0,
    "belum_dinilai": 2,
    "dinilai": 130,
    "median_pendidikan": 10.0,
    "median_penelitian": 1.87,
    "median_pengabdian": 2.0,
    "median_penunjang": 0.75,
    "median_lebih": 11.88,
    "lebih_di_atas_64": 1
   },
   {
    "semester": "Genap 2024/2025",
    "fakultas": "FEB",
    "dosen": 145,
    "memenuhi": 143,
    "tidak_memenuhi": 0,
    "asesor_berbeda": 0,
    "belum_dinilai": 2,
    "dinilai": 138,
    "median_pendidikan": 9.57,
    "median_penelitian": 2.13,
    "median_pengabdian": 1.12,
    "median_penunjang": 0.62,
    "median_lebih": 28.15,
    "lebih_di_atas_64": 14
   },
   {
    "semester": "Genap 2024/2025",
    "fakultas": "FIKK",
    "dosen": 103,
    "memenuhi": 98,
    "tidak_memenuhi": 1,
    "asesor_berbeda": 0,
    "belum_dinilai": 4,
    "dinilai": 96,
    "median_pendidikan": 10.0,
    "median_penelitian": 1.53,
    "median_pengabdian": 1.12,
    "median_penunjang": 0.66,
    "median_lebih": 21.35,
    "lebih_di_atas_64": 5
   },
   {
    "semester": "Genap 2024/2025",
    "fakultas": "FPsi",
    "dosen": 46,
    "memenuhi": 44,
    "tidak_memenuhi": 1,
    "asesor_berbeda": 1,
    "belum_dinilai": 0,
    "dinilai": 43,
    "median_pendidikan": 9.03,
    "median_penelitian": 1.25,
    "median_pengabdian": 1.12,
    "median_penunjang": 1.12,
    "median_lebih": 10.25,
    "lebih_di_atas_64": 0
   },
   {
    "semester": "Genap 2024/2025",
    "fakultas": "Tidak terpetakan",
    "dosen": 20,
    "memenuhi": 19,
    "tidak_memenuhi": 0,
    "asesor_berbeda": 0,
    "belum_dinilai": 1,
    "dinilai": 19,
    "median_pendidikan": 9.0,
    "median_penelitian": 2.0,
    "median_pengabdian": 2.0,
    "median_penunjang": 1.0,
    "median_lebih": 24.2,
    "lebih_di_atas_64": 4
   },
   {
    "semester": "Ganjil 2025/2026",
    "fakultas": "FT",
    "dosen": 216,
    "memenuhi": 214,
    "tidak_memenuhi": 2,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 214,
    "median_pendidikan": 10.0,
    "median_penelitian": 2.24,
    "median_pengabdian": 1.38,
    "median_penunjang": 0.75,
    "median_lebih": 28.21,
    "lebih_di_atas_64": 16
   },
   {
    "semester": "Ganjil 2025/2026",
    "fakultas": "FBS",
    "dosen": 197,
    "memenuhi": 194,
    "tidak_memenuhi": 3,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 196,
    "median_pendidikan": 10.0,
    "median_penelitian": 2.22,
    "median_pengabdian": 1.0,
    "median_penunjang": 0.69,
    "median_lebih": 23.94,
    "lebih_di_atas_64": 18
   },
   {
    "semester": "Ganjil 2025/2026",
    "fakultas": "FIP",
    "dosen": 210,
    "memenuhi": 207,
    "tidak_memenuhi": 3,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 209,
    "median_pendidikan": 10.0,
    "median_penelitian": 2.45,
    "median_pengabdian": 1.0,
    "median_penunjang": 0.75,
    "median_lebih": 27.2,
    "lebih_di_atas_64": 15
   },
   {
    "semester": "Ganjil 2025/2026",
    "fakultas": "FISH",
    "dosen": 155,
    "memenuhi": 147,
    "tidak_memenuhi": 8,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 150,
    "median_pendidikan": 9.12,
    "median_penelitian": 2.2,
    "median_pengabdian": 1.5,
    "median_penunjang": 0.75,
    "median_lebih": 30.61,
    "lebih_di_atas_64": 19
   },
   {
    "semester": "Ganjil 2025/2026",
    "fakultas": "FMIPA",
    "dosen": 156,
    "memenuhi": 154,
    "tidak_memenuhi": 2,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 147,
    "median_pendidikan": 9.75,
    "median_penelitian": 2.42,
    "median_pengabdian": 1.35,
    "median_penunjang": 0.75,
    "median_lebih": 21.51,
    "lebih_di_atas_64": 10
   },
   {
    "semester": "Ganjil 2025/2026",
    "fakultas": "FEB",
    "dosen": 151,
    "memenuhi": 150,
    "tidak_memenuhi": 1,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 145,
    "median_pendidikan": 9.5,
    "median_penelitian": 2.42,
    "median_pengabdian": 1.0,
    "median_penunjang": 0.62,
    "median_lebih": 40.0,
    "lebih_di_atas_64": 28
   },
   {
    "semester": "Ganjil 2025/2026",
    "fakultas": "FIKK",
    "dosen": 110,
    "memenuhi": 107,
    "tidak_memenuhi": 3,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 107,
    "median_pendidikan": 10.0,
    "median_penelitian": 1.6,
    "median_pengabdian": 1.0,
    "median_penunjang": 0.75,
    "median_lebih": 21.0,
    "lebih_di_atas_64": 1
   },
   {
    "semester": "Ganjil 2025/2026",
    "fakultas": "FPsi",
    "dosen": 46,
    "memenuhi": 46,
    "tidak_memenuhi": 0,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 43,
    "median_pendidikan": 9.5,
    "median_penelitian": 2.79,
    "median_pengabdian": 0.83,
    "median_penunjang": 0.75,
    "median_lebih": 13.0,
    "lebih_di_atas_64": 0
   },
   {
    "semester": "Ganjil 2025/2026",
    "fakultas": "Tidak terpetakan",
    "dosen": 21,
    "memenuhi": 20,
    "tidak_memenuhi": 1,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 21,
    "median_pendidikan": 9.0,
    "median_penelitian": 2.0,
    "median_pengabdian": 1.25,
    "median_penunjang": 2.0,
    "median_lebih": 34.75,
    "lebih_di_atas_64": 2
   },
   {
    "semester": "Genap 2025/2026",
    "fakultas": "FT",
    "dosen": 215,
    "memenuhi": 215,
    "tidak_memenuhi": 0,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 213,
    "median_pendidikan": 10.25,
    "median_penelitian": 1.67,
    "median_pengabdian": 1.38,
    "median_penunjang": 0.62,
    "median_lebih": 16.52,
    "lebih_di_atas_64": 6
   },
   {
    "semester": "Genap 2025/2026",
    "fakultas": "FBS",
    "dosen": 197,
    "memenuhi": 193,
    "tidak_memenuhi": 4,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 196,
    "median_pendidikan": 10.0,
    "median_penelitian": 1.76,
    "median_pengabdian": 1.81,
    "median_penunjang": 0.75,
    "median_lebih": 16.0,
    "lebih_di_atas_64": 6
   },
   {
    "semester": "Genap 2025/2026",
    "fakultas": "FIP",
    "dosen": 204,
    "memenuhi": 200,
    "tidak_memenuhi": 4,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 203,
    "median_pendidikan": 9.5,
    "median_penelitian": 2.51,
    "median_pengabdian": 1.5,
    "median_penunjang": 0.5,
    "median_lebih": 20.61,
    "lebih_di_atas_64": 10
   },
   {
    "semester": "Genap 2025/2026",
    "fakultas": "FISH",
    "dosen": 153,
    "memenuhi": 152,
    "tidak_memenuhi": 1,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 148,
    "median_pendidikan": 9.54,
    "median_penelitian": 2.0,
    "median_pengabdian": 2.0,
    "median_penunjang": 0.75,
    "median_lebih": 27.32,
    "lebih_di_atas_64": 18
   },
   {
    "semester": "Genap 2025/2026",
    "fakultas": "FMIPA",
    "dosen": 155,
    "memenuhi": 153,
    "tidak_memenuhi": 2,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 148,
    "median_pendidikan": 9.5,
    "median_penelitian": 1.89,
    "median_pengabdian": 1.92,
    "median_penunjang": 0.62,
    "median_lebih": 15.74,
    "lebih_di_atas_64": 7
   },
   {
    "semester": "Genap 2025/2026",
    "fakultas": "FEB",
    "dosen": 146,
    "memenuhi": 145,
    "tidak_memenuhi": 1,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 141,
    "median_pendidikan": 9.88,
    "median_penelitian": 2.03,
    "median_pengabdian": 2.0,
    "median_penunjang": 0.5,
    "median_lebih": 24.12,
    "lebih_di_atas_64": 10
   },
   {
    "semester": "Genap 2025/2026",
    "fakultas": "FIKK",
    "dosen": 110,
    "memenuhi": 106,
    "tidak_memenuhi": 4,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 108,
    "median_pendidikan": 10.0,
    "median_penelitian": 1.48,
    "median_pengabdian": 1.75,
    "median_penunjang": 0.62,
    "median_lebih": 23.88,
    "lebih_di_atas_64": 5
   },
   {
    "semester": "Genap 2025/2026",
    "fakultas": "FPsi",
    "dosen": 46,
    "memenuhi": 46,
    "tidak_memenuhi": 0,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 43,
    "median_pendidikan": 10.5,
    "median_penelitian": 1.75,
    "median_pengabdian": 1.05,
    "median_penunjang": 0.62,
    "median_lebih": 12.06,
    "lebih_di_atas_64": 0
   },
   {
    "semester": "Genap 2025/2026",
    "fakultas": "Tidak terpetakan",
    "dosen": 21,
    "memenuhi": 20,
    "tidak_memenuhi": 1,
    "asesor_berbeda": 0,
    "belum_dinilai": 0,
    "dinilai": 21,
    "median_pendidikan": 9.0,
    "median_penelitian": 2.0,
    "median_pengabdian": 0.75,
    "median_penunjang": 1.5,
    "median_lebih": 23.52,
    "lebih_di_atas_64": 1
   }
  ],
  "sebab": [
   {
    "semester": "Ganjil 2023/2024",
    "urut": 1,
    "sebab": "Total kinerja kurang dari 12 SKS dan pendidikan + penelitian kurang dari 9 SKS",
    "jumlah": 7
   },
   {
    "semester": "Ganjil 2023/2024",
    "urut": 2,
    "sebab": "Sebab lain (SKS memenuhi batas minimal)",
    "jumlah": 2
   },
   {
    "semester": "Ganjil 2023/2024",
    "urut": 3,
    "sebab": "Total kinerja kurang dari 12 SKS",
    "jumlah": 1
   },
   {
    "semester": "Genap 2023/2024",
    "urut": 1,
    "sebab": "Sebab lain (SKS memenuhi batas minimal)",
    "jumlah": 7
   },
   {
    "semester": "Genap 2023/2024",
    "urut": 2,
    "sebab": "Total kinerja kurang dari 12 SKS dan pendidikan + penelitian kurang dari 9 SKS",
    "jumlah": 3
   },
   {
    "semester": "Genap 2023/2024",
    "urut": 3,
    "sebab": "Total kinerja kurang dari 12 SKS",
    "jumlah": 1
   },
   {
    "semester": "Genap 2023/2024",
    "urut": 4,
    "sebab": "Pendidikan + penelitian kurang dari 9 SKS",
    "jumlah": 1
   },
   {
    "semester": "Ganjil 2024/2025",
    "urut": 1,
    "sebab": "Total kinerja kurang dari 12 SKS dan pendidikan + penelitian kurang dari 9 SKS",
    "jumlah": 39
   },
   {
    "semester": "Ganjil 2024/2025",
    "urut": 2,
    "sebab": "Sebab lain (SKS memenuhi batas minimal)",
    "jumlah": 4
   },
   {
    "semester": "Ganjil 2024/2025",
    "urut": 3,
    "sebab": "Total kinerja kurang dari 12 SKS",
    "jumlah": 1
   },
   {
    "semester": "Genap 2024/2025",
    "urut": 1,
    "sebab": "Total kinerja kurang dari 12 SKS dan pendidikan + penelitian kurang dari 9 SKS",
    "jumlah": 2
   },
   {
    "semester": "Genap 2024/2025",
    "urut": 2,
    "sebab": "Sebab lain (SKS memenuhi batas minimal)",
    "jumlah": 2
   },
   {
    "semester": "Genap 2024/2025",
    "urut": 3,
    "sebab": "Pendidikan + penelitian kurang dari 9 SKS",
    "jumlah": 1
   },
   {
    "semester": "Genap 2024/2025",
    "urut": 4,
    "sebab": "Total kinerja kurang dari 12 SKS",
    "jumlah": 1
   },
   {
    "semester": "Ganjil 2025/2026",
    "urut": 1,
    "sebab": "Total kinerja kurang dari 12 SKS dan pendidikan + penelitian kurang dari 9 SKS",
    "jumlah": 19
   },
   {
    "semester": "Ganjil 2025/2026",
    "urut": 2,
    "sebab": "Sebab lain (SKS memenuhi batas minimal)",
    "jumlah": 2
   },
   {
    "semester": "Ganjil 2025/2026",
    "urut": 3,
    "sebab": "Total kinerja kurang dari 12 SKS",
    "jumlah": 1
   },
   {
    "semester": "Ganjil 2025/2026",
    "urut": 4,
    "sebab": "BKD semester memenuhi, tetapi kewajiban dosen tidak memenuhi",
    "jumlah": 1
   },
   {
    "semester": "Genap 2025/2026",
    "urut": 1,
    "sebab": "Total kinerja kurang dari 12 SKS dan pendidikan + penelitian kurang dari 9 SKS",
    "jumlah": 14
   },
   {
    "semester": "Genap 2025/2026",
    "urut": 2,
    "sebab": "BKD semester memenuhi, tetapi kewajiban dosen tidak memenuhi",
    "jumlah": 2
   },
   {
    "semester": "Genap 2025/2026",
    "urut": 3,
    "sebab": "Pendidikan + penelitian kurang dari 9 SKS",
    "jumlah": 1
   }
  ],
  "komposisi": [
   {
    "semester": "Ganjil 2023/2024",
    "kelompok": "Seluruh dosen yang dinilai",
    "dosen": 828,
    "pendidikan": 10.0,
    "penelitian": 1.6,
    "pengabdian": 1.12,
    "penunjang": 0.75,
    "kinerja": 15.38,
    "lebih": 25.0
   },
   {
    "semester": "Ganjil 2023/2024",
    "kelompok": "Dosen tanpa tugas tambahan (DS)",
    "dosen": 476,
    "pendidikan": 10.0,
    "penelitian": 1.6,
    "pengabdian": 1.12,
    "penunjang": 0.75,
    "kinerja": 15.33,
    "lebih": 21.62
   },
   {
    "semester": "Ganjil 2023/2024",
    "kelompok": "Dosen dengan tugas tambahan (DT)",
    "dosen": 247,
    "pendidikan": 10.5,
    "penelitian": 1.6,
    "pengabdian": 1.0,
    "penunjang": 0.88,
    "kinerja": 15.4,
    "lebih": 31.62
   },
   {
    "semester": "Ganjil 2023/2024",
    "kelompok": "Profesor (PR dan PT)",
    "dosen": 105,
    "pendidikan": 10.0,
    "penelitian": 1.7,
    "pengabdian": 1.5,
    "penunjang": 0.75,
    "kinerja": 15.5,
    "lebih": 27.0
   },
   {
    "semester": "Genap 2023/2024",
    "kelompok": "Seluruh dosen yang dinilai",
    "dosen": 862,
    "pendidikan": 10.0,
    "penelitian": 1.77,
    "pengabdian": 1.25,
    "penunjang": 0.75,
    "kinerja": 15.38,
    "lebih": 18.49
   },
   {
    "semester": "Genap 2023/2024",
    "kelompok": "Dosen tanpa tugas tambahan (DS)",
    "dosen": 541,
    "pendidikan": 10.0,
    "penelitian": 1.7,
    "pengabdian": 1.29,
    "penunjang": 0.62,
    "kinerja": 15.31,
    "lebih": 16.0
   },
   {
    "semester": "Genap 2023/2024",
    "kelompok": "Dosen dengan tugas tambahan (DT)",
    "dosen": 206,
    "pendidikan": 9.15,
    "penelitian": 1.81,
    "pengabdian": 1.25,
    "penunjang": 0.88,
    "kinerja": 15.5,
    "lebih": 26.23
   },
   {
    "semester": "Genap 2023/2024",
    "kelompok": "Profesor (PR dan PT)",
    "dosen": 114,
    "pendidikan": 10.0,
    "penelitian": 2.0,
    "pengabdian": 1.0,
    "penunjang": 0.62,
    "kinerja": 15.39,
    "lebih": 22.19
   },
   {
    "semester": "Ganjil 2024/2025",
    "kelompok": "Seluruh dosen yang dinilai",
    "dosen": 1047,
    "pendidikan": 10.0,
    "penelitian": 2.0,
    "pengabdian": 0.96,
    "penunjang": 0.75,
    "kinerja": 15.38,
    "lebih": 24.73
   },
   {
    "semester": "Ganjil 2024/2025",
    "kelompok": "Dosen tanpa tugas tambahan (DS)",
    "dosen": 728,
    "pendidikan": 9.65,
    "penelitian": 2.0,
    "pengabdian": 1.0,
    "penunjang": 0.75,
    "kinerja": 15.32,
    "lebih": 20.0
   },
   {
    "semester": "Ganjil 2024/2025",
    "kelompok": "Dosen dengan tugas tambahan (DT)",
    "dosen": 202,
    "pendidikan": 10.0,
    "penelitian": 2.0,
    "pengabdian": 0.75,
    "penunjang": 0.95,
    "kinerja": 15.43,
    "lebih": 34.21
   },
   {
    "semester": "Ganjil 2024/2025",
    "kelompok": "Profesor (PR dan PT)",
    "dosen": 117,
    "pendidikan": 9.5,
    "penelitian": 2.27,
    "pengabdian": 1.0,
    "penunjang": 0.62,
    "kinerja": 15.53,
    "lebih": 33.8
   },
   {
    "semester": "Genap 2024/2025",
    "kelompok": "Seluruh dosen yang dinilai",
    "dosen": 1059,
    "pendidikan": 10.0,
    "penelitian": 1.87,
    "pengabdian": 1.5,
    "penunjang": 0.62,
    "kinerja": 15.44,
    "lebih": 19.62
   },
   {
    "semester": "Genap 2024/2025",
    "kelompok": "Dosen tanpa tugas tambahan (DS)",
    "dosen": 727,
    "pendidikan": 10.0,
    "penelitian": 1.87,
    "pengabdian": 2.0,
    "penunjang": 0.62,
    "kinerja": 15.45,
    "lebih": 17.0
   },
   {
    "semester": "Genap 2024/2025",
    "kelompok": "Dosen dengan tugas tambahan (DT)",
    "dosen": 204,
    "pendidikan": 10.0,
    "penelitian": 1.6,
    "pengabdian": 1.12,
    "penunjang": 0.75,
    "kinerja": 15.39,
    "lebih": 26.9
   },
   {
    "semester": "Genap 2024/2025",
    "kelompok": "Profesor (PR dan PT)",
    "dosen": 128,
    "pendidikan": 9.66,
    "penelitian": 2.19,
    "pengabdian": 0.88,
    "penunjang": 0.5,
    "kinerja": 15.3,
    "lebih": 24.0
   },
   {
    "semester": "Ganjil 2025/2026",
    "kelompok": "Seluruh dosen yang dinilai",
    "dosen": 1232,
    "pendidikan": 10.0,
    "penelitian": 2.25,
    "pengabdian": 1.11,
    "penunjang": 0.75,
    "kinerja": 15.29,
    "lebih": 26.95
   },
   {
    "semester": "Ganjil 2025/2026",
    "kelompok": "Dosen tanpa tugas tambahan (DS)",
    "dosen": 917,
    "pendidikan": 9.91,
    "penelitian": 2.2,
    "pengabdian": 1.12,
    "penunjang": 0.75,
    "kinerja": 15.27,
    "lebih": 24.11
   },
   {
    "semester": "Ganjil 2025/2026",
    "kelompok": "Dosen dengan tugas tambahan (DT)",
    "dosen": 180,
    "pendidikan": 10.0,
    "penelitian": 2.11,
    "pengabdian": 1.19,
    "penunjang": 0.75,
    "kinerja": 15.29,
    "lebih": 40.54
   },
   {
    "semester": "Ganjil 2025/2026",
    "kelompok": "Profesor (PR dan PT)",
    "dosen": 135,
    "pendidikan": 10.0,
    "penelitian": 2.5,
    "pengabdian": 1.0,
    "penunjang": 0.75,
    "kinerja": 15.38,
    "lebih": 33.38
   },
   {
    "semester": "Genap 2025/2026",
    "kelompok": "Seluruh dosen yang dinilai",
    "dosen": 1221,
    "pendidikan": 10.0,
    "penelitian": 1.9,
    "pengabdian": 1.62,
    "penunjang": 0.62,
    "kinerja": 15.22,
    "lebih": 19.5
   },
   {
    "semester": "Genap 2025/2026",
    "kelompok": "Dosen tanpa tugas tambahan (DS)",
    "dosen": 912,
    "pendidikan": 10.0,
    "penelitian": 1.84,
    "pengabdian": 1.75,
    "penunjang": 0.62,
    "kinerja": 15.23,
    "lebih": 16.57
   },
   {
    "semester": "Genap 2025/2026",
    "kelompok": "Dosen dengan tugas tambahan (DT)",
    "dosen": 173,
    "pendidikan": 9.75,
    "penelitian": 1.87,
    "pengabdian": 1.25,
    "penunjang": 0.62,
    "kinerja": 15.19,
    "lebih": 26.32
   },
   {
    "semester": "Genap 2025/2026",
    "kelompok": "Profesor (PR dan PT)",
    "dosen": 136,
    "pendidikan": 9.5,
    "penelitian": 2.44,
    "pengabdian": 1.39,
    "penunjang": 0.62,
    "kinerja": 15.32,
    "lebih": 30.77
   }
  ],
  "kk": [
   {
    "semester": "Ganjil 2023/2024",
    "urut": 1,
    "status": "Memenuhi",
    "jumlah": 736
   },
   {
    "semester": "Ganjil 2023/2024",
    "urut": 3,
    "status": "Tidak memenuhi",
    "jumlah": 4
   },
   {
    "semester": "Ganjil 2023/2024",
    "urut": 4,
    "status": "Simpulan asesor berbeda",
    "jumlah": 2
   },
   {
    "semester": "Ganjil 2023/2024",
    "urut": 5,
    "status": "Tidak ada jabatan fungsional",
    "jumlah": 95
   },
   {
    "semester": "Ganjil 2023/2024",
    "urut": 6,
    "status": "Tugas belajar",
    "jumlah": 43
   },
   {
    "semester": "Ganjil 2023/2024",
    "urut": 7,
    "status": "Belum dinilai",
    "jumlah": 35
   },
   {
    "semester": "Genap 2023/2024",
    "urut": 1,
    "status": "Memenuhi",
    "jumlah": 766
   },
   {
    "semester": "Genap 2023/2024",
    "urut": 3,
    "status": "Tidak memenuhi",
    "jumlah": 5
   },
   {
    "semester": "Genap 2023/2024",
    "urut": 4,
    "status": "Simpulan asesor berbeda",
    "jumlah": 1
   },
   {
    "semester": "Genap 2023/2024",
    "urut": 5,
    "status": "Tidak ada jabatan fungsional",
    "jumlah": 90
   },
   {
    "semester": "Genap 2023/2024",
    "urut": 6,
    "status": "Tugas belajar",
    "jumlah": 40
   },
   {
    "semester": "Genap 2023/2024",
    "urut": 7,
    "status": "Belum dinilai",
    "jumlah": 26
   },
   {
    "semester": "Ganjil 2024/2025",
    "urut": 1,
    "status": "Memenuhi",
    "jumlah": 857
   },
   {
    "semester": "Ganjil 2024/2025",
    "urut": 3,
    "status": "Tidak memenuhi",
    "jumlah": 2
   },
   {
    "semester": "Ganjil 2024/2025",
    "urut": 4,
    "status": "Simpulan asesor berbeda",
    "jumlah": 1
   },
   {
    "semester": "Ganjil 2024/2025",
    "urut": 5,
    "status": "Tidak ada jabatan fungsional",
    "jumlah": 189
   },
   {
    "semester": "Ganjil 2024/2025",
    "urut": 6,
    "status": "Tugas belajar",
    "jumlah": 34
   },
   {
    "semester": "Ganjil 2024/2025",
    "urut": 7,
    "status": "Belum dinilai",
    "jumlah": 16
   },
   {
    "semester": "Genap 2024/2025",
    "urut": 1,
    "status": "Memenuhi",
    "jumlah": 884
   },
   {
    "semester": "Genap 2024/2025",
    "urut": 3,
    "status": "Tidak memenuhi",
    "jumlah": 4
   },
   {
    "semester": "Genap 2024/2025",
    "urut": 4,
    "status": "Simpulan asesor berbeda",
    "jumlah": 1
   },
   {
    "semester": "Genap 2024/2025",
    "urut": 5,
    "status": "Tidak ada jabatan fungsional",
    "jumlah": 172
   },
   {
    "semester": "Genap 2024/2025",
    "urut": 6,
    "status": "Tugas belajar",
    "jumlah": 28
   },
   {
    "semester": "Genap 2024/2025",
    "urut": 7,
    "status": "Belum dinilai",
    "jumlah": 24
   },
   {
    "semester": "Ganjil 2025/2026",
    "urut": 1,
    "status": "Memenuhi",
    "jumlah": 1017
   },
   {
    "semester": "Ganjil 2025/2026",
    "urut": 2,
    "status": "Belum memenuhi",
    "jumlah": 2
   },
   {
    "semester": "Ganjil 2025/2026",
    "urut": 3,
    "status": "Tidak memenuhi",
    "jumlah": 11
   },
   {
    "semester": "Ganjil 2025/2026",
    "urut": 5,
    "status": "Tidak ada jabatan fungsional",
    "jumlah": 202
   },
   {
    "semester": "Ganjil 2025/2026",
    "urut": 6,
    "status": "Tugas belajar",
    "jumlah": 30
   },
   {
    "semester": "Genap 2025/2026",
    "urut": 1,
    "status": "Memenuhi",
    "jumlah": 1024
   },
   {
    "semester": "Genap 2025/2026",
    "urut": 2,
    "status": "Belum memenuhi",
    "jumlah": 1
   },
   {
    "semester": "Genap 2025/2026",
    "urut": 3,
    "status": "Tidak memenuhi",
    "jumlah": 10
   },
   {
    "semester": "Genap 2025/2026",
    "urut": 5,
    "status": "Tidak ada jabatan fungsional",
    "jumlah": 186
   },
   {
    "semester": "Genap 2025/2026",
    "urut": 6,
    "status": "Tugas belajar",
    "jumlah": 26
   }
  ]
 },
 "tendik": [
  {
   "kelompok": "Status",
   "kategori": "PPPK Tendik",
   "jumlah": 336,
   "urut": 1
  },
  {
   "kelompok": "Status",
   "kategori": "Pegawai PNS",
   "jumlah": 242,
   "urut": 2
  },
  {
   "kelompok": "Status",
   "kategori": "Tendik Tidak Tetap",
   "jumlah": 134,
   "urut": 3
  },
  {
   "kelompok": "Status",
   "kategori": "Tendik Tetap",
   "jumlah": 40,
   "urut": 4
  },
  {
   "kelompok": "Status",
   "kategori": "PKWT",
   "jumlah": 13,
   "urut": 5
  },
  {
   "kelompok": "Status",
   "kategori": "PPPK Paruh Waktu",
   "jumlah": 5,
   "urut": 6
  },
  {
   "kelompok": "Pendidikan",
   "kategori": "S3",
   "jumlah": 2,
   "urut": 7
  },
  {
   "kelompok": "Pendidikan",
   "kategori": "S2",
   "jumlah": 38,
   "urut": 8
  },
  {
   "kelompok": "Pendidikan",
   "kategori": "S1",
   "jumlah": 387,
   "urut": 9
  },
  {
   "kelompok": "Pendidikan",
   "kategori": "D3",
   "jumlah": 57,
   "urut": 10
  },
  {
   "kelompok": "Pendidikan",
   "kategori": "SLTA",
   "jumlah": 265,
   "urut": 11
  },
  {
   "kelompok": "Pendidikan",
   "kategori": "SLTP",
   "jumlah": 3,
   "urut": 12
  },
  {
   "kelompok": "Pendidikan",
   "kategori": "SD",
   "jumlah": 18,
   "urut": 13
  },
  {
   "kelompok": "Jabatan",
   "kategori": "Jabatan fungsional tertentu",
   "jumlah": 103,
   "urut": 14
  },
  {
   "kelompok": "Jabatan",
   "kategori": "Jabatan pelaksana atau lainnya",
   "jumlah": 667,
   "urut": 15
  }
 ],
 "tren": {
  "jabatan": [
   {
    "urut": 1,
    "periode": "2020",
    "sumber": "Renstra UNJ 2025–2029",
    "guru_besar": 62,
    "lektor_kepala": 219,
    "lektor": 377,
    "asisten_ahli": 239,
    "belum_berjabatan": 68
   },
   {
    "urut": 2,
    "periode": "2021",
    "sumber": "Renstra UNJ 2025–2029",
    "guru_besar": 68,
    "lektor_kepala": 199,
    "lektor": 380,
    "asisten_ahli": 219,
    "belum_berjabatan": 78
   },
   {
    "urut": 3,
    "periode": "2022",
    "sumber": "Renstra UNJ 2025–2029",
    "guru_besar": 74,
    "lektor_kepala": 198,
    "lektor": 371,
    "asisten_ahli": 249,
    "belum_berjabatan": 89
   },
   {
    "urut": 4,
    "periode": "2023",
    "sumber": "Renstra UNJ 2025–2029",
    "guru_besar": 117,
    "lektor_kepala": 186,
    "lektor": 377,
    "asisten_ahli": 239,
    "belum_berjabatan": 68
   },
   {
    "urut": 5,
    "periode": "2024",
    "sumber": "Renstra UNJ 2025–2029",
    "guru_besar": 116,
    "lektor_kepala": 177,
    "lektor": 402,
    "asisten_ahli": 408,
    "belum_berjabatan": 49
   },
   {
    "urut": 6,
    "periode": "Sep 2026",
    "sumber": "DUK Dosen September 2026",
    "guru_besar": 141,
    "lektor_kepala": 231,
    "lektor": 367,
    "asisten_ahli": 326,
    "belum_berjabatan": 184
   },
   {
    "urut": 7,
    "periode": "Okt 2026",
    "sumber": "PDDikti Oktober 2026",
    "guru_besar": 139,
    "lektor_kepala": 216,
    "lektor": 400,
    "asisten_ahli": 313,
    "belum_berjabatan": 188
   }
  ],
  "doktor": [
   {
    "urut": 1,
    "periode": "Mei 2026",
    "sumber": "Data dosen per JFT Mei 2026",
    "dosen": 1258,
    "doktor": 461,
    "tanpa_data": 0
   },
   {
    "urut": 2,
    "periode": "Sep 2026",
    "sumber": "DUK Dosen September 2026",
    "dosen": 1249,
    "doktor": 466,
    "tanpa_data": 0
   }
  ],
  "tendik": [
   {
    "kelompok": "Pendidikan",
    "kategori": "S2 ke atas",
    "urut": 1,
    "periode": "Jan 2025",
    "sumber": "Data olah tendik Januari 2025",
    "jumlah": 45
   },
   {
    "kelompok": "Pendidikan",
    "kategori": "S2 ke atas",
    "urut": 1,
    "periode": "Okt 2026",
    "sumber": "Rekapitulasi Data Tendik per 8 Oktober 2026",
    "jumlah": 40
   },
   {
    "kelompok": "Pendidikan",
    "kategori": "S1",
    "urut": 2,
    "periode": "Jan 2025",
    "sumber": "Data olah tendik Januari 2025",
    "jumlah": 347
   },
   {
    "kelompok": "Pendidikan",
    "kategori": "S1",
    "urut": 2,
    "periode": "Okt 2026",
    "sumber": "Rekapitulasi Data Tendik per 8 Oktober 2026",
    "jumlah": 387
   },
   {
    "kelompok": "Pendidikan",
    "kategori": "Diploma",
    "urut": 3,
    "periode": "Jan 2025",
    "sumber": "Data olah tendik Januari 2025",
    "jumlah": 52
   },
   {
    "kelompok": "Pendidikan",
    "kategori": "Diploma",
    "urut": 3,
    "periode": "Okt 2026",
    "sumber": "Rekapitulasi Data Tendik per 8 Oktober 2026",
    "jumlah": 57
   },
   {
    "kelompok": "Pendidikan",
    "kategori": "SLTA",
    "urut": 4,
    "periode": "Jan 2025",
    "sumber": "Data olah tendik Januari 2025",
    "jumlah": 282
   },
   {
    "kelompok": "Pendidikan",
    "kategori": "SLTA",
    "urut": 4,
    "periode": "Okt 2026",
    "sumber": "Rekapitulasi Data Tendik per 8 Oktober 2026",
    "jumlah": 265
   },
   {
    "kelompok": "Pendidikan",
    "kategori": "SLTP ke bawah",
    "urut": 5,
    "periode": "Jan 2025",
    "sumber": "Data olah tendik Januari 2025",
    "jumlah": 22
   },
   {
    "kelompok": "Pendidikan",
    "kategori": "SLTP ke bawah",
    "urut": 5,
    "periode": "Okt 2026",
    "sumber": "Rekapitulasi Data Tendik per 8 Oktober 2026",
    "jumlah": 21
   },
   {
    "kelompok": "Status",
    "kategori": "PNS",
    "urut": 1,
    "periode": "Jan 2025",
    "sumber": "Data olah tendik Januari 2025",
    "jumlah": 234
   },
   {
    "kelompok": "Status",
    "kategori": "PNS",
    "urut": 1,
    "periode": "Okt 2026",
    "sumber": "Rekapitulasi Data Tendik per 8 Oktober 2026",
    "jumlah": 242
   },
   {
    "kelompok": "Status",
    "kategori": "PPPK",
    "urut": 2,
    "periode": "Jan 2025",
    "sumber": "Data olah tendik Januari 2025",
    "jumlah": 7
   },
   {
    "kelompok": "Status",
    "kategori": "PPPK",
    "urut": 2,
    "periode": "Okt 2026",
    "sumber": "Rekapitulasi Data Tendik per 8 Oktober 2026",
    "jumlah": 341
   },
   {
    "kelompok": "Status",
    "kategori": "Tetap non-ASN",
    "urut": 3,
    "periode": "Jan 2025",
    "sumber": "Data olah tendik Januari 2025",
    "jumlah": 2
   },
   {
    "kelompok": "Status",
    "kategori": "Tetap non-ASN",
    "urut": 3,
    "periode": "Okt 2026",
    "sumber": "Rekapitulasi Data Tendik per 8 Oktober 2026",
    "jumlah": 40
   },
   {
    "kelompok": "Status",
    "kategori": "PKWT",
    "urut": 4,
    "periode": "Jan 2025",
    "sumber": "Data olah tendik Januari 2025",
    "jumlah": 77
   },
   {
    "kelompok": "Status",
    "kategori": "PKWT",
    "urut": 4,
    "periode": "Okt 2026",
    "sumber": "Rekapitulasi Data Tendik per 8 Oktober 2026",
    "jumlah": 13
   },
   {
    "kelompok": "Status",
    "kategori": "Tidak tetap atau honorer",
    "urut": 5,
    "periode": "Jan 2025",
    "sumber": "Data olah tendik Januari 2025",
    "jumlah": 428
   },
   {
    "kelompok": "Status",
    "kategori": "Tidak tetap atau honorer",
    "urut": 5,
    "periode": "Okt 2026",
    "sumber": "Rekapitulasi Data Tendik per 8 Oktober 2026",
    "jumlah": 134
   },
   {
    "kelompok": "Jabatan",
    "kategori": "Jabatan fungsional tertentu",
    "urut": 1,
    "periode": "Jan 2025",
    "sumber": "Data olah tendik Januari 2025",
    "jumlah": 74
   },
   {
    "kelompok": "Jabatan",
    "kategori": "Jabatan fungsional tertentu",
    "urut": 1,
    "periode": "Okt 2026",
    "sumber": "Rekapitulasi Data Tendik per 8 Oktober 2026",
    "jumlah": 103
   },
   {
    "kelompok": "Jabatan",
    "kategori": "Jabatan pelaksana atau lainnya",
    "urut": 2,
    "periode": "Jan 2025",
    "sumber": "Data olah tendik Januari 2025",
    "jumlah": 674
   },
   {
    "kelompok": "Jabatan",
    "kategori": "Jabatan pelaksana atau lainnya",
    "urut": 2,
    "periode": "Okt 2026",
    "sumber": "Rekapitulasi Data Tendik per 8 Oktober 2026",
    "jumlah": 667
   }
  ]
 }
};
