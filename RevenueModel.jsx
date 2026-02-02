import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import Button from './ui/Button';

const PricingCard = ({ title, price, sub, features, isPopular }) => (
    <Card style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        position: 'relative',
        border: isPopular ? '1px solid var(--primary-blue)' : undefined,
        background: isPopular ? 'linear-gradient(180deg, rgba(37,99,235,0.1) 0%, rgba(20,30,50,0.6) 100%)' : undefined
    }}>
        {isPopular && (
            <div style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--primary-blue)',
                color: 'white',
                fontSize: '0.75rem',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontWeight: 600
            }}>
                MOST POPULAR
            </div>
        )}
        <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white' }}>
                {price}
                <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>{sub}</span>
            </div>
        </div>
        <ul style={{ listStyle: 'none', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {features.map((feat, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--primary-cyan)' }}>•</span> {feat}
                </li>
            ))}
        </ul>
        <Button variant={isPopular ? 'primary' : 'outline'} style={{ width: '100%', justifyContent: 'center' }}>
            Choose Plan
        </Button>
    </Card>
);

const RevenueModel = () => {
    return (
        <Section id="pricing" title="Simple, Scalable Subscription Model">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
                <PricingCard
                    title="Standard"
                    price="$500"
                    sub="/mo"
                    features={["Up to 100 scans", "Brain & Lung models", "Basic reporting", "Email support"]}
                />
                <PricingCard
                    title="Professional"
                    price="$1,500"
                    sub="/mo"
                    isPopular
                    features={["Up to 500 scans", "All tumour types", "Advanced volumetric analysis", "Priority support", "PACS Integration"]}
                />
                <PricingCard
                    title="Enterprise"
                    price="Custom"
                    sub=""
                    features={["Unlimited scans", "Full API Access", "On-premise deployment option", "Dedicated account manager", "Custom model training"]}
                />
            </div>
        </Section>
    );
};

export default RevenueModel;
