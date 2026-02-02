import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="mt-14 mb-10 relative w-full text-center px-2 flex flex-col items-center">
      {/* Background Glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-24 bg-yellow-500/10 blur-[60px] pointer-events-none"></div>

      <div className="flex flex-row flex-nowrap items-center justify-center gap-2 sm:gap-3 w-full overflow-visible relative z-10">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl text-modern-chrome text-animated-gold italic drop-shadow-2xl">
          MAIN HP
        </h1>
        
        <div className="flex flex-row items-baseline gap-1 sm:gap-2">
            <span className="text-gray-300 font-medium text-xs sm:text-lg lg:text-xl lowercase italic opacity-80 tracking-tight">
                dapat
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-neon-cuan font-black drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                CUAN!!!
            </h2>
        </div>
      </div>
      
      <div className="mt-10 px-8 py-4 glass-card rounded-[2rem] shadow-[0_15px_35px_rgba(0,0,0,0.3)] max-w-[360px] border border-white/10 relative overflow-hidden group">
        {/* Animated highlight across description card */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        <p className="text-gray-200 text-sm sm:text-base font-semibold leading-relaxed relative z-10">
          Main game seru setiap hari dan kumpulkan <br/>
          <span className="text-yellow-400 font-extrabold drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] text-xl sm:text-2xl mt-1 inline-block">
            saldo DANA gratis
          </span> 
          <span className="text-white ml-1 font-bold">sepuasnya!</span>
        </p>
      </div>
    </header>
  );
};

export default Header;