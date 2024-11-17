import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto text-center px-4">
        <p className="text-lg mb-4">© 2024 Clínica Dental. Todos los derechos reservados.</p>
        <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-6">
          {/* Teléfono */}
          <a href="tel:+123456789" className="hover:text-blue-400 block sm:inline flex items-center space-x-2">
            <i className="fas fa-phone-alt"></i>
            <span>+123 456 789</span>
          </a>

          {/* Correo electrónico */}
          <a href="mailto:contacto@clinicadental.com" className="hover:text-blue-400 block sm:inline flex items-center space-x-2">
            <i className="fas fa-envelope"></i>
            <span>contacto@clinicadental.com</span>
          </a>

          {/* Facebook */}
          <a href="https://facebook.com/clinicadental" className="hover:text-blue-400 block sm:inline flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
            <span>Facebook</span>
          </a>

          {/* Instagram */}
          <a href="https://instagram.com/clinica_dental" className="hover:text-blue-400 block sm:inline flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
