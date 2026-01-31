import { useEffect, useState, useCallback } from 'react';

/**
 * Custom hook to handle all easter eggs in the portfolio
 * - Konami Code: Matrix rain effect
 * - Triple click on name: Glitch effect
 */
export function useEasterEggs() {
    const [showMatrix, setShowMatrix] = useState(false);
    const [isGlitching, setIsGlitching] = useState(false);

    // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];

    useEffect(() => {
        let konamiIndex = 0;

        const handleKeyDown = (e) => {
            if (e.code === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    // Konami code completed!
                    setShowMatrix(true);
                    setTimeout(() => setShowMatrix(false), 5000);
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Triple click handler for name
    const handleNameClick = useCallback(() => {
        let clickCount = 0;
        let clickTimer = null;

        return () => {
            clickCount++;
            if (clickCount === 3) {
                setIsGlitching(true);
                setTimeout(() => setIsGlitching(false), 1500);
                clickCount = 0;
            }

            clearTimeout(clickTimer);
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 400);
        };
    }, []);

    return {
        showMatrix,
        isGlitching,
        handleNameClick: handleNameClick(),
    };
}

/**
 * Matrix Rain Component
 */
export function MatrixRain({ active }) {
    useEffect(() => {
        if (!active) return;

        const canvas = document.createElement('canvas');
        canvas.className = 'matrix-canvas';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = 'PRANAV01'.split('');
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#000';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);

        return () => {
            clearInterval(interval);
            canvas.remove();
        };
    }, [active]);

    return null;
}
