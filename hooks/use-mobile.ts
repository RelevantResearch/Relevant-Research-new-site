import { useEffect, useState } from 'react';

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check if screen width is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // 768px is a common breakpoint for mobile
        };

        // Check on mount
        checkMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
}