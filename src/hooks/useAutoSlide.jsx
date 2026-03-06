import { useEffect } from "react";

export const useAutoSlide = (callback, delay) => {
    useEffect(() => {
        const interval = setInterval(() => {
            callback();
        }, delay);

        return () => clearInterval(interval);
    }, [callback, delay]);
};