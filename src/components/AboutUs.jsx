import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Gedung from "../img/Gedung.jpeg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const AboutUs = () => {
  useEffect(() => {
    // Initialize AOS with repeated animation
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: false, // Animasi akan terulang setiap kali elemen terlihat
      disable: "mobile", // Nonaktifkan AOS untuk perangkat mobile (optional)
    });
  }, []);

  return (
    <>
      {/* Yapping+IMG */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={Gedung}
          alt="Pict_Gedung"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {/* Judul dan Subjudul */}
          <h2
            className="text-4xl md:text-8xl text-blue-600 font-bold font-serif"
            data-aos="fade-up"
          >
            LEGALKITA ID
          </h2>
          <p
            className="text-blue-600 mb-6 tracking-wide font-semibold font-inter text-3xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            MELAYANI DENGAN HATI
          </p>

          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Jasa Pendirian Legalitas
          </h1>
          <p
            className="text-white text-lg max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Kami hadir untuk membantu anda mendirikan Perusahaan, Perizinan
            Usaha, dan Solusi Legal lainnya dengan Praktis, Cepat, dan Sesuai
            Regulasi
          </p>
        </div>
      </section>

      {/* Tentang Kami */}
      <section className="AboutUs px-4" data-aos="fade-up">
        <div className="container_AboutUs py-10 flex justify-center text-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-serif text-blue-950 font-medium">
              Tentang Kami
            </h1>
            <div className="py-4">
              <h5 className="text-base md:text-lg">
                LegalKita ID adalah sebuah platform layanan legalitas usaha yang
                dikelola secara profesional oleh PT Samawa Konsultan Indonesia,
                sebuah perusahaan konsultan yang berpengalaman di bidang hukum
                dan perizinan usaha. Berdiri sejak tahun 2019, LegalKita ID
                hadir dengan komitmen untuk menjadi mitra terpercaya bagi para
                pelaku usaha di seluruh Indonesia, khususnya Usaha Mikro, Kecil,
                dan Menengah (UMKM). <br /> <br />
                Kami memahami bahwa proses pengurusan legalitas dan perizinan
                usaha sering kali dianggap rumit, memakan waktu, dan
                membingungkan bagi banyak pemilik usaha. Oleh karena itu,
                LegalKita ID menawarkan solusi yang Mudah, Cepat, dan Tepercaya,
                mulai dari pendirian badan usaha seperti PT dan CV, pengurusan
                NIB (Nomor Induk Berusaha), SIUP, Sertifikat Halal, hingga
                berbagai jenis izin khusus lainnya sesuai kebutuhan usaha Anda.{" "}
                <br /> <br />
                Dengan dukungan tim ahli yang berpengalaman, proses yang
                transparan, serta layanan yang ramah dan responsif, LegalKita ID
                bertekad untuk mendampingi setiap pelaku usaha dalam membangun
                fondasi legal yang kuat agar dapat tumbuh dan berkembang secara
                berkelanjutan di era digital ini.
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* Vismis */}
      <section className="Vismis">
        <div className="bg-gray-300 py-12">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <h2
              className="text-3xl md:text-4xl font-serif text-blue-950 mb-6"
              data-aos="fade-up"
            >
              VISI & MISI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div
                className="p-6 bg-blue-950 text-blue-300 rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer"
                data-aos="zoom-in"
              >
                <h2 className="text-3xl md:text-4xl mb-5 font-bold font-inter">
                  VISI
                </h2>
                <p className="text-xl font-semibold font-inter mb-2">
                  Menjadi mitra hukum tepercaya bagi para pengusaha di
                  Indonesia, mempercepat pertumbuhan mereka dengan solusi hukum
                  yang inovatif dan terjangkau
                </p>
              </div>
              <div
                className="p-6 bg-blue-950 text-blue-300 rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer"
                data-aos="zoom-in"
              >
                <h2 className="text-3xl md:text-4xl mb-5 font-bold font-inter">
                  MISI
                </h2>
                <p className="text-xl font-semibold font-inter mb-2">
                  Menyediakan layanan legalitas berkualitas tinggi dengan
                  standar profesionalisme yang tinggi, didukung oleh tim ahli
                  yang berpengalaman dan berkomitmen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-nilai */}
      <section className="Nilai">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-blue-950 mb-2 mt-15 text-center font-center">
            Nilai - Nilai LegalKita ID
          </h2>
        </div>
        <main id="main" className="flex-grow p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto pb-2 pt-7">
            {/* Card1 */}
            <div
              className="bg-blue-800 text-white p-6 rounded-lg shadow-md mb-4 flex flex-col items-center text-center"
              data-aos="fade-up"
            >
              <h2 className="text-3xl md:text-4xl mb-5 font-bold font-inter">
                PROFESIONALISME
              </h2>
              <p className="text-xl font-semibold font-inter mb-2">
                Kami menekankan layanan profesional dalam membantu klien
                mengurus Legalitas dan Perizinan Usaha
              </p>
            </div>
            {/* Card2 */}
            <div
              className="bg-blue-800 text-white p-6 rounded-lg shadow-md mb-4 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="text-3xl md:text-4xl mb-5 font-bold font-inter">
                KEPERCAYAAN
              </h2>
              <p className="text-xl font-semibold font-inter mb-2">
                Sebagai mitra tepercaya, kami berkomitmen untuk memberikan
                solusi yang dapat diandalkan bagi para pelaku usaha
              </p>
            </div>
            {/* Card3 */}
            <div
              className="bg-blue-800 text-white p-6 rounded-lg shadow-md mb-4 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h2 className="text-3xl md:text-4xl mb-5 font-bold font-inter">
                KEMUDAHAN AKSES
              </h2>
              <p className="text-xl font-semibold font-inter mb-2">
                Dengan menyediakan layanan Konsultasi secara online dan offline,
                kami memprioritaskan kemudahan akses bagi Klien
              </p>
            </div>
            {/* Card4 */}
            <div
              className="bg-blue-800 text-white p-6 rounded-lg shadow-md mb-4 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h2 className="text-3xl md:text-4xl mb-5 font-bold font-inter">
                KEPATUHAN TERHADAP REGULASI
              </h2>
              <p className="text-xl font-semibold font-inter mb-2">
                Mereka memastikan bahwa semua layanan yang diberikan sesuai
                dengan Peraturan dan Regulasi yang berlaku di Indonesia
              </p>
            </div>
            {/* Card5 */}
            <div
              className="bg-blue-800 text-white p-6 rounded-lg shadow-md mb-4 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <h2 className="text-3xl md:text-4xl mb-5 font-bold font-inter">
                KEPUASAN PELANGGAN
              </h2>
              <p className="text-xl font-semibold font-inter mb-2">
                Dengan menawarkan layanan yang lengkap dan tepercaya, mereka
                dapat fokus pada Kepuasan dan Kebutuhan Pelanggan
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default AboutUs;
