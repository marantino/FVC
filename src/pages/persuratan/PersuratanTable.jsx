import { suratCategories, persuratanRequests, statusBadge } from '../../data/persuratan'

export default function PersuratanTable(props) {
  const { tab, query, setQuery, category, setCategory, selectedId } = props
  const { setSelectedId, quickTte, onQuickTte, onResetTte, notify } = props
  const q = query.trim().toLowerCase()
  const rows = persuratanRequests.filter((r) => {
    let m = true
    if (tab === 'pending') m = r.status === 'pending'
    else if (tab === 'processing') m = r.status === 'approved' || r.status === 'revision'
    else if (tab === 'completed') m = r.status === 'ready' || r.status === 'approved'
    const catOk = category === 'all' ? true : (tab === 'pending' ? r.type === category : true)
    const hay = `${r.name} ${r.nik} ${r.regNo} ${r.block}`.toLowerCase()
    return m && catOk && (!q || hay.includes(q))
  })
  return (
    <section className="lg:col-span-7 xl:col-span-8 flex flex-col gap-4">
      <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-lg">search</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full bg-surface-container-low pl-9 pr-4 py-2 rounded-lg text-sm focus:outline-none" placeholder="Cari nama warga, NIK, nomor surat, atau blok..." type="text" />
        </div>
        <div className="flex items-center gap-2">
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-surface-container-low text-sm font-semibold px-3 py-2 rounded-lg focus:outline-none">
            {suratCategories.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
          </select>
          <button onClick={() => notify('Urutan berkas: terbaru ke terlama.')} className="px-3 py-2 rounded-lg bg-surface-container-low text-[13px] font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-lg">filter_list</span><span>Urutan</span>
          </button>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[860px]">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">
                <th className="py-3 px-4">No. Registrasi</th>
                <th className="py-3 px-4">Tgl Masuk</th>
                <th className="py-3 px-4">Pemohon &amp; Alamat</th>
                <th className="py-3 px-4">Jenis &amp; Keperluan</th>
                <th className="py-3 px-4">Status Verifikasi</th>
                <th className="py-3 px-4 text-right">Aksi Tindakan</th>
              </tr>
            </thead>
            <tbody className="text-sm text-on-surface">
              {rows.map((r) => {
                const b = statusBadge(r.status)
                const isSel = r.id === selectedId
                return (
                  <tr key={r.id} onClick={() => { setSelectedId(r.id); onResetTte() }} className={`${isSel ? 'bg-surface-container/60' : ''} hover:bg-surface-container-low cursor-pointer`}>
                    <td className="py-3.5 px-4">
                      <span className={`text-[13px] font-bold ${isSel ? 'text-primary' : ''}`}>{r.regNo}</span>
                      <span className="block text-[11px] font-bold text-on-surface-variant">{r.regLabel}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="text-xs font-semibold">{r.dateLabel}</span>
                      <span className="block text-[13px] text-on-surface-variant">{r.time}</span>
                    </td>
                    <td className="py-3.5 px-4 min-w-[180px]">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${r.avatarCls}`}>{r.initials}</div>
                        <div>
                          <div className="font-semibold leading-tight">{r.name}</div>
                          <div className="text-[13px] text-on-surface-variant">{r.nik}</div>
                          <span className="inline-block mt-0.5 px-1.5 py-0.5 rounded bg-surface-container-high text-[11px] font-bold">{r.blockShort}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 max-w-[220px]">
                      <span className={`px-2 py-0.5 rounded bg-surface-container-high text-[11px] font-bold ${r.typeCls}`}>{r.typeLabel}</span>
                      <p className="text-xs text-on-surface-variant truncate mt-0.5">{r.purposeShort}</p>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${b.cls}`}>
                        {b.dot ? <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span> : <span className="material-symbols-outlined text-xs">{b.icon}</span>}
                        {b.label}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      {r.status === 'pending' && (
                        <div className="flex items-center justify-end gap-1">
                          <button onClick={(e) => { e.stopPropagation(); setSelectedId(r.id) }} className="p-1.5 rounded-lg text-primary hover:bg-primary-container"><span className="material-symbols-outlined text-lg">visibility</span></button>
                          <button onClick={(e) => onQuickTte(e, r)} className={`px-2.5 py-1 rounded-lg text-[13px] font-semibold ${quickTte[r.id] ? 'bg-secondary-container' : 'bg-primary-container text-on-primary'}`}>{quickTte[r.id] ? 'Sah ✓' : 'TTE'}</button>
                        </div>
                      )}
                      {r.status === 'approved' && (
                        <div className="flex items-center justify-end gap-1">
                          <button onClick={(e) => { e.stopPropagation(); setSelectedId(r.id) }} className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container"><span className="material-symbols-outlined text-lg">visibility</span></button>
                          <button onClick={(e) => { e.stopPropagation(); notify(`Tautan PDF dikirim ke WhatsApp ${r.name}.`) }} className="px-2.5 py-1 rounded-lg bg-surface-container text-[13px] font-semibold">Kirim WA</button>
                        </div>
                      )}
                      {r.status === 'ready' && (
                        <div className="flex items-center justify-end gap-1">
                          <button onClick={(e) => { e.stopPropagation(); notify(`Mengunduh PDF ${r.regNo}...`) }} className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container"><span className="material-symbols-outlined text-lg">download</span></button>
                        </div>
                      )}
                      {r.status === 'revision' && (
                        <div className="flex items-center justify-end gap-1">
                          <button onClick={(e) => { e.stopPropagation(); notify(`Catatan revisi dibuka untuk ${r.name}.`) }} className="p-1.5 rounded-lg text-error hover:bg-error-container"><span className="material-symbols-outlined text-lg">edit_note</span></button>
                        </div>
                      )}
                    </td>
                  </tr>
                )
              })}
              {rows.length === 0 && <tr><td colSpan={6} className="py-8 text-center text-sm text-on-surface-variant">Tidak ada berkas yang cocok.</td></tr>}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 bg-surface-container-low flex items-center justify-between text-xs text-on-surface-variant">
          <span>Menampilkan <strong>{rows.length}</strong> dari <strong>31</strong> riwayat berkas aktif</span>
          <div className="flex items-center gap-1">
            <button disabled className="px-2.5 py-1 rounded bg-surface-container disabled:opacity-50">‹</button>
            <button className="px-2.5 py-1 rounded bg-primary-container text-on-primary font-bold">1</button>
            <button onClick={() => notify('Halaman 2 arsip dalam persiapan.')} className="px-2.5 py-1 rounded bg-surface-container">2</button>
            <button onClick={() => notify('Halaman 3 arsip dalam persiapan.')} className="px-2.5 py-1 rounded bg-surface-container">3</button>
            <button className="px-2.5 py-1 rounded bg-surface-container">›</button>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-low rounded-xl p-4 flex items-center gap-3">
        <div className="p-2 rounded-lg bg-surface-container-highest text-primary"><span className="material-symbols-outlined text-xl">gavel</span></div>
        <div className="flex-1">
          <span className="text-sm font-semibold">Landasan Legalitas Persuratan RT</span>
          <p className="text-xs text-on-surface-variant">TTE SIM-RT terenkripsi SHA-256 dan diakui Kelurahan Harapan Jaya sesuai Perda No. 04/2021.</p>
        </div>
      </div>
    </section>
  )
}
