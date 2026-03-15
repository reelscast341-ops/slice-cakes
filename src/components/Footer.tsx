import { Award, CheckCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-12 px-6 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-black font-serif font-bold">
            S
          </div>
          <span className="font-serif text-xl font-bold text-white">Slice of Heaven</span>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" /> 100% Fresh Daily
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" /> FSSAI Approved
          </span>
        </div>
        
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Slice of Heaven. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
