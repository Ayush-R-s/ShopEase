import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard.tsx';

const Home: React.FC = () => {
    const featuredProducts = products.slice(0, 3);

    return (
        <div className="space-y-16">
            <section className="glass-card text-center py-20 px-4 bg-gradient-to-br from-indigo-500/10 to-pink-500/10">
                <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                    Welcome to ShopEase
                </h1>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Discover a curated collection of premium gadgets and electronics, designed for those who demand excellence and style.
                </p>
                <Link to="/products" className="inline-block">
                    <button className="btn-primary text-lg px-10">
                        Explore Catalog <ArrowRight size={20} />
                    </button>
                </Link>
            </section>

            <section>
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold">Featured Products</h2>
                    <Link to="/products" className="text-indigo-400 font-medium hover:underline">View all items</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
