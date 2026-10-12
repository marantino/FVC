export default function Banner({ onAdd }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-surface-container-low shadow-sm p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
      <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary-fixed/15 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-tertiary-fixed/20 blur-2xl pointer-events-none"></div>
      <div className="relative z-10 flex flex-col gap-2 max-w-2xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-primary text-on-primary text-[11px] font-bold uppercase tracking-wider">Siklus Periode 2024 - 2027</span>
          <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-on-surface-variant">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Sinkronisasi SIAK Dukcapil: Hari ini, 08:30 WIB
          </span>
        </div>
        <h1 className="text-[32px] leading-[40px] tracking-tight text-on-surface font-bold">
          Selamat Bertugas, <span className="text-primary">Bpk. H. Bambang Suryono</span>
        </h1>
        <p className="text-sm text-on-surface-variant">
          Pusat kendali demografi digital RT 04 / RW 08 Griya Asri Mandiri. Seluruh arsip kependudukan, validasi kartu keluarga, dan statistik kehumasan terverifikasi otomatis.
        </p>
      </div>
      <div className="relative z-10 flex items-center flex-wrap gap-3">
        <button onClick={onAdd} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-on-primary text-[13px] font-semibold shadow-sm hover:scale-[1.01] transition-all">
          <span className="material-symbols-outlined text-lg">person_add</span>
          Tambah Data KK / Warga Baru
        </button>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-highest text-on-surface text-[13px] font-semibold hover:bg-surface-variant transition-colors">
          <span className="material-symbols-outlined text-lg">file_download</span>
          Ekspor Laporan (PDF/Excel)
        </button>
      </div>
    </div>
  )
}
