
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full flex justify-center py-4">
      <div className="relative w-72 h-72 flex items-center justify-center">
        {/* Neon Platform */}
        <div className="absolute bottom-6 w-full h-12 bg-indigo-500/20 rounded-[100%] border border-indigo-400/50 shadow-[0_0_50px_rgba(99,102,241,0.4)] flex items-center justify-center">
             <div className="w-[80%] h-[80%] bg-indigo-500/10 rounded-[100%] border border-indigo-300/30 blur-sm" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-0 right-8 w-14 h-14 animate-float" style={{ animationDelay: '0.8s' }}>
          <img src="https://cdn-icons-png.flaticon.com/512/2488/2488649.png" alt="coin" className="w-full h-full drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]" />
        </div>
        <div className="absolute bottom-20 left-4 w-10 h-10 animate-float">
          <img src="https://cdn-icons-png.flaticon.com/512/2488/2488649.png" alt="coin" className="w-full h-full drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
        </div>
        
        {/* The Main Treasure */}
        <div className="relative z-10 w-52 h-52 animate-float">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1000/1000940.png" 
            alt="Treasure Chest" 
            className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
