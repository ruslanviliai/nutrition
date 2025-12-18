'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MealsPage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMeal, setNewMeal] = useState({ name: '', calories: '', type: 'Breakfast' });

  const meals = [
    { id: 1, name: 'Grilled Chicken Salad', type: 'Lunch', calories: 420, time: '12:30 PM', date: '2024-01-15' },
    { id: 2, name: 'Greek Yogurt Bowl', type: 'Snack', calories: 280, time: '10:15 AM', date: '2024-01-15' },
    { id: 3, name: 'Avocado Toast', type: 'Breakfast', calories: 320, time: '8:00 AM', date: '2024-01-15' },
    { id: 4, name: 'Salmon with Vegetables', type: 'Dinner', calories: 550, time: '7:00 PM', date: '2024-01-14' },
    { id: 5, name: 'Protein Shake', type: 'Snack', calories: 200, time: '3:30 PM', date: '2024-01-14' },
  ];

  const filteredMeals = meals.filter(meal => meal.date === selectedDate);

  const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

  const handleAddMeal = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding meal:', newMeal);
    alert('Meal added! (This is a demo version)');
    setNewMeal({ name: '', calories: '', type: 'Breakfast' });
    setShowAddForm(false);
  };

  const totalCalories = filteredMeals.reduce((sum, meal) => sum + meal.calories, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-950 dark:via-slate-900 dark:to-red-950">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🍽️</span>
              <span className="text-xl font-bold text-slate-900 dark:text-slate-100">Meal Tracker</span>
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
        {/* Date Selector and Add Button */}
        <div className="mb-8 flex items-center justify-between">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 rounded-lg border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-orange-500"
          />
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            {showAddForm ? 'Cancel' : '+ Add Meal'}
          </button>
        </div>

        {/* Add Meal Form */}
        {showAddForm && (
          <div className="mb-8 p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Add New Meal
            </h2>
            <form onSubmit={handleAddMeal} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Meal Name
                </label>
                <input
                  type="text"
                  value={newMeal.name}
                  onChange={(e) => setNewMeal({ ...newMeal, name: e.target.value })}
                  placeholder="e.g., Grilled Chicken Salad"
                  className="w-full px-4 py-2 rounded-lg border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Type
                  </label>
                  <select
                    value={newMeal.type}
                    onChange={(e) => setNewMeal({ ...newMeal, type: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-orange-500"
                  >
                    {mealTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Calories
                  </label>
                  <input
                    type="number"
                    value={newMeal.calories}
                    onChange={(e) => setNewMeal({ ...newMeal, calories: e.target.value })}
                    placeholder="420"
                    className="w-full px-4 py-2 rounded-lg border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold hover:from-orange-700 hover:to-red-700 transition-all"
              >
                Add Meal
              </button>
            </form>
          </div>
        )}

        {/* Summary Card */}
        <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Total Calories for {selectedDate}</div>
              <div className="text-4xl font-bold">{totalCalories} kcal</div>
            </div>
            <div className="text-6xl opacity-20">🔥</div>
          </div>
        </div>

        {/* Meals List */}
        <div className="space-y-4">
          {filteredMeals.length === 0 ? (
            <div className="p-12 text-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                No meals logged yet
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Start tracking your nutrition by adding your first meal
              </p>
              <button
                onClick={() => setShowAddForm(true)}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold hover:shadow-lg transition-all"
              >
                Add Your First Meal
              </button>
            </div>
          ) : (
            filteredMeals.map((meal) => (
              <div
                key={meal.id}
                className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400">
                        {meal.type}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-500">
                        {meal.time}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                      {meal.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {meal.calories}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-500">
                      kcal
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

