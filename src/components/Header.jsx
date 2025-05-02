import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LogoFooter from "../img/LogoFooter.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Helper function to determine active style
  const linkClass = (path) =>
    location.pathname === path ? "text-white" : "hover:text-white";

  return (
    <>
      <header className="bg-white shadow-md">
        <nav>
          {/* Top Navbar */}
          <div className="flex justify-between items-center px-5 py-3 relative">
            {/* Logo */}
            <Link to="/" className="flex items-center z-10">
              <img
                className="h-[8vh] md:h-[15vh]"
                src={LogoFooter}
                alt="Logo"
              />
            </Link>

            {/* Title - ABSOLUTE CENTER */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-blue-950 font-bold text-xl md:text-4xl font-serif text-center">
                LEGALKITA ID
              </p>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 z-10">
              <a
                href="https://wa.me/6282114034646"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block"
              >
                <div className="bg-blue-950 text-white hover:bg-blue-900 border-2 font-semibold rounded-2xl py-2.5 px-4 transition-all">
                  📞 Hubungi Kami
                </div>
              </a>

              {/* Hamburger Icon */}
              <button
                className="md:hidden text-blue-950"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-blue-900 text-blue-300 px-5 py-4 space-y-3">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-white"
              >
                Beranda
              </Link>
              <Link
                to="/tentang-kami"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-white"
              >
                Tentang Kami
              </Link>
              <Link
                to="/layanan"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-white"
              >
                Layanan
              </Link>
              <Link
                to="/blogs"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-white"
              >
                Blog
              </Link>
              <Link
                to="/kontak"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-white"
              >
                Kontak
              </Link>
              <a
                href="https://wa.me/6282114034646" // ← Ganti dengan nomor WhatsApp kamu
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block bg-white text-blue-950 font-semibold rounded-xl py-2 px-3 mt-3 text-center"
              >
                📞 Hubungi Kami
              </a>
            </div>
          )}

          {/* Desktop Navbar */}
          <div className="hidden md:flex bg-blue-900 text-blue-300 font-medium text-lg justify-center">
            <ul className="flex gap-10 px-4 py-3 ">
              <Link to="/" className={linkClass("/")}>
                Beranda
              </Link>
              <Link to="/tentang-kami" className={linkClass("/tentang-kami")}>
                Tentang Kami
              </Link>
              <Link to="/layanan" className={linkClass("/layanan")}>
                Layanan
              </Link>
              <Link to="/blogs" className={linkClass("/blogs")}>
                Blog
              </Link>
              <Link to="/kontak" className={linkClass("/kontak")}>
                Kontak
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
