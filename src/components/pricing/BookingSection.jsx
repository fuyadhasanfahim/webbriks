'use client';

import { useEffect } from 'react';

const BookingSection = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/fuyadhasanfahim179/30min?background_color=ffffff&text_color=000000&primary_color=ffa726&hide_event_type_details=1"
            style={{ width: '400px', height: '600px' }}
        />
    );
};

export default BookingSection;
