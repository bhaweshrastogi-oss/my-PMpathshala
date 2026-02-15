import React, { useState, useEffect } from 'react';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: 'basic' | 'ai' | 'bundle';
}

const EnrollModal: React.FC<EnrollModalProps> = ({ isOpen, onClose, selectedCourse = 'basic' }) => {
  const [course, setCourse] = useState(selectedCourse);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setCourse(selectedCourse);
  }, [selectedCourse]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const courses = {
    basic: { 
      name: 'Basic to Advanced PM', 
      price: 20000, 
      duration: '8 Weeks',
      courseId: 'basic-pm'  // This matches the backend course ID
    },
    /* COMMENTED OUT: AI PM Course Option - Uncomment when AI PM enrollment is open
    ai: { 
      name: 'AI Product Manager', 
      price: 25000, 
      duration: '8 Weeks',
      courseId: 'ai-pm'
    },
    */
    /* COMMENTED OUT: Bundle Option - Uncomment when bundle enrollment is open
    bundle: { 
      name: 'Complete Bundle', 
      price: 35000, 
      originalPrice: 45000, 
      duration: '16 Weeks',
      courseId: 'bundle'
    }
    */
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      setError('Please agree to the Terms of Service and Privacy Policy');
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all required fields');
      return;
    }

    // Validate phone number (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      setError('Please enter a valid 10-digit Indian phone number');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // =====================================================
      // STEP 1: Submit to Web3Forms (Get student details via email)
      // =====================================================
      // 
      // 🔑 REPLACE 'YOUR_WEB3FORMS_ACCESS_KEY' WITH YOUR ACTUAL KEY
      // 
      // To get your key:
      // 1. Go to https://web3forms.com/
      // 2. Enter your email (e.g., support@pmpathshala.com)
      // 3. Check your inbox for the Access Key
      // 4. Replace the placeholder below
      //
      // =====================================================
      
      const selectedCourseData = courses[course as keyof typeof courses];
      
      const web3FormData = new FormData();
      web3FormData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');  // ← REPLACE THIS
      web3FormData.append('subject', `New Enrollment: ${selectedCourseData.name}`);
      web3FormData.append('from_name', 'PMpathshala Enrollment');
      web3FormData.append('name', formData.name);
      web3FormData.append('email', formData.email);
      web3FormData.append('phone', formData.phone);
      web3FormData.append('course', selectedCourseData.name);
      web3FormData.append('amount', `₹${selectedCourseData.price.toLocaleString()}`);
      web3FormData.append('timestamp', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));

      const web3Response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3FormData
      });

      if (!web3Response.ok) {
        throw new Error('Failed to submit enrollment details');
      }

      console.log('✅ Web3Forms submission successful');

      // =====================================================
      // STEP 2: Initiate PhonePe Payment via Backend
      // =====================================================
      //
      // 🔧 BACKEND CONFIGURATION:
      // 
      // Change the API_URL based on your setup:
      // - Local development: 'http://localhost:5000'
      // - Production: 'https://api.pmpathshala.com' (your backend URL)
      //
      // =====================================================

      const API_URL = 'http://localhost:5001';  // ← CHANGE THIS FOR PRODUCTION

      const paymentResponse = await fetch(`${API_URL}/api/payment/initiate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseId: selectedCourseData.courseId,
          name: formData.name,
          email: formData.email,
          phone: formData.phone.replace(/\s/g, '')
        })
      });

      const paymentData = await paymentResponse.json();

      if (paymentData.success && paymentData.data.paymentUrl) {
        // Redirect to PhonePe payment page
        console.log('✅ Redirecting to PhonePe:', paymentData.data.paymentUrl);
        window.location.href = paymentData.data.paymentUrl;
      } else {
        throw new Error(paymentData.message || 'Failed to initiate payment');
      }

    } catch (err) {
      console.error('Enrollment error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const selectedCourseData = courses[course as keyof typeof courses] || courses.basic;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div 
        className="absolute inset-0" 
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-slate-200">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold text-slate-900">Enroll Now</h2>
          <p className="text-slate-600 mt-1">Start your PM journey today</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Course Selection */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">Select Course *</label>
            <div className="space-y-3">
              {/* Basic PM Course */}
              <label className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                course === 'basic' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}>
                <input
                  type="radio"
                  name="course"
                  value="basic"
                  checked={course === 'basic'}
                  onChange={() => setCourse('basic')}
                  className="sr-only"
                />
                <div className="flex-1">
                  <div className="font-semibold text-slate-900">Basic to Advanced PM</div>
                  <div className="text-sm text-slate-500">8 Weeks Program</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-900">₹20,000</div>
                </div>
                {course === 'basic' && (
                  <div className="absolute top-2 right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </label>

              {/* COMMENTED OUT: AI PM Course Option - Uncomment when AI PM enrollment is open
              <label className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                course === 'ai' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}>
                <input
                  type="radio"
                  name="course"
                  value="ai"
                  checked={course === 'ai'}
                  onChange={() => setCourse('ai')}
                  className="sr-only"
                />
                <div className="flex-1">
                  <div className="font-semibold text-slate-900">AI Product Manager</div>
                  <div className="text-sm text-slate-500">8 Weeks Program</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-900">₹25,000</div>
                </div>
                {course === 'ai' && (
                  <div className="absolute top-2 right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </label>
              */}

              {/* COMMENTED OUT: Bundle Option - Uncomment when bundle enrollment is open
              <label className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                course === 'bundle' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}>
                <span className="absolute -top-2 left-4 px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded">
                  BEST VALUE
                </span>
                <input
                  type="radio"
                  name="course"
                  value="bundle"
                  checked={course === 'bundle'}
                  onChange={() => setCourse('bundle')}
                  className="sr-only"
                />
                <div className="flex-1">
                  <div className="font-semibold text-slate-900">Complete Bundle</div>
                  <div className="text-sm text-slate-500">Both Courses - 16 Weeks</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-400 line-through">₹45,000</div>
                  <div className="font-bold text-slate-900">₹35,000</div>
                </div>
                {course === 'bundle' && (
                  <div className="absolute top-2 right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </label>
              */}
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white text-slate-900 placeholder-slate-400"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white text-slate-900 placeholder-slate-400"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="9876543210"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white text-slate-900 placeholder-slate-400"
                required
              />
            </div>
          </div>

          {/* Terms Checkbox */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center mt-0.5">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="peer sr-only"
              />
              <div className="w-5 h-5 border-2 border-slate-300 rounded transition-all peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:ring-offset-2">
                {formData.agreeToTerms && (
                  <svg className="w-full h-full text-white p-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
              I agree to the <a href="/terms.html" target="_blank" className="text-blue-500 hover:underline">Terms of Service</a> and{' '}
              <a href="/privacy.html" target="_blank" className="text-blue-500 hover:underline">Privacy Policy</a>
            </span>
          </label>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </>
            ) : (
              <>
                Proceed to Payment - ₹{selectedCourseData.price.toLocaleString()}
              </>
            )}
          </button>

          <p className="text-center text-sm text-slate-500 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure payment via PhonePe
          </p>
        </form>
      </div>
    </div>
  );
};

export default EnrollModal;
