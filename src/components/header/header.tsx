'use client';

import Link from 'next/link';

import { UserButton, useAuth } from '@clerk/nextjs';
import { Search, User } from 'lucide-react';
import Logo from '../../../public/img/logo.png';
import { Button } from '../ui/button';

const Header = () => {
    // const user = useSelector((state: RootState) => state.user);
    const { userId } = useAuth();

    return (
        <div className="sticky top-0 z-10 mb-4 drop-shadow-md">
            <header className="w-full  flex justify-around py-5 bg-white">
                <Link href="/">
                    <img src={Logo.src} />
                </Link>
                <div className="py-4">
                    <Link href="/catalog">
                        <Button variant="link" className="text-xl" size="lg">
                            Каталог
                        </Button>
                    </Link>
                    <Link href="/basket">
                        <Button variant="link" className="text-xl" size="lg">
                            Корзина
                        </Button>
                    </Link>
                </div>
                <div className="flex gap-4 items-center">
                    <Search className="w-8 h-8 " />
                    {userId ? (
                        <UserButton afterSignOutUrl="/" />
                    ) : (
                        <Link href="/sign-in">
                            <User className="w-8 h-8 " />
                        </Link>
                    )}
                </div>
            </header>
            <hr className="border-1 border-rose-500" />
        </div>
    );
};

export default Header;
