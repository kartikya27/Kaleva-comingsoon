
import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-200">
      <header className="sticky top-0 z-50 glass border-b border-stone-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-serif font-bold tracking-tight text-stone-900">KALEVA</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
            <a href="#about" className="hover:text-amber-700 transition-colors">Our Story</a>
            <a href="#products" className="hover:text-amber-700 transition-colors">Products</a>
            <a href="#waitlist" className="hover:text-amber-700 transition-colors">Join Waitlist</a>
          </nav>
          <a href="#waitlist" className="bg-stone-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-all">
            Get Early Access
          </a>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-stone-900 text-stone-300 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif text-white mb-6">KALEVA</h3>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Bringing the ancient wisdom of cold-pressed extraction to your modern kitchen. 
              Purity in every pinch, health in every drop.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-amber-500">Email:</span>
                <a href="mailto:kalevafoods.in@gmail.com" className="hover:text-white">kalevafoods.in@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-500">Website:</span>
                <a href="https://kalevafoods.in" className="hover:text-white">kalevafoods.in</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-500">Phone:</span>
                <a href="tel:+919828051996" className="hover:text-white">+91 9828051996</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Stay Connected</h4>
            <p className="text-sm text-stone-400 mb-4">Launching nationwide in 2024. Follow our journey.</p>
            <div className="flex gap-4">
              {/* Social icons could go here */}
              <div className="w-8 h-8 rounded-full bg-stone-800 hover:bg-amber-600 transition-colors cursor-pointer" />
              <div className="w-8 h-8 rounded-full bg-stone-800 hover:bg-amber-600 transition-colors cursor-pointer" />
              <div className="w-8 h-8 rounded-full bg-stone-800 hover:bg-amber-600 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 text-xs text-stone-500 text-center">
          &copy; {new Date().getFullYear()} Kaleva Foods. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
