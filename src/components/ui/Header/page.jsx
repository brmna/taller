

import Image from 'next/image'

import Link from 'next/link'

const banner = '/banner.webp'

export default function Header(){
    return (
        <header className="flex flex-col w-full h-[300px] bg-white relative">
            <Image src={banner} alt='banner' fill />

            <nav className="flex justify-between text-black relative pt-6 px-4">
                <div className='flex'>
                    <Link href='/' className="mr-10"> Logo de mi Tienda </Link>
                    <div className='hidden sm:flex '>

                        <Link className="mr-4 hover:text-red-900  hover:border-b-2" href="/">Home</Link>
                        <Link className="mr-4 hover:text-red-900 hover:border-b-2" href="/services">Servicios</Link>
                        <Link className="mr-4 hover:text-red-900 hover:border-b-2" href="/contact">Contacto</Link>
                        <Link className="mr-4 hover:text-red-900 hover:border-b-2" href="/about">Información</Link>
                    </div>
                </div>
                <div>
                    <Link className="hover:border-b-2 hover:text-red-900 hover:border-red-900" href='/login'> Iniciar Sesión </Link>
                </div>
            </nav>
        </header>
    )
}