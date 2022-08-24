import { useRef, useEffect } from "react";

export const useCardHover = () => {
    const ref = useRef(null);

    useEffect(() => {
        const card = ref.current;
        const handleCardHover = (event) => {
            const { layerX, layerY } = event;
        }
        card.addEventListener('mousemove', handleCardHover);
        return () => {
            card.removeEventListener('mousemove', handleCardHover);
        }
    }, [])
    
    return ref;
}