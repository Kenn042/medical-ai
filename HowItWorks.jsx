import React from 'react';
import Section from './ui/Section';

const Step = ({ number, title, desc, icon }) => (
    <div style={{
        flex: 1,
        textAlign: 'center',
        position: 'relative',
        padding: '2rem',
        background: 'rgba(255,255,255,0.02)',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.05)'
    }}>
        <div style={{
            width: '60px',
            height: '60px',
            background: 'rgba(37,99,235,0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            color: 'var(--primary-blue)',
            fontSize: '1.5rem'
        }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{number}. {title}</h3>
        <p style={{ color: 'var(--text-secondary)' }}>{desc}</p>
    </div>
);

const HowItWorks = () => {
    return (
        <Section id="how-it-works" dark title="How It Works">
            <div className="steps-container" style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                <Step
                    number="1"
                    title="Upload Scan"
                    desc="MRI, CT, or X-ray via secure portal within seconds."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>}
                />
                <Step
                    number="2"
                    title="AI Segments"
                    desc="Neural network identifies tumour boundaries in under 2 minutes."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" /><path d="M12 16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" /><path d="M5 9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9z" /><path d="M15 9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9z" /></svg>}
                />
                <Step
                    number="3"
                    title="Clinical Report"
                    desc="Exportable measurements & organ proximity insights."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>}
                />
            </div>
            <style>{`
        @media (max-width: 768px) {
          .steps-container { flex-direction: column; }
        }
      `}</style>
        </Section>
    );
};

export default HowItWorks;
