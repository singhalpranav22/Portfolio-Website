import { useEffect, useState } from 'react';

/**
 * Animated SVG decorations that appear on scroll
 */
export function ScrollSVGs() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const svgs = [
        { id: 1, threshold: 100, x: '5%', y: '15%', type: 'code' },
        { id: 2, threshold: 300, x: '90%', y: '25%', type: 'brackets' },
        { id: 3, threshold: 600, x: '3%', y: '40%', type: 'terminal' },
        { id: 4, threshold: 900, x: '92%', y: '50%', type: 'star' },
        { id: 5, threshold: 1200, x: '8%', y: '60%', type: 'controller' },
        { id: 6, threshold: 1500, x: '88%', y: '70%', type: 'heart' },
        { id: 7, threshold: 1800, x: '5%', y: '80%', type: 'git' },
    ];

    const renderSVG = (type) => {
        switch (type) {
            case 'code':
                return (
                    <svg width="60" height="60" viewBox="0 0 60 60">
                        <path d="M20 15L5 30L20 45" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M40 15L55 30L40 45" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <line x1="35" y1="10" x2="25" y2="50" stroke="currentColor" strokeWidth="2" />
                    </svg>
                );
            case 'brackets':
                return (
                    <svg width="50" height="50" viewBox="0 0 50 50">
                        <path d="M15 10 Q5 25 15 40" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M35 10 Q45 25 35 40" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                );
            case 'terminal':
                return (
                    <svg width="50" height="40" viewBox="0 0 50 40">
                        <rect x="2" y="2" width="46" height="36" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M10 15L18 20L10 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="22" y1="25" x2="35" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                );
            case 'star':
                return (
                    <svg width="40" height="40" viewBox="0 0 40 40">
                        <polygon
                            points="20,4 24,15 36,15 27,23 30,35 20,28 10,35 13,23 4,15 16,15"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                    </svg>
                );
            case 'controller':
                return (
                    <svg width="60" height="40" viewBox="0 0 60 40">
                        <rect x="8" y="10" width="44" height="24" rx="12" fill="none" stroke="currentColor" strokeWidth="2" />
                        <circle cx="20" cy="22" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="40" cy="19" r="2" fill="currentColor" />
                        <circle cx="46" cy="22" r="2" fill="currentColor" />
                        <circle cx="40" cy="25" r="2" fill="currentColor" />
                        <circle cx="34" cy="22" r="2" fill="currentColor" />
                    </svg>
                );
            case 'heart':
                return (
                    <svg width="40" height="40" viewBox="0 0 40 40">
                        <path
                            d="M20 35 L8 22 C2 16 2 8 10 8 C15 8 18 12 20 15 C22 12 25 8 30 8 C38 8 38 16 32 22 Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                    </svg>
                );
            case 'git':
                return (
                    <svg width="40" height="50" viewBox="0 0 40 50">
                        <circle cx="20" cy="8" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                        <line x1="20" y1="13" x2="20" y2="35" stroke="currentColor" strokeWidth="2" />
                        <circle cx="20" cy="42" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                        <circle cx="32" cy="25" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M24 15 Q32 15 32 21" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <>
            {svgs.map((svg) => (
                <div
                    key={svg.id}
                    className={`scroll-svg ${scrollY > svg.threshold ? 'visible' : ''}`}
                    style={{
                        left: svg.x,
                        top: svg.y,
                        color: 'var(--accent-primary)',
                        transform: `translateY(${Math.sin(scrollY / 200 + svg.id) * 10}px) rotate(${Math.sin(scrollY / 300 + svg.id) * 5}deg)`,
                    }}
                >
                    {renderSVG(svg.type)}
                </div>
            ))}
        </>
    );
}
