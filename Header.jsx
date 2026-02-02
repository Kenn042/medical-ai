import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                padding: '1.5rem 0',
                transition: 'all 0.3s ease',
                background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '1.5rem' }} className="text-gradient-blue">
                    MediSeg AI
                </div>
                <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {['Solution', 'Market', 'Roadmap'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}
                            className="nav-link"
                        >
                            {item}
                        </a>
                    ))}
                    <Button variant="outline" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
                        Book Demo
                    </Button>
                </nav>
            </div>
            <style>{`
        .nav-link:hover { color: white !important; }
      `}</style>
        </header>
    );
};

export default Header;
