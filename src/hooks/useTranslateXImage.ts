import { useCallback, useEffect, useRef, useState } from 'react';

const useTranslateXImage = () => {
    const [scrollDirection, setScrollDirection] = useState<
        null | 'down' | 'up'
    >(null);

    const [translateXPosition, setTranslateXPosition] = useState(50);
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
    const handleTranslateX = useCallback(() => {
        if (scrollDirection === 'down' && scrollPosition >= 1800) {
            setTranslateXPosition(prev => (prev <= -50 ? -50 : prev - 0.5));
        } else if (scrollDirection === 'up' && scrollPosition >= 1800) {
            setTranslateXPosition(prev => (prev >= 50 ? 50 : prev + 0.5));
        }
    }, [scrollDirection, scrollPosition]);

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);
        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    return { translateXPosition };
};

export default useTranslateXImage;
