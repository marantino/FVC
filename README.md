# SIM-RT — Dashboard & Kependudukan (React + Vite)

Rebuild dari `design/dashboard_database_kependudukan/code.html` ke React-Vite + Tailwind.

## Struktur
- `src/App.jsx` — layout utama
- `src/components/Sidebar.jsx`, `Header.jsx`, `Banner.jsx`, `KpiGrid.jsx`, `Demographics.jsx`, `FamilyTable.jsx`, `Drawer.jsx`
- `src/data/kependudukan.js` — data KPI, usia, golongan darah, profesi, 6 KK + anggota
- `tailwind.config.js` — token warna Material M3 (surface/primary/secondary/tertiary/error)

## Jalankan
Terminal (CMD / Git Bash, bukan PowerShell restricted):
```
npm install
npm run dev
```
Buka http://localhost:5173

## Fitur
- Banner + 6 KPI, demografi usia/gender-darah/profesi
- Tabel KK dengan search + filter blok, drawer detail keluarga, toast tambah KK
- Responsif: sidebar/header collapse di mobile
