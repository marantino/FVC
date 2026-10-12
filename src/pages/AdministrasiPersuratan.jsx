import { useState } from 'react'
import { persuratanKpi, persuratanRequests } from '../data/persuratan'
import PersuratanTabs from './persuratan/PersuratanTabs'
import PersuratanTable from './persuratan/PersuratanTable'
import PreviewSurat from './persuratan/PreviewSurat'
import WalkinModal from './persuratan/WalkinModal'

export default function AdministrasiPersuratan({ notify }) {
  const [tab, setTab] = useState('pending')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('SKCK')
  const [selectedId, setSelectedId] = useState('RT04-2025-028')
  const [walkinOpen, setWalkinOpen] = useState(false)
  const [tteDone, setTteDone] = useState(false)
  const [tteBusy, setTteBusy] = useState(false)
  const [quickTte, setQuickTte] = useState({})
  const selected = persuratanRequests.find((r) => r.id === selectedId) || persuratanRequests[0]
  const handleTte = () => {
    if (tteBusy || tteDone) return
    setTteBusy(true)
    setTimeout(() => { setTteBusy(false); setTteDone(true); notify(`Surat atas nama ${selected.name} berhasil ditandatangani TTE!`) }, 800)
  }
  const handleQuickTte = (e, r) => { e.stopPropagation(); setQuickTte((p) => ({ ...p, [r.id]: true })); notify(`TTE kilat berhasil dibubuhkan untuk ${r.name}.`) }

  return (
    <div className="flex flex-col w-full">
      <div className="px-4 lg:px-8 pt-6 pb-2">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-surface-container-low rounded-xl p-6 shadow-sm">
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center justify-center w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider">Layanan Administrasi Publik Digital</span>
              <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-[13px] font-medium">SLA Verifikasi ≤ 24 Jam</span>
            </div>
            <h1 className="text-[32px] leading-[40px] text-on-surface font-bold tracking-tight">Pusat Pelayanan &amp; Persuratan Mandiri RT 04</h1>
            <p className="text-sm text-on-surface-variant">Verifikasi pengantar kependudukan, penerbitan tanda tangan elektronik (TTE), dan tata kelola arsip digital warga.</p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <button onClick={() => setWalkinOpen(true)} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-colors shadow-sm">
              <span className="material-symbols-outlined text-xl text-primary">person_add</span>
              <span>Buat Pengantar Mandiri (Walk-in)</span>
            </button>
            <button onClick={() => notify('TTE cepat: 3 surat terpilih antre untuk ditandatangani.')} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary-container text-on-primary text-sm font-semibold hover:bg-primary transition-all shadow-md">
              <span className="material-symbols-outlined text-xl text-primary-fixed">draw</span>
              <span>TTE Cepat Terpilih</span>
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {persuratanKpi.map((k) => (
            <div key={k.label} className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">{k.label}</span>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${k.iconWrap}`}>
                  <span className="material-symbols-outlined text-xl">{k.icon}</span>
                </div>
              </div>
              <div className="my-3 flex items-baseline gap-2">
                <span className="text-[40px] leading-[48px] text-on-surface font-extrabold tracking-tight">{k.value}</span>
                {k.unit && <span className="text-base font-semibold text-on-surface-variant">{k.unit}</span>}
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${k.badgeCls}`}>{k.badge}</span>
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant text-xs">
                <span className="material-symbols-outlined text-sm text-primary">{k.footIcon}</span>
                <span>{k.foot}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PersuratanTabs tab={tab} setTab={setTab} notify={notify} />
      <div className="px-4 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <PersuratanTable tab={tab} query={query} setQuery={setQuery} category={category} setCategory={setCategory} selectedId={selectedId} setSelectedId={setSelectedId} quickTte={quickTte} onQuickTte={handleQuickTte} onResetTte={() => setTteDone(false)} notify={notify} />
          <PreviewSurat data={selected} tteDone={tteDone} tteBusy={tteBusy} onTte={handleTte} notify={notify} />
        </div>
      </div>
      <WalkinModal open={walkinOpen} onClose={() => setWalkinOpen(false)} notify={notify} />
    </div>
  )
}
