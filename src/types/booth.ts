export interface Item {
    name: string;
    price: number;
    id?: string;
}

export interface Booth {
    name: string;
    link: string;
    offer: Item[];
    demand: Item[];
}

export interface BoothConfig {
    booths: Booth[];
}
