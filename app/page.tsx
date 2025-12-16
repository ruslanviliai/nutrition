import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-300 dark:bg-emerald-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <header className="w-full px-6 py-8 sm:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <span className="text-2xl">🥗</span>
                </div>
                <span className="text-xl font-bold text-slate-900 dark:text-slate-100">NutriTrack</span>
              </div>
              <nav className="hidden space-x-6 sm:flex">
                <Link href="/login" className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
                  Sign In
                </Link>
                <Link href="/register" className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors font-medium">
                  Get Started
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero section */}
        <main className="flex-1 flex items-center justify-center px-6 py-12 sm:px-12">
          <div className="mx-auto max-w-7xl w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
                    Track Your
                    <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Nutrition Journey
                    </span>
                  </h1>
                  <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
                    Achieve your health goals with intelligent meal planning and real-time nutrition tracking
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/register"
                    className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold text-lg shadow-lg shadow-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/50 transition-all hover:scale-105"
                  >
                    Start Free Trial
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                  <Link
                    href="/login"
                    className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl font-semibold text-lg border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all"
                  >
                    Sign In
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">10K+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Active Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">50K+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Meals Tracked</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">4.9★</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">User Rating</div>
                  </div>
                </div>
              </div>

              {/* Right side - Visual cards */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">📊</div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Analytics</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Track your progress with detailed insights</p>
                  </div>
                  <div className="p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">🍎</div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Meal Plans</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Personalized nutrition recommendations</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">🎯</div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Goals</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Set and achieve your health targets</p>
                  </div>
                  <div className="p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">📱</div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Mobile App</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Track on the go with our mobile app</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
