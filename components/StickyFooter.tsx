
import React from 'react';

const StickyFooter: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <div className="max-w-md mx-auto glass-card rounded-3xl px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/20 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
             <span className="text-2xl filter drop-shadow-md">🏃</span>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm tracking-tight">Speed Man v2.0</h4>
            <div className="flex items-center space-x-1">
                <span className="flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                <p className="text-gray-400 text-[10px]">Server Aktif & Cepat</p>
            </div>
          </div>
        </div>
        
        <button className="px-6 py-2.5 bg-white text-blue-900 text-sm font-extrabold rounded-xl shadow-[0_4px_0_#cbd5e1] hover:bg-gray-100 active:translate-y-[2px] active:shadow-none transition-all">
          DOWNLOAD
        </button>
      </div>
    </div>
  );
};

export default StickyFooter;
