'use client';

import Link from 'next/link';

import Logo from '../img/logo.png';
import { User } from 'lucide-react';
import { Search } from 'lucide-react';
import { UserButton, useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
    // const user = useSelector((state: RootState) => state.user);
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    useEffect(() => {
        console.log('🚀 ~ Header ~ userId:', userId);
    }, [getToken, sessionId, userId, isLoaded]);

    return (
        <header className="w-full fixed top-0 flex justify-around py-5 bg-neutral-800 z-10">
            <Link href="/">
                <img src={Logo.src} />
            </Link>
            <div className="py-4">
                <Link
                    href="/"
                    className="text-white text-xl px-12 py-2 duration-300 rounded cursor-pointer hover:bg-neutral-900 active:underline"
                >
                    Главная
                </Link>
                <Link
                    href="/catalog"
                    className="text-white text-xl px-12 py-2 duration-300 rounded cursor-pointer hover:bg-neutral-900 active:underline"
                >
                    Каталог
                </Link>
                <a className="text-white text-xl px-12 py-2 duration-300 rounded cursor-pointer hover:bg-neutral-900 active:underline">
                    Корзина
                </a>
            </div>
            <div className="flex gap-4 items-center">
                <Search className="w-8 h-8 text-white" />
                {userId ? (
                    <UserButton afterSignOutUrl="/" />
                ) : (
                    <Link href="/sign-in">
                        <User className="w-8 h-8 text-white" />
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
