export const persuratanKpi = [
  { label: 'Surat Masuk Hari Ini', value: '03', badge: 'Perlu Respon', badgeCls: 'bg-error-container text-on-error-container', icon: 'mark_email_unread', iconWrap: 'bg-secondary-container/30 text-primary', footIcon: 'schedule', foot: 'Antrean terlama: 2 jam 15 mnt lalu' },
  { label: 'Rata-rata Waktu Verifikasi', value: '4.2', unit: 'Jam', badge: '↓ 35% lebih cepat', badgeCls: 'bg-surface-container text-on-surface', icon: 'speed', iconWrap: 'bg-primary-fixed/30 text-primary', footIcon: 'verified_user', foot: 'Target kelurahan: ≤ 12.0 Jam' },
  { label: 'Total Terbit Bulan Ini', value: '28', unit: 'Surat', badge: '+8 dari Jan', badgeCls: 'bg-secondary-container/40 text-on-secondary-container', icon: 'fact_check', iconWrap: 'bg-tertiary-fixed/40 text-tertiary', footIcon: 'cloud_done', foot: '100% tersinkronisasi ke RW 08' },
  { label: 'Penolakan / Revisi Data', value: '01', unit: 'Kasus', badge: 'Lampiran Buram', badgeCls: 'bg-error-container text-on-error-container', icon: 'assignment_late', iconWrap: 'bg-error-container/40 text-error', footIcon: 'sync_problem', foot: 'Blok C2/09 menunggu unggah KK baru' },
]

export const persuratanTabs = [
  { key: 'pending', icon: 'pending_actions', label: 'Pengajuan Masuk (Perlu TTE)', count: '3', countCls: 'bg-error text-on-error' },
  { key: 'processing', icon: 'hourglass_top', label: 'Dalam Proses', count: '2', countCls: 'bg-surface-container-high text-on-surface-variant' },
  { key: 'completed', icon: 'check_circle', label: 'Selesai & Terbit', count: '28', countCls: 'bg-secondary-container text-on-secondary-container' },
  { key: 'archive', icon: 'archive', label: 'Arsip Riwayat Surat', count: null },
]

export const suratCategories = [
  { value: 'all', label: 'Semua Jenis Surat' },
  { value: 'SKCK', label: 'Surat Pengantar SKCK' },
  { value: 'KTP_KK', label: 'Pengantar KTP / KK' },
  { value: 'DOMISILI', label: 'Keterangan Domisili' },
  { value: 'NIKAH', label: 'Pengantar Nikah (N1-N4)' },
  { value: 'SKU', label: 'Keterangan Usaha (SKU)' },
  { value: 'KEMATIAN', label: 'Keterangan Kematian' },
]

export const docTitleMap = {
  SKCK: 'SURAT PENGANTAR KETUA RT (SKCK)',
  KTP_KK: 'SURAT PENGANTAR PERMOHONAN KTP / KK',
  SKU: 'SURAT KETERANGAN USAHA (SKU)',
  NIKAH: 'SURAT PENGANTAR PERNIKAHAN (N1-N4)',
  DOMISILI: 'SURAT KETERANGAN DOMISILI WARGA',
  KEMATIAN: 'SURAT KETERANGAN KEMATIAN',
}

export const persuratanRequests = [
  { id: 'RT04-2025-028', regNo: '028/SP-RT04/II/2025', regLabel: 'Reg #1084', dateLabel: 'Hari ini', time: '08:42 WIB', name: 'Hendra Gunawan', nik: '3275031208940003', birth: 'Bekasi, 12 Agustus 1994', religionJob: 'Islam / Karyawan Swasta', block: 'Blok B3 No. 12', blockShort: 'Blok B3 / 12', initials: 'HG', avatarCls: 'bg-primary-fixed text-on-primary-fixed', type: 'SKCK', typeLabel: 'SKCK', typeCls: 'text-primary', purposeShort: 'Persyaratan Berkas Kerja BUMN/Swasta', purposeFull: 'Permohonan SKCK Melamar Pekerjaan PT Astra', status: 'pending', tab: 'pending' },
  { id: 'RT04-2025-029', regNo: '029/SP-RT04/II/2025', regLabel: 'Reg #1085', dateLabel: 'Hari ini', time: '09:15 WIB', name: 'Siti Rahmawati', nik: '3275034503880001', birth: 'Bekasi, 03 Agustus 1988', religionJob: 'Islam / Ibu Rumah Tangga', block: 'Blok A1 No. 04', blockShort: 'Blok A1 / 04', initials: 'SR', avatarCls: 'bg-secondary-container text-on-secondary-container', type: 'KTP_KK', typeLabel: 'KTP & KK', typeCls: 'text-on-surface', purposeShort: 'Penambahan Anggota Keluarga Baru', purposeFull: 'Pembaruan Kartu Keluarga - Penambahan Anggota Anak ke-2', status: 'approved', tab: 'processing' },
  { id: 'RT04-2025-030', regNo: '026/SP-RT04/II/2025', regLabel: 'Reg #1082', dateLabel: '16 Feb 2025', time: '14:20 WIB', name: 'Budi Santoso', nik: '3302191506820005', birth: 'Solo, 15 Juni 1982', religionJob: 'Islam / Wirausaha Laundry', block: 'Blok D4 No. 19', blockShort: 'Blok D4 / 19', initials: 'BS', avatarCls: 'bg-tertiary-fixed text-on-tertiary-fixed', type: 'SKU', typeLabel: 'SKU Usaha', typeCls: 'text-tertiary', purposeShort: 'Usaha Bersih Fresh Laundry RT 04', purposeFull: 'Permohonan Surat Keterangan Domisili Usaha (Laundry Kiloan)', status: 'ready', tab: 'completed' },
  { id: 'RT04-2025-027', regNo: '027/SP-RT04/II/2025', regLabel: 'Reg #1083', dateLabel: '16 Feb 2025', time: '11:05 WIB', name: 'Aris Munandar', nik: '3275032911950002', birth: 'Bekasi, 29 November 1995', religionJob: 'Islam / Karyawan Swasta', block: 'Blok C2 No. 09', blockShort: 'Blok C2 / 09', initials: 'AM', avatarCls: 'bg-error-container text-on-error-container', type: 'NIKAH', typeLabel: 'Pengantar Nikah', typeCls: 'text-error', purposeShort: 'Pemberkasan Kantor Urusan Agama', purposeFull: 'Surat Pengantar Nikah (Model N1-N4 ke KUA Bekasi Utara)', status: 'revision', tab: 'processing' },
]

export function statusBadge(status) {
  if (status === 'pending') return { cls: 'bg-tertiary-fixed text-on-tertiary-fixed', icon: null, dot: true, label: 'Menunggu Approval RT' }
  if (status === 'approved') return { cls: 'bg-secondary-container text-on-secondary-container', icon: 'done_all', label: 'Disetujui Ketua RT' }
  if (status === 'ready') return { cls: 'bg-primary-fixed text-on-primary-fixed', icon: 'print', label: 'Siap Cetak PDF' }
  if (status === 'revision') return { cls: 'bg-error-container text-on-error-container', icon: 'report_problem', label: 'Perlu Revisi Dokumen' }
  return { cls: 'bg-surface-container text-on-surface', icon: null, label: status }
}
