import React from 'react';

export default function FormalJurisprudenceFooter() {
  return (
    // Footer Styling: Darker background (gray-950), thicker border for gravity
    <footer className="bg-gray-950 text-gray-500 py-10 px-6 sm:px-12 border-t-2 border-yellow-600">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Logo/Name and Primary Links */}
        <div className="md:flex md:justify-between md:items-start text-center md:text-left pb-8 border-b border-gray-800">
          
          {/* Logo/Name */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-extrabold text-yellow-400 tracking-wider">
              LEX DECENTRUM ⚖️
            </h3>
            <p className="text-sm mt-1 text-gray-600">
              Upholding Digital Trust.
            </p>
          </div>

          {/* Navigation Links (Structured) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase mb-3">Practice</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#protocols" className="hover:text-yellow-400 transition duration-200">Protocols</a></li>
                    <li><a href="#jurisdiction" className="hover:text-yellow-400 transition duration-200">Jurisdiction</a></li>
                    <li><a href="#caselaw" className="hover:text-yellow-400 transition duration-200">Case Law</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase mb-3">Firm</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#about" className="hover:text-yellow-400 transition duration-200">Our Mandate</a></li>
                    <li><a href="#team" className="hover:text-yellow-400 transition duration-200">The Counsel</a></li>
                    <li><a href="#careers" className="hover:text-yellow-400 transition duration-200">Careers</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase mb-3">Connect</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="https://www.linkedin.com/in/bentley-bond-89b39a375/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-200">LinkedIn</a></li>
                    <li><a href="https://farcaster.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-200">Farcaster</a></li>
                    <li><a href="mailto:lgg6bentley@gmail.com" className="hover:text-yellow-400 transition duration-200">Email Inquiry</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase mb-3">Compliance</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#privacy" className="hover:text-yellow-400 transition duration-200">Privacy Protocol</a></li>
                    <li><a href="#terms" className="hover:text-yellow-400 transition duration-200">Terms of Service</a></li>
                </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Legal Disclaimer */}
        <div className="mt-8 text-center text-xs space-y-3">
          <p className="font-semibold text-gray-400">
            © 2025 Civic Core. All Rights Reserved.
          </p>
          {/* Crucial legal disclaimer for a law-related service */}
          <p className="max-w-4xl mx-auto text-gray-600 italic leading-relaxed">
            **Disclaimer:** The content of this site is for informational purposes only and does not constitute legal advice, solicitation, or legal representation. Using this website does not create an attorney-client relationship. Please consult with our legal counsel directly before relying on any information herein.
          </p>
        </div>
      </div>
    </footer>
  );
}
