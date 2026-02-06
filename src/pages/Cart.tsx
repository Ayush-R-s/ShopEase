import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="glass-card flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag size={40} className="text-slate-600" />
                </div>
                <h2 className="text-3xl font-black mb-2">Your cart is empty</h2>
                <p className="text-slate-400 mb-8 max-w-sm">Looks like you haven't added anything to your cart yet. Discover something special!</p>
                <Link to="/products">
                    <button className="btn-primary">Browse Catalog</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-10">
            <h1 className="text-4xl font-black">Shopping Cart</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                <div className="lg:col-span-2 space-y-4">
                    {cart.map(item => (
                        <div key={item.id} className="glass-card flex items-center gap-6 p-4">
                            <div className="w-24 h-24 overflow-hidden rounded-lg bg-white/5 shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold">{item.name}</h3>
                                <p className="text-indigo-400 font-bold mt-1">₹{item.price.toLocaleString()}</p>
                                <div className="flex items-center gap-4 mt-3">
                                    <div className="flex items-center bg-white/5 rounded-lg p-1 border border-white/10">
                                        <button
                                            className="p-1 hover:bg-white/10 rounded-md transition-colors"
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="w-10 text-center font-bold">{item.quantity}</span>
                                        <button
                                            className="p-1 hover:bg-white/10 rounded-md transition-colors"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                                onClick={() => removeFromCart(item.id)}
                            >
                                <Trash2 size={22} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="glass-card sticky top-24 space-y-6">
                    <h2 className="text-2xl font-bold border-b border-white/10 pb-4">Order Summary</h2>
                    <div className="space-y-3">
                        <div className="flex justify-between text-slate-400">
                            <span>Subtotal</span>
                            <span className="text-white">₹{totalPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                            <span>Shipping</span>
                            <span className="text-green-400 font-medium text-xs uppercase tracking-wider bg-green-400/10 px-2 py-0.5 rounded-full">Free</span>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                        <span className="text-slate-400 uppercase tracking-widest text-xs font-bold mb-1">Total</span>
                        <span className="text-3xl font-black text-indigo-400">₹{totalPrice.toLocaleString()}</span>
                    </div>
                    <button className="btn-primary w-full text-lg" onClick={() => navigate('/checkout')}>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
