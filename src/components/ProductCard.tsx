import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="glass-card group flex flex-col">
            <Link to={`/products/${product.id}`} className="flex-1">
                <div className="w-full h-56 overflow-hidden rounded-xl mb-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                        {product.category}
                    </span>
                    <h3 className="text-lg font-bold mt-1 mb-2 group-hover:text-indigo-400 transition-colors">
                        {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-black text-indigo-400">
                            ₹{product.price.toLocaleString()}
                        </span>
                    </div>
                </div>
            </Link>
            <button
                className="btn-primary w-full mt-4"
                onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                }}
            >
                <ShoppingCart size={18} />
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
