export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface Order {
    id: string;
    date: string;
    items: CartItem[];
    total: number;
    status: 'Pending' | 'Shipped' | 'Delivered';
}
