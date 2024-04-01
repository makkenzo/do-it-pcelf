'use client';

import { useEffect, useState } from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

import server from '@/lib/api';
import { ICard } from '@/types';

import Header from '@/components/header/header';

import { useUser } from '@clerk/nextjs';

import ProductCard from '@/components/card';
import { Toaster } from '@/components/ui/sonner';

interface CatalogProps {}

const Catalog = ({}: CatalogProps) => {
    const { isSignedIn, user, isLoaded } = useUser();

    const [data, setData] = useState<ICard[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await server.get('/products/get-products', { params: { page: 1, limit: 8 } });

            if (response.status === 200) {
                setData(response.data.data);
            }
        };

        fetchData();
    }, []);

    //

    return (
        <div>
            <Header />

            <nav className="mt-6 mx-auto max-w-[1280px] flex text-white text-lg">
                Главная &gt;&nbsp;<nav className="underline text-blue-600">Каталог</nav>
            </nav>

            <div className="mt-12 mx-auto max-w-[1280px] flex">
                {/* Filters */}
                <div>
                    <div className="flex mb-12">
                        <nav className="text-white text-xl">Фильтры</nav>
                        <button className="ml-14 text-blue-600 pt-1">Очистить все</button>
                    </div>

                    <Accordion type="single" collapsible className="w-72">
                        <AccordionItem value="item-1" className="text-white px-4">
                            <AccordionTrigger>Бренд</AccordionTrigger>
                            <AccordionContent>
                                <Checkbox id="terms" className="border-white mr-4" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                    peer-disabled:opacity-70"
                                >
                                    Asus
                                </label>
                            </AccordionContent>
                            <AccordionContent>
                                <Checkbox id="terms" className="border-white mr-4" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                    peer-disabled:opacity-70"
                                >
                                    Neo
                                </label>
                            </AccordionContent>
                            <AccordionContent>
                                <Checkbox id="terms" className="border-white mr-4" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                    peer-disabled:opacity-70"
                                >
                                    TechnoGaming
                                </label>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="text-white px-4">
                            <div className="flex justify-between my-2">
                                Скидка <Switch className="" />
                            </div>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="text-white px-4">
                            <AccordionTrigger>Цена</AccordionTrigger>
                            <AccordionContent>
                                <Input placeholder="макс." className="w-40 mx-auto placeholder:text-neutral-500" />
                                <Slider defaultValue={[0]} max={100} step={1} className="mt-8" />
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="text-white px-4">
                            <AccordionTrigger>Процессор</AccordionTrigger>
                            <AccordionContent>
                                <Checkbox className="border-white mr-4" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                peer-disabled:opacity-70"
                                >
                                    Intel Core i3
                                </label>
                            </AccordionContent>
                            <AccordionContent>
                                <Checkbox className="border-white mr-4" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                peer-disabled:opacity-70"
                                >
                                    Intel Core i5
                                </label>
                            </AccordionContent>
                            <AccordionContent>
                                <Checkbox className="border-white mr-4" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                peer-disabled:opacity-70"
                                >
                                    Intel Core i7
                                </label>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5" className="text-white px-4">
                            <AccordionTrigger>Видеокарта</AccordionTrigger>
                            <AccordionContent>
                                <Checkbox className="border-white mr-4" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                peer-disabled:opacity-70"
                                >
                                    NVIDIA
                                </label>
                            </AccordionContent>
                            <AccordionContent>
                                <Checkbox className="border-white mr-4" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                peer-disabled:opacity-70"
                                >
                                    AMD
                                </label>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6" className="text-white px-4">
                            <AccordionTrigger>ОЗУ</AccordionTrigger>
                            <AccordionContent>
                                <Checkbox className="border-white mr-4" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                peer-disabled:opacity-70"
                                >
                                    8гб
                                </label>
                            </AccordionContent>
                            <AccordionContent>
                                <Checkbox className="border-white mr-4" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                                peer-disabled:opacity-70"
                                >
                                    16гб
                                </label>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                {/* {Computers} */}
                <div className="ml-6">
                    <div className="w-full flex justify-end pr-4 mb-12">
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

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                        {data && data.length > 0 ? (
                            data.map((item, index) => <ProductCard item={item} index={index} />)
                        ) : (
                            <p>Loading..</p>
                        )}
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Catalog;
