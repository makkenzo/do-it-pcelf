'use client';

import server from '@/lib/api';
import { ICard } from '@/types';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Package, ShoppingCart, Truck } from 'lucide-react';
import { Button } from './ui/button';

interface ProductCardProps {
    item: ICard;
    index: number;
}

const ProductCard = ({ item, index }: ProductCardProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [buttonHovered, setButtonHovered] = useState(false);

    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        console.log('🚀 ~ ProductCard ~ item:', item);
    }, []);

    const handleAddToProductCard = (item: ICard) => {
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
        <Card className="min-h-[500px] flex flex-col justify-between">
            <CardHeader>
                {/* <CardTitle>{item.name.slice(0, 30)}..</CardTitle> */}
                <CardDescription>{item.name}</CardDescription>
            </CardHeader>
            <CardContent>
                <Link href={`/product/${item._id}`}>
                    <Image src={item.image} alt="computer" height={272} width={272} />
                </Link>
                <div className="flex flex-col gap-2 w-full justify-between">
                    <p className=" font-semibold text-2xl">{item.price}тг.</p>
                    <div className="flex justify-between">
                        <p className="flex gap-2 items-center">
                            <Truck />
                            {item.shipping.pickup}
                        </p>
                        |
                        <p className="flex gap-2 items-center">
                            <Package />
                            {item.shipping.delivery}
                        </p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex w-full gap-4">
                <Button className="w-full text-lg flex gap-2 items-center">
                    <ShoppingCart size={20} /> В корзину
                </Button>
                <Button variant="secondary">
                    <Heart size={20} />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
