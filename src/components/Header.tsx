import { useState } from 'react';

interface HeaderProps {
  openEnrollModal: (course?: string) => void;
}

export function Header({ openEnrollModal }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 py-2 px-4 text-center">
        <p className="text-sm text-white font-medium">
          🚀 New PM Batch Starting March 7, 2026 - Limited Seats!
        </p>
      </div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-xl font-bold text-slate-800">PMpathshala</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#courses" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">Courses</a>
            <a href="#curriculum" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">Curriculum</a>
            <a href="#instructor" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">Instructor</a>
            <a href="#pricing" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">Pricing</a>
            <a href="#faq" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">FAQ</a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => openEnrollModal()}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary-500/25"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              <a href="#courses" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">Courses</a>
              <a href="#curriculum" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">Curriculum</a>
              <a href="#instructor" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">Instructor</a>
              <a href="#pricing" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">Pricing</a>
              <a href="#faq" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">FAQ</a>
              <button 
                onClick={() => openEnrollModal()}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all w-full"
              >
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
