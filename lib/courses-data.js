// Sample course data for ARI Solutions Inc
export const coursesData = [
  {
    id: 'course-001',
    slug: 'build-your-first-automation-system',
    title: 'Build Your First Automation System',
    subtitle: 'From Manual Tasks to Automated Income in 30 Days',
    description: 'Learn how to build a complete automation system that generates income while you sleep. This comprehensive course takes you from zero to fully automated business workflows.',
    price: 197.00,
    originalPrice: 297.00,
    featured: true,
    category: 'Automation',
    level: 'Beginner to Intermediate',
    duration: '8 hours',
    students: 1247,
    rating: 4.8,
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    whatYoullBuild: [
      'Automated appointment booking system with payment processing',
      'Lead capture and nurturing workflow',
      'Email marketing automation sequence',
      'Customer onboarding automation',
      'Revenue tracking dashboard'
    ],
    modules: [
      {
        number: 1,
        title: 'Automation Fundamentals',
        lessons: ['Understanding automation ROI', 'Identifying automation opportunities', 'Tools overview'],
        duration: '45 min'
      },
      {
        number: 2,
        title: 'Building Your First Workflow',
        lessons: ['Setting up your automation platform', 'Creating triggers and actions', 'Testing and debugging'],
        duration: '90 min'
      },
      {
        number: 3,
        title: 'Payment Integration',
        lessons: ['Payment gateway setup', 'Handling transactions', 'Receipt automation'],
        duration: '75 min'
      },
      {
        number: 4,
        title: 'Lead Generation Automation',
        lessons: ['Building lead magnets', 'Capture form creation', 'CRM integration'],
        duration: '60 min'
      },
      {
        number: 5,
        title: 'Email Marketing Automation',
        lessons: ['Email sequence design', 'Segmentation strategies', 'Analytics and optimization'],
        duration: '90 min'
      },
      {
        number: 6,
        title: 'Scaling Your Automation',
        lessons: ['Multi-channel automation', 'Advanced workflows', 'Monitoring and maintenance'],
        duration: '60 min'
      }
    ],
    whatsIncluded: [
      '8+ hours of video content',
      'Downloadable templates and checklists',
      'Source code for all automation workflows',
      'Private community access',
      'Lifetime updates',
      '30-day money-back guarantee'
    ],
    prerequisites: [
      'Basic computer skills',
      'Willingness to learn new tools',
      'A business idea or existing business'
    ],
    faqs: [
      {
        question: 'Do I need coding experience?',
        answer: 'No! This course uses no-code and low-code tools that anyone can learn. We walk you through every step.'
      },
      {
        question: 'How long do I have access?',
        answer: 'Lifetime access! Once you purchase, the course materials are yours forever, including all future updates.'
      },
      {
        question: 'What if I get stuck?',
        answer: 'You\'ll get access to our private community where you can ask questions and get help from instructors and fellow students.'
      }
    ],
    testimonials: [
      {
        name: 'Sarah Mitchell',
        role: 'Freelance Consultant',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        text: 'This course paid for itself in the first week! I automated my client onboarding and saved 10 hours a month.',
        rating: 5
      },
      {
        name: 'Marcus Johnson',
        role: 'Small Business Owner',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
        text: 'Finally, a course that delivers on its promise. My appointment bookings are now 100% automated.',
        rating: 5
      }
    ],
    zipUrl: null, // Will be set after upload
    sizeMb: 2.5,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-06-01')
  },
  {
    id: 'course-002',
    slug: 'advanced-lead-generation-mastery',
    title: 'Advanced Lead Generation Mastery',
    subtitle: 'Scale Your Lead Flow to 100+ Qualified Leads Per Month',
    description: 'Master the art and science of generating high-quality leads at scale. Build multiple lead generation systems that work 24/7.',
    price: 247.00,
    originalPrice: 397.00,
    featured: false,
    category: 'Lead Generation',
    level: 'Intermediate to Advanced',
    duration: '10 hours',
    students: 892,
    rating: 4.9,
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    whatYoullBuild: [
      'Multi-channel lead generation funnel',
      'Automated lead scoring system',
      'LinkedIn outreach automation',
      'Facebook lead ads integration',
      'Lead nurturing email sequences'
    ],
    modules: [
      {
        number: 1,
        title: 'Lead Generation Strategy',
        lessons: ['ICP definition', 'Channel selection', 'Budget allocation'],
        duration: '60 min'
      },
      {
        number: 2,
        title: 'Building High-Converting Landing Pages',
        lessons: ['Design principles', 'Copywriting formulas', 'A/B testing'],
        duration: '90 min'
      },
      {
        number: 3,
        title: 'Paid Advertising Automation',
        lessons: ['Facebook Ads setup', 'Google Ads automation', 'LinkedIn campaigns'],
        duration: '120 min'
      },
      {
        number: 4,
        title: 'Organic Lead Generation',
        lessons: ['SEO optimization', 'Content marketing', 'Social media automation'],
        duration: '90 min'
      }
    ],
    whatsIncluded: [
      '10+ hours of advanced training',
      'Landing page templates',
      'Ad copy swipe file',
      'Lead magnet templates',
      'Email sequence scripts',
      'Private coaching group'
    ],
    prerequisites: [
      'Basic marketing knowledge',
      'Completed beginner automation course or equivalent',
      'Active business or client'
    ],
    faqs: [
      {
        question: 'Is this for B2B or B2C?',
        answer: 'Both! The principles work for any type of business. We provide examples for both B2B and B2C scenarios.'
      },
      {
        question: 'Do I need a big ad budget?',
        answer: 'No. We cover both paid and organic strategies. You can start with as little as $10/day or even $0 with organic methods.'
      }
    ],
    testimonials: [
      {
        name: 'Jennifer Chen',
        role: 'Marketing Director',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer',
        text: 'We went from 20 leads a month to over 150 using these exact strategies. ROI is incredible.',
        rating: 5
      }
    ],
    zipUrl: null,
    sizeMb: 3.2,
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-06-01')
  }
];

