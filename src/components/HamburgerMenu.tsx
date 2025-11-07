import React, { useState } from 'react';

// Define navigation items with updated legal/crypto terminology
const navItems = [
    { name: 'Protocols', href: '#protocols' },
    { name: 'Jurisdiction', href: '#jurisdiction' },
    { name: 'Case Law', href: '#caselaw' },
    { name: 'Consultation', href: '#contact' },
];

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    // Relative positioning ensures the dropdown is anchored correctly
    <div className="relative z-[100]"> 
      <button
        // Button Styling: Match dark background, use yellow accent on hover
        className="p-3 text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-lg hover:bg-gray-800 transition duration-200"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
        // Use a more modern/custom icon instead of a basic '☰'
      >
        {/* Toggle between Hamburger and Close icon */}
        {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        )}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          // Menu Styling: Deep background (gray-900/950), subtle border, controlled width
          className="absolute top-14 right-0 bg-gray-900 text-gray-200 w-64 shadow-2xl p-6 space-y-3 border-t-2 border-yellow-400 rounded-b-lg animate-fade-in"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 px-3 text-lg font-medium hover:bg-gray-800 hover:text-yellow-400 transition duration-200 rounded-md"
              onClick={() => setOpen(false)} // Close menu on link click
            >
              {item.name}
            </a>
          ))}
          
          {/* Divider and distinguished CTA */}
          <div className="pt-4 border-t border-gray-700 mt-4">
              <a 
                href="#secure-login" 
                className="block text-center bg-yellow-400 text-gray-900 font-bold py-2 rounded-lg hover:bg-yellow-300 transition"
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
