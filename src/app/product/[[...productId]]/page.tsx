'use client';

import '@/app/globals.css';
import Header from '@/components/header/header';
import Loader from '@/components/loader';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import server from '@/lib/api';
import { ICard } from '@/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface ProductPageProps {
    params: { productId: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
    const [item, setItem] = useState<ICard>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await server.get(`/products/get-product/${params.productId}`);

            console.log('🚀 ~ fetchData ~ response:', response.data.data);
            setItem(response.data.data);
        };

        try {
            fetchData();
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <>
            <Header />

            <div className="container mx-auto">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/catalog">Каталог</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>Компьютер</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="container mx-auto mt-12">
                <div className="grid grid-cols-3">
                    <div>
                        {item ? (
                            <Image src={item.image} alt="product" width={500} height={500} />
                        ) : (
                            <div>
                                <Loader />
                            </div>
                        )}
                    </div>
                    <div>
                        {item ? (
                            <div className="flex flex-col gap-4">
                                <p>{item.name}</p>
                                <div className="flex h-5 gap-4 items-center">
                                    <p>{item.shipping.delivery}</p>
                                    <Separator orientation="vertical" className="border border-rose-500 h-full" />
                                    <p>{item.shipping.pickup}</p>
                                </div>
                            </div>
                        ) : (
                            <Loader />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
