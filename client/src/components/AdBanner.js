"use client";

import { useEffect, useRef } from 'react';

export default function AdBanner() {
    const bannerRef = useRef(null);

    useEffect(() => {
        // Ensure this only runs once and only on the client
        if (bannerRef.current && !bannerRef.current.querySelector('iframe')) {
            // Set the global atOptions script
            window.atOptions = {
                'key': '2dd9e7ec1f829a7ec957621aefb9bfbd',
                'format': 'iframe',
                'height': 90,
                'width': 728,
                'params': {}
            };

            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = "https://www.highperformanceformat.com/2dd9e7ec1f829a7ec957621aefb9bfbd/invoke.js";
            
            // Append the script to the container
            bannerRef.current.appendChild(script);
        }
    }, []);

    return (
        <div className="flex justify-center w-full my-8 min-h-[90px] overflow-hidden">
            <div 
                ref={bannerRef}
                className="rounded-lg flex items-center justify-center overflow-hidden"
                style={{ width: '728px', height: '90px' }}
            >
                {/* Adsterra script will inject the iframe here */}
            </div>
        </div>
    );
}
