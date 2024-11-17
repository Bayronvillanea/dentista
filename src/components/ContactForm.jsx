import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación simple
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      setErrors({ message: 'Todos los campos son obligatorios' });
    } else {
      // Aquí agregar lógica para enviar el formulario
      console.log('Formulario enviado:', formData);
    }
  };

  return (
    <section id="contact" className="py-16 bg-blue-50">
      <h2 className="text-4xl font-bold text-center text-3xl font-bold mb-8 mb-8">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <div className="space-y-6">
          {/* Campo de Nombre */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
            <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm transition-all duration-300">
              Nombre
            </label>
          </div>

          {/* Campo de Correo */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
            <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm transition-all duration-300">
              Correo Electrónico
            </label>
          </div>

          {/* Campo de Teléfono */}
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder=" "
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
            <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm transition-all duration-300">
              Teléfono
            </label>
          </div>

          {/* Selección de Servicio */}
          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            >
              <option value="">Selecciona un servicio</option>
              <option value="limpieza">Limpieza Dental</option>
              <option value="ortodoncia">Ortodoncia</option>
              <option value="estetica">Estética Dental</option>
            </select>
            <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm transition-all duration-300">
              
            </label>
          </div>

          {/* Mensaje de error */}
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          {/* Botón de Enviar */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-600 to-cyan-600 text-white px-6 py-3 rounded-md hover:bg-gradient-to-l from-blue-600 to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
