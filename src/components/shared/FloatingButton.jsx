'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export default function FloatingButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const openWhatsApp = () => {
        const phoneNumber = '+17185771232';
        const message = 'Hi, I would like to know more about your services.';
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div
            className={`fixed bottom-8 right-8 z-50 flex flex-col items-end gap-6 transform transition-all duration-700 
                ${
                    isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-20'
                }`}
        >
            <div
                className="group relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <a
                    href="/free-trail"
                    className="relative px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 
                             text-white font-medium overflow-hidden group flex items-center gap-2 
                             shadow-lg hover:shadow-orange-500/30 transition-all duration-500"
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                  animate-gradient-x"
                    />

                    <div className="relative flex items-center gap-2">
                        <span className="font-semibold">Free Trial</span>
                        <ArrowUpRight
                            className={`w-5 h-5 transition-all duration-300 
                            ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`}
                        />
                    </div>
                </a>
            </div>

            {/* WhatsApp Button */}
            <div className="relative group">
                {/* Multiple pulse rings */}
                <div className="absolute inset-0 rounded-full animate-ping bg-orange-500 opacity-20 duration-1000" />
                <div className="absolute inset-0 rounded-full animate-ping bg-orange-400 opacity-10 duration-2000 delay-200" />

                {/* Floating tooltip */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <div
                        className="bg-white/90 backdrop-blur-sm text-orange-600 px-4 py-2 rounded-xl shadow-lg
                                  transform transition-all duration-300 origin-right
                                  scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
                                  flex items-center gap-2 whitespace-nowrap"
                    >
                        <span>Chat with us</span>
                        <MessageCircle className="w-4 h-4 animate-bounce" />
                    </div>
                </div>

                <button
                    onClick={openWhatsApp}
                    className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 
                             text-white p-4 rounded-full shadow-lg 
                             transition-all duration-300 hover:scale-110 hover:rotate-12
                             focus:outline-none focus:ring-2 focus:ring-orange-300 ring-offset-2 
                             flex items-center justify-center group"
                    aria-label="Chat on WhatsApp"
                >
                    {/* Inner glow effect */}
                    <div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    <MessageCircle
                        className="size-8 transform transition-transform duration-300 
                                            group-hover:scale-90 group-hover:rotate-12"
                    />
                </button>
            </div>
        </div>
    );
}
