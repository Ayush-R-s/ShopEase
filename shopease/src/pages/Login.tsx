import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && password) {
            login(email, 'Demo User');
            navigate('/');
        }
    };

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="glass-card w-full max-w-md space-y-8 p-10">
                <div className="text-center">
                    <h1 className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent inline-block">
                        Welcome Back
                    </h1>
                    <p className="mt-2 text-slate-400">Please enter your credentials to continue shopping.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@example.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white"
                            required
                        />
                    </div>

                    <button type="submit" className="btn-primary w-full py-4 text-lg">
                        Sign In
                    </button>
                </form>

                <div className="text-center text-sm text-slate-500">
                    Don't have an account? <Link to="/login" className="text-indigo-400 font-bold hover:underline">Sign up for free</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
