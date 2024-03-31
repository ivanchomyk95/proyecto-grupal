import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import clsx from "clsx";

function Navbar({ isVisible, setIsVisible }) {
    const [isSideMenuOpen, setMenu] = useState(false);
  
    const navLinks = [
      {
        label: "Inicio",
        link: "#",
      },
      {
        label: "Productos",
        link: "#",
      },
      {
        label: "Conócenos",
        link: "#",
      },
      {
        label: "Contacto",
        link: "#",
      },
    ];

    return (
        <div>
            <div className="absolute left-80 top-6 m-0 cursor-pointer p-0 z-60 text-white xl:hidden">
                <IoMenu size={25} onClick={() => setMenu(true)} />
            </div>
            <div className={clsx(
                "fixed top-0 z-60 h-full w-screen transform bg-black/5 backdrop-blur-sm transition-all lg:hidden",
                isSideMenuOpen ? "left-0 transition-all" : "left-full transition-all",
            )}>
                <section className="text-primary absolute right-0 top-0 z-60 flex h-screen w-56 flex-col gap-10 bg-white p-8">
                    <IoClose
                        onClick={() => setMenu(false)}
                        className="mb-8 mt-0 cursor-pointer text-3xl"
                    />
                    {navLinks.map((d, i) => (
                        <Link key={i} className="font-bold" href={d.link}>
                            {d.label}
                        </Link>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default Navbar;
