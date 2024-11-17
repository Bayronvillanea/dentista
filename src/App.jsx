
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gray-100">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
