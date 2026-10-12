export default function WalkinModal({ open, onClose, notify }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-surface-container-lowest max-w-xl w-full rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-5 bg-surface-container-low flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center"><span className="material-symbols-outlined text-lg">assignment_add</span></div>
            <div>
              <h3 className="text-base font-semibold">Buat Surat Pengantar (Walk-in Pos RT)</h3>
              <span className="text-xs text-on-surface-variant">Layanan tatap muka warga langsung di kediaman RT</span>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant"><span className="material-symbols-outlined">close</span></button>
        </div>
        <div className="p-6 overflow-y-auto space-y-4">
          <div>
            <label className="block text-[13px] font-semibold mb-1">Cari Nama Warga / NIK Terdaftar</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant">badge</span>
              <input className="w-full bg-surface-container-low pl-10 pr-4 py-2.5 rounded-lg text-sm focus:outline-none" placeholder="Ketik NIK 3275... atau nama kepala keluarga..." type="text" />
            </div>
            <span className="text-[11px] font-bold text-on-surface-variant mt-1 block">Data tersinkronisasi dengan Master Buku Induk Kependudukan RT 04.</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-semibold mb-1">Jenis Surat Pengantar</label>
              <select className="w-full bg-surface-container-low px-3 py-2.5 rounded-lg text-sm focus:outline-none">
                <option>Surat Pengantar SKCK</option>
                <option>Surat Pengantar KTP / KK</option>
                <option>Surat Keterangan Domisili</option>
                <option>Surat Pengantar Nikah (N1-N4)</option>
                <option>Surat Keterangan Usaha (SKU)</option>
                <option>Surat Keterangan Kematian</option>
              </select>
            </div>
            <div>
              <label className="block text-[13px] font-semibold mb-1">Tanggal Berlaku</label>
              <input className="w-full bg-surface-container-low px-3 py-2.5 rounded-lg text-sm focus:outline-none" type="date" defaultValue="2025-02-17" />
            </div>
          </div>
          <div>
            <label className="block text-[13px] font-semibold mb-1">Rincian Keperluan / Catatan Tambahan</label>
            <textarea className="w-full bg-surface-container-low p-3 rounded-lg text-sm focus:outline-none" placeholder="Contoh: Pengantar pembuatan SKCK untuk syarat rekrutmen pegawai BUMN..." rows="3"></textarea>
          </div>
          <div className="p-3 bg-surface-container-low rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">draw</span>
              <span className="text-sm font-semibold">Langsung terbitkan TTE Ketua RT?</span>
            </div>
            <input defaultChecked className="w-5 h-5 accent-primary rounded" type="checkbox" />
          </div>
        </div>
        <div className="p-4 bg-surface-container-low flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded-lg bg-surface-container text-sm font-semibold">Batal</button>
          <button onClick={() => { onClose(); notify('Surat Walk-in berhasil dibuat & nomor registrasi diterbitkan!') }} className="px-5 py-2 rounded-lg bg-primary-container text-on-primary text-sm font-semibold shadow-sm">Simpan &amp; Terbitkan Surat</button>
        </div>
      </div>
    </div>
  )
}
