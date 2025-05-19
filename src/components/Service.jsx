import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const layananList = [
  {
    title: "PT UMUM (PMDN)",
    price: "Rp. 3.500.000",
    includes: [
      "Akta Pendirian",
      "Gratis Konsultasi",
      "Pengencekan Nama Perusahaan",
      "SK Kemenkumham",
      "Surat K3L OSS",
      "NPWP Perusahaan",
      "Surat Tata Ruang OSS",
      "NIB (Nomor Induk Berusaha)",
      "Akses Akun OSS",
      "Surat SPPL OSS",
      "Pembukaan Rekening Mandiri",
    ],
    waMessage:
      "Hai, saya tertarik mendirikan PT Umum (PMDN). Mohon info lebih lanjut.",
  },
  {
    title: "PT PMA",
    price: "Rp. 5.500.000",
    includes: [
      "Akta Pendirian",
      "Gratis Konsultasi",
      "Pengencekan Nama Perusahaan",
      "SK Kemenkumham",
      "Surat K3L OSS",
      "NPWP Perusahaan",
      "Surat Tata Ruang OSS",
      "NIB (Nomor Induk Berusaha)",
      "Akses Akun OSS",
      "Surat SPPL OSS",
      "Pembukaan Rekening Mandiri",
    ],
    waMessage: "Hai, saya ingin mendirikan PT PMA. Bisa bantu prosesnya?",
  },
  {
    title: "PT PERORANGAN",
    price: "Rp. 500.000",
    includes: [
      "Pesan Nama",
      "SK Kemenkumham",
      "NIB",
      "Akun OSS",
      "Gratis Konsultasi",
    ],
    waMessage: "Halo, saya mau bertanya tentang layanan PT Perorangan.",
  },
  {
    title: "CV",
    price: "Rp. 2.500.000",
    includes: [
      "Akta Pendirian",
      "Gratis Konsultasi",
      "Pengencekan Nama Perusahaan",
      "SK Kemenkumham",
      "Surat K3L OSS",
      "NPWP Perusahaan",
      "Surat Tata Ruang OSS",
      "NIB (Nomor Induk Berusaha)",
      "Akses Akun OSS",
      "Surat SPPL OSS",
      "Pembukaan Rekening Mandiri",
    ],
    waMessage: "Saya ingin mendirikan CV. Bagaimana prosedurnya?",
  },
  {
    title: "YAYASAN",
    price: "Rp. 4.500.000",
    includes: [
      "Gratis Konsultasi",
      "Pengencekan Nama Perusahaan",
      "SK Kemenkumham",
      "Surat K3L OSS",
      "NPWP Yayasan",
      "NIB (Nomor Induk Berusaha)",
      "Akses Akun OSS",
      "Surat SPPL OSS",
      "Pembukaan Rekening Mandiri",
    ],
    waMessage: "Saya berminat mendirikan Yayasan. Mohon penjelasannya.",
  },
  {
    title: "KOPERASI",
    price: "Rp. 5.500.000",
    includes: [
      "Gratis Konsultasi",
      "Pengecekan Nama Perusahaan",
      "NIB (Nomor Induk Berusaha)",
      "NPWP",
      "SK Kemenkumham",
      "SIUP",
      "Pembukaan Rekening Mandiri",
    ],
    waMessage: "Saya ingin mendirikan Koperasi. Bisa dijelaskan prosesnya?",
  },
  {
    title: "NIB YAYASAN",
    price: "Rp. 1.000.000",
    includes: ["NIB (Nomor Induk Berusaha)"],
    waMessage: "Saya membutuhkan pembuatan NIB untuk Yayasan.",
  },
  {
    title: "NIB PERORANGAN",
    price: "Rp. 500.000",
    includes: ["NIB (Nomor Induk Berusaha)"],
    waMessage: "Saya butuh layanan pembuatan NIB Perorangan.",
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <section className="Layanan">
        <div className="bg-gray-300 py-12">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-blue-950 mb-6">
              Layanan Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
              {[
                {
                  title: "Pendirian PT",
                  desc: "Kami membantu Anda mendirikan Perseroan Terbatas (PT) sesuai dengan peraturan yang berlaku",
                  icon: "https://cdn-icons-png.flaticon.com/128/2504/2504717.png",
                },
                {
                  title: "Pendirian CV",
                  desc: "Layanan pendirian Commanditaire Vennootschap (CV) yang Cepat dan Efisien untuk usaha Anda",
                  icon: "https://cdn-icons-png.flaticon.com/128/1834/1834056.png",
                },
                {
                  title: "Perizinan Usaha",
                  desc: "Kami menangani berbagai jenis perizinan usaha untuk memastikan legalitas operasional Anda",
                  icon: "https://cdn-icons-png.flaticon.com/128/8765/8765344.png",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white text-blue-900 hover:bg-blue-100 rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
                >
                  <img src={item.icon} alt={item.title} className="size-[5rem] mb-4" />
                  <h3 className="text-xl font-semibold font-inter mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-blue-800 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold">
            JASA PENDIRIAN LEGALITAS PERUSAHAAN
          </h1>
        </div>
      </div>

      <div className="min-h-screen mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
        {layananList.map((layanan, index) => (
          <div
            data-aos="flip-left"
            key={index}
            className="bg-white rounded-xl shadow-lg border border-gray-300 overflow-hidden flex flex-col hover:shadow-2xl transition duration-300"
          >
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center py-4 relative">
              <h2 className="text-lg font-bold z-10 relative uppercase tracking-wide">
                {layanan.title}
              </h2>
              <div className="h-1 bg-yellow-400 w-1/2 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="flex flex-col p-6 px-5 text-center h-full">
              <p className="text-xl font-semibold text-blue-800 mb-4">
                {layanan.price || "Hubungi Kami"}
              </p>
              <ul className="text-sm text-gray-700 mb-5 list-disc list-inside text-left">
                {layanan.includes.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>
              <div className="mt-auto">
                <button
                  onClick={() => {
                    const encodedMessage = encodeURIComponent(
                      layanan.waMessage || `Halo, saya ingin bertanya tentang layanan ${layanan.title}.`
                    );
                    window.open(`https://wa.me/6282114034646?text=${encodedMessage}`, "_blank");
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2 w-full transition transform hover:scale-105"
                >
                  <FaWhatsapp className="text-xl" /> Chat Via WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;