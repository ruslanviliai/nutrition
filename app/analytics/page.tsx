'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('week');

  const weeklyData = [
    { day: 'Mon', calories: 2100, protein: 145, carbs: 260, fats: 72 },
    { day: 'Tue', calories: 1950, protein: 135, carbs: 240, fats: 68 },
    { day: 'Wed', calories: 2200, protein: 150, carbs: 275, fats: 75 },
    { day: 'Thu', calories: 2050, protein: 140, carbs: 250, fats: 70 },
    { day: 'Fri', calories: 2150, protein: 148, carbs: 270, fats: 73 },
    { day: 'Sat', calories: 2300, protein: 155, carbs: 285, fats: 78 },
    { day: 'Sun', calories: 2000, protein: 138, carbs: 245, fats: 69 },
  ];

  const averages = {
    calories: Math.round(weeklyData.reduce((sum, d) => sum + d.calories, 0) / weeklyData.length),
    protein: Math.round(weeklyData.reduce((sum, d) => sum + d.protein, 0) / weeklyData.length),
    carbs: Math.round(weeklyData.reduce((sum, d) => sum + d.carbs, 0) / weeklyData.length),
    fats: Math.round(weeklyData.reduce((sum, d) => sum + d.fats, 0) / weeklyData.length),
  };

  const maxCalories = Math.max(...weeklyData.map(d => d.calories));

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">📊</span>
              <span className="text-xl font-bold text-slate-900 dark:text-slate-100">Analytics</span>
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
        {/* Time Range Selector */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Nutrition Analytics
          </h1>
          <div className="flex space-x-2">
            {(['week', 'month', 'year'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  timeRange === range
                    ? 'bg-teal-600 text-white'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Average Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Avg Calories</div>
            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">{averages.calories}</div>
            <div className="text-xs text-green-600 dark:text-green-400 mt-1">+2.3% from last week</div>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Avg Protein</div>
            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">{averages.protein}g</div>
            <div className="text-xs text-green-600 dark:text-green-400 mt-1">+1.8% from last week</div>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Avg Carbs</div>
            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">{averages.carbs}g</div>
            <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">-0.5% from last week</div>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Avg Fats</div>
            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">{averages.fats}g</div>
            <div className="text-xs text-green-600 dark:text-green-400 mt-1">+1.2% from last week</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Calories Chart */}
          <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Weekly Calories
            </h2>
            <div className="space-y-4">
              {weeklyData.map((data, index) => {
                const height = (data.calories / maxCalories) * 100;
                return (
                  <div key={index} className="flex items-end space-x-2">
                    <div className="w-12 text-sm text-slate-600 dark:text-slate-400 text-center">
                      {data.day}
                    </div>
                    <div className="flex-1 relative">
                      <div
                        className="bg-gradient-to-t from-teal-500 to-cyan-500 rounded-t-lg transition-all duration-500"
                        style={{ height: `${height}%`, minHeight: '20px' }}
                      >
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-slate-900 dark:text-slate-100">
                          {data.calories}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Macronutrients Chart */}
          <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Macronutrients Distribution
            </h2>
            <div className="space-y-4">
              {weeklyData.map((data, index) => {
                const total = data.protein + data.carbs + data.fats;
                const proteinPercent = (data.protein * 4 / total) * 100;
                const carbsPercent = (data.carbs * 4 / total) * 100;
                const fatsPercent = (data.fats * 9 / total) * 100;

                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">{data.day}</span>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">
                        P: {data.protein}g | C: {data.carbs}g | F: {data.fats}g
                      </span>
                    </div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden flex">
                      <div
                        className="bg-blue-500"
                        style={{ width: `${proteinPercent}%` }}
                      />
                      <div
                        className="bg-green-500"
                        style={{ width: `${carbsPercent}%` }}
                      />
                      <div
                        className="bg-purple-500"
                        style={{ width: `${fatsPercent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
          <h2 className="text-xl font-bold mb-4">Key Insights</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-sm opacity-90 mb-1">Most Consistent Day</div>
              <div className="text-2xl font-bold">Wednesday</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-sm opacity-90 mb-1">Best Protein Day</div>
              <div className="text-2xl font-bold">Saturday</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-sm opacity-90 mb-1">Weekly Average</div>
              <div className="text-2xl font-bold">{averages.calories} kcal</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

