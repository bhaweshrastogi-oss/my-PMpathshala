export function Stats() {
  const stats = [
    { value: '150+', label: 'Students Trained' },
    { value: '4.9', label: 'Course Rating' },
    { value: '8', label: 'Weeks Per Course' },
    { value: '32+', label: 'Hours of Learning' },
  ];

  return (
    <section className="py-16 px-4 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Next Batches */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-4">Next Batches Starting</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="bg-primary-50 border border-primary-100 px-6 py-3 rounded-xl">
              <span className="text-primary-600 font-semibold">Basic to Advanced PM:</span>
              <span className="text-slate-700 ml-2">Mar 7 • 11 AM - 2 PM</span>
            </div>
            <div className="bg-primary-50 border border-primary-100 px-6 py-3 rounded-xl">
              <span className="text-primary-600 font-semibold">AI PM:</span>
              <span className="text-slate-700 ml-2">Mar 30 • 5 PM - 8 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
