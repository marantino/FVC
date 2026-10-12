const nav = [
  { icon: 'demography', label: 'Dashboard & Kependudukan', active: true },
  { icon: 'assignment', label: 'Administrasi & Persuratan', badge: '3 Baru' },
  { icon: 'account_balance_wallet', label: 'Kas & Keuangan Warga' },
  { icon: 'shield', label: 'Layanan Warga & Keamanan' },
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-full w-72 flex-col justify-between bg-surface-container-low px-4 py-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] lg:flex z-50">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3 px-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-on-primary">
            <span className="material-symbols-outlined">other_houses</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-primary">SIM-RT</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Sistem Kelola Rukun Tetangga</span>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-surface-container px-3 py-2.5">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold uppercase text-on-surface-variant">Wilayah Kerja</span>
            <span className="text-sm font-semibold">RT 04 / RW 08</span>
          </div>
          <span className="rounded-full bg-secondary-container px-2 py-0.5 text-[11px] font-bold text-on-secondary-container">Aktif</span>
        </div>
        <nav className="flex flex-col gap-1.5">
          {nav.map((item) => (
            <a key={item.label} href="#" className={`flex items-center ${item.badge ? 'justify-between' : 'gap-3'} rounded-lg px-3.5 py-2.5 transition-colors ${item.active ? 'bg-primary-container font-semibold text-on-primary-container' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}`}>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                <span className="text-sm font-semibold">{item.label}</span>
              </div>
              {item.badge && <span className="rounded-full bg-tertiary-fixed px-1.5 py-0.5 text-[11px] font-bold text-on-tertiary-fixed">{item.badge}</span>}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-3 px-2">
        <div className="flex flex-col gap-2 rounded-lg bg-surface-container-high p-3">
          <div className="flex items-center gap-2 text-error">
            <span className="material-symbols-outlined text-lg">sos</span>
            <span className="text-sm font-semibold">Saluran Siaga RT</span>
          </div>
          <p className="text-xs text-on-surface-variant">Hubungi Babinsa, Bhabinkamtibmas, atau Pos Ronda secara instan.</p>
          <a href="#" className="inline-flex items-center justify-center gap-1.5 rounded bg-error px-3 py-1.5 text-[13px] font-semibold text-on-error hover:bg-on-error-container transition-colors">
            <span className="material-symbols-outlined text-base">call</span>Hubungi Pos Ronda
          </a>
        </div>
        <div className="flex items-center justify-between pt-2 text-[11px] font-medium text-on-surface-variant">
          <span>© 2025 Kel. Harapan Jaya</span><span>v2.4.0</span>
        </div>
      </div>
    </aside>
  )
}
