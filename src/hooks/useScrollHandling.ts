import { useEffect, useRef, useState } from 'react';

export const useScrollHandling = () => {
    const [scrollDirection, setScrollDirection] = useState<
        null | 'down' | 'up'
    >(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const prevScrollPosition = useRef(0);

    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition > prevScrollPosition.current) {
            setScrollDirection('down');
        } else {
            setScrollDirection('up');
        }
        prevScrollPosition.current =
            currentScrollPosition <= 0 ? 0 : currentScrollPosition;

        setScrollPosition(currentScrollPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);
        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);
    return { scrollDirection, scrollPosition };
};
