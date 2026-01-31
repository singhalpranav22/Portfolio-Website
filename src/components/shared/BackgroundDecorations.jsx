/**
 * Background Decorations - Hacky code/gaming themed SVGs
 */
export function BackgroundDecorations() {
    return (
        <>
            {/* Code brackets - top right */}
            <svg className="bg-decoration" style={{ top: '10%', right: '5%', width: '80px' }} viewBox="0 0 60 60">
                <path d="M20 10L5 30L20 50" fill="none" stroke="#39d353" strokeWidth="2" strokeLinecap="round" />
                <path d="M40 10L55 30L40 50" fill="none" stroke="#39d353" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* Terminal cursor - left side */}
            <svg className="bg-decoration" style={{ top: '25%', left: '3%', width: '60px' }} viewBox="0 0 40 40">
                <rect x="5" y="5" width="30" height="30" rx="4" fill="none" stroke="#58a6ff" strokeWidth="2" />
                <path d="M12 15L18 20L12 25" fill="none" stroke="#39d353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="20" y1="25" x2="28" y2="25" stroke="#39d353" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* Gaming controller - right side */}
            <svg className="bg-decoration" style={{ top: '60%', right: '3%', width: '100px' }} viewBox="0 0 60 40">
                <rect x="5" y="10" width="50" height="25" rx="12" fill="none" stroke="#f78166" strokeWidth="2" />
                <circle cx="18" cy="22" r="4" fill="none" stroke="#f78166" strokeWidth="1.5" />
                <line x1="18" y1="18" x2="18" y2="26" stroke="#f78166" strokeWidth="1.5" />
                <line x1="14" y1="22" x2="22" y2="22" stroke="#f78166" strokeWidth="1.5" />
                <circle cx="38" cy="20" r="2" fill="#39d353" />
                <circle cx="44" cy="24" r="2" fill="#58a6ff" />
                <circle cx="38" cy="28" r="2" fill="#f78166" />
                <circle cx="32" cy="24" r="2" fill="#e3b341" />
            </svg>

            {/* Binary code - left bottom */}
            <svg className="bg-decoration" style={{ top: '80%', left: '5%', width: '80px' }} viewBox="0 0 60 60">
                <text x="5" y="15" fill="#39d353" fontSize="10" fontFamily="monospace">01</text>
                <text x="25" y="15" fill="#58a6ff" fontSize="10" fontFamily="monospace">10</text>
                <text x="5" y="30" fill="#58a6ff" fontSize="10" fontFamily="monospace">11</text>
                <text x="25" y="30" fill="#39d353" fontSize="10" fontFamily="monospace">00</text>
                <text x="5" y="45" fill="#39d353" fontSize="10" fontFamily="monospace">10</text>
                <text x="25" y="45" fill="#58a6ff" fontSize="10" fontFamily="monospace">01</text>
            </svg>

            {/* Git branch - right side middle */}
            <svg className="bg-decoration" style={{ top: '40%', right: '8%', width: '50px' }} viewBox="0 0 40 60">
                <circle cx="20" cy="10" r="4" fill="none" stroke="#a371f7" strokeWidth="2" />
                <line x1="20" y1="14" x2="20" y2="35" stroke="#a371f7" strokeWidth="2" />
                <circle cx="20" cy="50" r="4" fill="none" stroke="#a371f7" strokeWidth="2" />
                <line x1="20" y1="39" x2="20" y2="46" stroke="#a371f7" strokeWidth="2" />
                <circle cx="32" cy="30" r="4" fill="none" stroke="#39d353" strokeWidth="2" />
                <path d="M24 20 Q32 20 32 26" fill="none" stroke="#39d353" strokeWidth="2" />
            </svg>

            {/* Curly braces - bottom */}
            <svg className="bg-decoration" style={{ bottom: '15%', left: '50%', transform: 'translateX(-50%)', width: '100px' }} viewBox="0 0 80 40">
                <path d="M10 5 Q5 5 5 10 L5 15 Q5 20 0 20 Q5 20 5 25 L5 30 Q5 35 10 35" fill="none" stroke="#58a6ff" strokeWidth="2" />
                <path d="M70 5 Q75 5 75 10 L75 15 Q75 20 80 20 Q75 20 75 25 L75 30 Q75 35 70 35" fill="none" stroke="#58a6ff" strokeWidth="2" />
                <text x="30" y="25" fill="#39d353" fontSize="12" fontFamily="monospace">...</text>
            </svg>

            {/* Pixel art heart - for gaming */}
            <svg className="bg-decoration" style={{ top: '70%', left: '8%', width: '40px' }} viewBox="0 0 24 24">
                <path d="M4 4h2v2H4zM8 4h2v2H8zM14 4h2v2h-2zM18 4h2v2h-2zM2 6h2v2H2zM6 6h2v2H6zM10 6h2v2h-2zM12 6h2v2h-2zM16 6h2v2h-2zM20 6h2v2h-2zM2 8h2v2H2zM6 8h2v2H6zM16 8h2v2h-2zM20 8h2v2h-2zM2 10h2v2H2zM20 10h2v2h-2zM4 12h2v2H4zM18 12h2v2h-2zM6 14h2v2H6zM16 14h2v2h-2zM8 16h2v2H8zM14 16h2v2h-2zM10 18h2v2h-2zM12 18h2v2h-2z" fill="#f78166" />
            </svg>

            {/* Star - achievement vibe */}
            <svg className="bg-decoration" style={{ top: '35%', left: '2%', width: '35px' }} viewBox="0 0 24 24">
                <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" fill="none" stroke="#e3b341" strokeWidth="1.5" />
            </svg>
        </>
    );
}
