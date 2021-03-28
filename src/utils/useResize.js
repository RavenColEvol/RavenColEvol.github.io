import { useLayoutEffect, useState } from 'react';

function debounce(func, delay) {
    let debounceTimer
    return function() {
        const context = this
        const args = arguments
            clearTimeout(debounceTimer)
                debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
}

export default function useResize() {
    const [size, setSize] = useState([0, 0]);

    const debouncedResize = debounce(function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
    }, 100);

    useLayoutEffect(() => {
        window.addEventListener('resize', debouncedResize);
        debouncedResize();
        return () => window.removeEventListener('resize', debouncedResize);
    }, []);
    
    return size;
}