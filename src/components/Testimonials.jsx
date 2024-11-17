import persona1 from "../img/persona1.png";
import persona2 from "../img/persona2.png";

const Testimonials = () => {
  const testimonials = [
    { name: "Laura", photo: persona1, text: "Excelente servicio y trato. ¡Mi sonrisa nunca estuvo mejor!" },
    { name: "Carlos", photo: persona2, text: "Profesionales y muy amables. ¡Altamente recomendados!" },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonios</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-72 md:w-80 lg:w-96 p-6 bg-white rounded-lg shadow-md text-center transition-transform transform hover:scale-105"
          >
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-lg mb-4">{testimonial.text}</p>
            <p className="font-semibold text-blue-500">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
