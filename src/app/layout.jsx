// src/app/layout.jsx
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Publimeta S.A.S",
  description: "Publicidad digital y tradicional en Villavicencio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Header />

        {/* Contenido dinámico de cada página */}
        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
