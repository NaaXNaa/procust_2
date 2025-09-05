import { ChevronLeft } from "lucide-react"

export default function CertificateVerificationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-slate-800 text-white px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h1 className="text-lg sm:text-xl font-medium">Detail Certificate</h1>
          <nav className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-300 overflow-x-auto">
            <span className="whitespace-nowrap">Information</span>
            <span>-</span>
            <span className="whitespace-nowrap">Verification Certificate</span>
            <span>-</span>
            <span className="text-white whitespace-nowrap">LSPRO</span>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Verification Certificate</h2>
          <p className="text-gray-600 text-sm sm:text-base">Lembaga Sertifikasi Produk (LSPRO)</p>
        </div>

        {/* Certificate Details */}
        <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-8 space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="font-medium text-gray-700 mb-1 sm:mb-0 sm:w-48 sm:flex-shrink-0">Factory Name</div>
              <div className="text-gray-700 sm:flex-1">: CV NUGRAHA BETON INDONESIA</div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="font-medium text-gray-700 mb-1 sm:mb-0 sm:w-48 sm:flex-shrink-0">Factory Address</div>
              <div className="text-gray-700 sm:flex-1 text-sm sm:text-base leading-relaxed">
                : JALAN RAYA MENGANTI SIDOWUNGU NOMOR 30, Desa/Kelurahan Sidowungu, Kec. Menganti, Kab. Gresik, Provinsi
                Jawa Timur
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="font-medium text-gray-700 mb-1 sm:mb-0 sm:w-48 sm:flex-shrink-0">Company Name</div>
              <div className="text-gray-700 sm:flex-1">: CV NUGRAHA BETON INDONESIA</div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="font-medium text-gray-700 mb-1 sm:mb-0 sm:w-48 sm:flex-shrink-0">Company Address</div>
              <div className="text-gray-700 sm:flex-1 text-sm sm:text-base leading-relaxed">
                : JALAN RAYA MENGANTI SIDOWUNGU NOMOR 30, Desa/Kelurahan Sidowungu, Kec. Menganti, Kab. Gresik, Provinsi
                Jawa Timur
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="font-medium text-gray-700 mb-1 sm:mb-0 sm:w-48 sm:flex-shrink-0">PIC</div>
              <div className="text-gray-700 sm:flex-1">: ANDI NUGRAHA PUTRA </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="font-medium text-gray-700 mb-1 sm:mb-0 sm:w-48 sm:flex-shrink-0">SNI Number</div>
              <div className="text-gray-700 sm:flex-1">: SNI 03-0691-1996 </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="font-medium text-gray-700 mb-1 sm:mb-0 sm:w-48 sm:flex-shrink-0">Brand</div>
              <div className="text-gray-700 sm:flex-1">: NUGRAHA BETON </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="font-medium text-gray-700 mb-1 sm:mb-0 sm:w-48 sm:flex-shrink-0">Type</div>
              <div className="text-gray-700 sm:flex-1">: paving block</div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="font-medium text-gray-700 mb-1 sm:mb-0 sm:w-48 sm:flex-shrink-0">Result Of Test</div>
              <div className="text-gray-700 sm:flex-1 text-sm sm:text-base leading-relaxed">
                : CV Nugraha Beton Indonesia, 11 May 2024 (Box Culvert 60x60x120)
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="font-medium text-gray-700 mb-1 sm:mb-0 sm:w-48 sm:flex-shrink-0">Status</div>
              <div className="text-gray-700 sm:flex-1">: Valid</div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="font-medium text-gray-700 mb-1 sm:mb-0 sm:w-48 sm:flex-shrink-0">Surveillance 1</div>
              <div className="text-gray-700 sm:flex-1">: 22 May 2025</div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="font-medium text-gray-700 mb-1 sm:mb-0 sm:w-48 sm:flex-shrink-0">Surveillance 2</div>
              <div className="text-gray-700 sm:flex-1">: 22 May 2026</div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="font-medium text-gray-700 mb-1 sm:mb-0 sm:w-48 sm:flex-shrink-0">Surveillance 3</div>
              <div className="text-gray-700 sm:flex-1">: 22 May 2027</div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="font-medium text-gray-700 mb-1 sm:mb-0 sm:w-48 sm:flex-shrink-0">Re-Sertificate</div>
              <div className="text-gray-700 sm:flex-1">: 22 May 2027</div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="font-medium text-gray-700 mb-1 sm:mb-0 sm:w-48 sm:flex-shrink-0">Certificate Date</div>
              <div className="text-gray-700 sm:flex-1">: 22 May 2024</div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="font-medium text-gray-700 mb-1 sm:mb-0 sm:w-48 sm:flex-shrink-0">Expired Date</div>
              <div className="text-gray-700 sm:flex-1">: 21 May 2028</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
