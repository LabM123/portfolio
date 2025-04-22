import { useEffect, useRef, useState } from 'react';

export default function FadeInSection({ children, percentageInToShow = 0.25 }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
            });
        },
        {
            threshold: percentageInToShow,
        }
        );
        if (domRef.current) {
        observer.observe(domRef.current);
        }
        return () => observer.disconnect();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
        >
        {children}
        </div>
    );
}