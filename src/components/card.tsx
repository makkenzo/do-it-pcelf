'use client';

import server from '@/lib/api';
import { ICard } from '@/types';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface CardProps {
    item: ICard;
    index: number;
}

const Card = ({ item, index }: CardProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [buttonHovered, setButtonHovered] = useState(false);

    const { user } = useUser();
    const router = useRouter();

    const handleAddToCard = (item: ICard) => {
        if (!user) {
            return;
        }

        try {
            const data = {
                item_id: item._id,
                user_id: user.id,
            };

            const response = server.post('/user/add-to-cart', data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div
            className="w-72 bg-white p-4 rounded-xl shadow-white drop-shadow-lg m-4"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            <Link href={`/product/${item._id}`}>
                <Image
                    src={item.image}
                    alt="card"
                    width={256}
                    height={190}
                    className="pb-4 border-b-2 border-neutral-700 mb-4 hover:border-blue-500 hover:drop-shadow-xl"
                />
            </Link>
            <nav className="text-sm">{item.name.slice(0, 30) + '...'}</nav>
            <div className="flex justify-between mt-4 text-base">
                {hoveredIndex !== index ? (
                    <>
                        <nav>{item.price.toLocaleString('ru-RU')}тг</nav>
                        <nav>
                            <img src="/img/Star.png" alt="star" />
                        </nav>
                    </>
                ) : (
                    <>
                        <button
                            className="flex mr-2 p-2 border-2 rounded-lg border-neutral-500 text-neutral-500 opacity-80 text-base
                                            duration-300 hover:opacity-100 hover:border-blue-500 hover:text-blue-500"
                            onMouseEnter={() => setButtonHovered(true)}
                            onMouseLeave={() => setButtonHovered(false)}
                            onClick={() => handleAddToCard(item)}
                        >
                            {buttonHovered ? (
                                <img src="/img/shopping-cart-hover.png" className="mr-2" />
                            ) : (
                                <img src="/img/shopping-cart.png" className="mr-2" />
                            )}
                            Добавить в корзину
                        </button>
                        <button className="">
                            <img src="/img/heart.png" />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Card;
