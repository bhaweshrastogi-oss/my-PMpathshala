interface CoursesProps {
  openEnrollModal: (course?: string) => void;
}

export function Courses({ openEnrollModal }: CoursesProps) {
  return (
    <section id="courses" className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold mb-2">Our Programs</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Choose Your Learning Path</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Whether you're starting your PM journey or looking to specialize in AI, we have the perfect course for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Basic to Advanced PM */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-primary-300 hover:shadow-xl transition-all group relative overflow-hidden">
            <div className="absolute top-6 right-6 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              BESTSELLER
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Basic to Advanced Product Management</h3>
              <div className="flex items-center gap-4 text-slate-500 text-sm">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  8 Weeks
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Beginner Friendly
                </span>
              </div>
            </div>

            <p className="text-slate-600 mb-6">
              A comprehensive journey from PM fundamentals to advanced strategies. Perfect for aspiring PMs, career switchers, and professionals looking to formalize their skills.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                '32+ Hours of Live Sessions',
                'Hands-on Assignments',
                '1:1 Mentorship Sessions',
                'Certificate of Completion',
                'Lifetime Access to Resources'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-700">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-slate-400 line-through text-lg">₹29,999</span>
              <span className="text-3xl font-bold text-slate-900">₹20,000</span>
            </div>

            <button 
              onClick={() => openEnrollModal('basic')}
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary-500/25"
            >
              Enroll Now
            </button>
          </div>

          {/* AI PM */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-primary-300 hover:shadow-xl transition-all group relative overflow-hidden">
            <div className="absolute top-6 right-6 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              HOT 🔥
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">AI Product Manager</h3>
              <div className="flex items-center gap-4 text-slate-500 text-sm">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  8 Weeks
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Intermediate
                </span>
              </div>
            </div>

            <p className="text-slate-600 mb-6">
              Specialize in AI/ML product management. Learn to build, launch, and scale AI-powered products. Perfect for PMs looking to enter the AI space. Weekend classes: 5 PM - 8 PM IST
            </p>

            <ul className="space-y-3 mb-8">
              {[
                '40+ Hours of Live Sessions',
                'Hands-on AI Assignments',
                'AI Tools & Frameworks',
                'Certificate of Specialization',
                'Lifetime Access to Resources'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-700">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-slate-400 line-through text-lg">₹35,000</span>
              <span className="text-3xl font-bold text-slate-900">₹25,000</span>
            </div>

            {/* COMMENTED OUT: AI PM Enroll Button - Uncomment when AI PM course is ready to launch
            <button 
              onClick={() => openEnrollModal('ai')}
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary-500/25"
            >
              Enroll Now
            </button>
            */}
            
            {/* Coming Soon Badge - Remove when AI PM enrollment is enabled */}
            <div className="w-full bg-slate-200 text-slate-600 py-4 rounded-xl font-semibold text-center">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
