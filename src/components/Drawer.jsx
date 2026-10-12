import { familyMembers } from '../data/kependudukan'
export default function Drawer({ data, onClose }) {
  if (!data) return null
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-[#0F172A]/45 backdrop-blur-sm" onClick={onClose}></div>
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-2xl bg-white shadow-2xl flex flex-col">
        <div className="p-6 bg-surface-container-low flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center"><span className="material-symbols-outlined">folder_shared</span></div>
            <div><div className="text-[11px] uppercase text-on-surface-variant font-bold">Kartu Keluarga Digital Terverifikasi</div><div className="font-bold">No. KK: {data.noKK}</div></div>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center"><span className="material-symbols-outlined">close</span></button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
          <div className="p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row justify-between gap-3">
            <div><div className="text-xl font-bold">{data.kepala}</div><div className="text-xs text-on-surface-variant">Kepala Keluarga • {data.blok}</div><div className="text-[13px] text-primary font-semibold">NIK: {data.nik}</div></div>
            <div className="text-[11px] font-bold text-on-surface-variant">Domisili sejak: Agustus 2018</div>
          </div>
          <div className="font-bold">Daftar Anggota Keluarga ({data.jiwa} Jiwa)</div>
          <div className="flex flex-col gap-2">
            {familyMembers.slice(0, data.jiwa).map((m, i) => (
              <div key={i} className="p-3 rounded-lg bg-surface-container-low flex justify-between items-center">
                <div className="flex gap-3 items-center"><span className="w-7 h-7 rounded-full bg-primary text-on-primary text-[13px] font-bold flex items-center justify-center">{i + 1}</span><div><div className="text-sm font-semibold">{m.nama} <span className="text-[11px] bg-surface-container-high px-1.5 rounded ml-1">{m.relasi}</span></div><div className="text-xs text-on-surface-variant">NIK: {m.nik}</div></div></div>
                <span className="text-xs font-semibold">{m.kerja}</span>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-surface-container-low text-[13px] font-semibold text-primary">Iuran Bulanan RT: Lunas (Mei 2025) • Siskamling: Regu Blok B (Kamis)</div>
        </div>
        <div className="p-5 bg-surface-container-low flex justify-between">
          <button onClick={onClose} className="px-4 py-2 rounded-lg bg-surface-container text-[13px] font-semibold">Tutup Pratinjau</button>
          <button className="px-4 py-2 rounded-lg bg-primary text-on-primary text-[13px] font-semibold">Perbarui Data KK</button>
        </div>
      </div>
    </div>
  )
}
