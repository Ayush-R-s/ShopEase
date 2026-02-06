import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, LogIn, LogOut, User, Package } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
    const { user, isAuthenticated, logout } = useAuth();
    const { itemCount } = useCart();

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-[5%] py-4 bg-white/5 backdrop-blur-xl border-b border-white/10">
            <div className="text-2xl font-extrabold tracking-tight">
                <Link to="/" className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
                    ShopEase
                </Link>
            </div>
            <div className="flex items-center gap-8">
                <Link to="/products" className="nav-item">Products</Link>
                {isAuthenticated ? (
                    <>
                        <Link to="/orders" className="nav-item">
                            <Package size={20} />
                            <span>Orders</span>
                        </Link>
                        <div className="nav-item">
                            <User size={20} />
                            <span>{user?.name}</span>
                        </div>
                        <button onClick={logout} className="flex items-center gap-2 font-medium transition-colors hover:text-red-400">
                            <LogOut size={20} />
                            <span>Logout</span>
                        </button>
                    </>
                ) : (
                    <Link to="/login" className="nav-item">
                        <LogIn size={20} />
                        <span>Login</span>
                    </Link>
                )}
                <Link to="/cart" className="relative flex items-center gap-2 font-medium hover:text-indigo-400 transition-colors">
                    <ShoppingCart size={20} />
                    {itemCount > 0 && (
                        <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-[10px] font-bold text-white">
                            {itemCount}
                        </span>
                    )}
                    <span>Cart</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
