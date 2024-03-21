'use client'
import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import Link from 'next/link';
import clsx from 'clsx';

function Navbar2() {

    const [isSideMenuOpen, setMenu] = useState(false)

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
       }
        
        ];

    return(
    <div>
        <div className='absolute top-0 left-0 w-64 p-0 m-0 mt-[-30px]'>
            <img src='logo-2.svg'
             style={{ backgroundColor: 'transparent' }}
              alt="Logo Game" />      
        </div>

        <div className='absolute top-6 left-80 p-0 m-0 text-white cursor-pointer xl:hidden'>
            <IoMenu size={25}
            onClick={() =>setMenu(true)}
            />
            
        </div>

        <div className='absolute top-6 left-[275px] text-white cursor-pointer'>
        <GrCart id='carrito' size={25} />
        </div>


        <div className={clsx(
            'fixed h-full w-screen lg:hidden bg-black/5 backdrop-blur-sm top-0 transform transition-all z-50',
            isSideMenuOpen ? 'left-0 transition-all' : 'left-full transition-all'
            )}>

        <section className='text-primary bg-white flex-col absolute right-0 top-0 h-screen p-8 gap-10 z-50 flex w-56'>
            <IoClose 
            onClick={() =>setMenu(false)}
            className='mt-0 mb-8 text-3xl cursor-pointer'/>

            {navLinks.map((d, i) => (

            <Link key={i} className='font-bold' href={d.link}>
               {d.label}
                </Link>     
            ))}
            

        </section>
                </div>
     </div>
    )
}

export default Navbar2