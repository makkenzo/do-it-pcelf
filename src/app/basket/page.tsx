'use client';

import { useState, useEffect } from "react"

import Header from '@/components/header/header'

import server from '@/lib/api';
import { ICard } from '@/types';
import Image from 'next/image';

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

       <div className='w-full border-b-2 border-blue-500'>
          <div className='flex justify-between px-28'>
            <div className="block w-6/12">
              {data &&
                data.length > 0 &&
                data.map((item, index) => (
                    <div key={index} className="w-full bg-white flex p-7 rounded-lg mb-6">
                        <Image src={item.image} alt="card" width={182} height={196}/>
                        <div className="ml-6">
                          <nav></nav>
                        </div>
                    </div>
                ))}      
            </div>

            <div className="w-96 h-16 bg-white">

            </div>
          </div>
       </div>
    </div>
  )
}

export default Basket