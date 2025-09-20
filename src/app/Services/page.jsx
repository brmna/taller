import React from 'react';

const digitalServices = [
  {
    title: 'Marketing en Redes Sociales',
    description: 'Gestionamos tus redes sociales para aumentar tu visibilidad y engagement.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWJhIGGa1qcsPH2AflEaaIJD0ljPnpgTGHbKFuxnrWDF8nK_wGRzreJq4CouMhkPfmttmje5NTW4qbnOrb5xhLi0bLqJ-4cCUZtrjdb3eAolZGux_PM_sBKmH6quzL8gNcedhiFz7GhgyfrCCRU3a99IaLVOTqcyF_saVxMTh4RNVCFmLew6kARcpctpXSP0OW3QP6wy5RhnF3LPVeIfWtny2E68RR-0nIx48x1FmRd-JA86361pSuVLxpU8muoXbQ4RuoS7nwiek',
  },
  {
    title: 'Publicidad en Buscadores',
    description: 'Creamos campañas de publicidad en buscadores para atraer clientes potenciales.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIhFps5tUsXEXfcaRGbb1Zx8kRKsWfnPBVO1v_J0FxeLPmT2SSeQ_s6p7N8j0Nl2l7jBB1ImTM_sDX0olneUYqXGO3uUW9lnTLRdPE8rasQWSlyR0zGwXn1Zklj83Ey8uOUK8yfS4ecw-kh-dKIxqAyElKIDBkiJAwuu8A6j5VzuSiawk0lMt1KlDyqZkOSi_dlW9FO5sKlZ_d5bh2TUhIzPkdhEgkPDPejtDMFl9jBQ_SavIepZ39ZAu2-0XzMqXjlyTGeirVMOc',
  },
  {
    title: 'Email Marketing',
    description: 'Diseñamos y enviamos correos electrónicos efectivos para promocionar tus productos o servicios.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUSwgiZeaxpySt0cmf85dTgUerZY7kGblfMQpJwabtNUhIYMzjzWLD-cw14IRhQvbumkbW0fiMLupGUfSZ1KdlBvjMvTNQBk6UbhESHoWxyB-EOQ-gpjPzvC7rB4ivrPId606oaBmmPKcbqxeMAa-W4VolHYij3bCRTW-gC5tqdij7p1fxC0Qt9AN8v2hN33bEkEBMNchifaUQmE6m4evkJuJfWJTuDtb1o6xerBOZOcGkdYwm90TCV4Em3Xep7rRPb8s_FraUrVw',
  },
  {
    title: 'Diseño y Desarrollo Web',
    description: 'Creamos sitios web atractivos y funcionales que representan tu marca.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTI7yEB2mfbwRZGBaugY7iAsTVpTpokEavY9RqMc3hbLfSTRHclO0oWFThOk3ZGtBl2-bbZgS9gks0_LV2U_C-GqV5DKIw9AWkWa8aBVH74n2v_f_WLSDmGo67vMtGT7yIMCo62w7ZHRsrxIq9rhdmEbwX3CUWKUgHleEoJdE6iYHddXJRDoPGlhSjt4lIPuZJda0R-9UY6v2rTtU1tVL7YinSr0v6d4Mla9PspBU0ieMQi_cvq3ubsNSnTlYFPtfcQO8yBI1INTg',
  },
];

const traditionalServices = [
  {
    title: 'Vallas Publicitarias',
    description: 'Ubicamos vallas publicitarias en lugares estratégicos para maximizar el impacto.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZUOOeJOqPj0fE6elAE4yySNij80wUHlVGbqFf-Kc8XIeOKzIqGDyMUp4_cG2cz7amNCxBKVgL9n5ybX9FPZFAqXfAd2Ms1x-ax8qm6BmLEoVp7-EJFMRwA6BjMGI9GcvdMYvooXCIR1fer-iWqfrX_2ok44ETAJGUpCJL-5RFRQ-vNzoE6zu__YkOQ-fho9CIM-OhtGIo8UTWgRlNB14Mkn42jPUHZvhx96FWrSym-OGIqR53jJ_pwmKIULEuupQhaA7CwJue3po',
  },
  {
    title: 'Impresión de Material',
    description: 'Imprimimos folletos, carteles y tarjetas de presentación de alta calidad.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk9yC9nqa8X94A33lrW6p0CvfKmlK31W8CzDT8xfPSJxvWKq5oZg9G-_m3bsODZu_yQnBurMls88h-Vb969yGjulPx7JMWj0nJ_65yEg1xh-_cinWm6x-TpVVn0bmOXm6lj3svB9EYUJipXWb7hzxDneWmiojlvcRTPjQt0XMwwQd3_AO3twz-1oU44rIPCiq1lWWr8fSxqNQVa-yhvRkVq4SIUPtv86BR08ZwCQnRy8Wepumra7A3B4a-UaA4S_uUjF7V175ChqI',
  },
  {
    title: 'Diseño Gráfico',
    description: 'Creamos diseños gráficos innovadores que capturan la esencia de tu marca.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwPuKh7QjTMLyuNgYnfbrgFQrpgdT3SRsF6F3OGcdhfzEjT0_M-CCIr2XOc5dX-EnpCS9rXUzdelY7dpi3TH1iU82DBtY-_CaaSfaE9t6JM_fpAiIYyBVlFmYdkoGwfyencMpFWbxY5bgmzsTlW3UoMNLlOlTGrtkiZeg8ohFXeVImZuuPu6Z3MZq_T_qW3hCoZAzPRo6OBpzy991PrRnAels1ZR68CaR55oqArzuLkysMb7BlhLmv5uDk9q5ET5bO0Dfg2vqYCzQ',
  },
  {
    title: 'Eventos y Activaciones',
    description: 'Organizamos eventos para conectar tu marca con tu público objetivo.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_rtm5IPOFhZRD_lqFhodYAOv7Zgk5-p5J0hy_IeDr8Vr3C3RIYLbSl0zXgFazcpp6R-MmGInjVKIuwg0YSt3kID2oZ0WDaK4MRvJ61jJ853824EQZyHjcqI4-E6rUdQbmDgP9fXESS72c2WrSuJU7CVblTNkQyH3evB4B3UsabjkfZ6XprfWAKbA6f3H9LP9ZWb-dwrCE6rFuDiTc01IuPi30O94iXK8i9dsKBuflrTq9jUQhGZtIgBSnpJT_RR2Am-jfn6flsj0',
  },
];

const ServiceCard = ({ title, description, imageUrl }) => (
  <div className="bg-white dark:bg-gray-900/50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
    <div className="relative">
      <img alt={title} className="w-full h-48 object-cover" src={imageUrl} />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
    </div>
    <div className="p-6">
      <h3 className="font-bold text-lg text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">Nuestros Servicios</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          En Publimeta S.A.S, ofrecemos una amplia gama de servicios de publicidad digital y tradicional para ayudar a tu negocio a crecer. Explora nuestras soluciones y encuentra la perfecta para tus necesidades.
        </p>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Publicidad Digital</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {digitalServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Publicidad Tradicional</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {traditionalServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </main>
  );
}