import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';

const FinalCTA = () => {
    return (
        <Section id="contact" className="section-padding" style={{ textAlign: 'center', margin: '4rem 0' }}>
            <div style={{
                background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(37,99,235,0.1) 100%)',
                padding: '5rem 2rem',
                borderRadius: '24px',
                border: '1px solid rgba(255,255,255,0.05)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Glow effect */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    zIndex: 0
                }} />

                <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                        From Manual Segmentation to AI-Driven Precision
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
                        Join the future of oncology diagnostics.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Button variant="primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Launch Demo</Button>
                        <Button variant="secondary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Contact the Team</Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default FinalCTA;
