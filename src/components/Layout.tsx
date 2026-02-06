import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            <Navbar />
            <main className="flex-1 w-full max-w-7xl mx-auto px-[5%] py-8">
                {children}
            </main>
            <footer className="py-8 text-center border-t border-white/5 text-slate-400 text-sm">
                <p>&copy; 2024 ShopEase. All rights reserved.</p>
                <p className="mt-1">Built with React + TypeScript + Tailwind CSS</p>
            </footer>
        </div>
    );
};

export default Layout;
