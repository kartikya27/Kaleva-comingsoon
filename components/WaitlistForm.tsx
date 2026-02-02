
import React, { useState } from 'react';

export const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="waitlist" className="py-24 px-6 bg-stone-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Join the Culinary Revolution</h2>
        <p className="text-stone-600 mb-12 text-lg">
          Be the first to know when we launch our cold-pressed range. 
          Early supporters get an exclusive <span className="text-amber-700 font-bold">20% launch discount</span>.
        </p>

        {submitted ? (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 animate-in fade-in duration-700">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-stone-900 mb-2">You're on the list!</h3>
            <p className="text-stone-600">Check your inbox soon for something special from Kaleva.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm text-stone-500 hover:text-stone-900 underline"
            >
              Add another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-grow px-6 py-4 rounded-full border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-amber-700 text-white px-8 py-4 rounded-full font-medium hover:bg-amber-800 transition-all shadow-lg hover:shadow-amber-900/20"
            >
              Join Waitlist
            </button>
          </form>
        )}
        <p className="mt-6 text-xs text-stone-500">
          By joining, you agree to receive updates from Kaleva. We promise never to spam.
        </p>
      </div>
    </section>
  );
};
