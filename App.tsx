
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CTASection from './components/CTASection';
import WithdrawalList from './components/WithdrawalList';
import StickyFooter from './components/StickyFooter';

const App: React.FC = () => {
  const [moneyItems, setMoneyItems] = useState<{ id: number; left: string; delay: string; duration: string; text: string }[]>([]);

  useEffect(() => {
    const items = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${4 + Math.random() * 6}s`,
      text: Math.random() > 0.5 ? 'Rp' : '💸'
    }));
    setMoneyItems(items);
  }, []);

  return (
    <div className="relative min-h-screen pb-24 overflow-x-hidden selection:bg-yellow-400 selection:text-black">
      {/* Falling Money Particles */}
      {moneyItems.map(item => (
        <div 
          key={item.id}
          className="money-rain"
          style={{ 
            left: item.left, 
            animationDelay: item.delay, 
            animationDuration: item.duration 
          }}
        >
          {item.text}
        </div>
      ))}

      {/* Dynamic Glow Circles */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/20 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/20 rounded-full blur-[120px] -z-10" />

      <main className="max-w-md mx-auto px-5 flex flex-col items-center relative z-10">
        <Header />
        <Hero />
        <CTASection />
        <WithdrawalList />
      </main>

      <StickyFooter />
    </div>
  );
};

export default App;
