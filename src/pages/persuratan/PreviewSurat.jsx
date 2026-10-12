import { docTitleMap } from '../../data/persuratan'

export default function PreviewSurat(props) {
  const { data } = props
  const { tteDone, tteBusy, onTte, notify } = props
  const title = docTitleMap[data.type] || 'SURAT PENGANTAR KETUA RT'
  return (
    <section className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-20">
      <div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col">
        <div className="px-5 py-3.5 bg-surface-container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl">preview</span>
            <div>
              <span className="text-sm font-semibold">Pratinjau Surat Resmi</span>
              <span className="block text-[11px] font-bold text-on-surface-variant">Kop Standar Kelurahan v2.1</span>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed text-[13px] font-bold">LIVE DRAFT</span>
        </div>
        <div className="p-6 bg-surface-bright flex flex-col gap-4 text-xs">
          <div className="pb-3 border-b-2 border-on-surface flex items-center gap-3">
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-surface-container-low text-primary">
              <svg className="w-10 h-10 fill-none" stroke="currentColor" viewBox="0 0 40 40">
                <path d="M20 4L4 16H9V36H31V16H36L20 4Z" fill="#007979" fillOpacity="0.12" stroke="#007979" strokeWidth="2"></path>
                <circle cx="20" cy="24" fill="#24B1B1" fillOpacity="0.3" r="5" stroke="#007979" strokeWidth="1.5"></circle>
                <path d="M12 36V22C12 22 17 20 20 20C23 20 28 22 28 22V36" stroke="#007979" strokeLinecap="round" strokeWidth="2"></path>
              </svg>
            </div>
            <div className="flex flex-col text-center flex-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">RUKUN TETANGGA 04 / RUKUN WARGA 08</span>
              <span className="text-base font-extrabold uppercase leading-tight">KELURAHAN HARAPAN JAYA</span>
              <span className="text-[11px] font-bold text-on-surface-variant">Kecamatan Bekasi Utara • Kota Bekasi • Jawa Barat 17124</span>
            </div>
          </div>
          <div className="text-center my-1">
            <span className="text-base font-bold underline uppercase">{title}</span>
            <div className="text-[13px] text-on-surface-variant">Nomor: {data.regNo}</div>
          </div>
          <p className="text-on-surface-variant leading-relaxed">Yang bertanda tangan di bawah ini Ketua RT 04 RW 08 Kelurahan Harapan Jaya, dengan ini menerangkan bahwa:</p>
          <div className="bg-surface-container-low rounded-lg p-3 space-y-2">
            <div className="grid grid-cols-3 gap-1"><span className="text-on-surface-variant text-[13px] font-semibold">Nama Lengkap</span><span className="col-span-2 text-sm font-semibold">{data.name}</span></div>
            <div className="grid grid-cols-3 gap-1"><span className="text-on-surface-variant text-[13px] font-semibold">NIK</span><span className="col-span-2 text-[13px] font-bold">{data.nik}</span></div>
            <div className="grid grid-cols-3 gap-1"><span className="text-on-surface-variant text-[13px] font-semibold">Tempat / Tgl Lahir</span><span className="col-span-2">{data.birth}</span></div>
            <div className="grid grid-cols-3 gap-1"><span className="text-on-surface-variant text-[13px] font-semibold">Agama / Pekerjaan</span><span className="col-span-2">{data.religionJob}</span></div>
            <div className="grid grid-cols-3 gap-1"><span className="text-on-surface-variant text-[13px] font-semibold">Alamat Domisili</span><span className="col-span-2">Jl. Bougenville Raya {data.block}, RT 04 / RW 08</span></div>
            <div className="grid grid-cols-3 gap-1"><span className="text-on-surface-variant text-[13px] font-semibold">Keperluan</span><span className="col-span-2 font-semibold text-primary">{data.purposeFull}</span></div>
          </div>
          <p className="text-on-surface-variant leading-relaxed">Demikian surat pengantar ini dibuat dengan sebenarnya agar dapat dipergunakan sebagaimana mestinya.</p>
          <div className="pt-2 flex justify-between items-end">
            <div className="p-1.5 rounded-lg bg-surface-container-lowest shadow-sm flex items-center gap-2">
              <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 100 100">
                <rect fill="#FFFFFF" height="100" width="100"></rect>
                <rect fill="#005E5E" height="24" width="24" x="10" y="10"></rect>
                <rect fill="#FFFFFF" height="14" width="14" x="15" y="15"></rect>
                <rect fill="#005E5E" height="6" width="6" x="19" y="19"></rect>
                <rect fill="#005E5E" height="24" width="24" x="66" y="10"></rect>
                <rect fill="#FFFFFF" height="14" width="14" x="71" y="15"></rect>
                <rect fill="#005E5E" height="6" width="6" x="75" y="19"></rect>
                <rect fill="#005E5E" height="24" width="24" x="10" y="66"></rect>
                <rect fill="#FFFFFF" height="14" width="14" x="15" y="71"></rect>
                <rect fill="#005E5E" height="6" width="6" x="19" y="75"></rect>
                <rect fill="#005E5E" height="6" width="6" x="42" y="10"></rect>
                <rect fill="#005E5E" height="6" width="6" x="52" y="18"></rect>
                <rect fill="#005E5E" height="6" width="16" x="42" y="30"></rect>
                <rect fill="#005E5E" height="8" width="8" x="66" y="44"></rect>
                <rect fill="#005E5E" height="14" width="6" x="42" y="52"></rect>
                <rect fill="#005E5E" height="10" width="10" x="52" y="66"></rect>
                <rect fill="#005E5E" height="6" width="16" x="70" y="68"></rect>
                <rect fill="#005E5E" height="12" width="8" x="78" y="78"></rect>
              </svg>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-primary">Validasi Digital</span>
                <span className="text-[10px] text-on-surface-variant">SHA256: 8f9b...a17c</span>
                <span className="text-[10px] text-on-surface-variant">Scan via Ponsel</span>
              </div>
            </div>
            <div className="flex flex-col items-center min-w-[140px]">
              <span>Bekasi, 17 Februari 2025</span>
              <span className="text-[13px] font-semibold text-on-surface-variant">Ketua RT 04 / RW 08</span>
              <div className="relative w-28 h-16 flex items-center justify-center my-1">
                <div className="absolute inset-0 rounded-full border-2 border-primary/40 flex items-center justify-center rotate-[-12deg] bg-primary-fixed-dim/20 pointer-events-none">
                  <div className="text-center font-black text-primary uppercase text-[8px] leading-none px-1">PENGURUS RT 04 / RW 08<br /><span className="text-[7px] text-tertiary">★ TERVERIFIKASI ★</span><br />KEL. HARAPAN JAYA</div>
                </div>
                <div className="z-10 flex flex-col items-center bg-surface-container-lowest/90 px-2 py-1 rounded shadow-sm">
                  <span className="material-symbols-outlined text-primary text-base">verified</span>
                  <span className="text-primary font-bold text-[10px]">TTE AKTIF</span>
                </div>
              </div>
              <span className="text-sm font-bold mt-1">H. Bambang Suryono, S.T.</span>
              <span className="text-on-surface-variant text-[11px]">NIP-RT: 3275.04.08.001</span>
            </div>
          </div>
        </div>
        <div className="p-4 bg-surface-container-low flex flex-col gap-2.5">
          <button onClick={onTte} disabled={tteBusy} className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold shadow-md transition-all ${tteDone ? 'bg-surface-container text-on-surface' : 'bg-primary-container text-on-primary hover:bg-primary'}`}>
            {tteBusy ? (<><span className="material-symbols-outlined text-xl animate-spin">refresh</span><span>Memverifikasi Kunci Kriptografi RT...</span></>) : tteDone ? (<><span className="material-symbols-outlined text-xl text-primary">verified</span><span>TTE Berhasil Terpasang (Telah Sah)</span></>) : (<><span className="material-symbols-outlined text-xl text-primary-fixed">edit_document</span><span>Bubuhi Tanda Tangan Digital (TTE)</span></>)}
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => notify(`Tautan PDF dikirim ke WhatsApp ${data.name}.`)} className="inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-surface-container text-[13px] font-semibold hover:bg-surface-container-high"><span className="material-symbols-outlined text-lg text-primary">send</span><span>Kirim WhatsApp</span></button>
            <button onClick={() => window.print()} className="inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-surface-container text-[13px] font-semibold hover:bg-surface-container-high"><span className="material-symbols-outlined text-lg">print</span><span>Cetak PDF Resmi</span></button>
          </div>
          <button onClick={() => notify(`Catatan revisi dikirim ke pemohon ${data.name}.`)} className="inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-error hover:bg-error-container/40 text-[13px] font-semibold"><span className="material-symbols-outlined text-base">cancel</span><span>Tolak / Kembalikan dengan Catatan Koreksi</span></button>
        </div>
      </div>
    </section>
  )
}
