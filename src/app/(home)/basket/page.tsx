'use client';

import { useState, useEffect } from "react"

import Header from '@/components/header/header'

import server from '@/lib/api';
import { ICard } from '@/types';
import Image from 'next/image';

import Trash from '../../../../public/img/trash.png'

interface BasketProps {}

const Basket = ({}: BasketProps) => {
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

  return (
    <div>
       <Header/> 

       <div className='w-full border-t-2 border-blue-500'>
          <div className='flex justify-between px-28 pt-12'>
            <div className="block w-6/12">
              {data &&
                data.length > 0 &&
                data.map((item, index) => (
                    <div key={index} className="w-full bg-white flex p-7 rounded-lg mb-6">
                        <Image src={item.image} alt="card" width={182} height={196}/>
                        <div className="ml-6">
                          <nav className="max-w-md">{item.name}</nav>
                          <div className="flex justify-between mt-6">
                            {item.price.toLocaleString('ru-RU')}тг
                            <div className=" text-neutral-500 text-2xl">
                              <button className="mr-6">
                                <img src={Trash.src} className="w-6 h-6"/>
                              </button>
                              <button className="mr-6">-</button>
                              <button className="ml-6 duration-300">+</button>
                            </div>
                          </div>
                        </div>
                    </div>
                ))}      
            </div>

            <div className="w-1/3 bg-white px-8 py-4 rounded-lg">
                  <nav className="text-3xl">Ваш заказ</nav>
                  {data &&
                    data.length > 0 &&
                    data.map((item, index) => (
                        <div key={index} className="mt-8 w-full flex justify-between text-neutral-500 text-base">
                            <nav>{item.name.slice(0, 30) + '...'}</nav>
                            <nav>{item.price.toLocaleString('ru-RU')}тг</nav>
                        </div>
                  ))} 

                  <div className="pt-3 w-full flex justify-between border-neutral-500 border-t-2">
                    <nav>Итого</nav>
                    <nav>тг</nav>
                  </div>     
            </div>
          </div>
       </div>
    </div>
  )
}

export default Basket