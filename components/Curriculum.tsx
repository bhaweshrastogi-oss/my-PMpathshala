import { useState } from 'react';

const basicCurriculum = [
  {
    week: 1,
    title: 'PM Foundations & User Research',
    topics: [
      'What is Product Management?',
      'PM Roles & Responsibilities',
      'Product Lifecycle Overview',
      'User Interview Techniques',
      'Creating User Personas',
      'Jobs-to-be-Done Framework'
    ]
  },
  {
    week: 2,
    title: 'Market Analysis & Strategy',
    topics: [
      'Market Sizing (TAM/SAM/SOM)',
      'Competitive Analysis & SWOT',
      "Porter's Five Forces",
      'Crafting Product Vision',
      'OKRs & North Star Metrics',
      'Strategic Roadmapping'
    ]
  },
  {
    week: 3,
    title: 'Prioritization & Requirements',
    topics: [
      'RICE Scoring Model',
      'MoSCoW & Kano Model',
      'Value vs Effort Matrix',
      'Writing User Stories',
      'PRD Structure & Best Practices',
      'Acceptance Criteria'
    ]
  },
  {
    week: 4,
    title: 'UX Design & Prototyping',
    topics: [
      'UX Fundamentals for PMs',
      'Wireframing & Prototyping',
      'Design Thinking Process',
      'Usability Testing',
      'Working with Designers',
      'Design Review Best Practices'
    ]
  },
  {
    week: 5,
    title: 'Agile & Development',
    topics: [
      'Agile Methodology Deep Dive',
      'Scrum Framework',
      'Sprint Planning & Execution',
      'Working with Engineers',
      'Technical Debt Management',
      'Release Management'
    ]
  },
  {
    week: 6,
    title: 'Analytics & Metrics',
    topics: [
      'Key Product Metrics',
      'Analytics Tools (Mixpanel, Amplitude)',
      'Funnel & Cohort Analysis',
      'A/B Testing Methodology',
      'Data-Driven Decisions',
      'Experiment Design'
    ]
  },
  {
    week: 7,
    title: 'Go-to-Market & Growth',
    topics: [
      'GTM Strategy Framework',
      'Launch Planning',
      'Positioning & Messaging',
      'Growth Frameworks',
      'Feature Flags & Rollouts',
      'Viral & Network Effects'
    ]
  },
  {
    week: 8,
    title: 'Leadership & Career Growth',
    topics: [
      'Stakeholder Management',
      'Executive Communication',
      'PM Career Ladder',
      'Building Your PM Portfolio',
      'Interview Preparation',
      'Capstone Project Presentation'
    ]
  }
];

const aiCurriculum = [
  {
    week: 1,
    title: 'AI/ML Fundamentals for PMs',
    topics: [
      'AI vs ML vs Deep Learning',
      'Types of ML Algorithms',
      'Understanding Neural Networks',
      'AI Capabilities & Limitations',
      'Key AI Terminology'
    ]
  },
  {
    week: 2,
    title: 'AI Product Discovery',
    topics: [
      'Identifying AI Opportunities',
      'AI Feasibility Assessment',
      'Data Availability Analysis',
      'Build vs Buy vs Partner',
      'AI Use Case Prioritization'
    ]
  },
  {
    week: 3,
    title: 'Data Strategy & Management',
    topics: [
      'Data Collection Strategies',
      'Data Quality & Labeling',
      'Data Pipelines Overview',
      'Privacy & Compliance (GDPR)',
      'Working with Data Teams'
    ]
  },
  {
    week: 4,
    title: 'AI Product Development',
    topics: [
      'ML Product Development Lifecycle',
      'Model Requirements & Specs',
      'Working with ML Engineers',
      'Experiment Tracking',
      'Model Versioning'
    ]
  },
  {
    week: 5,
    title: 'AI Metrics & Evaluation',
    topics: [
      'ML Model Metrics',
      'Precision, Recall, F1 Score',
      'Business vs Model Metrics',
      'A/B Testing for AI Products',
      'Continuous Monitoring'
    ]
  },
  {
    week: 6,
    title: 'LLMs & Generative AI',
    topics: [
      'Understanding LLMs (GPT, Claude)',
      'Prompt Engineering',
      'Fine-tuning vs RAG',
      'Building GenAI Products',
      'LLM Evaluation Methods'
    ]
  },
  {
    week: 7,
    title: 'AI Ethics & Responsible AI',
    topics: [
      'Bias in AI Systems',
      'Fairness & Transparency',
      'Explainable AI (XAI)',
      'AI Governance Frameworks',
      'Risk Management'
    ]
  },
  {
    week: 8,
    title: 'AI Product Launch & Scale',
    topics: [
      'MLOps Fundamentals',
      'Model Deployment Strategies',
      'Scaling AI Products',
      'AI Product Roadmapping',
      'Capstone Project Presentation'
    ]
  }
];

export function Curriculum() {
  const [activeProgram, setActiveProgram] = useState<'basic' | 'ai'>('basic');
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

  const curriculum = activeProgram === 'basic' ? basicCurriculum : aiCurriculum;
  const programInfo = activeProgram === 'basic' 
    ? { weeks: '8 Weeks', hours: '32+ Hours', assignments: '4 Assignments', timing: 'Weekends 11 AM - 2 PM' }
    : { weeks: '8 Weeks', hours: '40+ Hours', assignments: '4 Assignments', timing: 'Weekends 5 PM - 8 PM' };

  return (
    <section id="curriculum" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary-600 font-semibold mb-2">What You'll Learn</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Detailed Curriculum</h2>
          <p className="text-slate-600">Click on a program to view the week-by-week breakdown</p>
        </div>

        {/* Program Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => { setActiveProgram('basic'); setExpandedWeek(1); }}
            className={`px-6 py-3 rounded-xl font-semibold transition-all w-full sm:w-auto ${
              activeProgram === 'basic'
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            Basic to Advanced Product Management
          </button>
          <button
            onClick={() => { setActiveProgram('ai'); setExpandedWeek(1); }}
            className={`px-6 py-3 rounded-xl font-semibold transition-all w-full sm:w-auto ${
              activeProgram === 'ai'
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            AI Product Manager
          </button>
        </div>

        {/* Program Info */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 text-slate-600 text-sm">
          <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full border border-primary-100">{programInfo.weeks}</span>
          <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full border border-primary-100">{programInfo.hours}</span>
          <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full border border-primary-100">{programInfo.assignments}</span>
          <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full border border-primary-100">{programInfo.timing}</span>
        </div>

        {/* Curriculum Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {curriculum.map((week) => (
            <div
              key={week.week}
              className={`bg-slate-50 rounded-2xl border transition-all cursor-pointer ${
                expandedWeek === week.week ? 'border-primary-500 shadow-lg' : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
              }`}
              onClick={() => setExpandedWeek(expandedWeek === week.week ? null : week.week)}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    expandedWeek === week.week ? 'bg-primary-500 text-white' : 'bg-primary-100 text-primary-600'
                  }`}>
                    <span className="font-bold">{week.week}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{week.title}</h3>
                    {expandedWeek === week.week && (
                      <ul className="mt-4 space-y-2">
                        {week.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <svg
                    className={`w-5 h-5 text-slate-400 transition-transform ${expandedWeek === week.week ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
