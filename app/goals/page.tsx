'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GoalsPage() {
  const [goals, setGoals] = useState({
    calories: 2200,
    protein: 150,
    carbs: 275,
    fats: 75,
    water: 8,
  });

  const [current, setCurrent] = useState({
    calories: 1845,
    protein: 125,
    carbs: 210,
    fats: 68,
    water: 5,
  });

  const handleGoalChange = (key: string, value: number) => {
    setGoals({ ...goals, [key]: value });
  };

  const goalItems = [
    { key: 'calories', label: 'Daily Calories', unit: 'kcal', icon: '🔥', color: 'from-orange-500 to-red-500', current: current.calories, goal: goals.calories },
    { key: 'protein', label: 'Protein', unit: 'g', icon: '💪', color: 'from-blue-500 to-cyan-500', current: current.protein, goal: goals.protein },
    { key: 'carbs', label: 'Carbohydrates', unit: 'g', icon: '🌾', color: 'from-green-500 to-emerald-500', current: current.carbs, goal: goals.carbs },
    { key: 'fats', label: 'Fats', unit: 'g', icon: '🥑', color: 'from-purple-500 to-pink-500', current: current.fats, goal: goals.fats },
    { key: 'water', label: 'Water', unit: 'glasses', icon: '💧', color: 'from-cyan-500 to-blue-500', current: current.water, goal: goals.water },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🎯</span>
              <span className="text-xl font-bold text-slate-900 dark:text-slate-100">Nutrition Goals</span>
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Dashboard
              </Link>
              <Link href="/" className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors text-sm font-medium">
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Set Your Goals
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Customize your daily nutrition targets to match your health objectives
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {goalItems.map((item) => {
            const percentage = Math.min((item.current / item.goal) * 100, 100);
            const remaining = Math.max(item.goal - item.current, 0);

            return (
              <div
                key={item.key}
                className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-100">
                        {item.label}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-500">
                        {item.current} / {item.goal} {item.unit}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {Math.round(percentage)}%
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mb-2">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-500`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      {percentage >= 100 ? 'Goal achieved! 🎉' : `${remaining} ${item.unit} remaining`}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Goal:
                  </label>
                  <input
                    type="number"
                    value={item.goal}
                    onChange={(e) => handleGoalChange(item.key, parseInt(e.target.value) || 0)}
                    className="flex-1 px-3 py-2 rounded-lg border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                    min="0"
                  />
                  <span className="text-sm text-slate-500 dark:text-slate-500">
                    {item.unit}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2">Overall Progress</h3>
              <p className="text-indigo-100">
                You're doing great! Keep tracking your meals to reach your goals.
              </p>
            </div>
            <button className="px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors">
              Save Goals
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

