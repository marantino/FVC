import { persuratanTabs } from '../../data/persuratan'

export default function PersuratanTabs({ tab, setTab, notify }) {
  return (
    <div className="px-4 lg:px-8 pt-2 pb-4">
      <div className="flex items-center justify-between bg-surface-container-low p-1.5 rounded-xl">
        <div className="flex items-center gap-1 overflow-x-auto w-full lg:w-auto">
          {persuratanTabs.map((t) => (
            <button key={t.key} onClick={() => { setTab(t.key); notify(`Menampilkan kategori: ${t.label}`) }} className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap ${tab === t.key ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}`}>
              <span className="material-symbols-outlined text-lg">{t.icon}</span>
              <span>{t.label}</span>
              {t.count && <span className={`px-1.5 py-0.5 rounded-full text-[11px] font-bold ${t.countCls}`}>{t.count}</span>}
            </button>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-2 text-on-surface-variant text-[11px] font-bold pr-2">
          <span className="inline-block w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
          <span>Auto-sync Cloud RT-04 Aktif</span>
        </div>
      </div>
    </div>
  )
}
