import { useEffect } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4 md:p-6 lg:p-10 flex flex-col items-center">
        {/* Hero Section */}
        <div
          className="w-full min-h-[40vh] md:min-h-[50vh] text-center mb-10 py-10 bg-cover bg-center relative rounded-xl overflow-hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?fit=crop&w=1350&q=80')`,
          }}
          data-aos="fade-down"
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
          <div className="relative z-10 py-10 px-4 sm:px-6 md:px-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white mb-4 drop-shadow-lg">
              Hubungi Kami
            </h2>
            <p className="text-white text-base sm:text-lg max-w-2xl mx-auto">
              Jangan ragu untuk menghubungi kami jika Anda membutuhkan bantuan
              seputar Legalitas Usaha. Tim kami siap memberikan solusi terbaik
              untuk bisnis Anda.
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 w-full max-w-5xl" data-aos="fade-up">
          {/* WhatsApp Card */}
          <a
            href="https://wa.me/6282114034646"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white shadow-md p-6 rounded-2xl border-t-4 border-blue-500 flex flex-col items-center transition-all hover:scale-105 hover:shadow-xl duration-300"
          >
            <FaWhatsapp className="text-green-500 text-4xl sm:text-5xl mb-3" />
            <h3 className="font-semibold text-lg sm:text-xl text-blue-700 mb-1">WhatsApp</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">(+62) 821 - 1403 - 4646</p>
          </a>

          {/* Email Card */}
          <a
            href="mailto:samawakonsultanindonesia@gmail.com"
            className="flex-1 bg-white shadow-md p-6 rounded-2xl border-t-4 border-yellow-400 flex flex-col items-center transition-all hover:scale-105 hover:shadow-xl duration-300"
          >
            <FaEnvelope className="text-yellow-400 text-4xl sm:text-5xl mb-3" />
            <h3 className="font-semibold text-lg sm:text-xl text-blue-700 mb-1">Alamat E-Mail</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              samawakonsultanindonesia@gmail.com
            </p>
          </a>
        </div>
      </div>

      {/* Maps Section */}
      <div className="w-full px-4 sm:px-6 lg:px-10 pt-10 pb-16 bg-gray-200">
        <h3
          className="text-center text-3xl sm:text-3xl font-bold font-serif text-blue-700 mb-6"
          data-aos="fade-up"
        >
          Lokasi Kami
        </h3>
        <div
          className="w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-xl max-w-5xl mx-auto"
          data-aos="fade-up"
        >
          <iframe
            title="Lokasi Kami"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7931.4956456734335!2d106.66188867300619!3d-6.296833157048042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb9198e19b17%3A0xd76b8117a75193b0!2sVirginia%20Arcade%20%40BSD%20City!5e0!3m2!1sid!2sid!4v1745810387037!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
