'use client';

import './page.css';

// import { UserButton } from '@clerk/nextjs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import Companies from '../../components/img/companies.png';
import Image from 'next/image';

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

            <div className="hero">
                <div className="hero-title">
                    <nav>Ого!</nav>
                    <span>
                        Это же <h3>бузулукский колбас!</h3>
                    </span>
                </div>
                <img src={Banner.src} />
            </div>

            <img className="companies" src={Companies.src} />

            <div className="salers">
                <nav className="salers-nav">ХИТ ПРОДАЖ</nav>
                <div className="saler">
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
                                                <CardHeader>
                                                    <CardTitle>{item.name.slice(0, 30) + '...'}</CardTitle>
                                                </CardHeader>
                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    <Image src={item.image} alt="card" width={200} height={200} />
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    {/* <div className='category-blocks'>
                        <div className=''><img /></div>
                        <nav>Название</nav>
                        <span>Цена</span>
                    </div> */}
                </div>
            </div>

            <section className="sandbox__carousel">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </section>

            <Footer />
        </div>
    );
}
