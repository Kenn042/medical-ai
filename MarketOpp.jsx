import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';

const MarketOpp = () => {
    return (
        <Section id="market" title="$4.5B Market and Growing" subtitle="Focused beachhead with clear expansion path.">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <Card style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(37,99,235,0.05) 100%)', borderColor: 'var(--primary-cyan)' }}>
                    <h3 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--primary-cyan)', marginBottom: '0.5rem' }}>50</h3>
                    <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Private Oncology Clinics</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Initial SOM Target (3 Regions)</p>
                </Card>

                <Card hoverEffect>
                    <h3 style={{ fontSize: '3rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>$2M</h3>
                    <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Annual Revenue Potential</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Based on beachhead market capture</p>
                </Card>

                <Card hoverEffect>
                    <h3 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>30%</h3>
                    <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>EBITDA Margin</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>High-leverage software model</p>
                </Card>
            </div>
        </Section>
    );
};

export default MarketOpp;
