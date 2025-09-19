import React from 'react';

const portfolioItems = [
  {
    title: 'Campaña de Verano - Villavo Market',
    category: 'Redes Sociales',
    imageUrl: 'https://images.unsplash.com/photo-1557844352-761f2565b576?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Valla Publicitaria - Llanos Tour',
    category: 'Publicidad Exterior',
    imageUrl: 'https://images.unsplash.com/photo-15201860-3989b6857a53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Branding Corporativo - Café del Llano',
    category: 'Diseño Gráfico',
    imageUrl: 'https://images.unsplash.com/photo-1579237719972-dbd2d2421d5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Sitio Web E-commerce - Artesanías del Meta',
    category: 'Desarrollo Web',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function PortfolioPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">Nuestro Portafolio</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Aquí puedes ver una selección de nuestros trabajos más recientes. Nos enorgullece ayudar a nuestros clientes a alcanzar sus objetivos.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {portfolioItems.map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-900/50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
            <div className="relative">
              <img alt={item.title} className="w-full h-64 object-cover" src={item.imageUrl} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-primary dark:text-primary">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}