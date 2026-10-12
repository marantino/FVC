import { kpiCards } from '../data/kependudukan'

export default function KpiGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
      {kpiCards.map((k) => (
        <div key={k.label} className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">{k.label}</span>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${k.alert ? 'bg-error-container text-on-error-container' : k.label.includes('Tetap') || k.label.includes('Kas') ? 'bg-secondary-container text-on-secondary-container' : k.label.includes('Kontrak') ? 'bg-tertiary-fixed text-on-tertiary-fixed' : 'bg-primary/10 text-primary'}`}>
              <span className="material-symbols-outlined text-lg">{k.icon}</span>
            </div>
          </div>
          <div className="mt-4">
            <div className={`${k.money ? 'text-base font-bold' : 'text-[32px] leading-10 font-bold'} ${k.alert ? 'text-error' : 'text-on-surface'}`}>
              {k.value} {!k.money && <span className="text-sm font-normal text-on-surface-variant">{k.unit}</span>}
            </div>
            <div className={`flex items-center gap-1.5 mt-1 text-[11px] font-bold ${k.tone}`}>
              {k.badge
                ? (<><span className={`px-1.5 py-0.2 rounded ${k.label.includes('Kontrak') ? 'bg-tertiary-fixed/60' : 'bg-surface-container-high'}`}>{k.badge}</span><span className="font-normal text-on-surface-variant">{k.note}</span></>)
                : (<><span className="material-symbols-outlined text-sm">{k.trendIcon}</span><span>{k.trend}</span></>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
