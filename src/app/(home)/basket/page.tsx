'use client';

import Header from '@/components/header/header';
import { useUser } from '@clerk/nextjs';
import BasketInner from '@/components/basket';
import { Suspense } from 'react';
import Loading from './loading';

interface BasketProps {}

const Basket = ({}: BasketProps) => {
    const { user } = useUser();

    return (
        <div>
            <Header />

            <Suspense fallback={<Loading />}>
                <BasketInner />
            </Suspense>
        </div>
    );
};

export default Basket;
