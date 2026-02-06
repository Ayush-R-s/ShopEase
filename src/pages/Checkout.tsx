import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { useAuth } from '../context/AuthContext';
import { CreditCard, Truck, CheckCircle } from 'lucide-react';

const Checkout: React.FC = () => {
    const { cart, totalPrice, clearCart } = useCart();
    const { placeOrder } = useOrders();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [isOrdered, setIsOrdered] = useState(false);

    const [formData, setFormData] = useState({
        address: '',
        city: '',
        zip: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    if (!isAuthenticated) {
        return (
            <div className="glass-card text-center py-20">
                <h2 className="text-3xl font-black mb-4">Authentication Required</h2>
                <p className="text-slate-400 mb-8 max-w-sm mx-auto">Please login to your account to proceed with the secure checkout process.</p>
                <button className="btn-primary mx-auto" onClick={() => navigate('/login')}>Login Now</button>
            </div>
        );
    }

    if (cart.length === 0 && !isOrdered) {
        return (
            <div className="glass-card text-center py-20">
                <h2 className="text-3xl font-black mb-4">Your cart is empty</h2>
                <button className="btn-primary mx-auto" onClick={() => navigate('/products')}>Return to Shop</button>
            </div>
        );
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        placeOrder(cart, totalPrice);
        setIsOrdered(true);
        clearCart();
    };

    if (isOrdered) {
        return (
            <div className="glass-card flex flex-col items-center justify-center py-24 text-center">
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle size={56} className="text-green-400" />
                </div>
                <h2 className="text-4xl font-black mb-4 text-white">Order Placed Successfully!</h2>
                <p className="text-slate-400 mb-10 max-w-md">Thank you for shopping with ShopEase. Your order has been recorded and is now being processed.</p>
                <button className="btn-primary" onClick={() => navigate('/orders')}>View My Orders</button>
            </div>
        );
    }

    return (
        <div className="space-y-10">
            <h1 className="text-4xl font-black">Checkout</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                <div className="lg:col-span-2 space-y-6">
                    <section className="glass-card space-y-6">
                        <h3 className="text-xl font-black flex items-center gap-3 border-b border-white/10 pb-4">
                            <Truck size={24} className="text-indigo-400" />
                            Shipping Address
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                name="address"
                                placeholder="Street Address"
                                className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all md:col-span-2"
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                name="city"
                                placeholder="City"
                                className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                name="zip"
                                placeholder="ZIP Code"
                                className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </section>

                    <section className="glass-card space-y-6">
                        <h3 className="text-xl font-black flex items-center gap-3 border-b border-white/10 pb-4">
                            <CreditCard size={24} className="text-indigo-400" />
                            Payment Detail
                        </h3>
                        <div className="space-y-4">
                            <input
                                name="cardNumber"
                                placeholder="Card Number"
                                maxLength={16}
                                className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                onChange={handleInputChange}
                                required
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    name="expiry"
                                    placeholder="MM/YY"
                                    maxLength={5}
                                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    name="cvv"
                                    placeholder="CVV"
                                    maxLength={3}
                                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold text-center">
                            Transaction is simulated · No real data is stored
                        </p>
                    </section>
                </div>

                <div className="glass-card sticky top-24 space-y-8">
                    <h3 className="text-2xl font-black border-b border-white/10 pb-4">Summary</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between text-slate-400">
                            <span>Items in Cart</span>
                            <span className="text-white font-bold">{cart.length}</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                            <span>Delivery</span>
                            <span className="text-green-400 font-bold uppercase tracking-widest text-[10px] bg-green-400/10 px-2 py-1 rounded">Complimentary</span>
                        </div>
                        <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                            <span className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-1">Total Due</span>
                            <span className="text-3xl font-black text-indigo-400">₹{totalPrice.toLocaleString()}</span>
                        </div>
                    </div>
                    <button type="submit" className="btn-primary w-full py-4 text-lg">
                        Finalize Order
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
