import React from 'react';
import Section from './ui/Section';

const CompetitiveEdge = () => {
    const edges = [
        {
            title: "Organ Contact Analysis",
            desc: "We don't just find the tumour; we calculate risk zones for surgical planning."
        },
        {
            title: "Multi-Modality Support",
            desc: "One platform for MRI, CT, and X-ray data consolidation."
        },
        {
            title: "Seamless PACS Integration",
            desc: "Works with existing hospital systems. No workflow disruption."
        }
    ];

    return (
        <Section id="advantage" dark title="Why MediSeg AI Wins">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {edges.map((edge, index) => (
                    <div key={index} style={{
                        padding: '2rem',
                        borderLeft: '4px solid var(--primary-cyan)',
                        background: 'linear-gradient(90deg, rgba(6,182,212,0.05) 0%, transparent 100%)',
                        borderRadius: '0 16px 16px 0'
                    }}>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{edge.title}</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>{edge.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default CompetitiveEdge;
