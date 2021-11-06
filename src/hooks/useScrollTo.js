import { useCallback } from 'react';

const SCROLL_OFFSET = -100;

function useScrollTo(ref) {
    const scrollTo = useCallback(() => {
        if (!ref.current) {
            return;
        }

        const element = ref.current;
        const top = element.getBoundingClientRect().top + window.pageYOffset + SCROLL_OFFSET;

        window.scrollTo({ top, behavior: 'smooth' });
    }, [ref]);

    return scrollTo;
}

export default useScrollTo;
