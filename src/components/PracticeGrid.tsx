import React from 'react';

// Enhanced services array with more formal, legal-centric descriptions
const services = [
  {
    title: 'Entity Formation & Jurisdiction',
    description: 'Compliant **DAO** and corporate structuring for global token issuance.',
    icon: '🏛️', // Used a classic building icon
    tagline: 'Global Compliance, Optimized Structure',
  },
  {
    title: 'Smart Contract Audits & Review',
    description: 'Comprehensive legal and security vetting of **DeFi protocols** and token contracts.',
    icon: '🔐', // Lock/Security icon
    tagline: 'Risk Mitigation, Immutable Vetting',
  },
  {
    title: 'Regulatory Compliance & Strategy',
    description: 'Guidance on **Securities Laws** (e.g., Howey Test) and jurisdictional clarity.',
    icon: '⚖️', // Scales of Justice
    tagline: 'Jurisdictional Clarity, Regulatory Shield',
  },
  {
    title: 'Token Vesting & Equity Agreements',
    description: 'Custom legal frameworks for founder equity, vesting schedules, and **Cap Table** management.',
    icon: '⏳', // Time/Vesting icon
    tagline: 'Defensible Frameworks, Automated Release',
  },
  {
    title: 'Intellectual Property Protection (IP)',
    description: 'Securing **Trademarks** and **Copyrights** for proprietary code, branding, and assets.',
    icon: '📜', // Scroll/Document icon
    tagline: 'Digital Asset Defense, Global Registration',
  },
  {
    title: 'Decentralized Dispute Resolution',
    description: 'Designing on-chain and off-chain protocols for governance disputes and **Arbitration** mechanisms.',
    icon: '🤝', // Handshake/Agreement icon
    tagline: 'Governance Integrity, Conflict Resolution',
  },
];

export default function PracticeGrid() {
  return (
    // Updated background for contrast and depth
    <section className="bg-gray-950 py-20 px-6 sm:px-12">
      
      {/* Formal, impactful heading with a separator line */}
      <h2 className="text-4xl font-extrabold text-yellow-400 mb-2 text-center tracking-tight">
        Practice Areas: Navigating Digital Law
      </h2>
      <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
        Our expertise lies at the intersection of **jurisprudence** and **decentralized technology**, delivering actionable legal certainty in the Web3 space.
      </p>
      
      {/* Grid container: Increased gap and defined column count for stability */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300">
        {services.map((service, index) => (
          <div
            key={index}
            // Card Styling: Stronger shadow, subtle gradient border effect, polished look
            className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-xl transition duration-300 ease-in-out hover:border-yellow-500 hover:shadow-2xl"
          >
            <div className="flex items-center mb-4">
                {/* Larger, more prominent icon */}
                <span className="text-5xl mr-4">{service.icon}</span> 
                {/* Primary Title */}
                <h3 className="text-2xl font-bold text-yellow-300">
                    {service.title}
                </h3>
            </div>
            
            {/* Tagline as a subtle subtitle */}
            <p className="text-md font-semibold text-yellow-500 uppercase mb-4 tracking-wider border-b border-gray-700 pb-2">
                {service.tagline}
            </p>
            
            {/* Detailed Description */}
            <p className="text-gray-300 leading-relaxed">
                {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
