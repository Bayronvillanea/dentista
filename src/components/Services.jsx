import limpieza from '../img/limpieza.png';
import ortodoncia from '../img/Ortodoncia.png';
import estetica from '../img/EstéticaDental.png';
import implantes from '../img/implantes-dentales.png';

const Services = () => {
  const services = [
    { title: 'Limpieza Dental', icon: limpieza },
    { title: 'Ortodoncia', icon: ortodoncia },
    { title: 'Estética Dental', icon: estetica },
    { title: 'Implantes Dentales', icon: implantes },
  ];

  return (
    <section id="services" className="py-16 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            {/* Imagen circular */}
            <img 
              src={service.icon} 
              alt={service.title} 
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-4 object-cover rounded-full"
            />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
