import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if window exists (client-side only)
        const checkMobile = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        checkMobile(); // Check on mount

        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, [breakpoint]);

    return isMobile;
}