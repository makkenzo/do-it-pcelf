export interface ICard {
    _id: string;
    url: string;
    name: string;
    image: string;
    price: number;
    shipping: {
        pickup: string;
        delivery: string;
    };
    specs: {
        headers: string[];
        descriptions: string[];
    };
}

export interface IConvertedCard {
    title: string;
    description: string;
    link: string;
    image: string;
}
