'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ExperimentalPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cards = [
    { id: 1, icon: '🔥', title: 'Calories', value: '2,340', unit: 'kcal', color: 'from-orange-500 to-red-500' },
    { id: 2, icon: '💪', title: 'Protein', value: '156', unit: 'g', color: 'from-blue-500 to-cyan-500' },
    { id: 3, icon: '🌾', title: 'Carbs', value: '280', unit: 'g', color: 'from-green-500 to-emerald-500' },
    { id: 4, icon: '🥑', title: 'Fats', value: '78', unit: 'g', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50'}`}>
      {/* Animated cursor follower */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out mix-blend-difference"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: isDark 
            ? 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
        }}
      />

      {/* Header */}
      <header className="relative z-10 px-6 py-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl">🧪</span>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-slate-100">Experimental Lab</span>
          </Link>
          
          <button
            onClick={() => setIsDark(!isDark)}
            className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium hover:scale-105 transition-transform"
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 px-6 py-12 sm:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl sm:text-8xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Experimental Dashboard
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A cutting-edge nutrition tracking interface with interactive elements and modern design patterns
            </p>
          </div>

          {/* Stats cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cards.map((card) => (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 transition-all duration-300 cursor-pointer ${
                  activeCard === card.id
                    ? 'border-transparent shadow-2xl scale-105'
                    : 'border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 transition-opacity duration-300 rounded-2xl ${
                  activeCard === card.id ? 'opacity-10' : ''
                }`} />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-3">{card.icon}</div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2 uppercase tracking-wide">
                    {card.title}
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                      {card.value}
                    </span>
                    <span className="text-lg text-slate-500 dark:text-slate-400">
                      {card.unit}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive chart section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Weekly Progress
              </h2>
              <div className="space-y-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                  const percentage = Math.random() * 100;
                  return (
                    <div key={day} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">{day}</span>
                        <span className="font-semibold text-slate-900 dark:text-slate-100">
                          {Math.round(percentage)}%
                        </span>
                      </div>
                      <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Recent Meals
              </h2>
              <div className="space-y-4">
                {[
                  { name: 'Grilled Chicken Salad', time: '12:30 PM', calories: 420 },
                  { name: 'Greek Yogurt Bowl', time: '10:15 AM', calories: 280 },
                  { name: 'Avocado Toast', time: '8:00 AM', calories: 320 },
                ].map((meal, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100">
                        {meal.name}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {meal.time}
                      </div>
                    </div>
                    <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                      {meal.calories}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating action buttons */}
          <div className="fixed bottom-8 right-8 flex flex-col space-y-4">
            <button className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center text-2xl">
              +
            </button>
            <button className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center text-xl">
              ⚙️
            </button>
          </div>

          {/* Back button */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold hover:scale-105 transition-transform"
            >
              <span>←</span>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-indigo-400 dark:bg-indigo-600 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(5px);
          }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}

