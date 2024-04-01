'use client';

import Header from '@/components/header/header';

import { Toaster } from '@/components/ui/sonner';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import SideFilters from '@/components/side-filters';

interface CatalogProps {}

const Catalog = ({}: CatalogProps) => {
    return (
        <div>
            <Header />

            <div className="container px-0 mx-auto">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>Каталог</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <SideFilters />
            <Toaster />
        </div>
    );
};

export default Catalog;
