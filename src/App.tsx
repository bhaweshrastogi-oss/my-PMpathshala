import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Courses } from './components/Courses';
import { Curriculum } from './components/Curriculum';
import { Instructor } from './components/Instructor';
// COMMENTED OUT: Pricing section - Uncomment when you want to show "Invest in Your Future" section
// import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import EnrollModal from './components/EnrollModal';
import { CookieBanner } from './components/CookieBanner';

export function App() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('basic');
  const [showCookies, setShowCookies] = useState(true);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (accepted) setShowCookies(false);
  }, []);

  const openEnrollModal = (course: string = 'basic') => {
    setSelectedCourse(course);
    setIsEnrollModalOpen(true);
  };

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookies(false);
  };

  const declineCookies = () => {
    setShowCookies(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header openEnrollModal={openEnrollModal} />
      <Hero openEnrollModal={openEnrollModal} />
      <Stats />
      <Courses openEnrollModal={openEnrollModal} />
      <Curriculum />
      <Instructor />
      {/* COMMENTED OUT: Pricing section - Uncomment when you want to show "Invest in Your Future" section
      <Pricing openEnrollModal={openEnrollModal} />
      */}
      <Testimonials />
      <FAQ />
      <CTA openEnrollModal={openEnrollModal} />
      <Footer />
      
      {isEnrollModalOpen && (
        <EnrollModal 
          isOpen={isEnrollModalOpen} 
          onClose={() => setIsEnrollModalOpen(false)}
          selectedCourse={selectedCourse as 'basic' | 'ai' | 'bundle'}
        />
      )}
      
      {showCookies && (
        <CookieBanner onAccept={acceptCookies} onDecline={declineCookies} />
      )}
    </div>
  );
}
