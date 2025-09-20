import React from 'react';

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">Contáctanos</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          ¿Tienes alguna pregunta o quieres solicitar una cotización? Estamos aquí para ayudarte.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-900/50 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teléfono</label>
              <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Dirección</h3>
              <p className="text-gray-600 dark:text-gray-300">Calle 42 #31-50, Villavicencio, Meta</p>
            </div>
            <div>
              <h3 className="font-semibold">Teléfono</h3>
              <p className="text-gray-600 dark:text-gray-300">+57 310 123 4567</p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">contacto@publimeta.com</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-semibold mb-2">Síguenos en Redes</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Facebook</a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}