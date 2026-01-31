import { useEffect, useState } from 'react';

/**
 * Scroll-based floating SVG shapes that move as user scrolls
 * Creates a parallax-like effect with various geometric shapes
 */
export function ScrollingShapes() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const shapes = [
        // Circles
        { type: 'circle', x: 5, y: 200, size: 80, speed: 0.3, color: '#14b8a6', animation: 'floating' },
        { type: 'circle', x: 90, y: 600, size: 120, speed: -0.2, color: '#06b6d4', animation: 'floating-delayed' },
        { type: 'circle', x: 85, y: 1400, size: 60, speed: 0.4, color: '#10b981', animation: 'floating-reverse' },
        { type: 'circle', x: 8, y: 2000, size: 100, speed: -0.25, color: '#14b8a6', animation: 'floating' },
        { type: 'circle', x: 92, y: 2800, size: 70, speed: 0.35, color: '#0ea5e9', animation: 'floating-delayed' },

        // Rings
        { type: 'ring', x: 88, y: 300, size: 100, speed: 0.15, color: '#14b8a6', animation: 'spinning' },
        { type: 'ring', x: 10, y: 1000, size: 80, speed: -0.1, color: '#06b6d4', animation: 'spinning-reverse' },
        { type: 'ring', x: 85, y: 1800, size: 120, speed: 0.2, color: '#10b981', animation: 'spinning' },
        { type: 'ring', x: 5, y: 2600, size: 90, speed: -0.15, color: '#f59e0b', animation: 'spinning-reverse' },

        // Triangles
        { type: 'triangle', x: 15, y: 500, size: 60, speed: 0.25, color: '#f59e0b', animation: 'wobbling' },
        { type: 'triangle', x: 80, y: 1100, size: 50, speed: -0.3, color: '#f472b6', animation: 'wobbling' },
        { type: 'triangle', x: 12, y: 1600, size: 70, speed: 0.2, color: '#14b8a6', animation: 'bouncing' },
        { type: 'triangle', x: 88, y: 2200, size: 55, speed: -0.25, color: '#06b6d4', animation: 'wobbling' },

        // Squares
        { type: 'square', x: 92, y: 800, size: 50, speed: 0.35, color: '#14b8a6', animation: 'spinning' },
        { type: 'square', x: 6, y: 1300, size: 40, speed: -0.2, color: '#10b981', animation: 'spinning-reverse' },
        { type: 'square', x: 90, y: 2400, size: 60, speed: 0.3, color: '#f59e0b', animation: 'wobbling' },

        // Crosses
        { type: 'cross', x: 8, y: 900, size: 40, speed: 0.4, color: '#06b6d4', animation: 'spinning' },
        { type: 'cross', x: 85, y: 1700, size: 35, speed: -0.35, color: '#14b8a6', animation: 'bouncing' },
        { type: 'cross', x: 10, y: 2500, size: 45, speed: 0.25, color: '#10b981', animation: 'spinning-reverse' },

        // Dots
        { type: 'dots', x: 3, y: 400, size: 100, speed: 0.1, color: '#14b8a6', animation: '' },
        { type: 'dots', x: 95, y: 1200, size: 80, speed: -0.15, color: '#06b6d4', animation: '' },
        { type: 'dots', x: 2, y: 2100, size: 90, speed: 0.12, color: '#10b981', animation: '' },
    ];

    const renderShape = (shape, index) => {
        const yOffset = scrollY * shape.speed;
        const style = {
            left: `${shape.x}%`,
            top: shape.y,
            transform: `translateY(${yOffset}px)`,
        };

        switch (shape.type) {
            case 'circle':
                return (
                    <svg
                        key={index}
                        className={`scroll-shape ${shape.animation}`}
                        style={style}
                        width={shape.size}
                        height={shape.size}
                        viewBox="0 0 100 100"
                    >
                        <circle cx="50" cy="50" r="45" fill={shape.color} />
                    </svg>
                );

            case 'ring':
                return (
                    <svg
                        key={index}
                        className={`scroll-shape ${shape.animation}`}
                        style={style}
                        width={shape.size}
                        height={shape.size}
                        viewBox="0 0 100 100"
                    >
                        <circle
                            cx="50" cy="50" r="40"
                            fill="none"
                            stroke={shape.color}
                            strokeWidth="2"
                            strokeDasharray="10 5"
                        />
                    </svg>
                );

            case 'triangle':
                return (
                    <svg
                        key={index}
                        className={`scroll-shape ${shape.animation}`}
                        style={style}
                        width={shape.size}
                        height={shape.size}
                        viewBox="0 0 100 100"
                    >
                        <polygon points="50,10 90,90 10,90" fill={shape.color} />
                    </svg>
                );

            case 'square':
                return (
                    <svg
                        key={index}
                        className={`scroll-shape ${shape.animation}`}
                        style={style}
                        width={shape.size}
                        height={shape.size}
                        viewBox="0 0 100 100"
                    >
                        <rect x="15" y="15" width="70" height="70" fill={shape.color} rx="8" />
                    </svg>
                );

            case 'cross':
                return (
                    <svg
                        key={index}
                        className={`scroll-shape ${shape.animation}`}
                        style={style}
                        width={shape.size}
                        height={shape.size}
                        viewBox="0 0 100 100"
                    >
                        <path d="M50 20 L50 80 M20 50 L80 50" stroke={shape.color} strokeWidth="8" strokeLinecap="round" fill="none" />
                    </svg>
                );

            case 'dots':
                return (
                    <svg
                        key={index}
                        className={`scroll-shape ${shape.animation}`}
                        style={style}
                        width={shape.size}
                        height={shape.size}
                        viewBox="0 0 100 100"
                    >
                        {[0, 1, 2].map(row =>
                            [0, 1, 2].map(col => (
                                <circle
                                    key={`${row}-${col}`}
                                    cx={20 + col * 30}
                                    cy={20 + row * 30}
                                    r="5"
                                    fill={shape.color}
                                    style={{
                                        animation: `pulse 2s ease-in-out infinite`,
                                        animationDelay: `${(row + col) * 0.2}s`
                                    }}
                                />
                            ))
                        )}
                    </svg>
                );

            default:
                return null;
        }
    };

    return (
        <div className="scroll-shapes" aria-hidden="true">
            {shapes.map((shape, index) => renderShape(shape, index))}
        </div>
    );
}
