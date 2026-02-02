import React from 'react';

const Footer = () => {
    return (
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '2rem 0', marginTop: '4rem' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    MediSeg AI | Medical-grade AI for oncology
                </p>
                <p style={{ color: 'var(--primary-cyan)', fontSize: '0.8rem', opacity: 0.7 }}>
                    Hackathon Demo 2026
                </p>
            </div>
        </footer>
    );
};

export default Footer;
