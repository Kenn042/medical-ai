import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';

const Challenge = () => {
    const metrics = [
        { value: "40 min", label: "Per scan on manual pixel analysis" },
        { value: "2-3 Days", label: "Delay in treatment decisions" },
        { value: "15%", label: "Variability in human measurements" },
        { value: "High", label: "Clinician burnout & frustration" }
    ];

    return (
        <Section id="challenge" title="Manual Segmentation Is Slow, Costly, and Inconsistent" subtitle="Private oncology clinics feel this pain most acutely.">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                {metrics.map((metric, index) => (
                    <Card key={index} style={{ textAlign: 'center', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#f87171', marginBottom: '0.5rem' }}>
                            {metric.value}
                        </div>
                        <p style={{ color: 'var(--text-secondary)' }}>{metric.label}</p>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default Challenge;
