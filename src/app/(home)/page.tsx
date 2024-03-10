'use client';

// import { UserButton } from '@clerk/nextjs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { EmblaOptionsType } from 'embla-carousel';
import { useScroll, useTransform } from 'framer-motion';
import { ElementRef, useEffect, useRef, useState } from 'react';
import EmblaCarousel from '../../components/ui/slider/EmblaCarousel';

import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

import server from '@/lib/api';
import { ICard } from '@/types';

import Banner from '../../components/img/banner.png';
import Image from 'next/image';
import Apple from '../../components/img/apple.png'
import Sony from '../../components/img/sony.png'
import Samsung from '../../components/img/samsung.png'
import Canon from '../../components/img/canon.png'
import Huawei from '../../components/img/huawei.png'
import Lenovo from '../../components/img/lenovo.png'


export default function Home() {
    const [data, setData] = useState<ICard[]>([]);
    const ref = useRef<ElementRef<'div'>>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    const OPTIONS: EmblaOptionsType = { loop: true };
    const SLIDE_COUNT = 5;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

    useEffect(() => {
        const fetchData = async () => {
            const response = await server.get('/products/get-products', { params: { page: 1, limit: 8 } });

            if (response.status === 200) {
                setData(response.data.data);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full dark:border dark:border-white/[0.1] rounded-md relative overflow-clip" ref={ref}>
            <Header />

            <div className="w-full mb-20 flex justify-around px-48 pt-16 bg-neutral-900">
                <div className="text-white">
                    <nav className='text-4xl'>Ого!</nav>
                    <span className='text-3xl flex mt-10'>
                        Это же <h3 className='text-orange-500 ml-2'>бузулукский колбас!</h3>
                    </span>
                </div>
                <img src={Banner.src} />
            </div>

            <div className='flex justify-around px-40'>
                <a><img className='pt-1' src={Apple.src}/></a>
                <a><img className='pt-5' src={Sony.src}/></a>
                <a><img className='pt-5' src={Samsung.src}/></a>
                <a><img className='pt-5' src={Canon.src}/></a>
                <a><img src={Huawei.src}/></a>
                <a><img className='pt-5' src={Lenovo.src}/></a>
            </div>

            <div className="mx-52 my-24">
                <nav className="w-full pb-2 text-3xl text-white border-b-2 border-white mb-20">ХИТ ПРОДАЖ</nav>
                <div className="flex mb-14 px-10">
                    <Carousel
                        opts={{
                            align: 'start',
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {data &&
                                data.length > 0 &&
                                data.map((item, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                                        <div className="p-1">
                                            <Card>
                                                <CardHeader className='border-b-2 border-neutral-500'>
                                                    <Image src={item.image} alt="card" width={200} height={200} />
                                                </CardHeader>
                                                <CardContent className="items-center justify-center p-6">
                                                    <CardTitle>{item.name.slice(0, 27) + '...'}</CardTitle>
                                                </CardContent>
                                                <CardFooter>
                                                    {item.price.toLocaleString('ru-RU')}тг
                                                </CardFooter>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>

            <section className="sandbox__carousel">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </section>

            <Footer />
        </div>
    );
}
