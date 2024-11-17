import destista from "../img/destista.png"
const About = () => {
    return (
      <section id="about" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Sobre Nosotros</h2>
        <div className="max-w-3xl mx-auto px-4">
          {/* Imagen responsiva */}
          <img 
            src={destista} 
            alt="Dentista" 
            className="rounded-full mx-auto mb-6 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover"
          />
          <p className="text-xl mb-4">
            Con más de 10 años de experiencia, nuestra misión es ofrecerte una sonrisa perfecta con el mejor cuidado dental.
          </p>
          <p className="text-lg">
            Certificados en ortodoncia, estética dental y más. ¡Déjanos cuidar de tu salud bucal!
          </p>
        </div>
      </section>
    );
  }
  
  export default About;
  