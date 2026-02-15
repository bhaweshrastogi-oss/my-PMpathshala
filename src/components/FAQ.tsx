import { useState } from 'react';

const faqs = [
  {
    question: 'Do I need prior experience in Product Management?',
    answer: 'No prior PM experience is required for the Basic to Advanced PM course. It\'s designed for beginners, career switchers, and professionals looking to formalize their skills. For the AI PM course, we recommend having some familiarity with product management concepts.'
  },
  {
    question: 'What are the class timings?',
    answer: 'Basic to Advanced PM: Weekends (Saturday & Sunday) 11 AM - 2 PM IST. AI Product Manager: Weekends (Saturday & Sunday) 5 PM - 8 PM IST. All sessions are live and interactive.'
  },
  {
    question: 'Are the sessions live or recorded?',
    answer: 'All sessions are conducted live via Zoom. However, recordings are made available within 24 hours for those who miss a session. You get lifetime access to all recordings and resources.'
  },
  {
    question: 'What kind of job support do you provide?',
    answer: 'We provide comprehensive job support including resume reviews, mock interviews, LinkedIn profile optimization, referrals to our hiring partner network, and 1:1 mentorship sessions focused on your career goals.'
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Yes, we offer a 15-day money-back guarantee. If you\'re not satisfied with the course within the first 15 days, you can request a full refund with no questions asked.'
  },
  {
    question: 'How many seats are available per batch?',
    answer: 'Each batch is limited to 30 students to ensure personalized attention and quality mentorship. We recommend enrolling early as batches fill up quickly.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary-600 font-semibold mb-2">Got Questions?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-slate-50 rounded-2xl border overflow-hidden transition-all ${
                openIndex === index ? 'border-primary-300 shadow-md' : 'border-slate-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-slate-500 transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
