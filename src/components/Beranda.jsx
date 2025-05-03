import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Gedung from "../img/GedungFull.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Beranda = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/tribun");
        const data = await response.json();
        setPosts(data.slice(0, 3)); // ambil 3 data teratas
      } catch (error) {
        console.error("Gagal fetch berita:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const [formData, setFormData] = useState({
    namaPt: "",
    telpPt: "",
    alamatPt: "",
    kodePos: "",
    emailPt: "",
    bidangUsaha: "",
    modalKerja: "",
    tenagaKerja: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const isAnyFieldEmpty = Object.values(formData).some(
      (field) => field.trim() === ""
    );
    if (isAnyFieldEmpty) {
      toast.error(
        <div className="flex flex-col items-start">
          <span className="font-bold text-lg">Gagal!</span>
          <span className="text-sm">
            Mohon isi semua kolom terlebih dahulu ya!
          </span>
        </div>,
        {
          position: "top-center",
          className: "bg-red-600 text-white rounded-lg shadow-lg p-4",
          autoClose: 3000,
        }
      );
      return false;
    }
    return true;
  };

  const handleReset = () => {
    setFormData({
      namaPt: "",
      telpPt: "",
      alamatPt: "",
      kodePos: "",
      emailPt: "",
      bidangUsaha: "",
      modalKerja: "",
      tenagaKerja: "",
    });
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const pesan = `Halo LegalKita ID! Saya ingin mendirikan PT dengan detail berikut:
  
  - Nama PT: ${formData.namaPt}
  - Telp/HP PT: ${formData.telpPt}
  - Alamat PT: ${formData.alamatPt}
  - Kode Pos: ${formData.kodePos}
  - Email: ${formData.emailPt}
  - Bidang Usaha: ${formData.bidangUsaha}
  - Modal Kerja 3 Bulan: ${formData.modalKerja}
  - Jumlah Tenaga Kerja: ${formData.tenagaKerja}
  
  Saya memahami bahwa nama PT harus terdiri dari tiga suku kata dan tidak mengandung angka/simbol.`;

    const whatsappURL = `https://wa.me/6282114034646?text=${encodeURIComponent(
      pesan
    )}`;
    window.open(whatsappURL, "_blank");

    handleReset();
  };

  return (
    <>
      {/* Beranda */}
      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row items-center bg-gray-300 px-4 py-10"
      >
        <div
          className="w-full md:w-1/2 flex flex-col items-center text-center"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-blue-950 font-serif">
            LEGALKITA ID
          </h1>
          <h2 className="text-xl md:text-2xl py-3.5">Melayani Dengan Hati</h2>
          <h3 className="text-base md:text-lg">
            Wujudkan bisnis impian anda dengan LegalKita.Id
          </h3>
          <div className="py-6 md:py-10" data-aos="zoom-in">
            <Link to="/layanan">
              <button className="bg-blue-950 text-white hover:bg-blue-800 px-6 py-2 rounded-lg font-semibold cursor-pointer delay-75 transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
                Tentang Layanan Kami
              </button>
            </Link>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 flex justify-center"
          data-aos="fade-left"
        >
          <img
            src={Gedung}
            alt="Lha Ko Ngilang Gambarnya"
            className="w-full h-auto max-w-xs md:max-w-md rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Tentang Kami */}
      <section className="AboutUs px-4" data-aos="fade-up">
        <div className="container_AboutUs py-10 flex justify-center text-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-serif text-blue-950 font-medium">
              Tentang Kami
            </h1>
            <div className="py-4" data-aos="fade-up">
              <h5 className="text-base md:text-lg px-12">
                LegalKita ID adalah platform layanan legalitas usaha yang di
                kelola oleh PT Samawa Konsultan Indonesia. Didirikan pada tahun
                2019, LegalKita ID bertujuan untuk membantu pelaku usaha,
                khususnya Usaha Mikro, Kecil dan Menengah (UMKM) dalam mengurus
                legalitas dan perizinan usaha secara mudah, cepat, dan
                tepercaya.
              </h5>
            </div>
            <div className="py-6" data-aos="zoom-in">
              <Link to="/tentang-kami">
                <button className="bg-blue-950 text-white hover:bg-blue-800 px-6 py-2 rounded-lg font-semibold cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
                  Tentang Kami
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section className="Layanan" data-aos="fade-up">
        <div className="bg-gray-300 py-12">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <h2
              className="text-3xl md:text-4xl font-serif text-blue-950 mb-6"
              data-aos="fade-up"
            >
              Layanan Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Pendirian PT",
                  img: "https://cdn-icons-png.flaticon.com/128/2504/2504717.png",
                  desc: "Kami membantu Anda untuk mendirikan Perseroan Terbatas (PT) sesuai dengan peraturan yang berlaku",
                },
                {
                  title: "Pendirian CV",
                  img: "https://cdn-icons-png.flaticon.com/128/1834/1834056.png",
                  desc: "Layanan pendirian Commanditaire Vennootschap (CV) yang cepat dan efisien untuk usaha Anda",
                },
                {
                  title: "Perizinan Usaha",
                  img: "https://cdn-icons-png.flaticon.com/128/8765/8765344.png",
                  desc: "Kami menangani berbagai jenis perizinan usaha untuk memastikan legalitas operasional Anda",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-blue-800 text-white hover:bg-blue-950 rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
                  data-aos="flip-left"
                >
                  <img
                    src={item.img}
                    alt="nungguin ya"
                    className="size-[5rem]"
                  />
                  <h3 className="text-xl font-semibold font-inter mb-2 mt-1">
                    {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="pt-8" data-aos="zoom-in">
              <Link to="/layanan">
                <button className="bg-blue-800 text-white hover:bg-blue-950 px-6 py-2 rounded-2xl font-semibold transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
                  Pelajari Lebih Lanjut
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Layanan */}
      <section className="Card px-4" data-aos="fade-up">
        <div className="container mx-auto">
          <h2
            className="text-2xl md:text-4xl font-serif text-blue-950 mb-6 mt-10 text-center"
            data-aos="fade-up"
          >
            Keunggulan Layanan Kami
          </h2>
        </div>
        <main id="main" className="flex-grow py-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                text: "Biaya Hemat & Terjangkau",
                icon: "https://cdn-icons-png.flaticon.com/128/536/536105.png",
              },
              {
                text: "Praktis, Fleksibel, & Cepat",
                icon: "https://cdn-icons-png.flaticon.com/128/1067/1067447.png",
              },
              {
                text: "Keamanan Data Terjaga",
                icon: "https://cdn-icons-png.flaticon.com/128/2716/2716654.png",
              },
              {
                text: "Gratis Konsultasi",
                icon: "https://cdn-icons-png.flaticon.com/128/575/575927.png",
              },
              {
                text: "Efisiensi Waktu & Tenaga",
                icon: "https://cdn-icons-png.flaticon.com/128/2055/2055768.png",
              },
              {
                text: "Transaksi Aman",
                icon: "https://cdn-icons-png.flaticon.com/128/2110/2110174.png",
              },
            ].map(({ text, icon }, idx) => (
              <div
                key={idx}
                className="bg-blue-950 p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:bg-blue-800 delay-75 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
                data-aos="zoom-in-up"
              >
                <img src={icon} alt="" className="rounded-md mb-4" />
                <h3 className="text-xl font-bold mb-2 text-blue-300">{text}</h3>
              </div>
            ))}
          </div>
        </main>
      </section>

      {/* Blog */}
      <section className="Blog" data-aos="fade-up">
        <div className="bg-gray-300 py-12">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <h2
              className="text-3xl md:text-4xl font-serif text-blue-950 mb-6"
              data-aos="fade-up"
            >
              Blog & Artikel Terbaru
            </h2>

            {loading ? (
              <div className="text-lg text-gray-700">Loading...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white text-blue-800 hover:bg-blue-100 hover:text-blue-400 rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
                    data-aos="flip-left"
                  >
                    <img
                      src={
                        post.image && post.image !== ""
                          ? post.image
                          : "https://via.placeholder.com/400x300?text=No+Image"
                      }
                      alt={post.title}
                      className="w-full h-40 object-cover mb-4 rounded"
                    />
                    <h3 className="text-xl font-semibold font-inter mb-2 mt-1">
                      {post.title}
                    </h3>
                    <p className="text-sm line-clamp-3">{post.description}</p>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-semibold hover:underline text-sm"
                    >
                      Baca selengkapnya
                    </a>
                  </div>
                ))}
              </div>
            )}
            <div className="py-6" data-aos="zoom-in">
              <Link to="/blogs">
                <button className="bg-blue-800 text-white hover:bg-blue-950 px-6 py-2 rounded-lg font-semibold cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
                  Lihat Lebih Banyak
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rating */}
      <section className="Rating" data-aos="fade-up">
        <div>
          <div className="bg-gray-300 py-10 mt-10 mb-7">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">
              <h1 className="text-3xl md:text-4xl font-serif text-blue-950">
                Apa Kata Klien Kami?
              </h1>
            </div>
          </div>
          <div className="px-7">
            {/* Baris Pertama */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-5">
              {[
                {
                  img: "https://cdn-icons-png.flaticon.com/128/2504/2504717.png",
                  title: "Pendirian PT",
                  subtitle: "PT blablabla",
                  desc: '"Kami sangat puas dengan layanan LegalKita Id. Jasa yang mereka sediakan sangat variatif, dan tim mereka sangat profesional."',
                },
                {
                  img: "https://cdn-icons-png.flaticon.com/128/1834/1834056.png",
                  title: "Pendirian CV",
                  subtitle: "PT blablabla",
                  desc: '"Layanan yang cepat dan responsif. LegalKita Id membantu kami meningkatkan aktivitas perusahaan dengan solusi yang tepat."',
                },
                {
                  img: "https://cdn-icons-png.flaticon.com/128/8765/8765344.png",
                  title: "Perizinan Usaha",
                  subtitle: "PT blablabla",
                  desc: '"LegalKita Id selalu memberikan layanan terbaik dengan kendaraan berkualitas dan harga yang kompetitif. Kami sangat merekomendasikan mereka!"',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-300 text-black rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt="nungguin ya"
                    className="size-[5rem]"
                  />
                  <h3 className="text-xl text-blue-950 font-semibold font-inter mt-1">
                    {item.title}
                  </h3>
                  <p className="font-inter italic text-gray-400 mb-2">
                    {item.subtitle}
                  </p>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Baris Kedua */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-300 text-black rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer"
                >
                  <img
                    src={
                      [
                        "https://cdn-icons-png.flaticon.com/128/2504/2504717.png",
                        "https://cdn-icons-png.flaticon.com/128/1834/1834056.png",
                        "https://cdn-icons-png.flaticon.com/128/8765/8765344.png",
                      ][index]
                    }
                    alt="nungguin ya"
                    className="size-[5rem]"
                  />
                  <h3 className="text-xl text-blue-950 font-semibold font-inter mt-1">
                    {["Pendirian PT", "Pendirian CV", "Perizinan Usaha"][index]}
                  </h3>
                  <p className="font-inter italic text-gray-400 mb-2">
                    PT blablabla
                  </p>
                  <p>
                    {
                      [
                        '"Kami sangat puas dengan layanan LegalKita Id. Jasa yang mereka sediakan sangat variatif, dan tim mereka sangat profesional."',
                        '"Layanan yang cepat dan responsif. LegalKita Id membantu kami meningkatkan aktivitas perusahaan dengan solusi yang tepat."',
                        '"LegalKita Id selalu memberikan layanan terbaik dengan kendaraan berkualitas dan harga yang kompetitif. Kami sangat merekomendasikan mereka!"',
                      ][index]
                    }
                  </p>
                </div>
              ))}
            </div>

            {/* Baris Ketiga */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-300 text-black rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer"
                >
                  <img
                    src={
                      [
                        "https://cdn-icons-png.flaticon.com/128/2504/2504717.png",
                        "https://cdn-icons-png.flaticon.com/128/1834/1834056.png",
                        "https://cdn-icons-png.flaticon.com/128/8765/8765344.png",
                      ][index]
                    }
                    alt="nungguin ya"
                    className="size-[5rem]"
                  />
                  <h3 className="text-xl text-blue-950 font-semibold font-inter mt-1">
                    {["Pendirian PT", "Pendirian CV", "Perizinan Usaha"][index]}
                  </h3>
                  <p className="font-inter italic text-gray-400 mb-2">
                    PT blablabla
                  </p>
                  <p>
                    {
                      [
                        '"Kami sangat puas dengan layanan LegalKita Id. Jasa yang mereka sediakan sangat variatif, dan tim mereka sangat profesional."',
                        '"Layanan yang cepat dan responsif. LegalKita Id membantu kami meningkatkan aktivitas perusahaan dengan solusi yang tepat."',
                        '"LegalKita Id selalu memberikan layanan terbaik dengan kendaraan berkualitas dan harga yang kompetitif. Kami sangat merekomendasikan mereka!"',
                      ][index]
                    }
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan LegalKita */}
      <section className="Keunggulan LegalKita">
        <div className="bg-gray-300 py-12 mt-10" data-aos="fade-up">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <h2
              className="text-3xl md:text-4xl font-serif text-blue-950 mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Kenapa Memilih Kami?
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Card 1 */}
              <div
                className="p-6 bg-blue-950 text-blue-300 hover:bg-blue-800 hover:text-white rounded-2xl shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg duration-300 cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2345/2345470.png"
                  alt="nungguin ya"
                  className="size-[5rem]"
                />
                <h3 className="text-xl font-semibold font-inter mb-2 mt-1">
                  ✅ Legalitas Terjamin & Aman
                </h3>
                <p>
                  Semua proses dilakukan secara resmi dan sesuai regulasi
                  pemerintah, menjamin keamanan dan keabsahan dokumen Anda.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="p-6 bg-blue-950 text-blue-300 hover:bg-blue-800 hover:text-white rounded-2xl shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg duration-300 cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/11511/11511383.png"
                  alt="nungguin ya"
                  className="size-[5rem]"
                />
                <h3 className="text-xl font-semibold font-inter mb-2 mt-1">
                  ✅ Berpengalaman Sejak 2019
                </h3>
                <p>
                  Kami telah melayani ribuan klien dari berbagai bidang usaha
                  dengan komitmen profesionalisme dan integritas tinggi.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="p-6 bg-blue-950 text-blue-300 hover:bg-blue-800 hover:text-white rounded-2xl shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg duration-300 cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10165/10165363.png"
                  alt="nungguin ya"
                  className="size-[5rem]"
                />
                <h3 className="text-xl font-semibold font-inter mb-2 mt-1">
                  ✅ Harga Terjangkau
                </h3>
                <p>
                  Kami memahami kebutuhan UMKM, itulah sebabnya layanan kami
                  ditawarkan dengan harga yang hemat dan transparan.
                </p>
              </div>
            </div>
            <div className="container mx-auto px-auto flex flex-col items-center text-center mt-10 font-inter font-semibold text-xl text-blue-950">
              <p>
                Kami hadir untuk memudahkan jalan Anda menuju bisnis yang legal
                dan sesuai dengan regulasi. <br /> LegalKita Id, solusi
                legalitas tepercaya untuk kesuksesan bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Pembuatan PT */}
      <section>
        <div
          className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-5"
          data-aos="fade-up"
        >
          <div className="bg-gray-300 rounded-lg shadow-lg p-8 w-full max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-center text-blue-950 mb-2">
              Formulir Pendirian PT
            </h2>
            <p className="text-center text-gray-600 text-sm mb-8">
              Ingin mendirikan PT atau memiliki pertanyaan seputar perizinan dan
              prosedur pembuatan PT? <br />
              Kami siap membantu Anda! Hubungi kami untuk konsultasi, saran,
              atau keluhan.
              <br />
              <span className="italic text-xs text-gray-400">
                *Ketentuan dan syarat berlaku.
              </span>
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: "namaPt", placeholder: "Nama PT" },
                { id: "telpPt", placeholder: "Telp/HP PT" },
                { id: "alamatPt", placeholder: "Alamat PT (Lengkap)" },
                { id: "kodePos", placeholder: "Kode Pos" },
                { id: "emailPt", placeholder: "Email", type: "email" },
                { id: "bidangUsaha", placeholder: "Bidang Usaha" },
                { id: "modalKerja", placeholder: "Modal Dasar" },
                {
                  id: "tenagaKerja",
                  placeholder: "Jumlah Tenaga Kerja",
                  type: "number",
                },
              ].map(({ id, placeholder, type = "text" }) => (
                <input
                  key={id}
                  id={id}
                  type={type}
                  value={formData[id] ?? ""} // ✅ fallback untuk undefined
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ))}
            </form>

            <button
              onClick={handleSubmit}
              type="button"
              className="mt-8 w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-md transition duration-300"
            >
              Kirim Via WhatsApp
            </button>

            <p className="mt-5 text-sm text-gray-700">
              <strong>Note :</strong> <br />
              Nama PT harus terdiri dari tiga suku kata. Contoh: PT. Warna Warni
              Indah, PT. Media Digital Modern, dll.
              <br />
              Penggunaan angka, simbol, serta kata "Corporation" tidak
              diperkenankan. <br />
              Mohon untuk mengirimkan foto KTP dan NPWP sebagai bagian dari
              proses pendaftaran.
            </p>
          </div>
        </div>
      </section>

      <ToastContainer />
    </>
  );
};

export default Beranda;
