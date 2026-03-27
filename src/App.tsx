import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Facebook, Menu, X, Cake, ArrowRight, Star, Heart, Sparkles, MessageCircle } from 'lucide-react';
import { cn } from './lib/utils';
import { TREATS, TESTIMONIALS, Treat } from './constants';

// --- Components ---

const GlitterCursor = () => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; color: string }[]>([]);

  useEffect(() => {
    let particleId = 0;
    const colors = ['#FF69B4', '#FFB6C1', '#FFD700', '#E6E6FA', '#B0E0E6'];

    const handleMouseMove = (e: MouseEvent) => {
      const newParticle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setParticles((prev) => [...prev.slice(-20), newParticle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 1, x: p.x, y: p.y }}
            animate={{ 
              opacity: 0, 
              scale: 0, 
              x: p.x + (Math.random() - 0.5) * 50, 
              y: p.y + (Math.random() - 0.5) * 50,
              rotate: Math.random() * 360 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute"
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              borderRadius: '50%',
              boxShadow: `0 0 10px ${p.color}`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#treats' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 bg-luxe-cream",
      isScrolled ? "py-3 shadow-sm border-b border-pink-100" : ""
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-4 group">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all rotate-3 overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/d/1AFKXpLVHIJJVzgso1W0N08p2CZtgAzhN" 
              alt="Pat & Phia Bakes Logo" 
              className="w-full h-full object-cover mix-blend-multiply contrast-[1.05] saturate-[1.1]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="h-20 flex items-center overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/d/1xcJKtSgrm6-v-s9VmNveaxk3icqPt4Y8" 
              alt="Pat & Phia Bakes" 
              className="h-full object-contain mix-blend-multiply contrast-[1.1] saturate-[1.1] brightness-[1.02]"
              referrerPolicy="no-referrer"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-medium text-slate-700 hover:text-pink-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <a href="https://www.instagram.com/patandphiabakes/?fbclid=IwY2xjawQzIuhleHRuA2FlbQIxMABicmlkETFWTmFRSmtNdTJOZGd2SzJsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiM7OTL6S668pKeOMOp5eR5Ut6jzxvFql6pKPiI-Z4hU0jFYUpYN3IAvD2j3_aem_HXHVivXJAVnKbv3Xs3d48Q" className="text-slate-600 hover:text-pink-500 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/PATandPHIABakes" className="text-slate-600 hover:text-blue-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/patandphiabakes/?fbclid=IwY2xjawQzIuhleHRuA2FlbQIxMABicmlkETFWTmFRSmtNdTJOZGd2SzJsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiM7OTL6S668pKeOMOp5eR5Ut6jzxvFql6pKPiI-Z4hU0jFYUpYN3IAvD2j3_aem_HXHVivXJAVnKbv3Xs3d48Q" className="bg-pink-500 text-white px-6 py-2 rounded-full font-bold hover:bg-pink-600 transition-all shadow-lg shadow-pink-200 active:scale-95">
              Order Now
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xl font-display font-bold text-slate-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-100 my-2" />
              <div className="flex flex-col gap-4">
                <a href="https://www.instagram.com/patandphiabakes/?fbclid=IwY2xjawQzIuhleHRuA2FlbQIxMABicmlkETFWTmFRSmtNdTJOZGd2SzJsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiM7OTL6S668pKeOMOp5eR5Ut6jzxvFql6pKPiI-Z4hU0jFYUpYN3IAvD2j3_aem_HXHVivXJAVnKbv3Xs3d48Q" className="flex items-center gap-2 text-pink-500 font-bold">
                  <Instagram size={20} /> Instagram
                </a>
                <a href="https://www.facebook.com/PATandPHIABakes" className="flex items-center gap-2 text-blue-500 font-bold">
                  <Facebook size={20} /> Facebook
                </a>
                <a 
                  href="https://www.instagram.com/patandphiabakes/?fbclid=IwY2xjawQzIuhleHRuA2FlbQIxMABicmlkETFWTmFRSmtNdTJOZGd2SzJsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiM7OTL6S668pKeOMOp5eR5Ut6jzxvFql6pKPiI-Z4hU0jFYUpYN3IAvD2j3_aem_HXHVivXJAVnKbv3Xs3d48Q"
                  className="w-full bg-pink-500 text-white py-4 rounded-2xl font-bold text-lg text-center"
                >
                  Message to Order
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-candy-pink/20 rounded-l-[100px] blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-candy-lavender/30 rounded-r-[100px] blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-hotpink rounded-full font-bold text-sm mb-6 border border-pink-200">
            <Sparkles size={16} />
            <span className="cursive text-lg">Diet Starts Tomorrow</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-display font-extrabold leading-[1.1] mb-6">
            Because Every Celebration Deserves <span className="text-hotpink cursive">Something Special</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
            Custom cakes & pastries for every celebration—crafted to look stunning and taste even better. Made with love… and a little extra frosting
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://www.instagram.com/patandphiabakes/?fbclid=IwY2xjawQzIuhleHRuA2FlbQIxMABicmlkETFWTmFRSmtNdTJOZGd2SzJsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiM7OTL6S668pKeOMOp5eR5Ut6jzxvFql6pKPiI-Z4hU0jFYUpYN3IAvD2j3_aem_HXHVivXJAVnKbv3Xs3d48Q" 
              className="flex items-center gap-2 bg-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-pink-600 transition-all shadow-xl shadow-pink-200 active:scale-95"
            >
              <Instagram size={24} />
              Order via Instagram
            </a>
            <a 
              href="https://www.facebook.com/PATandPHIABakes" 
              className="flex items-center gap-2 bg-white text-slate-800 border-2 border-slate-100 px-8 py-4 rounded-2xl font-bold text-lg hover:border-blue-200 hover:text-blue-600 transition-all active:scale-95"
            >
              <Facebook size={24} />
              Message on FB
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm text-slate-500 font-medium">
              <span className="text-slate-900 font-bold">13K +</span> happy sugar lovers
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://lh3.googleusercontent.com/d/19uDha0rheSHe_Axc6VXJUHkbSc7ShXE0" 
              alt="Stunning Cake" 
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-pink-50"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white">
                <Star fill="currentColor" size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Bestseller</p>
                <p className="font-display font-bold text-slate-800">Cakes</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-3xl shadow-xl border border-purple-50 max-w-[200px]"
          >
            <p className="text-sm font-medium text-slate-600 italic">
              "Too pretty to eat. But you still will." 😉
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Bestsellers = () => {
  return (
    <section id="treats" className="py-24 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4">
              Trending <span className="text-hotpink cursive">Products</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-md">
              Warning: may cause sweet cravings. These are our most-loved creations.
            </p>
          </div>
          <a href="#gallery" className="flex items-center gap-2 text-pink-600 font-bold hover:gap-4 transition-all">
            View Full Menu <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATS.filter(t => t.trending).map((treat) => (
            <motion.div
              key={treat.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={treat.image} 
                  alt={treat.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full font-bold text-pink-600 shadow-sm">
                  {treat.price}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-pink-500 transition-colors">
                  {treat.name}
                </h3>
                <p className="text-slate-500 mb-6 line-clamp-2">
                  {treat.description}
                </p>
                <a 
                  href="https://www.instagram.com/patandphiabakes/?fbclid=IwY2xjawQzIuhleHRuA2FlbQIxMABicmlkETFWTmFRSmtNdTJOZGd2SzJsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiM7OTL6S668pKeOMOp5eR5Ut6jzxvFql6pKPiI-Z4hU0jFYUpYN3IAvD2j3_aem_HXHVivXJAVnKbv3Xs3d48Q"
                  className="w-full py-3 rounded-2xl border-2 border-pink-100 text-pink-600 font-bold hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all active:scale-95 text-center block"
                >
                  I Want This!
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative z-10 rounded-[40px] overflow-hidden aspect-square shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/d/1AZD9V7wN5oD-IMOpegjVbl9GqYjkVDHm" 
              alt="The Baker" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-candy-peach rounded-full -z-10 blur-2xl opacity-60" />
          <div className="absolute -top-8 -left-8 w-64 h-64 bg-candy-lavender rounded-full -z-10 blur-2xl opacity-60" />
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8">
            Baked with Love, <br />
            <span className="text-hotpink cursive">Styled with Intention.</span>
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Hi, I'm Pat, the heart behind the apron. Since 2020, this cake and pastry journey began with a simple passion: creating desserts that look like art and taste like a dream.
            </p>
            <p>
              Every piece is thoughtfully crafted with an eye for detail, blending creativity with flavor to create something truly special. From intimate celebrations to grand events, each creation is designed to be as memorable as the moment it’s made for.
            </p>
            <p className="font-bold text-slate-900">
              Because here, we don’t just bake—we create sweet experiences. ✨
            </p>
          </div>
          
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="p-6 bg-pink-50 rounded-3xl border border-pink-100">
              <p className="text-3xl font-display font-black text-pink-600 mb-1">100%</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Custom Made</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-3xl border border-purple-100">
              <p className="text-3xl font-display font-black text-purple-600 mb-1">Premium</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Ingredients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Custom Cake Design",
      desc: "Your dream cake, brought to life. From minimalist chic to maximalist magic.",
      icon: <Cake className="text-pink-500" size={32} />,
      color: "bg-pink-50"
    },
    {
      title: "Pastries & Desserts",
      desc: "Small bites, big impact. Cupcakes, cheesecakes, and brownies that steal the show.",
      icon: <Sparkles className="text-purple-500" size={32} />,
      color: "bg-purple-50"
    },
    {
      title: "Occasion Orders",
      desc: "Weddings, birthdays, or 'just because'. We handle the sweet side of your events.",
      icon: <Heart className="text-red-500" size={32} />,
      color: "bg-red-50"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900 text-white rounded-[60px] mx-4 my-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6">
          Our Sweet <span className="text-hotpink cursive">Offerings</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Every order is a masterpiece. We specialize in aesthetic presentation and premium quality.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-10 bg-white/5 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all group">
            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform", s.color)}>
              {s.icon}
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">{s.title}</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              {s.desc}
            </p>
            <button className="flex items-center gap-2 font-bold text-pink-400 hover:text-pink-300 transition-colors">
              Learn More <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4">
            The <span className="text-hotpink cursive">Gram</span> Feed
          </h2>
          <p className="text-lg text-slate-600">
            Scroll through our curated collection of sweet masterpieces.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {TREATS.map((treat) => (
            <motion.div 
              key={treat.id}
              whileHover={{ scale: 1.02 }}
              className="relative group rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={treat.image} 
                alt={treat.name} 
                className="w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <p className="text-white font-display font-bold text-xl mb-1">{treat.name}</p>
                <p className="text-white/80 text-sm">#{treat.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-candy-lavender/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4">
            Don’t just take our <span className="text-hotpink cursive">word</span> for it...
          </h2>
          <p className="text-lg text-slate-600">
            Our clients are our biggest fans (and we love them back! 💖)
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-12 rounded-[40px] shadow-xl border border-slate-100 relative overflow-hidden aspect-[4/5] flex flex-col">
              {t.image ? (
                <div className="absolute inset-0">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-10 flex flex-col justify-end">
                    <div className="flex items-center gap-6">
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.08, 0.95, 1]
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      className="relative cursor-pointer"
                    >
                      <img 
                        src={t.avatar} 
                        alt={t.name} 
                        className="w-24 h-24 rounded-[35%] border-4 border-white object-cover shadow-lg relative z-10"
                        referrerPolicy="no-referrer"
                      />
                      <motion.div 
                        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="absolute inset-0 bg-pink-300 rounded-[35%] blur-xl -z-10"
                      />
                    </motion.div>
                      <div>
                        <p className="font-bold text-white text-3xl leading-tight">{t.name}</p>
                        {t.handle && <p className="text-lg text-pink-300 font-medium">{t.handle}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-full justify-center">
                  <div className="flex items-center gap-6 mb-10">
                    <motion.div
                      animate={{ 
                        y: [0, -8, 0],
                        rotate: [0, 3, -3, 0],
                        scale: [1, 1.05, 0.98, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      className="relative cursor-pointer"
                    >
                      <img 
                        src={t.avatar} 
                        alt={t.name} 
                        className="w-20 h-20 rounded-[35%] object-cover relative z-10 shadow-md border-2 border-pink-50"
                        referrerPolicy="no-referrer"
                      />
                      <motion.div 
                        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.4, 0.1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-pink-400 rounded-[35%] blur-lg -z-10"
                      />
                    </motion.div>
                    <div>
                      <p className="font-bold text-2xl text-slate-900">{t.name}</p>
                      {t.handle && <p className="text-lg text-pink-500 font-medium">{t.handle}</p>}
                    </div>
                  </div>
                  <p className="text-xl text-slate-600 leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>
              )}
              <div className="absolute top-6 right-6 w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 z-10 shadow-sm">
                <Star size={28} fill="currentColor" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-candy-pink rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-candy-lavender rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-8">
          Let’s Make Your <span className="text-gradient cursive">Dream Dessert</span> Happen 🎂✨
        </h2>
        <p className="text-xl text-slate-600 mb-12">
          Slide into our DMs—we don’t bite (but our cakes do 😉)
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://www.instagram.com/patandphiabakes/?fbclid=IwY2xjawQzIuhleHRuA2FlbQIxMABicmlkETFWTmFRSmtNdTJOZGd2SzJsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiM7OTL6S668pKeOMOp5eR5Ut6jzxvFql6pKPiI-Z4hU0jFYUpYN3IAvD2j3_aem_HXHVivXJAVnKbv3Xs3d48Q" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-pink-500 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-pink-600 transition-all shadow-xl shadow-pink-200 active:scale-95"
          >
            <Instagram size={28} />
            Instagram DM
          </a>
          <a 
            href="https://www.facebook.com/PATandPHIABakes" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95"
          >
            <MessageCircle size={28} />
            FB Messenger
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-white">
                <Cake size={18} />
              </div>
              <span className="text-xl font-display font-extrabold tracking-tight text-pink-600 uppercase">
                Pat <span className="text-purple-500">&</span> Phia Bakes
              </span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Crafting aesthetic, luxury desserts by Pat & Phia Bakes. Every piece is baked with love and styled with intention.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/patandphiabakes/?fbclid=IwY2xjawQzIuhleHRuA2FlbQIxMABicmlkETFWTmFRSmtNdTJOZGd2SzJsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiM7OTL6S668pKeOMOp5eR5Ut6jzxvFql6pKPiI-Z4hU0jFYUpYN3IAvD2j3_aem_HXHVivXJAVnKbv3Xs3d48Q" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200 text-pink-500 hover:bg-pink-500 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/PATandPHIABakes" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-pink-500 transition-colors">Home</a></li>
              <li><a href="#treats" className="hover:text-pink-500 transition-colors">Bestsellers</a></li>
              <li><a href="#about" className="hover:text-pink-500 transition-colors">Our Story</a></li>
              <li><a href="#gallery" className="hover:text-pink-500 transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4 text-slate-500">
              <li>patandphiabakes@gmail.com</li>
              <li>Philippines</li>
              <li className="font-bold text-pink-500">Open for DMs 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400 font-medium">
          <p>© 2026 Pat & Phia Bakes. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <a 
            href="https://www.instagram.com/patandphiabakes/?fbclid=IwY2xjawQzIuhleHRuA2FlbQIxMABicmlkETFWTmFRSmtNdTJOZGd2SzJsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiM7OTL6S668pKeOMOp5eR5Ut6jzxvFql6pKPiI-Z4hU0jFYUpYN3IAvD2j3_aem_HXHVivXJAVnKbv3Xs3d48Q"
            className="flex items-center gap-2 bg-pink-500 text-white px-6 py-4 rounded-full font-bold shadow-2xl shadow-pink-300 hover:bg-pink-600 transition-all active:scale-95 group"
          >
            <Instagram size={24} />
            <span>Message to Order</span>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-[10px] font-black animate-bounce">
              1
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-pink-200 selection:text-pink-900">
      <GlitterCursor />
      <Navbar />
      <main>
        <Hero />
        <Bestsellers />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
