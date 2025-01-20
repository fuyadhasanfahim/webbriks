'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingButton() {
    const [isVisible, setIsVisible] = useState(false);

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
            className={`fixed bottom-8 right-8 z-50 transform transition-all duration-300 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
        >
            <button
                onClick={openWhatsApp}
                className="bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 ring-offset-2 flex items-center justify-center"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="size-8" />
            </button>
        </div>
    );
}
