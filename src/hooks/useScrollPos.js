import { useEffect } from 'react';
import isSSR from '../util/isSSR';

const useScrollPos = (callback) => {
    useEffect(() => {
        if (isSSR) {
            return false;
        }

        function handleScroll() {
            callback(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        callback(isSSR ? 0 : window.scrollY);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [callback]);
};

export default useScrollPos;
