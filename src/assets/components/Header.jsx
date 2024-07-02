import React from 'react'
import Logo from '../../../public/svg/Logo';
import Button from './Button';
import Ancle from './Ancle';
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { HiOutlineArrowRightStartOnRectangle } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi2";

//componente personalizado de Header
function Header() {
    return (
        <header className='flex justify-between items-center py-4 px-8 bg-slate-50 text-white shadow-xl'>
            <div className='flex items-center W-1/6'>
                <a className='px-4 text-primary'>  <Logo size={70} /></a>
                <h1 className='text-sm font-bold text-primary'>INSIGNIA <br /> ITSOEH</h1>
            </div>
            <nav className='flex flex-1 items-center justify-center w-full'>

                <Ancle>
                    <span className='flex flex-1 items-center px-2'>
                        <HiOutlineHome />
                    </span>
                    Home
                </Ancle>
                <Ancle>
                    <span className='flex flex-1 items-center px-2'>
                        <HiOutlineArrowTrendingUp />
                    </span>
                    Estadísticas
                </Ancle>
                <Ancle>
                    <span className='flex flex-1 items-center px-2'>
                        <HiOutlineWrenchScrewdriver />
                    </span>
                    Administración
                </Ancle>
                <Ancle>
                    <span className='flex flex-1 items-center px-2'>
                        <HiOutlineCog6Tooth />
                    </span>
                    Configuración
                </Ancle>
                <Ancle>
                    <span className='flex flex-1 items-center px-2'>
                        <HiOutlineUser />
                    </span>
                    Perfil
                </Ancle>
                <Ancle>
                    <span className='flex flex-1 items-center px-2'>
                        <HiOutlineArrowRightStartOnRectangle />
                    </span>
                    Cerrar Sesión
                </Ancle>
            </nav>
        </header>
    )
}

export default Header;