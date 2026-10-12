import { useMemo, useState } from 'react'
import { families } from '../data/kependudukan'
export default function FamilyTable({ onDetail }) {
  const [q, setQ] = useState('')
  const [blok, setBlok] = useState('')
  const rows = useMemo(() => {
    const n = q.trim().toLowerCase()
    return families.filter((f) => {
      const hit = !n || `${f.noKK} ${f.nik} ${f.kepala} ${f.blok}`.toLowerCase().includes(n)
      return hit && (!blok || f.blok.startsWith(blok))
    })
  }, [q, blok])
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">Direktori Data Kartu Keluarga RT 04</h2>
          <p className="text-xs text-on-surface-variant">Basis data master kependudukan, sinkron KTP &amp; KK digital.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-2 rounded-lg bg-surface-container-high text-[13px] font-semibold">Sinkron Data</button>
          <button className="px-3 py-2 rounded-lg bg-primary-container text-on-primary-container text-[13px] font-semibold">Cetak Indeks KK</button>
        </div>
      </div>
      <div className="grid md:grid-cols-12 gap-3 p-4 rounded-xl bg-surface-container-low">
        <div className="md:col-span-8 relative">
          <span className="material-symbols-outlined absolute left-3 top-2 text-on-surface-variant">search</span>
          <input value={q} onChange={(e) => setQ(e.target.value)} className="w-full pl-10 pr-3 py-2 bg-white rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Cari No. KK, NIK, Nama, Blok..." />
        </div>
        <select value={blok} onChange={(e) => setBlok(e.target.value)} className="md:col-span-4 px-3 py-2 bg-white rounded-lg text-sm shadow-sm">
          <option value="">Semua Blok</option>
          <option value="Blok A">Blok A</option>
          <option value="Blok B">Blok B</option>
          <option value="Blok C">Blok C</option>
          <option value="Blok D">Blok D</option>
        </select>
      </div>
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full text-left min-w-[900px]">
          <thead>
            <tr className="bg-surface-container-low text-[11px] uppercase text-on-surface-variant">
              <th className="py-3 px-4">No. KK</th>
              <th className="py-3 px-4">Kepala Keluarga</th>
              <th className="py-3 px-4">Blok</th>
              <th className="py-3 px-4 text-center">Jiwa</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((f) => (
              <tr key={f.noKK} className="hover:bg-surface-container-low">
                <td className="py-3 px-4 text-[13px] font-bold">{f.noKK}</td>
                <td className="py-3 px-4"><div className="font-semibold text-sm">{f.kepala}</div><div className="text-xs text-on-surface-variant">NIK {f.nik} • {f.kerja}</div></td>
                <td className="py-3 px-4 text-sm font-semibold text-primary">{f.blok}</td>
                <td className="py-3 px-4 text-center text-[13px] font-bold">{f.jiwa} Jiwa</td>
                <td className="py-3 px-4 text-[11px] font-bold">{f.status}</td>
                <td className="py-3 px-4 text-right"><button onClick={() => onDetail(f)} className="p-1.5 text-primary hover:bg-surface-container-highest rounded-md"><span className="material-symbols-outlined">visibility</span></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-xs text-on-surface-variant">Menampilkan <b>{rows.length}</b> dari <b>142</b> KK terdaftar</div>
    </div>
  )
}
