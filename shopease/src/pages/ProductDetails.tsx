import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ArrowLeft, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';

const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return (
            <div className="glass-card text-center py-20">
                <h2 className="text-2xl font-bold mb-4">Product not found</h2>
                <button className="btn-primary mx-auto" onClick={() => navigate('/products')}>
                    Back to Products
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <button
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                onClick={() => navigate(-1)}
            >
                <ArrowLeft size={20} /> Back
            </button>

            <div className="glass-card grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="overflow-hidden rounded-2xl bg-white/5 p-4">
                    <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-xl shadow-2xl" />
                </div>
                <div className="space-y-6">
                    <div>
                        <span className="text-xs uppercase tracking-[0.2em] font-black text-indigo-400">
                            {product.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black mt-2 leading-tight">
                            {product.name}
                        </h1>
                    </div>

                    <p className="text-3xl font-black text-white">
                        ₹{product.price.toLocaleString()}
                    </p>

                    <p className="text-slate-400 leading-relaxed text-lg">
                        {product.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-y border-white/10">
                        <div className="flex items-center gap-3 text-sm text-slate-300">
                            <Truck size={18} className="text-indigo-400" />
                            <span>Free Delivery</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-300">
                            <ShieldCheck size={18} className="text-indigo-400" />
                            <span>1 Year Warranty</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-300">
                            <RefreshCcw size={18} className="text-indigo-400" />
                            <span>7 Days Return</span>
                        </div>
                    </div>

                    <button className="btn-primary w-full text-lg py-4" onClick={() => addToCart(product)}>
                        <ShoppingCart size={22} />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
