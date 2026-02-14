export function Instructor() {
  return (
    <section id="instructor" className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary-600 font-semibold mb-2">Meet Your Mentor</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Learn from Experienced Professional</h2>
          <p className="text-slate-600">Get trained by a seasoned product leader with real-world experience</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-5xl font-bold text-white shadow-xl shadow-primary-500/30">
                  BR
                </div>
              </div>

              {/* Info */}
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Bhawesh Rastogi</h3>
                <p className="text-primary-600 font-medium mb-4">Sr. AVP - AI Product Management at EXL</p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
                  <span className="bg-primary-50 border border-primary-100 px-4 py-2 rounded-full text-primary-700 text-sm font-medium">
                    15+ Years Experience
                  </span>
                  <span className="bg-primary-50 border border-primary-100 px-4 py-2 rounded-full text-primary-700 text-sm font-medium">
                    AI/ML Expert
                  </span>
                  <span className="bg-primary-50 border border-primary-100 px-4 py-2 rounded-full text-primary-700 text-sm font-medium">
                    150+ Students Trained
                  </span>
                </div>

                <p className="text-slate-600 mb-6">
                  With over 15 years of experience in product management and AI, Bhawesh has led multiple successful AI product launches at Fortune 500 companies. His expertise spans across building AI-powered solutions, driving product strategy, and mentoring the next generation of product leaders. Currently leading AI Product Management at EXL, he brings real-world insights directly to the classroom.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                  <a 
                    href="tel:+919667783900"
                    className="flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91-9667783900
                  </a>
                  <a 
                    href="https://linkedin.com/in/bhawesh-rastogi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
