import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#1a0f0a] pt-32 pb-24 px-6 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Have a special request or a bulk order? We'd love to hear from you. Drop us a message or visit our bakery.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-[#2a1b14] p-8 rounded-3xl border border-white/5 flex items-start gap-6">
              <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-amber-500" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400 leading-relaxed">
                  123 Baker Street, Food District<br />
                  New Delhi, 110001<br />
                  India
                </p>
              </div>
            </div>

            <div className="bg-[#2a1b14] p-8 rounded-3xl border border-white/5 flex items-start gap-6">
              <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-7 h-7 text-amber-500" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-400 leading-relaxed">
                  +91 98765 43210<br />
                  +91 11 2345 6789
                </p>
              </div>
            </div>

            <div className="bg-[#2a1b14] p-8 rounded-3xl border border-white/5 flex items-start gap-6">
              <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7 text-amber-500" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">Opening Hours</h3>
                <p className="text-gray-400 leading-relaxed">
                  Monday - Sunday<br />
                  8:00 AM - 10:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#2a1b14] p-10 rounded-3xl border border-white/5 shadow-2xl"
          >
            <h3 className="font-serif text-3xl font-bold text-white mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-xl transition-colors text-lg">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
