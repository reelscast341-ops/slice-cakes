import { motion } from 'motion/react';
import { ChevronDown, ShoppingBag, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      {/* Background Video */}
      <div className="fixed inset-0 z-0 w-full h-full overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 opacity-40"
          poster="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=2000"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-syrup-over-a-slice-of-cake-42931-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#1a0f0a] z-10"></div>
      </div>

      {/* Hero Section */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 pt-32 pb-24 max-w-5xl mx-auto min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Taste Guaranteed.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-500 italic">
              Delicioso.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-12 drop-shadow-md">
            The best cake slices in town. Completely fresh, incredibly moist, and baked to perfection every single day.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/menu">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                <ShoppingBag className="w-5 h-5" />
                Order Your Slice Now
              </motion.button>
            </Link>
            <Link to="/virtual-tour">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Visit Our Bakery
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </main>

      {/* Quick Preview Section */}
      <section className="relative z-20 bg-[#1a0f0a] py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Our Two Masterpieces</h2>
              <p className="text-gray-400 max-w-xl text-lg">We don't do everything. We just do Chocolate and Pineapple better than anyone else.</p>
            </div>
            <Link to="/menu" className="group flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors text-lg">
              View Full Menu <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-3xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=1000" alt="Chocolate Slice" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-serif text-3xl font-bold text-white mb-2">Decadent Chocolate</h3>
                <p className="text-amber-400 font-bold text-xl">Rs. 90</p>
              </div>
            </div>
            <div className="relative h-80 rounded-3xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=1000" alt="Pineapple Slice" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-serif text-3xl font-bold text-white mb-2">Tropical Pineapple</h3>
                <p className="text-yellow-400 font-bold text-xl">Rs. 80</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
