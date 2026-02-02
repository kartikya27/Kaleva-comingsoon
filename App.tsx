
import React from 'react';
import { Layout } from './components/Layout';
import { WaitlistForm } from './components/WaitlistForm';
import { FlavorAssistant } from './components/FlavorAssistant';

const App: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#fdfaf5]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=2000" 
            alt="Authentic Spices"
            className="w-full h-full object-cover opacity-15 grayscale-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fdfaf5] via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest mb-6">
            Launching Soon
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-black text-stone-900 mb-8 leading-[1.1]">
            Experience Purity, <br />
            <span className="text-amber-700">Cold-Pressed</span>.
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Kaleva is redefining your kitchen with authentic, cold-pressed spices and cooking oils that preserve the soul of flavor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#waitlist" className="bg-stone-900 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-stone-800 transition-all transform hover:scale-105 shadow-xl">
              Join Early Access
            </a>
            <a href="#products" className="bg-white text-stone-900 border border-stone-200 px-10 py-5 rounded-full text-lg font-medium hover:bg-stone-50 transition-all">
              Explore Range
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1532336411638-af7294193c1d?auto=format&fit=crop&q=80&w=1000" 
                alt="Cold Pressed Process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-500 rounded-3xl -z-10 hidden md:block" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">Why Cold-Pressed?</h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>
                Standard grinding processes generate heat, which destroys the delicate essential oils and nutrients in spices like <span className="text-amber-800 font-semibold">Haldi (Turmeric)</span> and <span className="text-red-800 font-semibold">Red Chili</span>.
              </p>
              <p>
                At Kaleva, we use a unique cold-press method. No heat, no chemicals, just the pure essence of the spice or seed. This ensures you get 100% of the health benefits and a flavor profile that's closer to nature.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="font-serif text-xl text-stone-900">100% Pure</h4>
                  <p className="text-sm">Zero additives or fillers.</p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="font-serif text-xl text-stone-900">Health First</h4>
                  <p className="text-sm">Retains all essential nutrients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Teaser */}
      <section id="products" className="py-24 px-6 bg-[#fcfaf7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">The Launch Collection</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Crafted with patience, delivered with care. Our inaugural range features the essentials of every vibrant kitchen.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Spice 1 */}
            <div className="group bg-white p-8 rounded-3xl border border-stone-200 hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/5] bg-red-50 rounded-2xl mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=600" 
                  alt="Red Chili Powder"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-serif text-stone-900 mb-2">Signature Red Chili</h3>
              <p className="text-stone-500 mb-4 text-sm">Rich, vibrant, and cold-pressed to preserve its natural capsaicin and smoky aroma.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-red-700">Available Soon</span>
            </div>

            {/* Spice 2 */}
            <div className="group bg-white p-8 rounded-3xl border border-stone-200 hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/5] bg-amber-50 rounded-2xl mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600" 
                  alt="Haldi Powder"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-serif text-stone-900 mb-2">Heritage Haldi</h3>
              <p className="text-stone-500 mb-4 text-sm">High curcumin content preserved through our cold-press extraction. Earthy and healing.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Available Soon</span>
            </div>

            {/* Oil 1 */}
            <div className="group bg-white p-8 rounded-3xl border border-stone-200 hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/5] bg-yellow-50 rounded-2xl mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=600" 
                  alt="Cold Pressed Oil"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-serif text-stone-900 mb-2">Wood-Pressed Oils</h3>
              <p className="text-stone-500 mb-4 text-sm">Extracted using traditional Ghani methods for pure nutritional integrity and superior taste.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-700">Available Soon</span>
            </div>
          </div>

          <FlavorAssistant />
        </div>
      </section>

      {/* Waitlist Section */}
      <WaitlistForm />

      {/* Contact Quick Link */}
      <section className="bg-amber-700 py-12 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-serif">Have a question or bulk inquiry?</h2>
          <div className="flex gap-4">
             <a href="tel:+919828051996" className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full font-medium transition-all">
               Call Us: 9828051996
             </a>
             <a href="mailto:kalevafoods.in@gmail.com" className="bg-white text-amber-800 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-white/20 transition-all">
               Email Experts
             </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
