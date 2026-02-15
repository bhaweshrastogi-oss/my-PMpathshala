export function Footer() {
  return (
    <footer className="py-16 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold text-white">PMpathshala</span>
            </a>
            <p className="text-slate-400 text-sm">
              Empowering the next generation of product leaders through world-class education and mentorship.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-white mb-4">Courses</h4>
            <ul className="space-y-2">
              <li><a href="#courses" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">Basic to Advanced PM</a></li>
              <li><a href="#courses" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">AI Product Manager</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">Bundle Package</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#curriculum" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">Curriculum</a></li>
              <li><a href="#instructor" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">Instructor</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">FAQ</a></li>
              <li><a href="/terms.html" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">Terms of Service</a></li>
              <li><a href="/privacy.html" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+919667783900" className="flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91-9667783900
                </a>
              </li>
              <li>
                <a href="mailto:support@pmpathshala.com" className="flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  support@pmpathshala.com
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/bhawesh-rastogi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 PMpathshala. All rights reserved. | Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
