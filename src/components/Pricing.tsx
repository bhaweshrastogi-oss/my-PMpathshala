interface PricingProps {
  openEnrollModal: (course?: string) => void;
}

export function Pricing({ openEnrollModal }: PricingProps) {
  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary-600 font-semibold mb-2">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Invest in Your Future</h2>
          <p className="text-slate-600">Flexible payment options to suit your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic PM */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-300 hover:shadow-xl transition-all">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-1">Basic to Advanced PM</h3>
              <p className="text-slate-500 text-sm">8-Week Program</p>
            </div>

            <div className="text-center mb-6">
              <div className="text-slate-400 line-through text-lg">₹29,999</div>
              <div className="text-4xl font-bold text-slate-900">₹20,000</div>
              <p className="text-slate-500 text-sm mt-1">One-time payment</p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                '32+ Hours Live Sessions',
                'Hands-on Assignments',
                '1:1 Mentorship Sessions',
                'Real-world Case Studies',
                'Lifetime Access',
                'Certificate'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => openEnrollModal('basic')}
              className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 py-4 rounded-xl font-semibold transition-all"
            >
              Enroll Now
            </button>
          </div>

          {/* Bundle */}
          <div className="bg-gradient-to-b from-primary-50 to-white rounded-3xl p-8 border-2 border-primary-500 hover:shadow-xl transition-all relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
              🎉 BEST VALUE - SAVE ₹10,000
            </div>

            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-1">Complete PM Bundle</h3>
              <p className="text-slate-500 text-sm">Both Courses Included</p>
            </div>

            <div className="text-center mb-6">
              <div className="text-slate-400 line-through text-lg">₹45,000</div>
              <div className="text-4xl font-bold text-slate-900">₹35,000</div>
              <p className="text-slate-500 text-sm mt-1">One-time payment</p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                '72+ Hours Live Sessions',
                'Comprehensive Assignments',
                'Priority 1:1 Mentorship',
                'Real-world Case Studies',
                'Lifetime Access',
                'Both Certificates',
                'PM Community Access'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => openEnrollModal('bundle')}
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary-500/25"
            >
              Get The Bundle
            </button>
          </div>

          {/* AI PM */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary-300 hover:shadow-xl transition-all">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-1">AI Product Manager</h3>
              <p className="text-slate-500 text-sm">8-Week Program</p>
            </div>

            <div className="text-center mb-6">
              <div className="text-slate-400 line-through text-lg">₹35,000</div>
              <div className="text-4xl font-bold text-slate-900">₹25,000</div>
              <p className="text-slate-500 text-sm mt-1">One-time payment</p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                '40+ Hours Live Sessions',
                'Hands-on AI Assignments',
                'AI Tools Training',
                '1:1 Mentorship Sessions',
                'Lifetime Access',
                'Specialization Certificate'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => openEnrollModal('ai')}
              className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 py-4 rounded-xl font-semibold transition-all"
            >
              Enroll Now
            </button>
          </div>
        </div>

        {/* Payment Info */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-4">We accept all major payment methods</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-slate-500">
              <div className="w-10 h-10 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold">UPI</span>
              </div>
            </div>
            <span className="text-slate-500 text-sm">15 days money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
