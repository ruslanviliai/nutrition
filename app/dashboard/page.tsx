'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const todayStats = {
    calories: { current: 1845, goal: 2200, percentage: 84 },
    protein: { current: 125, goal: 150, percentage: 83 },
    carbs: { current: 210, goal: 275, percentage: 76 },
    fats: { current: 68, goal: 75, percentage: 91 },
  };

  const recentMeals = [
    { id: 1, name: 'Grilled Chicken Salad', time: '12:30 PM', calories: 420, type: 'Lunch' },
    { id: 2, name: 'Greek Yogurt Bowl', time: '10:15 AM', calories: 280, type: 'Snack' },
    { id: 3, name: 'Avocado Toast', time: '8:00 AM', calories: 320, type: 'Breakfast' },
  ];

  const upcomingMeals = [
    { name: 'Dinner', time: '7:00 PM', estimated: 550 },
    { name: 'Evening Snack', time: '9:00 PM', estimated: 150 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🥗</span>
              <span className="text-xl font-bold text-slate-900 dark:text-slate-100">Nutrition Dashboard</span>
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/meals" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Meals
              </Link>
              <Link href="/goals" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Goals
              </Link>
              <Link href="/analytics" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                Analytics
              </Link>
              <Link href="/" className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors text-sm font-medium">
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Date Selector */}
        <div className="mb-8">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 rounded-lg border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {Object.entries(todayStats).map(([key, stat]) => (
            <div key={key} className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  {key}
                </h3>
                <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {stat.percentage}%
                </span>
              </div>
              <div className="mb-2">
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {stat.current}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-500">
                    / {stat.goal}
                  </span>
                </div>
              </div>
              <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${
                    key === 'calories' ? 'from-orange-500 to-red-500' :
                    key === 'protein' ? 'from-blue-500 to-cyan-500' :
                    key === 'carbs' ? 'from-green-500 to-emerald-500' :
                    'from-purple-500 to-pink-500'
                  } rounded-full transition-all duration-500`}
                  style={{ width: `${stat.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Meals */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Today's Meals
                </h2>
                <Link
                  href="/meals"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  + Add Meal
                </Link>
              </div>
              <div className="space-y-4">
                {recentMeals.map((meal) => (
                  <div
                    key={meal.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {meal.type}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-500">
                          {meal.time}
                        </span>
                      </div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                        {meal.name}
                      </h3>
                    </div>
                    <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
                      {meal.calories} kcal
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/meals"
                  className="p-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center font-semibold hover:from-blue-600 hover:to-purple-600 transition-all"
                >
                  Log Meal
                </Link>
                <Link
                  href="/goals"
                  className="p-4 rounded-lg border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-center font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Set Goals
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Meals */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">
                Upcoming
              </h3>
              <div className="space-y-3">
                {upcomingMeals.map((meal, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100">{meal.name}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-500">{meal.time}</div>
                    </div>
                    <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                      ~{meal.estimated} kcal
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Summary */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <h3 className="text-lg font-bold mb-4">Daily Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-100">Calories</span>
                  <span className="font-bold">{todayStats.calories.current} / {todayStats.calories.goal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Remaining</span>
                  <span className="font-bold">{todayStats.calories.goal - todayStats.calories.current} kcal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

