'use client';

import { GoogleGeminiEffect } from '@/components/ui/google-gemini-effect';
import { UserButton } from '@clerk/nextjs';
import { useScroll, useTransform } from 'framer-motion';
import { ElementRef, useRef } from 'react';

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

    return (
        <div
            className="h-[300vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
            ref={ref}
        >
            <GoogleGeminiEffect
                title="Сделано с любовью"
                description="Мы создаем красивые и удобные сайты, которые помогут вам вести бизнес и привлекать клиентов."
                pathLengths={[pathLengthFirst, pathLengthSecond, pathLengthThird, pathLengthFourth, pathLengthFifth]}
            />
        </div>
    );
}
