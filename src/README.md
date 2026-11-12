# MotoCare Service - Aplikasi Pendaftaran Service Motor (UTS Mobile Programming Native)

Aplikasi mobile berbasis **React Native (Expo)** untuk pendaftaran service motor mandiri dan manajemen antrean di bengkel. Dibuat guna memenuhi tugas Ujian Tengah Semester (UTS) Mata Kuliah Mobile Programming Native, Fakultas Sains dan Teknologi, Universitas Muhammadiyah Sukabumi Tahun Akademik 2026/2027.

---

## Fitur Utama Aplikasi
1. **Pilihan Paket Service (Service Packages):** Pengguna dapat memilih berbagai jenis paket perawatan motor (Service Ringan, Service CVT, hingga Service Besar).
2. **Formulir Pendaftaran Kendaraan:** Input data pemilik, tipe motor, nomor polisi, serta keluhan tambahan motor.
3. **Manajemen Antrean & Status (Queue Management):** Menampilkan daftar antrean motor masuk lengkap dengan status (*Menunggu Antrean* atau *Selesai*) serta tombol aksi untuk memperbarui status maupun menghapus data.
4. **Navigasi Antar Halaman:** Menggunakan **React Navigation (Bottom Tabs)** untuk berpindah secara mulus antara halaman **Pendaftaran** dan **Antrean**.

---

## Pemenuhan Ketentuan Soal UTS
* **Framework:** Dibangun menggunakan React Native & Expo.
* **Komponen:** Terdiri dari minimal 4 komponen modular (`HeaderBanner`, `ServiceCard`, `BookingForm`, `BookingItem`, serta komponen Screen).
* **State & Props:** Mengelola *state* utama di komponen root (`App.js`) dan meneruskannya ke komponen anak melalui *props*.
* **Hooks:** Mengimplementasikan `useState` (manajemen form/antrean), `useEffect` (pemantau log antrean), dan `useMemo` (kalkulasi estimasi total pendapatan/biaya service).
* **Tema Positif:** Tema aplikasi dirancang solutif dan bermanfaat bagi pengendara untuk menghindari antrean panjang di bengkel.

---

## Struktur Folder Proyek
```text
MotoCareMobile/
├── App.js
├── app.json
├── package.json
└── src/
    ├── components/
    │   ├── HeaderBanner.js
    │   ├── ServiceCard.js
    │   ├── BookingForm.js
    │   └── BookingItem.js
    └── screens/
        ├── HomeScreen.js
        └── QueueScreen.js