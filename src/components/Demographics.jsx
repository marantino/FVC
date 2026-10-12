import { ageGroups, bloodTypes, professions } from '../data/kependudukan'

export default function Demographics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-5 bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-on-surface">Struktur Rentang Usia</span>
            <span className="text-xs text-on-surface-variant">Sebaran demografis penduduk RT 04 (482 Jiwa)</span>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant">escalator_warning</span>
        </div>
        <div className="flex flex-col gap-4 py-2">
          {ageGroups.map((a) => (
            <div key={a.label} className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-[13px] font-semibold">
                <span className="text-on-surface flex items-center gap-1.5"><span className={`w-2.5 h-2.5 rounded-full ${a.dot}`}></span>{a.label}</span>
                <span className={`text-[13px] font-bold ${a.text ?? 'text-primary'}`}>{a.detail}</span>
              </div>
              <div className="w-full h-3 rounded-full bg-surface-container overflow-hidden">
                <div className={`h-full rounded-full ${a.bar}`} style={{ width: `${a.pct}%` }}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-surface-container-low flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold text-on-surface-variant">
          <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-primary text-base">info</span>Rasio Ketergantungan Penduduk: Rendah (32.8)</span>
          <a className="text-primary hover:underline" href="#">Detail SDK</a>
        </div>
      </div>

      <div className="lg:col-span-3 bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-on-surface">Gender &amp; Darah</span>
              <span className="text-xs text-on-surface-variant">Kesiapsiagaan Donor RT</span>
            </div>
            <span className="material-symbols-outlined text-primary">vital_signs</span>
          </div>
          <div className="p-3 rounded-lg bg-surface-container-low mb-5">
            <div className="flex justify-between text-[11px] font-bold text-on-surface-variant mb-2">
              <span className="text-primary">Laki-Laki (246 / 51%)</span>
              <span className="text-tertiary">Perempuan (236 / 49%)</span>
            </div>
            <div className="h-3.5 w-full rounded-full bg-surface-container flex overflow-hidden">
              <div className="bg-primary h-full" style={{ width: '51%' }}></div>
              <div className="bg-tertiary-fixed-dim h-full" style={{ width: '49%' }}></div>
            </div>
          </div>
          <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider block mb-2">Populasi Golongan Darah</span>
          <div className="grid grid-cols-2 gap-2">
            {bloodTypes.map((b) => (
              <div key={b.type} className="p-2.5 rounded-lg bg-surface-container flex items-center justify-between">
                <span className="text-xl font-bold text-primary">{b.type}</span>
                <div className="text-right">
                  <span className="text-[13px] font-bold block">{b.count}</span>
                  <span className="text-[11px] text-on-surface-variant">{b.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 pt-3 flex items-center justify-between text-[11px] font-bold text-on-surface-variant">
          <span>Siap Donor Darurat:</span>
          <span className="text-primary">42 Warga Terdata</span>
        </div>
      </div>

      <div className="lg:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-on-surface">Klasifikasi Profesi</span>
              <span className="text-xs text-on-surface-variant">Sebaran mata pencaharian warga produktif</span>
            </div>
            <span className="material-symbols-outlined text-primary">work</span>
          </div>
          <div className="flex flex-col gap-2">
            {professions.map((p) => (
              <div key={p.label} className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-low transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className={`w-3 h-3 rounded-full ${p.dot}`}></div>
                  <span className="text-sm font-semibold">{p.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-bold">{p.count}</span>
                  <span className="text-[11px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">{p.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 pt-3 flex items-center justify-between text-[11px] font-bold text-on-surface-variant">
          <span>Potensi Wirausaha RT:</span>
          <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container">12 UMKM Aktif</span>
        </div>
      </div>
    </div>
  )
}
