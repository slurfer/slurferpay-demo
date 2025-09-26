export interface Item {
    name: string;
    price: number;
}

export interface Booth {
    name: string;
    link: string;
    offer: Item[];
    want: Item[];
}

export interface BoothConfig {
    booths: Booth[];
}
