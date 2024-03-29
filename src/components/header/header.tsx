'use client';

import Link from 'next/link';

import { UserButton, useAuth } from '@clerk/nextjs';
import { Search, User } from 'lucide-react';
import Logo from '../../../public/img/logo.png';

const Header = () => {
    // const user = useSelector((state: RootState) => state.user);
    const { userId } = useAuth();

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
                <Link
                    href="/basket"
                    className="text-white text-xl px-12 py-2 duration-300 rounded cursor-pointer hover:bg-neutral-900 active:underline"
                >
                    Корзина
                </Link>
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
