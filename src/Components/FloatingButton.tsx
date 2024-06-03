import { MdArrowUpward } from 'react-icons/md';
import {useEffect, useState} from "react";
import "../Styles/floating-button.css"

export const FloatingButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Muestra el botón cuando el usuario se desplaza más de 100px
    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Desplaza a la parte superior cuando se hace clic en el botón
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility); // Cleanup
    }, []);

    return (
        <div className='scroll-to-top'>
            {isVisible && (
                <button onClick={scrollToTop}>
                    <MdArrowUpward />
                </button>
            )}
        </div>
    );
}