export const servicesData = [
  {
    id: 'service-aba',
    slug: 'aba',
    name: 'Appointment Booking Accelerator',
    shortName: 'ABA',
    tagline: 'Never Miss a Booking Again',
    description: 'Transform your appointment booking process from manual chaos to automated efficiency. Our ABA service builds you a complete booking system that works 24/7.',
    heroImage: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80',
    features: [
      {
        icon: 'Calendar',
        title: '24/7 Automated Booking',
        description: 'Clients can book appointments anytime, anywhere, without your involvement'
      },
      {
        icon: 'CreditCard',
        title: 'Integrated Payments',
        description: 'Collect deposits or full payment at booking time - reduce no-shows by 80%'
      },
      {
        icon: 'Bell',
        title: 'Smart Reminders',
        description: 'Automated email and SMS reminders keep your calendar full and cancellations low'
      },
      {
        icon: 'Users',
        title: 'Client Management',
        description: 'Built-in CRM tracks client history, preferences, and booking patterns'
      },
      {
        icon: 'Zap',
        title: 'Instant Confirmations',
        description: 'Clients receive immediate confirmation emails with calendar invites'
      },
      {
        icon: 'BarChart',
        title: 'Analytics Dashboard',
        description: 'Track booking rates, revenue, peak times, and more'
      }
    ],
    benefits: [
      'Save 10+ hours per week on scheduling',
      'Increase bookings by 40% with 24/7 availability',
      'Reduce no-shows by 80% with automated reminders',
      'Professional booking experience that builds trust',
      'Syncs with Google Calendar, Outlook, and more'
    ],
    pricing: {
      setup: 497,
      monthly: 97,
      description: 'One-time setup fee + monthly subscription'
    },
    process: [
      'Discovery call to understand your business',
      'Custom booking page design',
      'Integration with your calendar and payment processor',
      'Testing and quality assurance',
      'Launch and training',
      'Ongoing support and optimization'
    ],
    caseStudy: {
      client: 'Dr. Amanda Rodriguez',
      business: 'Wellness Coaching',
      result: '3x booking rate increase in 60 days',
      quote: 'ABA transformed my business. I went from spending 2 hours a day on scheduling to zero. My clients love how easy it is to book.',
      metrics: [
        { label: 'Time Saved', value: '12 hrs/week' },
        { label: 'Booking Increase', value: '+215%' },
        { label: 'No-Show Reduction', value: '-85%' }
      ]
    }
  },
  {
    id: 'service-leadgen',
    slug: 'lead-gen',
    name: 'Lead Generation System',
    shortName: 'Lead Gen',
    tagline: 'Consistent, Qualified Leads on Autopilot',
    description: 'Stop chasing leads and start attracting them. We build you a complete lead generation system that delivers qualified prospects while you focus on closing deals.',
    heroImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80',
    features: [
      {
        icon: 'Target',
        title: 'Multi-Channel Strategy',
        description: 'Generate leads from social media, search engines, email, and more'
      },
      {
        icon: 'Filter',
        title: 'Lead Qualification',
        description: 'Automatic scoring ensures you only talk to high-intent prospects'
      },
      {
        icon: 'Mail',
        title: 'Nurture Sequences',
        description: 'Automated email sequences warm up leads until they\'re ready to buy'
      },
      {
        icon: 'Database',
        title: 'CRM Integration',
        description: 'Seamlessly sync with your existing CRM or use our built-in solution'
      },
      {
        icon: 'TrendingUp',
        title: 'Continuous Optimization',
        description: 'Monthly performance reviews and strategy adjustments'
      },
      {
        icon: 'Shield',
        title: 'Quality Guarantee',
        description: 'We guarantee a minimum number of qualified leads or your money back'
      }
    ],
    benefits: [
      'Predictable lead flow every month',
      '50-100+ qualified leads monthly',
      'Lower cost per lead than traditional methods',
      'Full transparency with real-time dashboard',
      'Focus on closing while we handle the pipeline'
    ],
    pricing: {
      starter: 997,
      professional: 1997,
      enterprise: 'Custom',
      description: 'Monthly retainer based on target lead volume'
    },
    process: [
      'Deep-dive strategy session',
      'Ideal customer profile definition',
      'Landing page and lead magnet creation',
      'Multi-channel campaign setup',
      'Launch and initial optimization',
      'Monthly reporting and scaling'
    ],
    caseStudy: {
      client: 'Tech Solutions Inc.',
      business: 'B2B SaaS',
      result: '127 qualified leads in first 90 days',
      quote: 'Our sales team went from feast or famine to a consistent pipeline. Game changer for our business.',
      metrics: [
        { label: 'Leads Generated', value: '127' },
        { label: 'Conversion Rate', value: '8.5%' },
        { label: 'ROI', value: '412%' }
      ]
    }
  }
];

export const testimonialsData = [
  {
    name: 'Sarah Mitchell',
    role: 'Freelance Consultant',
    company: 'Mitchell Consulting',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    text: 'ARI Solutions transformed my business. I went from manually booking every client to having a fully automated system. I\'ve reclaimed 15 hours a week!',
    rating: 5,
    service: 'ABA'
  },
  {
    name: 'Marcus Johnson',
    role: 'Small Business Owner',
    company: 'Johnson Fitness',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    text: 'The Lead Gen system delivered 89 qualified leads in our first month. Our sales team is actually struggling to keep up!',
    rating: 5,
    service: 'Lead Gen'
  },
  {
    name: 'Jennifer Chen',
    role: 'Marketing Director',
    company: 'TechStart',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer',
    text: 'The courses are phenomenal. Clear, actionable, and actually delivered results. We automated our entire customer onboarding in 2 weeks.',
    rating: 5,
    service: 'Courses'
  },
  {
    name: 'David Park',
    role: 'Real Estate Agent',
    company: 'Park Properties',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    text: 'Best investment I\'ve made. The ABA system captures leads even when I\'m showing properties. My bookings doubled.',
    rating: 5,
    service: 'ABA'
  }
];
