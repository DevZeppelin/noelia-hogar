import React, { useState } from "react";
import { BiHomeHeart } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaWhatsapp,  
  FaFacebook  
} from "react-icons/fa";
import Link from "next/link";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const toggleNav = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div>
      <div className="px-2 md:px-24 bg-primary text-lowContrast flex justify-between h-16">
        <Link href="/">
          <a className="text-lowContrast text-2xl flex align-baseline px-2 md:px-10 my-auto hover:text-background">
            <BiHomeHeart className="inline text-4xl mr-4" /> Noelia Hogar
          </a>
        </Link>
       

        <div className="p-2 md:p-4 md:hidden flex justify-center w-10 text-2xl">
          <button onClick={toggleNav} aria-label="Hamburguer Button of Main Content">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      <div
        className="absolute z-20 right-0 bg-primary text-lowContrast w-3/4 rounded-b-3xl"
        style={{ display: open ? "block" : "none" }}
      >
        <div className="flex text-right flex-col text-base p-2 text-background mb-5">
          <Link href="/">
            <a className="mr-2  mt-2 px-3 hover:border-black">Home 🏠</a>
          </Link>
          <Link href="/electro">
            <a className="mr-2 mt-5 px-3 hover:border-black">
              Electrodomésticos 🔌
            </a>
          </Link>
          <Link href="/ropa">
            <a className="mr-2 mt-5 px-3 hover:border-black">Ropa 👕</a>
          </Link>
          <Link href="/calzado">
            <a className="mr-2 mt-5 px-3 hover:border-black">Calzado 👟</a>
          </Link>
          <Link href="/artesanias">
            <a className="mr-2 mt-5 px-3 hover:border-black">
              Artesanías 🏺
            </a>
          </Link>
          
        </div>
      </div>

      <div className="hidden md:flex justify-center px-2 md:px-24 bg-backgroundSecundary text-background border-b border-black text-base">
        <Link href="/">
          <a className="mr-6  mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Home 🏠
          </a>
        </Link>
        <Link href="/electro">
          <a className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Electrodomésticos 🔌
          </a>
        </Link>
        <Link href="/ropa">
          <a className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Ropa 👕
          </a>
        </Link>
        <Link href="/calzado">
          <a className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Calzado 👟
          </a>
        </Link>
        <Link href="/artesanias">
          <a className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Artesanías 🏺
          </a>
        </Link>
        
      </div>

      {children}

      
      <div className="bg-secundary text-background px-6 md:px-24 flex flex-col py-5 mt-8">
        <p className="text-center text-2xl pb-6">¡Contactame!</p>
        <div
          id="contacto"
          className="flex space-x-5 md:space-x-10 text-2xl justify-center"
        >
          <Link
            href="https://api.whatsapp.com/send?phone=5492634750981"
            target="_blank"
          >
            <button
              aria-label="go to my whatsapp"
              target="_blank"
              rel="noopener"
              alt="whatsapp-logo"
            >
              <FaWhatsapp className="hover:text-green-700 text-4xl" />
            </button>
          </Link>

          
          <Link href="https://www.facebook.com/noelia.raffo.3">
            <button
              aria-label="go to my fabecook"
              target="_blank"
              rel="noopener"
              alt="facebook-logo"
            >
              <FaFacebook className="hover:text-blue-800 text-4xl" />
            </button>
          </Link>



          <Link href="mailto:noelia81raffo@hotmail.com">
            <button
              aria-label="send me a mail"
              target="_blank"
              rel="noopener"
              alt="gmail-logo"
            >
              <FiMail className="hover:text-indigo-700 text-4xl" />
            </button>
          </Link>
        </div>
        <p className="text-center text-lg mt-6">¡ Pago y Financiamiento con Mercado Pago y todas las tarjetas !</p>
       

        <div className="mt-10 text-sm max-w-4xl text-primary">
          Make with &#128153; in Mendoza, Argentina, by Gino Pietrobon. My page: <a href="https://www.moonblog.ar" target="_blank" className="text-primary text-bold">moonblog.ar</a> All
          rights reserved. &copy; &nbsp; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
