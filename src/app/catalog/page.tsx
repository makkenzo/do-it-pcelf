import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

import Header from '../../components/header/header'

interface CatalogProps {}

const Catalog = ({}: CatalogProps) => {
    
    return (
        <div>
            <Header/>

            <nav className='mt-6 px-40 flex text-white text-lg'>Главная &gt;&nbsp;<nav className='underline text-sky-600'>Каталог</nav></nav>
            
            <div className='mt-12 px-40'>
                {/* Filters */}
                <div >
                    <div className='flex'>
                        <nav className='text-white text-xl'>Фильтры</nav> 
                        <button className='ml-14 text-sky-600 pt-1'>Очистить все</button>
                    </div>

                    <Accordion type="single" collapsible className="w-72">
                        <AccordionItem value="item-1" className="text-white">
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
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Catalog;