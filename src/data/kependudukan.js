export const kpiCards = [
  { label: 'Total Warga', value: '482', unit: 'Jiwa', icon: 'groups', trend: '+4 jiwa bln ini', trendIcon: 'trending_up', tone: 'text-primary' },
  { label: 'Kepala Keluarga', value: '142', unit: 'KK', icon: 'badge', trend: 'Rerata 3.4 jiwa/KK', trendIcon: 'cottage', tone: 'text-on-surface-variant' },
  { label: 'Warga Tetap', value: '398', unit: 'Jiwa', icon: 'home_pin', badge: '82.5%', note: 'dari populasi', tone: 'text-primary' },
  { label: 'Kontrak / Kos', value: '84', unit: 'Jiwa', icon: 'apartment', badge: '17.5%', note: 'wajib lapor berkala', tone: 'text-tertiary' },
  { label: 'Menunggu TTE', value: '4', unit: 'Berkas', icon: 'draw', trend: 'Butuh tanda tangan RT', trendIcon: 'schedule', tone: 'text-error', alert: true },
  { label: 'Kas Saldo Kas RT', value: 'Rp 28.450.000', icon: 'account_balance_wallet', trend: 'Rekonsiliasi per Mei', trendIcon: 'check_circle', tone: 'text-primary', money: true },
]

export const ageGroups = [
  { label: 'Usia Produktif (20 – 55 th)', pct: 52, detail: '52% (251 Jiwa)', dot: 'bg-primary', bar: 'bg-primary' },
  { label: 'Anak-anak (0 – 12 th)', pct: 18, detail: '18% (87 Jiwa)', dot: 'bg-secondary', bar: 'bg-secondary', text: 'text-secondary' },
  { label: 'Remaja (13 – 19 th)', pct: 15, detail: '15% (72 Jiwa)', dot: 'bg-primary-fixed-dim', bar: 'bg-primary-fixed-dim' },
  { label: 'Lansia (>55 th)', pct: 15, detail: '15% (72 Jiwa)', dot: 'bg-tertiary-container', bar: 'bg-tertiary-container', text: 'text-tertiary' },
]

export const bloodTypes = [
  { type: 'O', count: 188, pct: '39.0%' },
  { type: 'A', count: 124, pct: '25.7%' },
  { type: 'B', count: 130, pct: '27.0%' },
  { type: 'AB', count: 40, pct: '8.3%' },
]

export const professions = [
  { label: 'Karyawan Swasta', count: '148 Jiwa', pct: '59%', dot: 'bg-primary' },
  { label: 'Wirausaha / Pedagang', count: '45 Jiwa', pct: '18%', dot: 'bg-secondary' },
  { label: 'Aparatur Sipil / ASN', count: '32 Jiwa', pct: '13%', dot: 'bg-primary-fixed-dim' },
  { label: 'Pensiunan & Lansia Mandiri', count: '18 Jiwa', pct: '7%', dot: 'bg-tertiary-container' },
  { label: 'TNI / Polri', count: '8 Jiwa', pct: '3%', dot: 'bg-outline' },
]

export const families = [
  { noKK: '3275012304910002', kepala: 'Bpk. Ahmad Fauzi', nik: '3275011405820003', kerja: 'Karyawan Swasta', blok: 'Blok B2 No. 14', blokKey: 'Blok B', jiwa: 4, status: 'Warga Tetap', arsip: 'KTP & KK Terverifikasi', arsipWarn: false, highlight: true },
  { noKK: '3275010901840008', kepala: 'Bpk. Hendra Gunawan, S.E.', nik: '3275010901840001', kerja: 'ASN Kemenkeu', blok: 'Blok A1 No. 04', blokKey: 'Blok A', jiwa: 3, status: 'Warga Tetap', arsip: 'KTP & KK Terverifikasi', arsipWarn: false },
  { noKK: '3275011707960015', kepala: 'Bpk. Rizky Aditya Pratama', nik: '3374021208960004', kerja: 'Software Engineer', blok: 'Blok C3 No. 22', blokKey: 'Blok C', jiwa: 2, status: 'Kontrak / Kos', arsip: 'Kurang KTP Istri', arsipWarn: true },
  { noKK: '3275010502750001', kepala: 'Ibu Hj. Siti Nurhasanah', nik: '3275014502750002', kerja: 'Wirausaha Kuliner', blok: 'Blok B1 No. 02', blokKey: 'Blok B', jiwa: 5, status: 'Warga Tetap', arsip: 'KTP & KK Terverifikasi', arsipWarn: false },
  { noKK: '3275011210880019', kepala: 'Bpk. Deddy Supriyadi, M.T.', nik: '3275011210880003', kerja: 'Dosen / Akademisi', blok: 'Blok D1 No. 09', blokKey: 'Blok D', jiwa: 3, status: 'Warga Tetap', arsip: 'KTP & KK Terverifikasi', arsipWarn: false },
  { noKK: '3275012903930022', kepala: 'Bpk. Kevin Danuarta', nik: '3171052903930007', kerja: 'Konsultan IT', blok: 'Blok A3 No. 18', blokKey: 'Blok A', jiwa: 1, status: 'Kontrak / Kos', arsip: 'KTP & KK Terverifikasi', arsipWarn: false },
]

export const familyMembers = [
  { nama: 'Ahmad Fauzi', relasi: 'Kepala Keluarga', nik: '3275011405820003 • L • 42 Th • Gol. O', kerja: 'Karyawan Swasta' },
  { nama: 'Dewi Lestari, S.Pd.', relasi: 'Istri', nik: '3275015208850009 • P • 39 Th • Gol. B', kerja: 'Guru Honorer / Swasta' },
  { nama: 'Muhammad Rizky Fauzi', relasi: 'Anak Ke-1', nik: '3275010411100004 • L • 14 Th • Pelajar SMP', kerja: 'Pelajar' },
  { nama: 'Aisyah Putri Fauzi', relasi: 'Anak Ke-2', nik: '3275016503160002 • P • 8 Th • Pelajar SD', kerja: 'Pelajar' },
]
