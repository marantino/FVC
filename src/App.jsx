import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import AdministrasiPersuratan from './pages/AdministrasiPersuratan'
import Banner from './components/Banner'
import KpiGrid from './components/KpiGrid'
import Demographics from './components/Demographics'
import FamilyTable from './components/FamilyTable'
import Drawer from './components/Drawer'

export default function App() {
  const getRoute = () => {
    const h = window.location.hash.toLowerCase()
    if (h.includes('administrasi')) return 'administrasi'
    return 'dashboard'
  }
  const [route, setRoute] = useState(getRoute)
  const [selected, setSelected] = useState(null)
  const [toast, setToast] = useState('')
  const notify = (msg) => { setToast(msg); setTimeout(() => setToast(''), 2600) }
  useEffect(() => {
    const onHash = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  const navigate = (key) => {
    if (key === 'administrasi') window.location.hash = '#/Administrasi-Persuratan'
    else if (key === 'dashboard') window.location.hash = '#/'
    else notify('Halaman tersebut belum tersedia pada tahap ini.')
    setRoute(key === 'administrasi' ? 'administrasi' : key === 'dashboard' ? 'dashboard' : route)
  }
  return (
    <div className="bg-surface min-h-screen text-on-surface">
      <Sidebar active={route} onNavigate={navigate} />
      <div className="pl-0 lg:pl-72">
        <Header />
        <main className="pt-16">
          {route === 'administrasi' ? (
            <AdministrasiPersuratan notify={notify} />
          ) : (
            <div className="px-4 lg:px-8 py-6 flex flex-col gap-6">
            <Banner onAdd={() => notify('Form Entri KK Baru siap diisi (integrasi scan OCR KTP).')} />
            <KpiGrid />
            <Demographics />
            <FamilyTable onDetail={setSelected} />
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[['security', 'Pos Keamanan & Ronda', 'Regu 2 bertugas malam ini (Koord: Bpk. Tono)', 'bg-primary text-on-primary'], ['health_and_safety', 'Kader Posyandu Balita & Lansia', 'Jadwal penimbangan: Sabtu, 17 Mei 2025', 'bg-secondary text-on-secondary'], ['clean_hands', 'Jadwal Pengangkutan Sampah', 'Senin, Rabu, Sabtu pagi (07.00 WIB)', 'bg-tertiary text-on-tertiary']].map((s) => (
                <div key={s[1]} className="p-4 rounded-xl bg-surface-container flex gap-3 items-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${s[3]}`}><span className="material-symbols-outlined">{s[0]}</span></div>
                  <div><div className="text-sm font-bold">{s[1]}</div><div className="text-xs text-on-surface-variant">{s[2]}</div></div>
                </div>
              ))}
            </div>
            </div>
          )}
        </main>
      </div>
      <Drawer data={selected} onClose={() => setSelected(null)} />
      {toast && <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] px-4 py-2.5 rounded-lg bg-on-surface text-surface text-sm font-semibold shadow-lg">{toast}</div>}
    </div>
  )
}
