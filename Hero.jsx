import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';

const Hero = () => {
    return (
        <section style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            paddingTop: '6rem'
        }}>
            {/* Background Effect */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-10%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(37,99,235,0.05) 40%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: -1
            }} />

            <div className="container">
                <div style={{ maxWidth: '800px' }}>
                    <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <span style={{
                            background: 'rgba(6, 182, 212, 0.1)',
                            color: 'var(--primary-cyan)',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            display: 'inline-block',
                            marginBottom: '1.5rem'
                        }}>
                            MediSeg AI
                        </span>
                    </div>

                    <h1 className="text-gradient animate-fade-in" style={{
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        fontWeight: 700,
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        animationDelay: '0.2s'
                    }}>
                        Precision tumour segmentation at the speed of AI
                    </h1>

                    <p className="animate-fade-in" style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        maxWidth: '600px',
                        animationDelay: '0.3s'
                    }}>
                        Automated pixel-level analysis that reduces diagnostic time, improves accuracy, and helps clinicians make faster treatment decisions.
                    </p>

                    <div className="animate-fade-in" style={{
                        display: 'flex',
                        gap: '1rem',
                        animationDelay: '0.4s'
                    }}>
                        <Button variant="primary">View Demo</Button>
                        <Button variant="secondary">See How It Works</Button>
                    </div>
                </div>
            </div>

            {/* Grid Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                zIndex: -2,
                maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
            }} />
        </section>
    );
};

export default Hero;
