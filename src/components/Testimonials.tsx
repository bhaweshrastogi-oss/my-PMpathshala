const testimonials = [
  {
    quote: "This course transformed my career. I went from being a software engineer to landing a PM role at a top tech company within 3 months of completing the course. Bhawesh's mentorship was invaluable.",
    name: 'Arun Kumar',
    initials: 'AK',
    role: 'PM at Microsoft'
  },
  {
    quote: "The AI PM course is exactly what I needed to transition into AI products. Bhawesh's real-world experience at EXL and his mentorship were game-changers for my career.",
    name: 'Priya Sharma',
    initials: 'PS',
    role: 'AI PM at Flipkart'
  },
  {
    quote: "Best investment I've made in my career. The curriculum is comprehensive, the instructor is amazing, and the community support is incredible. Highly recommend!",
    name: 'Rahul Verma',
    initials: 'RV',
    role: 'Senior PM at Razorpay'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary-600 font-semibold mb-2">Success Stories</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What Our Students Say</h2>
          <p className="text-slate-600">Join 150+ successful product managers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all"
            >
              <svg className="w-10 h-10 text-primary-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>

              <p className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold shadow-md">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-slate-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
