import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard.tsx';

const Products: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-black">Our Collection</h1>
                    <p className="text-slate-400 mt-2">Explore our range of premium electronic solutions.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
