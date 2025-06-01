import { useCallback, useEffect, useState } from 'react';
import { useScrollHandling } from './useScrollHandling';

const useTranslateXImage = () => {
    const { scrollDirection, scrollPosition } = useScrollHandling();
    const [translateXPosition, setTranslateXPosition] = useState(50);
    const handleTranslateX = useCallback(() => {
        if (scrollDirection === 'down' && scrollPosition >= 1800) {
            setTranslateXPosition(prev => (prev <= -50 ? -50 : prev - 0.5));
        } else if (scrollDirection === 'up' && scrollPosition >= 1800) {
            setTranslateXPosition(prev => (prev >= 50 ? 50 : prev + 0.5));
        }
    }, [scrollDirection, scrollPosition]);

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    return { translateXPosition };
};

export default useTranslateXImage;
