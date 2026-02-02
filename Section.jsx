import React from 'react';

const Section = ({ id, title, subtitle, children, className = '', dark = false }) => {
    return (
        <section
            id={id}
            className={`section-padding ${className}`}
            style={{
                position: 'relative',
                backgroundColor: dark ? 'var(--bg-primary)' : 'transparent'
            }}
        >
            <div className="container">
                {(title || subtitle) && (
                    <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                        {title && <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{title}</h2>}
                        {subtitle && <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>{subtitle}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
