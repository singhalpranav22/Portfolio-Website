/**
 * Animated SVG Decorative Elements
 * Teal/Emerald color scheme
 */

// Floating abstract shapes background
export function FloatingShapes() {
    return (
        <div className="bg-shapes" aria-hidden="true">
            {/* Gradient definitions */}
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#14b8a6" />
                        <stop offset="50%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                    <linearGradient id="grad-warm" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#f472b6" />
                    </linearGradient>
                    <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#14b8a6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Floating circles */}
            <svg
                className="shape floating"
                style={{ top: '10%', right: '10%', width: '300px', height: '300px' }}
                viewBox="0 0 200 200"
            >
                <circle cx="100" cy="100" r="80" fill="url(#grad-primary)" opacity="0.1" />
            </svg>

            <svg
                className="shape floating-delayed"
                style={{ bottom: '20%', left: '5%', width: '200px', height: '200px' }}
                viewBox="0 0 200 200"
            >
                <circle cx="100" cy="100" r="60" fill="url(#grad-warm)" opacity="0.08" />
            </svg>

            {/* Rotating ring */}
            <svg
                className="shape spinning"
                style={{ top: '50%', right: '5%', width: '150px', height: '150px' }}
                viewBox="0 0 100 100"
            >
                <circle
                    cx="50" cy="50" r="40"
                    fill="none"
                    stroke="url(#grad-primary)"
                    strokeWidth="0.5"
                    strokeDasharray="10 5"
                    opacity="0.3"
                />
            </svg>
        </div>
    );
}

// Animated code brackets for hero
export function CodeBrackets({ className = '' }) {
    return (
        <svg
            className={className}
            width="60"
            height="60"
            viewBox="0 0 60 60"
            style={{ opacity: 0.6 }}
        >
            <path
                d="M20 15L5 30L20 45"
                fill="none"
                stroke="url(#grad-primary)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    strokeDasharray: 100,
                    strokeDashoffset: 100,
                    animation: 'draw-line 1.5s ease forwards'
                }}
            />
            <path
                d="M40 15L55 30L40 45"
                fill="none"
                stroke="url(#grad-primary)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    strokeDasharray: 100,
                    strokeDashoffset: 100,
                    animation: 'draw-line 1.5s ease forwards 0.3s'
                }}
            />
        </svg>
    );
}

// Animated dots grid
export function DotsGrid({ rows = 5, cols = 5, className = '' }) {
    const dots = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const delay = (i + j) * 0.1;
            dots.push(
                <circle
                    key={`${i}-${j}`}
                    cx={j * 20 + 10}
                    cy={i * 20 + 10}
                    r="2"
                    fill="#14b8a6"
                    opacity="0.3"
                    style={{
                        animation: `pulse 2s ease-in-out infinite`,
                        animationDelay: `${delay}s`
                    }}
                />
            );
        }
    }

    return (
        <svg
            className={className}
            width={cols * 20}
            height={rows * 20}
            viewBox={`0 0 ${cols * 20} ${rows * 20}`}
        >
            {dots}
        </svg>
    );
}

// Animated wave line
export function WaveLine({ className = '' }) {
    return (
        <svg
            className={className}
            width="200"
            height="40"
            viewBox="0 0 200 40"
            style={{ overflow: 'visible' }}
        >
            <path
                d="M0 20 Q25 0 50 20 T100 20 T150 20 T200 20"
                fill="none"
                stroke="url(#grad-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                    strokeDasharray: 300,
                    strokeDashoffset: 300,
                    animation: 'draw-line 2s ease forwards'
                }}
            />
        </svg>
    );
}

// Morphing blob
export function MorphBlob({ className = '', color = 'primary' }) {
    const gradientId = color === 'primary' ? 'grad-primary' : 'grad-warm';

    return (
        <svg
            className={className}
            width="200"
            height="200"
            viewBox="0 0 200 200"
        >
            <path
                fill={`url(#${gradientId})`}
                opacity="0.15"
                style={{
                    animation: 'morph 8s ease-in-out infinite'
                }}
            >
                <animate
                    attributeName="d"
                    dur="8s"
                    repeatCount="indefinite"
                    values="
            M44.5,-51.5C57.4,-43.4,67.3,-29.2,71.2,-13.1C75.1,3,73,20.9,64.5,34.7C56,48.5,41.2,58.1,25.3,63.1C9.3,68.1,-7.7,68.5,-23.9,63.7C-40.1,58.8,-55.4,48.7,-64.3,34.4C-73.2,20.2,-75.6,1.8,-71.3,-14.3C-67,-30.4,-56,-44.2,-42.8,-52.2C-29.5,-60.2,-14.8,-62.5,0.5,-63.1C15.8,-63.7,31.6,-59.6,44.5,-51.5Z;
            M38.9,-47.2C50.2,-38.7,59,-26.3,63.1,-12.1C67.2,2.1,66.6,18.1,59.5,30.7C52.4,43.4,38.8,52.6,24.1,57.8C9.4,62.9,-6.4,64,-21.1,59.4C-35.8,54.8,-49.4,44.5,-57.4,31.1C-65.5,17.7,-68,1.2,-64.5,-13.6C-61,-28.4,-51.6,-41.5,-39.6,-49.8C-27.6,-58.1,-13.8,-61.7,0.3,-62.1C14.4,-62.4,28.8,-59.5,38.9,-47.2Z;
            M44.5,-51.5C57.4,-43.4,67.3,-29.2,71.2,-13.1C75.1,3,73,20.9,64.5,34.7C56,48.5,41.2,58.1,25.3,63.1C9.3,68.1,-7.7,68.5,-23.9,63.7C-40.1,58.8,-55.4,48.7,-64.3,34.4C-73.2,20.2,-75.6,1.8,-71.3,-14.3C-67,-30.4,-56,-44.2,-42.8,-52.2C-29.5,-60.2,-14.8,-62.5,0.5,-63.1C15.8,-63.7,31.6,-59.6,44.5,-51.5Z
          "
                />
            </path>
        </svg>
    );
}

// Animated arrow
export function AnimatedArrow({ className = '' }) {
    return (
        <svg
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="7" y1="17" x2="17" y2="7">
                <animate
                    attributeName="x2"
                    values="17;19;17"
                    dur="1s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="y2"
                    values="7;5;7"
                    dur="1s"
                    repeatCount="indefinite"
                />
            </line>
            <polyline points="7 7 17 7 17 17">
                <animate
                    attributeName="points"
                    values="7 7 17 7 17 17;5 5 19 5 19 19;7 7 17 7 17 17"
                    dur="1s"
                    repeatCount="indefinite"
                />
            </polyline>
        </svg>
    );
}

// Star burst
export function StarBurst({ className = '' }) {
    return (
        <svg
            className={className}
            width="40"
            height="40"
            viewBox="0 0 40 40"
        >
            <g style={{ animation: 'spin-slow 10s linear infinite' }}>
                {[0, 45, 90, 135].map((angle) => (
                    <line
                        key={angle}
                        x1="20"
                        y1="5"
                        x2="20"
                        y2="15"
                        stroke="url(#grad-primary)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        transform={`rotate(${angle} 20 20)`}
                        opacity="0.6"
                    />
                ))}
            </g>
        </svg>
    );
}
