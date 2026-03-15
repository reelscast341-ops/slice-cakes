import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';

export default function VirtualTour() {
  const images = [
    { src: "https://images.unsplash.com/photo-1555507036-ab1f40ce88cb?auto=format&fit=crop&q=80&w=1000", alt: "Bakery Display", span: "col-span-2 row-span-2" },
    { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000", alt: "Baker at Work", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1587241321921-91a834d6d191?auto=format&fit=crop&q=80&w=1000", alt: "Fresh Ingredients", span: "col-span-1 row-span-1" },
    { src: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=1000", alt: "Chocolate Pour", span: "col-span-2 row-span-1" },
  ];

  return (
    <div className="min-h-screen bg-[#1a0f0a] pt-32 pb-24 px-6 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Step Inside Our Kitchen
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We believe in complete transparency. Take a virtual walk through our FSSAI approved bakery where the magic happens every single morning.
          </motion.p>
        </div>

        {/* Video Tour Hero */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-full h-[60vh] rounded-3xl overflow-hidden mb-12 group cursor-pointer shadow-2xl border border-white/10"
        >
          <img 
            src="https://images.unsplash.com/photo-1555507036-ab1f40ce88cb?auto=format&fit=crop&q=80&w=2000" 
            alt="Virtual Tour Video Thumbnail" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center group-hover:bg-black/40 transition-colors">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
              <PlayCircle className="w-12 h-12 text-white" />
            </div>
            <p className="text-white mt-6 font-serif text-2xl font-bold tracking-wider">Play Full Tour</p>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-serif text-xl font-bold">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
