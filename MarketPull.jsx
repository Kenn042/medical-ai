import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';

const MarketPull = () => {
    const drivers = [
        {
            title: "Rising Demand",
            desc: "Cancer diagnoses are growing 15% annually, overwhelming current clinic capacities."
        },
        {
            title: "Competitive Advantage",
            desc: "Faster, more accurate reporting wins referrals from general practitioners."
        },
        {
            title: "Scalability Limits",
            desc: "Clinics cannot scale radiologist headcount endlessly to meet demand."
        }
    ];

    return (
        <Section id="market-pull" dark title="Private Oncology Clinics Need This Now">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {drivers.map((driver, index) => (
                    <Card key={index} hoverEffect>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary-cyan)' }}>
                            {driver.title}
                        </h3>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            {driver.desc}
                        </p>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default MarketPull;
