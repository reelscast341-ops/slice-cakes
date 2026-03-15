import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, CheckCircle, X } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Menu() {
  const [orderModal, setOrderModal] = useState<{ isOpen: boolean; cake: string; price: number } | null>(null);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleOrderSubmit = (e: FormEvent) => {
    e.preventDefault();
    setOrderSuccess(true);
    setTimeout(() => {
      setOrderModal(null);
      setOrderSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#1a0f0a] pt-32 pb-24 px-6 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our Menu & Prices
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We focus on doing two things perfectly. Choose your indulgence and order right here. Freshly baked, FSSAI approved, and ready to delight.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Chocolate Slice Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden bg-[#2a1b14] border border-white/5 hover:border-amber-500/30 transition-colors shadow-2xl"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=1000" 
                alt="Chocolate Cake Slice" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a1b14] to-transparent"></div>
            </div>
            
            <div className="p-8 relative">
              <div className="absolute -top-6 right-8 bg-amber-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transform rotate-3">
                Best Seller
              </div>
              <h3 className="font-serif text-4xl font-bold text-white mb-4">Decadent Chocolate</h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Rich, moist dark chocolate sponge layered with velvety Belgian chocolate ganache. A chocolate lover's ultimate dream, melting in your mouth with every bite.
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Price per slice</span>
                  <span className="text-4xl font-bold text-amber-400">Rs. 90</span>
                </div>
                <button 
                  onClick={() => setOrderModal({ isOpen: true, cake: 'Decadent Chocolate', price: 90 })}
                  className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-8 rounded-full transition-colors flex items-center gap-3 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
                >
                  <ShoppingBag className="w-5 h-5" /> Order Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* Pineapple Slice Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group relative rounded-3xl overflow-hidden bg-[#2a1b14] border border-white/5 hover:border-yellow-400/30 transition-colors shadow-2xl"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=1000" 
                alt="Pineapple Cake Slice" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a1b14] to-transparent"></div>
            </div>
            
            <div className="p-8 relative">
              <h3 className="font-serif text-4xl font-bold text-white mb-4">Tropical Pineapple</h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Light, airy vanilla sponge soaked in fresh pineapple juice, layered with whipped cream and juicy pineapple chunks. Refreshing, sweet, and perfectly balanced.
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Price per slice</span>
                  <span className="text-4xl font-bold text-yellow-400">Rs. 80</span>
                </div>
                <button 
                  onClick={() => setOrderModal({ isOpen: true, cake: 'Tropical Pineapple', price: 80 })}
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-8 rounded-full transition-colors flex items-center gap-3 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]"
                >
                  <ShoppingBag className="w-5 h-5" /> Order Now
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Order Modal */}
      <AnimatePresence>
        {orderModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => !orderSuccess && setOrderModal(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-[#2a1b14] border border-white/10 rounded-3xl p-8 max-w-md w-full shadow-2xl"
            >
              {!orderSuccess ? (
                <>
                  <button 
                    onClick={() => setOrderModal(null)}
                    className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <h2 className="font-serif text-3xl font-bold text-white mb-2">Complete Order</h2>
                  <p className="text-gray-400 mb-6">You are ordering 1x <span className="text-amber-400 font-semibold">{orderModal.cake}</span> slice for Rs. {orderModal.price}.</p>
                  
                  <form onSubmit={handleOrderSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                      <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                      <input required type="tel" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Delivery Address</label>
                      <textarea required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" rows={3} placeholder="Your full address..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-xl transition-colors mt-4 text-lg">
                      Confirm Order - Rs. {orderModal.price}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h2 className="font-serif text-3xl font-bold text-white mb-2">Order Confirmed!</h2>
                  <p className="text-gray-400">Your delicious {orderModal.cake} slice is being prepared and will be delivered shortly.</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
