import { Link } from 'react-scroll';
import banner from '../img/banner.png'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-blue-50 py-20 text-center flex items-center justify-center"
    >
      {/* Fondo con imagen, más estilizado */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${banner})` }}
      />
      
      {/* Contenido sobre el fondo */}
      <div className="relative z-10 text-white p-6 space-y-6 max-w-3xl mx-auto mt-12">
        {/* Título con color celeste, tamaño responsivo */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-wide text-cyan-600">
          Cuida tu sonrisa con los mejores profesionales
        </h1>
        
        {/* Párrafo con color celeste más suave, tamaño responsivo */}
        <p className="text-lg sm:text-xl md:text-2xl text-cyan-700">
          Servicios dentales personalizados para una sonrisa saludable y hermosa.
        </p>
        
        {/* Botón de CTA con nuevo color, tamaño y estilo responsivo */}
        <Link to="contact" smooth={true} duration={500}>
          <a
            className="inline-block bg-cyan-600 text-white text-lg sm:text-xl font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-cyan-700 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            aria-label="Reservar cita"
          >
            Reservar tu Cita
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
