import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Order, CartItem } from '../types';

interface OrderContextType {
    orders: Order[];
    placeOrder: (items: CartItem[], total: number) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const savedOrders = localStorage.getItem('shopease_orders');
        if (savedOrders) {
            setOrders(JSON.parse(savedOrders));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('shopease_orders', JSON.stringify(orders));
    }, [orders]);

    const placeOrder = (items: CartItem[], total: number) => {
        const newOrder: Order = {
            id: `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
            date: new Date().toLocaleDateString(),
            items: [...items],
            total,
            status: 'Pending'
        };
        setOrders(prevOrders => [newOrder, ...prevOrders]);
    };

    return (
        <OrderContext.Provider value={{ orders, placeOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrders = () => {
    const context = useContext(OrderContext);
    if (context === undefined) {
        throw new Error('useOrders must be used within an OrderProvider');
    }
    return context;
};
