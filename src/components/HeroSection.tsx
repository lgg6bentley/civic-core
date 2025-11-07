import React from 'react';

export default function HeroSection() {
  return (
    // 1. Color: Deeper, more formal navy (blue-950 or close to black) with rich gold/parchment accents.
    // 2. Padding: Slightly more vertical padding for a grander feel.
    <section className="bg-gray-900 text-gray-100 py-32 px-6 text-center">
      
      {/* 3. Typography: Stronger, more formal headline, using tracking-tight is good for modern feel */}
      <h1 className="text-6xl font-extrabold tracking-tight mb-6 text-yellow-300 sm:text-7xl">
        <span className="block">Decentralized Law.</span>
        <span className="block mt-2">Upholding Digital Trust.</span>
      </h1>
      
      {/* 4. Subtext: More formal and authoritative language. Max width keeps it readable. */}
      <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-300">
        **Immutable Compliance** meets **Blockchain Innovation**. We forge legally-sound smart contracts and governance models for the decentralized future.
      </p>
      
      {/* 5. Call to Action (CTA): More formal button style, using a deep accent color. */}
      <div className="flex justify-center space-x-4">
        <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:-translate-y-0.5">
          Consult Our Legal Protocols 📜
        </button>
        <button className="bg-transparent border-2 border-gray-500 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:border-yellow-400 hover:text-yellow-400 transition duration-300 ease-in-out">
          Explore Case Studies
        </button>
      </div>
      
    </section>
  );
}
