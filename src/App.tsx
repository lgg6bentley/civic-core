import React, { useState } from 'react';

// --- FormalHeroSection (Dark Navy Base) ---
function FormalHeroSection() {
  return (
    <section id="hero" className="bg-blue-950 text-gray-100 py-40 px-6 sm:px-16 text-center">
      <h1 className="text-6xl font-light tracking-wide mb-6 text-sky-400 sm:text-7xl">
        Decentralized Law.
      </h1>
      <h2 className="text-4xl font-extrabold tracking-tight mb-8 text-white sm:text-5xl">
        Upholding Digital Trust.
      </h2>
      <p className="text-xl max-w-3xl mx-auto mb-12 text-blue-200 font-light">
        **Immutable Compliance** meets **Blockchain Innovation**. We forge legally-sound smart contracts and governance models for the decentralized future.
      </p>
      <div className="flex justify-center space-x-6">
        <button className="bg-sky-500 text-blue-950 px-8 py-3 rounded-sm font-semibold text-lg hover:bg-sky-400 transition">
          Consult Our Protocols
        </button>
        <a href="#caselaw" className="text-sky-400 border-b border-sky-400 px-8 py-3 font-semibold text-lg hover:text-sky-300 transition">
          Explore Case Studies
        </a>
      </div>
    </section>
  );
}

// --- FormalPracticeGrid Data (Minimalist) ---
const services = [
  { title: 'Entity Formation & Jurisdiction', description: 'Compliant DAO and corporate structuring for global token issuance.', tagline: 'Optimized Structure' },
  { title: 'Smart Contract Audits & Review', description: 'Comprehensive legal and security vetting of DeFi protocols and token contracts.', tagline: 'Risk Mitigation' },
  { title: 'Regulatory Compliance & Strategy', description: 'Guidance on Securities Laws and jurisdictional clarity.', tagline: 'Regulatory Shield' },
  { title: 'Token Vesting & Equity Agreements', description: 'Custom legal frameworks for founder equity, vesting schedules, and Cap Table management.', tagline: 'Defensible Frameworks' },
];

