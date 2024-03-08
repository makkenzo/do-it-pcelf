import Link from "next/link";

import Logo from '../img/logo.png'
import Search from '../img/search.png'
import Profile from '../img/profile.png'

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
    return (
        <header className="w-full fixed top-0 flex justify-around py-5 bg-neutral-800 z-10">
        <img src={Logo.src}/>
        <div className="py-4">
            <Link href='/' className='text-white text-xl px-12 py-2 duration-300 rounded cursor-pointer hover:bg-neutral-900 active:underline'>Главная</Link>
            <Link href='/catalog' className='text-white text-xl px-12 py-2 duration-300 rounded cursor-pointer hover:bg-neutral-900 active:underline'>Каталог</Link>
            <a className='text-white text-xl px-12 py-2 duration-300 rounded cursor-pointer hover:bg-neutral-900 active:underline'>Корзина</a>
        </div>
        <div className="flex">
            <img className='w-16 h-16' src={Search.src}/>
            <img className='w-16 h-16' src={Profile.src}/>
        </div>
    </header>
    );
};

export default Header;
