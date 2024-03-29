'use client';

import Loading from '@/app/(home)/basket/loading';
import server from '@/lib/api';
import { ICard } from '@/types';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';

const BasketInner = () => {
    const [items, setItems] = useState<ICard[]>();
    const [total, setTotal] = useState(0);

    const { user } = useUser();

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                try {
                    const response = await server.get(`/user/get-cart/${user.id}`);
                    setItems(response.data.items);
                    setTotal(response.data.items.reduce((total: any, item: any) => total + item.price, 0));
                } catch (error) {
                    console.error(error);
                }
            }
        };

        fetchData();
    }, [user]);

    return (
        <div className="w-full border-t-2 border-blue-500">
            <div className="flex justify-between px-28 pt-12">
                <Suspense fallback={<Loading />}>
                    <div className="block w-6/12">
                        {items &&
                            items.map((item) => (
                                <div key={item._id} className="w-full bg-white flex p-7 rounded-lg mb-6">
                                    <Image src={item.image} alt="card" width={182} height={196} />
                                    <div className="ml-6">
                                        <nav className="max-w-md">{item.name}</nav>
                                        <div className="flex justify-between mt-6">
                                            {item.price.toLocaleString('ru-RU')}тг
                                            <div className=" text-neutral-500 text-2xl">
                                                <button className="mr-6">
                                                    <img src="/img/trash.png" className="w-6 h-6" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </Suspense>

                <div className="w-1/3 bg-white px-8 py-4 rounded-lg">
                    <nav className="text-3xl">Ваш заказ</nav>
                    {items &&
                        items.map((item) => (
                            <div key={item._id} className="mt-8 w-full flex justify-between text-neutral-500 text-base">
                                <nav>{item.name.slice(0, 30) + '...'}</nav>
                                <nav>{item.price.toLocaleString('ru-RU')}тг</nav>
                            </div>
                        ))}

                    <div className="pt-3 w-full flex justify-between border-neutral-500 border-t-2">
                        <nav>Итого</nav>
                        <nav>{total.toLocaleString('ru-RU')}тг</nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasketInner;
