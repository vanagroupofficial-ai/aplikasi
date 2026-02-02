
import React from 'react';

const CTASection: React.FC = () => {
  const referralCode = "SPEEDMAN2024";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    alert('Kode undangan berhasil disalin!');
  };

  return (
    <div className="w-full space-y-8 mt-6">
      <div className="relative group flex justify-center w-full">
        {/* Extreme Glow Layer */}
        <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-80 animate-pulse transition duration-700"></div>
        
        <button className="relative w-full py-5 sm:py-6 px-4 sm:px-10 bg-gradient-to-b from-yellow-300 via-amber-500 to-orange-600 text-blue-950 text-xl sm:text-3xl font-black rounded-[2rem] shadow-[0_12px_40px_rgba(245,158,11,0.5)] active:scale-95 transition-all uppercase shimmer-btn z-10 border-t-4 border-white/40 animate-attention overflow-hidden">
          <span className="drop-shadow-sm whitespace-nowrap block">
            PASANG SEKARANG
          </span>
          
          {/* Internal reflection flare */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 rounded-t-3xl"></div>
        </button>
      </div>

      <div className="glass-card rounded-3xl p-6 text-center relative overflow-hidden group border border-white/10">
        <div className="absolute top-0 right-0 px-3 py-1 bg-yellow-400/20 rounded-bl-xl border-b border-l border-white/10">
            <span className="text-[10px] text-yellow-400 font-bold tracking-tighter">✨ BONUS DOUBLE</span>
        </div>
        
        <p className="text-gray-300 text-sm font-bold mb-3 uppercase tracking-wider">Klaim Saldo Awal Anda</p>
        <div 
          onClick={handleCopy}
          className="cursor-pointer bg-white/5 hover:bg-white/10 border-2 border-dashed border-yellow-400/40 rounded-2xl py-4 px-4 transition-all active:scale-95 group/code"
        >
          <span className="text-white group-hover/code:text-yellow-400 font-mono text-xl sm:text-2xl font-black tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-colors whitespace-nowrap">
            {referralCode}
          </span>
        </div>
        <p className="text-gray-400 text-xs mt-4 font-medium italic">
          Gunakan kode di atas untuk klaim bonus pendaftaran <br/>
          <span className="text-emerald-400 font-black not-italic text-sm">Rp100.000 CASH!</span>
        </p>
      </div>
    </div>
  );
};

export default CTASection;
