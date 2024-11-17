import { Link } from 'react-scroll';
import { useState } from 'react';
import logo from '../img/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md fixed w-full z-20 top-0">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src={logo}
          alt="Logo de la clínica dental especializada en servicios de odontología personalizados para una sonrisa saludable"
          className="h-10 md:h-12"
          loading="lazy"
        />
      </div>

      {/* Barra de navegación - Desktop */}
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#home" className="text-gray-800 font-semibold hover:text-blue-500 transition-colors">Inicio</a>
        <a href="#services" className="text-gray-800 font-semibold hover:text-blue-500 transition-colors">Servicios</a>
        <a href="#testimonials" className="text-gray-800 font-semibold hover:text-blue-500 transition-colors">Testimonios</a>
        <a href="#about" className="text-gray-800 font-semibold hover:text-blue-500 transition-colors">Sobre Nosotros</a>
        <a href="#contact" className="text-gray-800 font-semibold hover:text-blue-500 transition-colors">Contacto</a>
      </nav>

      {/* Botón Agendar Cita */}
      <Link to="contact" smooth={true} duration={500}>
        <a
          className="bg-cyan-600 text-white px-6 py-2 rounded-full hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-md"
          aria-label="Agendar cita"
        >
          Agendar Cita
        </a>
      </Link>

      {/* Menú hamburguesa para móviles */}
      <div className="md:hidden flex items-center space-x-4">
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú desplegable en móvil */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden">
          <div className="absolute top-0 right-0 bg-white shadow-lg w-64 rounded-lg flex flex-col items-start p-6 space-y-4 transform transition-all duration-300 ease-in-out">
            <a href="#home" className="text-gray-800 font-semibold hover:text-blue-500 transition-colors" onClick={toggleMenu}>Inicio</a>
            <a href="#services" className="text-gray-800 font-semibold hover:text-blue-500 transition-colors" onClick={toggleMenu}>Servicios</a>
            <a href="#testimonials" className="text-gray-800 font-semibold hover:text-blue-500 transition-colors" onClick={toggleMenu}>Testimonios</a>
            <a href="#about" className="text-gray-800 font-semibold hover:text-blue-500 transition-colors" onClick={toggleMenu}>Sobre Nosotros</a>
            <a href="#contact" className="text-gray-800 font-semibold hover:text-blue-500 transition-colors" onClick={toggleMenu}>Contacto</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
