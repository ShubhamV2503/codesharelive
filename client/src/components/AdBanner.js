"use client";

import { useEffect, useRef } from 'react';

export default function AdBanner() {
    const bannerRef = useRef(null);

    useEffect(() => {
        // Ensure this only runs once and only on the client
        if (bannerRef.current && !bannerRef.current.firstChild) {
            const confScript = document.createElement("script");
            confScript.type = "text/javascript";
            confScript.innerHTML = `
                atOptions = {
                    'key' : '2dd9e7ec1f829a7ec957621aefb9bfbd',
                    'format' : 'iframe',
                    'height' : 90,
                    'width' : 728,
                    'params' : {}
                };
            `;
            
            const loadScript = document.createElement("script");
            loadScript.type = "text/javascript";
            loadScript.src = "//www.highperformanceformat.com/2dd9e7ec1f829a7ec957621aefb9bfbd/invoke.js";
            
            bannerRef.current.appendChild(confScript);
            bannerRef.current.appendChild(loadScript);
        }
    }, []);

    return (
        <div className="flex justify-center w-full my-8 min-h-[90px] overflow-hidden">
            <div 
                ref={bannerRef}
                className="bg-gray-100/50 dark:bg-white/5 rounded-lg flex items-center justify-center text-xs text-gray-400 font-mono tracking-widest border border-dashed border-gray-300 dark:border-white/10"
                style={{ width: '728px', height: '90px' }}
            >
                {/* Adsterra script will inject here */}
                ADVERTISEMENT
            </div>
        </div>
    );
}
