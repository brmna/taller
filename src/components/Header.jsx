import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-100 shadow">
        <h1 className="text-xl font-bold">Publimeta S.A.S</h1>
        <nav className="space-x-4">
            <Link href="/">Inicio</Link>
            <Link href="/services">Servicios</Link>
            <Link href="/contact">Contacto</Link>
            <Link href="/us">Nosotros</Link>
        </nav>
        </header>
);
}