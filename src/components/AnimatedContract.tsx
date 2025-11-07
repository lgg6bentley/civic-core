import React from 'react';

export default function FormalEngagementProtocol() {
  return (
    // Container: Darker background, more reserved padding, wider max-width for document feel
    <div className="bg-gray-950 text-gray-100 py-20 px-6 rounded-2xl shadow-2xl max-w-5xl mx-auto border border-gray-800">
      
      {/* Header: Formal title, using gold accent */}
      <h2 className="text-4xl font-extrabold text-yellow-400 mb-4 text-center tracking-tight">
        The Founder Engagement Protocol
      </h2>
      <p className="text-lg text-gray-400 mb-10 text-center max-w-2xl mx-auto">
        A legally-vetted framework for securing your digital venture's **Governance** and **Equity**.
      </p>
      
      {/* Contract Clauses List */}
      <ul className="space-y-6 text-gray-300">
        {/* Clause Structure: Using a definition list (or styled list items) to present key legal commitments */}
        <li className="flex items-start border-b border-gray-800 pb-4">
          <span className="text-2xl mr-4 mt-1 text-yellow-500">📜</span>
          <div>
            <h3 className="text-xl font-bold text-yellow-300">Covenant I: Regulatory Entity Formation</h3>
            <p className="text-gray-300 mt-1">
              Guaranteed **Jurisdictional Compliance** and swift entity incorporation predicated on validated on-chain asset allocation.
            </p>
          </div>
        </li>

        <li className="flex items-start border-b border-gray-800 pb-4">
          <span className="text-2xl mr-4 mt-1 text-yellow-500">🛡️</span>
          <div>
            <h3 className="text-xl font-bold text-yellow-300">Covenant II: Immutable Contract Vetting</h3>
            <p className="text-gray-300 mt-1">
              **Security and Legal Audit** integration for all tokenized equity and governance smart contracts, ensuring **risk mitigation**.
            </p>
          </div>
        </li>

        <li className="flex items-start border-b border-gray-800 pb-4">
          <span className="text-2xl mr-4 mt-1 text-yellow-500">🏛️</span>
          <div>
            <h3 className="text-xl font-bold text-yellow-300">Covenant III: Definitive Governance Model</h3>
            <p className="text-gray-300 mt-1">
              Structuring a **Decentralized Autonomous Organization (DAO)** with legally defensible off-ramps and **Founders' Reserved Powers**.
            </p>
          </div>
        </li>

        <li className="flex items-start">
          <span className="text-2xl mr-4 mt-1 text-yellow-500">⏳</span>
          <div>
            <h3 className="text-xl font-bold text-yellow-300">Covenant IV: Timestamped Vesting Protocol</h3>
            <p className="text-gray-300 mt-1">
              Implementation of automated, **smart-contract-triggered vesting schedules** with cryptographic notarization for irrefutable record keeping.
            </p>
          </div>
        </li>
      </ul>
      
      {/* Call to Action: More formal, authoritative button */}
      <div className="mt-12 text-center">
        <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-extrabold text-lg shadow-2xl hover:bg-yellow-300 transition duration-300 transform hover:scale-[1.01]">
          Execute Engagement Mandate 🖋️
        </button>
      </div>
    </div>
  );
}
