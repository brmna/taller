import React from 'react';
import Link from 'next/link';

const featuredServices = [
  {
    title: 'Publicidad Digital',
    description: 'Maximizamos tu alcance en el mundo digital con estrategias a la medida.',
    icon: '💻',
  },
  {
    title: 'Vallas Publicitarias',
    description: 'Impacto visual en las mejores ubicaciones de Villavicencio y el Meta.',
    icon: '🏞️',
  },
  {
    title: 'Diseño Gráfico',
    description: 'Creamos la identidad visual que tu marca necesita para destacar.',
    icon: '🎨',
  },
];

const testimonials = [
  {
    name: 'Ana Pérez',
    company: 'Villavo Market',
    quote: 'Publimeta transformó nuestra presencia en línea. ¡Los resultados hablan por sí solos!',
  },
  {
    name: 'Carlos Rodríguez',
    company: 'Llanos Tour',
    quote: 'El equipo de Publimeta es profesional, creativo y comprometido. Los recomiendo totalmente.',
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold tracking-tight">Tu Socio Estratégico en Publicidad</h1>
          <p className="mt-4 text-lg">En Publimeta S.A.S, llevamos tu marca al siguiente nivel.</p>
          <Link href="/services" className="mt-8 inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors">
            Conoce Nuestros Servicios
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Sobre Publimeta S.A.S</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Somos una empresa de publicidad con sede en Villavicencio, dedicada a ofrecer soluciones innovadoras y efectivas. Nuestro valor diferencial radica en la combinación de estrategias de publicidad tradicional y digital, adaptadas a las necesidades del mercado local.
          </p>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="bg-background-light dark:bg-background-dark py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Servicios Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-900/50 p-8 rounded-xl shadow-md text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-900/50 p-8 rounded-xl shadow-md">
                <p className="text-lg italic">"{testimonial.quote}"</p>
                <p className="mt-4 font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
