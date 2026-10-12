export default function Header() {
  return (
    <header className="fixed top-0 left-0 lg:left-72 right-0 h-16 bg-surface/80 backdrop-blur-xl z-40 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="w-full h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface">
            <span className="material-symbols-outlined text-primary text-lg">location_on</span>
            <span className="text-[13px] font-semibold">RT 04 / RW 08 • Griya Asri Mandiri</span>
          </div>
          <span className="text-xs text-on-surface-variant hidden lg:inline">Kel. Harapan Jaya, Kec. Bekasi Utara</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex items-center justify-center p-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface cursor-pointer">
            <span className="material-symbols-outlined text-xl">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-error ring-2 ring-surface"></span>
          </div>
          <div className="h-6 w-px bg-outline-variant"></div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-sm font-semibold">Bpk. H. Bambang Suryono, S.T.</span>
              <span className="self-end px-2 rounded bg-primary-container text-on-primary-container text-[11px] font-bold">Ketua RT (Super Admin)</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm ring-1 ring-outline-variant">BS</div>
          </div>
        </div>
      </div>
    </header>
  )
}
