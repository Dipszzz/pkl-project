import React, { useState, useEffect } from 'react';
import LogoFooter from "../img/LogoFooter.png";

const Footer = () => {

  const [tahun, setTahun] = useState(new Date().getFullYear());

  useEffect (() => {
    const interval = setInterval(() => {
      const currentTahun = new Date().getFullYear();
      setYear(currentTahun);
    }, 1000* 60 * 60);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <footer>
        <div className="bg-blue-950 text-blue-300 py-10 px-5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 lg:grid-cols-4 gap-8 px-1">
            <div>
              <h2 className="text-xl font-semibold mb-3">Tentang LegalKita.Id</h2>
              <p className="text-sm leading-relaxed">
                LegalKita.Id adalah Konsultan Hukum tepercaya yang berkomitmen
                memberikan solusi hukum yang Jelas, Cepat, dan Tepat. Kami
                membantu Individu, UMKM, dan Perusahaan dalam menyelesaikan
                permasalahan hukum secara Profesional dan Berintegritas.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Layanan Kami</h2>
              <ul className="text-sm space-y-2">
                <li>✔️ Konsultasi Hukum Online & Offline</li>
                <li>✔️ Mengurus Perizinan (Halal, BPOM, SNI, Dll)</li>
                <li>✔️ Pendirian Legalitas Usaha (PT, CV, Dll)</li>
                <li>✔️ Perlindungan Kekayaan Intelektual</li>
                <li>✔️ Pendampingan Hukum</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Kontak</h2>
              <p className="text-sm mb-2">📍 Ruko Virginia Arcade, Jl. Sunburst CBD, Lengkong Gudang, Serpong, Tangerang Selatan, Banten, 15311.  </p>
              <p className="text-sm mb-2">📞 +62 821-1403-4646</p>
              <p className="text-sm mb-2">✉️ samawakonsultanindonesia@gmail.com</p>
              <p className="text-sm">🕐 Senin s/d Sabtu, 09.00 - 17.00 WIB</p>
            </div>
            
            <div className="flex justify-center items-start">
              <a href="#" className="img-btn-navbar border-1 bg-amber-50 rounded-4xl">
                <img
                  className="size-[33vh] py-auto object-contain"
                  src={LogoFooter}
                  alt="LegalKita Logo"
                />
              </a>
            </div>
          </div>

          <div className="text-center mt-10 text-xs text-gray-400">
            <p>&copy; {tahun} LegalKita.Id . Semua hak dilindungi
            undang-undang.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
