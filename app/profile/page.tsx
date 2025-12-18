'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'settings' | 'goals'>('overview');
  const [notifications, setNotifications] = useState(true);

  const stats = [
    { label: 'Total Days', value: '127', icon: '📅', color: 'text-blue-600 dark:text-blue-400' },
    { label: 'Meals Logged', value: '384', icon: '🍽️', color: 'text-green-600 dark:text-green-400' },
    { label: 'Avg Calories', value: '2,145', icon: '🔥', color: 'text-orange-600 dark:text-orange-400' },
    { label: 'Streak', value: '15 days', icon: '🔥', color: 'text-red-600 dark:text-red-400' },
  ];

  const recentAchievements = [
    { title: 'Week Warrior', description: 'Logged meals for 7 days straight', icon: '🏆', date: '2 days ago' },
    { title: 'Protein Power', description: 'Met protein goal 5 days in a row', icon: '💪', date: '5 days ago' },
    { title: 'Calorie Master', description: 'Stayed within calorie range', icon: '🎯', date: '1 week ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-slate-900 dark:text-slate-100">
              <span>🥗</span>
              <span>Nutrition App</span>
            </Link>
            <Link
              href="/"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Profile Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl shadow-lg">
                👤
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-green-500 border-4 border-white dark:border-slate-950"></div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                John Doe
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Member since January 2024 • Active for 127 days
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-medium">
                  Edit Profile
                </button>
                <button className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium">
                  Share Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className={`text-2xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex space-x-1">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'settings', label: 'Settings' },
              { id: 'goals', label: 'Goals' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {activeTab === 'overview' && (
              <>
                {/* Achievements */}
                <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                    Recent Achievements
                  </h2>
                  <div className="space-y-4">
                    {recentAchievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                      >
                        <div className="text-3xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                            {achievement.title}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                            {achievement.description}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-500">
                            {achievement.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weekly Summary */}
                <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                    This Week Summary
                  </h2>
                  <div className="space-y-3">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                      const calories = Math.floor(Math.random() * 500) + 1800;
                      const goal = 2200;
                      const percentage = Math.min((calories / goal) * 100, 100);
                      return (
                        <div key={day} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600 dark:text-slate-400">{day}</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-100">
                              {calories} / {goal} kcal
                            </span>
                          </div>
                          <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'settings' && (
              <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Account Settings
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Display Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                    <div>
                      <div className="font-medium text-slate-900 dark:text-slate-100">Email Notifications</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Receive updates about your progress
                      </div>
                    </div>
                    <button
                      onClick={() => setNotifications(!notifications)}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        notifications ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'
                      }`}
                    >
                      <span
                        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          notifications ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <button className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'goals' && (
              <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Nutrition Goals
                </h2>

                <div className="space-y-6">
                  {[
                    { label: 'Daily Calories', current: 2145, goal: 2200, unit: 'kcal', color: 'from-orange-500 to-red-500' },
                    { label: 'Protein', current: 145, goal: 150, unit: 'g', color: 'from-blue-500 to-cyan-500' },
                    { label: 'Carbs', current: 265, goal: 275, unit: 'g', color: 'from-green-500 to-emerald-500' },
                    { label: 'Fats', current: 72, goal: 75, unit: 'g', color: 'from-purple-500 to-pink-500' },
                  ].map((item, index) => {
                    const percentage = Math.min((item.current / item.goal) * 100, 100);
                    return (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium text-slate-900 dark:text-slate-100">{item.label}</span>
                          <span className="text-slate-600 dark:text-slate-400">
                            {item.current} / {item.goal} {item.unit}
                          </span>
                        </div>
                        <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-500`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-500">
                          {percentage >= 100 ? 'Goal achieved! 🎉' : `${Math.round(item.goal - item.current)} ${item.unit} remaining`}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button className="w-full px-4 py-2 rounded-lg border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium">
                  Edit Goals
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">This Week</div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">14,215 kcal</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Average Daily</div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">2,031 kcal</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                href="/"
                className="block w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Log Meal
              </Link>
              <Link
                href="/"
                className="block w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-center font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

