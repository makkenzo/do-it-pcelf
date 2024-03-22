'use client';

import { useState, useEffect } from "react"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import server from '@/lib/api';
import { ICard } from '@/types';
import Image from 'next/image';

import Header from '@/components/header/header'

import cart from '../../../../public/img/shopping-cart.png'
import cartHover from '../../../../public/img/shopping-cart-hover.png'
import star from '../../../../public/img/Star.png'
import heart from '../../../../public/img/heart.png'

interface CatalogProps {}

const Catalog = ({}: CatalogProps) => {
    const [data, setData] = useState<ICard[]>([]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [buttonHovered, setButtonHovered] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await server.get('/products/get-products', { params: { page: 1, limit: 8 } });
            console.log(response.data.data);
            

            if (response.status === 200) {
                setData(response.data.data);
            }
        };

        fetchData();
    }, []);
    
    return (
        <div>
            <Header/>

            <nav className='mt-6 px-40 flex text-white text-lg'>Главная &gt;&nbsp;<nav className='underline text-blue-600'>Каталог</nav></nav>
            
            <div className='mt-12 px-40 flex'>
                {/* Filters */}
                <div >
                    <div className='flex'>
                        <nav className='text-white text-xl'>Фильтры</nav> 
                        <button className='ml-14 text-blue-600 pt-1'>Очистить все</button>
                    </div>

                    <Accordion type="single" collapsible className="w-72">
                        <AccordionItem value="item-1" className="text-white px-4">
                            <AccordionTrigger>Бренд</AccordionTrigger>
                                <AccordionContent>
                                    <Checkbox id="terms" className="border-white mr-4"/>
                                    <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                    peer-disabled:opacity-70">
                                        Asus
                                    </label>
                                </AccordionContent>
                                <AccordionContent>
                                    <Checkbox id="terms" className="border-white mr-4"/>
                                    <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                    peer-disabled:opacity-70">
                                        Neo
                                    </label>
                                </AccordionContent>
                                <AccordionContent>
                                    <Checkbox id="terms" className="border-white mr-4"/>
                                    <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                    peer-disabled:opacity-70">
                                        TechnoGaming
                                    </label>
                                </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="text-white px-4">
                            <div className="flex justify-between my-2">Скидка <Switch className=""/></div>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="text-white px-4">
                            <AccordionTrigger>Цена</AccordionTrigger>
                            <AccordionContent>
                                <Input placeholder="макс." className="w-40 mx-auto placeholder:text-neutral-500"/>
                                <Slider defaultValue={[0]} max={100} step={1} className="mt-8" />
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="text-white px-4">
                            <AccordionTrigger>Процессор</AccordionTrigger>
                            <AccordionContent>
                                <Checkbox className="border-white mr-4"/>
                                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                peer-disabled:opacity-70">
                                    Intel Core i3
                                </label>
                            </AccordionContent>
                            <AccordionContent>
                                <Checkbox className="border-white mr-4"/>
                                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                peer-disabled:opacity-70">
                                    Intel Core i5
                                </label>
                            </AccordionContent>
                            <AccordionContent>
                                <Checkbox className="border-white mr-4"/>
                                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                peer-disabled:opacity-70">
                                    Intel Core i7
                                </label>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5" className="text-white px-4">
                            <AccordionTrigger>Видеокарта</AccordionTrigger>
                            <AccordionContent>
                                <Checkbox className="border-white mr-4"/>
                                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                peer-disabled:opacity-70">
                                    NVIDIA
                                </label>
                            </AccordionContent>
                            <AccordionContent>
                                <Checkbox className="border-white mr-4"/>
                                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                peer-disabled:opacity-70">
                                    AMD
                                </label>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6" className="text-white px-4">
                            <AccordionTrigger>ОЗУ</AccordionTrigger>
                            <AccordionContent>
                                <Checkbox className="border-white mr-4"/>
                                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                peer-disabled:opacity-70">
                                    8гб
                                </label>
                            </AccordionContent>
                            <AccordionContent>
                                <Checkbox className="border-white mr-4"/>
                                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                peer-disabled:opacity-70">
                                    16гб
                                </label>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                {/* {Computers} */}
                <div className="ml-6">
                    <div className="w-full flex justify-end pr-4">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Сортировать по:" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Цена: по убыванию</SelectItem>
                                <SelectItem value="dark">Цена: по возростанию</SelectItem>
                                <SelectItem value="system">Новинка</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                
                    <div className="grid grid-cols-3 gap-3">
                        {data &&
                            data.length > 0 &&
                            data.map((item, index) => (
                            <div
                                key={index}
                                className="w-72 bg-white p-4 rounded-xl shadow-white drop-shadow-lg m-4"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <Image src={item.image} alt="card" width={256} height={190} className="pb-4 border-b-2 border-neutral-700 mb-4 
                                hover:border-blue-500" />
                                <nav className="text-sm">{item.name.slice(0, 30) + '...'}</nav>
                                <div className="flex justify-between mt-4 text-base">
                                    {hoveredIndex !== index ? (
                                        <>
                                        <nav>{item.price.toLocaleString('ru-RU')}тг</nav>
                                        <nav><img src={star.src} alt="star" /></nav>
                                        </>
                                    ) : (
                                        <>
                                        <button
                                            className="flex mr-2 p-2 border-2 rounded-lg border-neutral-500 text-neutral-500 opacity-80 text-base
                                            duration-300 hover:opacity-100 hover:border-blue-500 hover:text-blue-500"
                                            onMouseEnter={() => setButtonHovered(true)}
                                            onMouseLeave={() => setButtonHovered(false)}
                                        >
                                            {buttonHovered ? <img src={cartHover.src} className="mr-2"/> : <img src={cart.src} className="mr-2"/>}
                                            Добавить в корзину
                                        </button>
                                        <button className="">
                                            <img src={heart.src}/>
                                        </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;