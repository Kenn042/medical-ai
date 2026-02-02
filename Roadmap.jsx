import React from 'react';
import Section from './ui/Section';

const RoadmapItem = ({ date, title, desc, align = 'left' }) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        paddingLeft: '2rem',
        borderLeft: '2px solid rgba(255,255,255,0.1)'
    }}>
        <div style={{
            position: 'absolute',
            left: '-9px',
            top: '0',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: 'var(--bg-primary)',
            border: '2px solid var(--primary-cyan)',
            boxShadow: '0 0 10px rgba(6,182,212,0.5)'
        }} />
        <span style={{
            color: 'var(--primary-cyan)',
            fontWeight: 600,
            marginBottom: '0.5rem',
            fontSize: '0.9rem',
            letterSpacing: '0.05em'
        }}>
            {date}
        </span>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)' }}>{desc}</p>
    </div>
);

const Roadmap = () => {
    return (
        <Section id="roadmap" dark title="Product Roadmap">
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <RoadmapItem
                    date="Q2 2025"
                    title="MVP Launch"
                    desc="Brain & Lung segmentation models deployed with 5 pilot clinics. Basic reporting dashboard."
                />
                <RoadmapItem
                    date="Q4 2025"
                    title="V2 Expansion"
                    desc="Liver, Kidney, Prostate models added. Scaling to 50 clinics. PACS integration module release."
                />
                <RoadmapItem
                    date="2026"
                    title="Platform Evolution"
                    desc="Predictive analytics for treatment outcomes. API platform for third-party developers."
                />
            </div>
        </Section>
    );
};

export default Roadmap;
