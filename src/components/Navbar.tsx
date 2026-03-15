import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, Menu as MenuIcon, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu & Prices', path: '/menu' },
    { name: 'Virtual Bakery', path: '/virtual-tour' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a0f0a]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-black font-serif font-bold text-xl group-hover:scale-110 transition-transform">
            S
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-white">Slice of Heaven</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-amber-400 ${
                location.pathname === link.path ? 'text-amber-400' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-2 bg-green-900/40 border border-green-500/30 px-3 py-1.5 rounded-full">
            <CheckCircle className="w-3.5 h-3.5 text-green-400" />
            <span className="text-xs font-medium text-green-100 uppercase tracking-wider">FSSAI</span>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#1a0f0a] border-t border-white/10 shadow-2xl py-4 px-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-lg font-medium py-2 border-b border-white/5 transition-colors ${
                location.pathname === link.path ? 'text-amber-400' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-2 bg-green-900/40 border border-green-500/30 px-4 py-3 rounded-xl mt-2 justify-center">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium text-green-100 uppercase tracking-wider">FSSAI Approved Bakery</span>
          </div>
        </motion.div>
      )}
    </header>
  );
}
