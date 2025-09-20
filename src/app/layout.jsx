import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Publimeta S.A.S - Servicios de Publicidad",
  description: "Servicios de publicidad en Villavicencio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
      <body className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
        <div className="relative min-h-screen w-full">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}