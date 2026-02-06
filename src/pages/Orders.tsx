import React from 'react';
import { useOrders } from '../context/OrderContext';
import { Package, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Orders: React.FC = () => {
    const { orders } = useOrders();

    if (orders.length === 0) {
        return (
            <div className="glass-card flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                    <Package size={40} className="text-slate-600" />
                </div>
                <h2 className="text-3xl font-black mb-2">No orders found</h2>
                <p className="text-slate-400 mb-8 max-w-sm">You haven't placed any orders yet. Start your journey today!</p>
                <Link to="/products">
                    <button className="btn-primary">Browse Catalog</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-10">
            <h1 className="text-4xl font-black">My Order History</h1>
            <div className="space-y-8">
                {orders.map(order => (
                    <div key={order.id} className="glass-card space-y-6">
                        <div className="flex flex-wrap justify-between items-center gap-4 pb-4 border-b border-white/10">
                            <div className="flex items-center gap-6">
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest font-black text-slate-500">Order Reference</span>
                                    <p className="font-bold text-white text-lg">{order.id}</p>
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest font-black text-slate-500">Placed On</span>
                                    <p className="font-bold text-white text-lg">{order.date}</p>
                                </div>
                            </div>
                            <div>
                                <span className="flex items-center gap-2 bg-green-500/10 text-green-400 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full border border-green-500/20">
                                    <Clock size={16} /> {order.status}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {order.items.map(item => (
                                <div key={item.id} className="flex items-center justify-between py-2">
                                    <div className="flex items-center gap-4">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover bg-white/5" />
                                        <div>
                                            <p className="font-bold text-white">{item.name}</p>
                                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Quantity: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <p className="font-black text-indigo-400">₹{(item.price * item.quantity).toLocaleString()}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Total Transaction</span>
                            <span className="text-2xl font-black text-white">₹{order.total.toLocaleString()}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
