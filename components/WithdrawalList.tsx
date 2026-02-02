
import React from 'react';

interface Withdrawal {
  id: number;
  name: string;
  amount: string;
  time: string;
  avatar: string;
}

const withdrawals: Withdrawal[] = [
  { id: 1, name: "And***", amount: "Rp15.000", time: "Baru saja", avatar: "https://i.pravatar.cc/100?u=1" },
  { id: 2, name: "Budi***", amount: "Rp50.000", time: "2 Menit lalu", avatar: "https://i.pravatar.cc/100?u=2" },
  { id: 3, name: "Cit***", amount: "Rp10.000", time: "5 Menit lalu", avatar: "https://i.pravatar.cc/100?u=3" },
  { id: 4, name: "Den***", amount: "Rp100.000", time: "8 Menit lalu", avatar: "https://i.pravatar.cc/100?u=4" },
  { id: 5, name: "Eko***", amount: "Rp20.000", time: "10 Menit lalu", avatar: "https://i.pravatar.cc/100?u=5" },
];

const infiniteWithdrawals = [...withdrawals, ...withdrawals, ...withdrawals];

const WithdrawalList: React.FC = () => {
  return (
    <div className="w-full mt-10 glass-card rounded-3xl p-6 shadow-2xl relative overflow-hidden">
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }
        .animate-scroll-up {
          animation: scrollUp 15s linear infinite;
        }
        .animate-scroll-up:hover {
          animation-play-state: paused;
        }
        .mask-fade {
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
      
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-bold text-lg flex items-center">
            Pembayaran Real-time
        </h3>
        <div className="flex items-center space-x-2 bg-red-500/20 px-3 py-1 rounded-full border border-red-500/30">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider">Live</span>
        </div>
      </div>
      
      <div className="h-[320px] overflow-hidden mask-fade">
        <div className="space-y-4 animate-scroll-up">
          {infiniteWithdrawals.map((item, index) => (
            <div key={`${item.id}-${index}`} className="flex items-center space-x-4 glass-card p-3 rounded-2xl border-white/5">
              <div className="w-12 h-12 rounded-xl border border-white/10 overflow-hidden flex-shrink-0 shadow-lg">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <span className="text-gray-100 font-semibold text-sm truncate">{item.name}</span>
                  <span className="text-emerald-400 font-bold text-sm">{item.amount}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                    <span className="text-gray-500 text-[10px]">Telah ditarik ke DANA</span>
                    <span className="text-gray-500 text-[10px] italic">{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WithdrawalList;
