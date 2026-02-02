import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';

const Solution = () => {
    return (
        <Section id="solution" title="Automated Pixel-Level Analysis That Saves Time and Lives" className="">
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center'
            }}>
                <div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            "Instant tumour boundary detection",
                            "Precise volumetric measurements",
                            "Organ contact analysis for surgical planning"
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem' }}>
                                <span style={{
                                    color: 'var(--primary-blue)',
                                    fontWeight: 'bold',
                                    fontSize: '1.5rem'
                                }}>✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Visual representation placeholder - simulated UI */}
                <div style={{
                    position: 'relative',
                    height: '400px',
                    background: 'linear-gradient(180deg, rgba(5,10,20,0.8) 0%, rgba(5,10,20,1) 100%)',
                    border: '1px solid rgba(6,182,212,0.3)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* Mock Scan Visualization */}
                    <div style={{
                        width: '80%',
                        height: '80%',
                        background: 'radial-gradient(circle at 60% 40%, rgba(37,99,235,0.2) 0%, transparent 60%)',
                        border: '1px dashed rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '30%',
                            left: '50%',
                            width: '100px',
                            height: '100px',
                            border: '2px solid var(--primary-cyan)',
                            borderRadius: '50% 40% 60% 50%',
                            boxShadow: '0 0 20px rgba(6,182,212,0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--primary-cyan)',
                            fontSize: '0.8rem'
                        }}>
                            Tumour
                        </div>
                    </div>
                    <div style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '20px',
                        right: '20px',
                        background: 'rgba(0,0,0,0.8)',
                        padding: '10px',
                        fontSize: '0.8rem',
                        color: 'var(--primary-cyan)',
                        fontFamily: 'monospace'
                    }}>
                        {'>'} Analysis Complete: 98.7% Accuracy
                    </div>
                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          #solution div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </Section>
    );
};

export default Solution;
