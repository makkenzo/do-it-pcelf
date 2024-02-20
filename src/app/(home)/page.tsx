'use client';

import './page.css'

import { GoogleGeminiEffect } from '@/components/ui/google-gemini-effect';
// import { UserButton } from '@clerk/nextjs';
import { useScroll, useTransform } from 'framer-motion';
import { ElementRef, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import EmblaCarousel from '../../components/ui/slider/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

import Banner from '../../components/img/banner.png'
import Companies from '../../components/img/companies.png'

export default function Home() {
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

    const OPTIONS: EmblaOptionsType = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <div
            className="w-full dark:border dark:border-white/[0.1] rounded-md relative overflow-clip"
            ref={ref}
        >
            <Header/>

            <div className='hero'>
                <div className='hero-title'>
                    <nav>Ого!</nav>
                    <span>Это же <h3>бузулукский колбас!</h3></span>
                </div>
                <img src={Banner.src}/>
            </div>

            <img className='companies' src={Companies.src}/>

            <div className='salers'>
                <nav className='salers-nav'>ХИТ ПРОДАЖ</nav>
                <div className='saler'>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full max-w-sm"
                        >
                        <CarouselContent>
                            {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                                <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-3xl font-semibold">{index + 1}</span>
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

            <Footer/>
        </div>
    );
}