// 2. FormalPracticeGrid (Minimalist)
function FormalPracticeGrid() {
  return (
    // Light Background Section
    <section id="protocols" className="bg-gray-100 py-32 px-6 sm:px-16">
      <h2 className="text-4xl font-extrabold text-blue-900 mb-4 text-center tracking-tight">
        Practice Areas
        </h2>
      <p className="text-lg text-gray-700 mb-20 text-center max-w-4xl mx-auto font-light">
        Our expertise lies at the intersection of jurisprudence and decentralized technology. We specialize in four core pillars.
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
        {services.map((service, index) => (
          <div
            key={index}
            // Minimalist styling: No card background, no borders, just padding and lines
            className="group p-4 space-y-3 border-t-2 border-sky-300 hover:border-blue-900 transition duration-300"
          >
            {/* Minimalist Heading: Large index number, simple title */}
            <h3 className="text-5xl font-extrabold text-sky-500 mb-4 group-hover:text-blue-900 transition">
                0{index + 1}.
            </h3>
            <p className="text-lg font-bold text-blue-900 uppercase tracking-widest">
                {service.tagline}
            </p>
            <p className="text-gray-700 leading-relaxed text-sm pt-2">
                {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- UPDATED Lawlabs Callout Section (High Contrast, Product Focus) ---
function FormalLawlabsCallout() {
  return (
    <section className="bg-sky-500 py-16 px-6 sm:px-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-950 mb-4 tracking-tight">
          LawLabs.ca
        </h2>
        <p className="text-xl text-blue-900 mb-8 font-medium max-w-2xl mx-auto">
            **global leader in legal practice management software**. Seamlessly manage compliance, billing, and document flow.
        </p>
        <a 
          href="https://lawlabs.ca" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-950 text-sky-200 px-10 py-3 rounded-sm font-extrabold text-lg hover:bg-blue-800 transition shadow-lg"
        >
          Explore the Platform →
        </a>
      </div>
    </section>
  );
}


// 3. FormalEngagementProtocol (Matching Hero Color)
function FormalEngagementProtocol() {
  const covenants = [
    { prefix: 'I.', title: 'Regulatory Entity Formation', desc: 'Guaranteed Jurisdictional Compliance and swift entity incorporation predicated on validated on-chain asset allocation.' },
    { prefix: 'II.', title: 'Immutable Contract Vetting', desc: 'Security and Legal Audit integration for all tokenized equity and governance smart contracts.' },
    { prefix: 'III.', title: 'Definitive Governance Model', desc: 'Structuring a DAO with legally defensible off-ramps and Founders\' Reserved Powers.' },
    { prefix: 'IV.', title: 'Timestamped Vesting Protocol', desc: 'Implementation of automated, smart-contract-triggered vesting schedules with cryptographic notarization.' },
  ];
  
  return (
    <section id="mandate" className="py-32 px-6 sm:px-16 bg-blue-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-sky-400 mb-16 text-center tracking-tight">
          The Founder Engagement Protocol
        </h2>
        
        <div className="space-y-10 text-gray-300">
          {covenants.map((covenant, index) => (
            // Descriptions' gray text is updated for brightness
            <div key={index} className="pb-4 border-b border-blue-800">
              <h3 className="text-xl font-bold text-sky-300 mb-2 flex items-baseline">
                <span className="text-2xl font-bold mr-4 text-sky-500 w-8 flex-shrink-0">{covenant.prefix}</span>
                {covenant.title}
              </h3>
              <p className="text-gray-300 ml-12 font-light"> 
                {covenant.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="bg-sky-500 text-blue-950 px-10 py-3 rounded-sm font-extrabold text-lg hover:bg-sky-400 transition">
            Execute Engagement Mandate
          </button>
        </div>
      </div>
    </section>
  );
}

// --- FormalCounselSection (Team Section) ---
const teamMembers = [
    // Paths configured for static assets in the public folder
    { name: 'Elias Thorne', title: 'Managing Partner, DeFi Compliance', focus: 'DAO Structuring, Tokenomics', imageSrc: '/assets/cc-thorne-managingpartner.jpg' },
    { name: 'Dr. Anya Sharma', title: 'Lead Counsel, Regulatory Affairs', focus: 'Global Securities, KYC/AML Protocols', imageSrc: '/assets/cc-sharma-leadcounsel.jpg' }, 
    { name: 'Marcus Jones', title: 'Senior Associate, Smart Contracts', focus: 'Immutability Audits, Dispute Resolution', imageSrc: '/assets/cc-jones-seniorassociate.jpg' },
];

function FormalCounselSection() {
    return (
        <section id="counsel" className="bg-blue-950 py-32 px-6 sm:px-16 border-t border-sky-600/30">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-extrabold text-white mb-4 text-center tracking-tight">
                    The Counsel
                </h2>
                <p className="text-lg text-gray-400 mb-20 text-center max-w-4xl mx-auto font-light">
                    Our interdisciplinary team combines deep legal expertise with advanced cryptographic knowledge.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center group">
                            {/* **UNIFORMITY FIX:** Using aspect-square and filter classes */}
                            <div className="w-full aspect-square mb-6 flex items-center justify-center rounded-sm mx-auto overflow-hidden bg-blue-900">
                                <img 
                                    src={member.imageSrc} 
                                    alt={`Professional portrait of ${member.name}`} 
                                    // Default grayscale, scale on hover, transition to color on hover
                                    className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.05] group-hover:opacity-90 filter grayscale group-hover:grayscale-0" 
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-sky-400 mb-1">{member.name}</h3>
                            <p className="text-lg font-semibold text-white mb-2">{member.title}</p>
                            <p className="text-sm text-gray-300 italic">{member.focus}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- FormalHamburgerMenu (Minimalist) ---
const navItems = [
    { name: 'Protocols', href: '#protocols' },
    { name: 'Jurisdiction', href: '#jurisdiction' },
    { name: 'Mandate', href: '#mandate' },
    { name: 'Counsel', href: '#counsel' }, // Added new navigation item
    { name: 'Consultation', href: '#contact' },
];

function FormalHamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50"> 
      <button
        className="p-3 text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-sm hover:bg-blue-800 transition duration-200"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
      >
        {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        )}
      </button>

      {open && (
        <div
          // Minimalist Menu: Sharp edges, flat colors
          className="absolute top-14 right-0 bg-blue-950 text-gray-200 w-64 shadow-xl p-6 space-y-3 border-t border-sky-400"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 px-3 text-lg font-light hover:bg-blue-800 hover:text-sky-400 transition duration-200"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
          
          <div className="pt-4 border-t border-blue-800 mt-4">
              <a 
                href="#secure-login" 
                className="block text-center bg-sky-500 text-blue-950 font-bold py-2 hover:bg-sky-400 transition"
                onClick={() => setOpen(false)}
              >
                Client Portal Login
              </a>
          </div>
        </div>
      )}
    </div>
  );
}

// --- FormalJurisprudenceFooter (Minimalist) ---
function FormalJurisprudenceFooter() {
  return (
    <footer className="bg-blue-950 text-gray-400 py-16 px-6 sm:px-16 border-t border-sky-600">
      <div className="max-w-7xl mx-auto">
        
        {/* Simplified Link Structure */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pb-10 border-b border-blue-800 max-w-4xl mx-auto">
            
            <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase mb-4">Practice</h4>
                <ul className="space-y-2 text-sm">
                    
                    <li><a href="#protocols" className="hover:text-sky-400 transition duration-200 font-light text-gray-300">Protocols</a></li>
                    <li><a href="#jurisdiction" className="hover:text-sky-400 transition duration-200 font-light text-gray-300">Jurisdiction</a></li>
                    <li><a href="#caselaw" className="hover:text-sky-400 transition duration-200 font-light text-gray-300">Case Law</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase mb-4">Firm</h4>
                <ul className="space-y-2 text-sm">
                    
                    <li><a href="#about" className="hover:text-sky-400 transition duration-200 font-light text-gray-300">Our Mandate</a></li>
                    <li><a href="#counsel" className="hover:text-sky-400 transition duration-200 font-light text-gray-300">The Counsel</a></li> 
                    <li><a href="#careers" className="hover:text-sky-400 transition duration-200 font-light text-gray-300">Careers</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase mb-4">Connect</h4>
                <ul className="space-y-2 text-sm">
                    
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition duration-200 font-light text-gray-300">LinkedIn</a></li>
                    <li><a href="mailto:lgg6bentley@gmail.com" className="hover:text-sky-400 transition duration-200 font-light text-gray-300">Email Inquiry</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase mb-4">Compliance</h4>
                <ul className="space-y-2 text-sm">
                    
                    <li><a href="#privacy" className="hover:text-sky-400 transition duration-200 font-light text-gray-300">Privacy Protocol</a></li>
                    <li><a href="#terms" className="hover:text-sky-400 transition duration-200 font-light text-gray-300">Terms of Service</a></li>
                </ul>
            </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 text-center text-xs space-y-3">
          
          <p className="font-semibold text-gray-400 mb-2">
            © 2025 Civic Core. All Rights Reserved.
          </p>
          <p className="max-w-5xl mx-auto text-blue-600 italic leading-relaxed font-light">
            **Disclaimer:** The content of this site is for informational purposes only and does not constitute legal advice, solicitation, or legal representation. Using this website does not create an attorney-client relationship. Please consult with our legal counsel directly before relying on any information herein.
          </p>
        </div>
        <div id="contact"></div> {/* Anchor for Consultation */}
      </div>
    </footer>
  );
}

// --- MAIN APP COMPONENT ---

function App() {
  return (
    <div className="bg-blue-950 min-h-screen font-sans">
      
      {/* 1. Dark NAVY Header (Fixed) */}
      <header className="sticky top-0 z-50 bg-blue-950/90 backdrop-blur-sm p-4 flex justify-between items-center border-b border-sky-600/30">
        <h1 className="text-xl font-extrabold text-sky-400 tracking-widest">CIVIC CORE</h1>
        <FormalHamburgerMenu />
      </header>

      <main>
        {/* 2. Dark NAVY Hero Section (bg-blue-950) */}
        <FormalHeroSection />
        
        {/* 3. Light GRAY Contrast Section (bg-gray-100) */}
        <section id="protocols-grid">
          <FormalPracticeGrid />
        </section>
        
        {/* **4. UPDATED: Lawlabs Practice Management Software Callout** */}
        <FormalLawlabsCallout />

        {/* 5. Dark NAVY Protocol Section (bg-blue-950) */}
        <section id="engagement-protocol">
          <FormalEngagementProtocol />
        </section>
        
        {/* 6. Dark NAVY Counsel/Team Section */}
        <section id="counsel">
            <FormalCounselSection />
        </section>
        {/* 7. Placeholder for the next section: Case Law / Case Study */}
        <div id="caselaw"></div>
      </main>

      {/* 8. Dark NAVY Footer (bg-blue-950) */}
      <FormalJurisprudenceFooter />
    </div>
  );
}

export default App;
