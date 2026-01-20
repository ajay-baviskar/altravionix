import { Briefcase, MapPin, Clock, DollarSign, ArrowRight, Heart, TrendingUp, Users, Zap } from 'lucide-react';

export function Careers() {
  const benefits = [
    {
      icon: <Heart size={28} />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career advancement',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Users size={28} />,
      title: 'Great Team',
      description: 'Work with talented and passionate professionals',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Zap size={28} />,
      title: 'Flexible Work',
      description: 'Remote options and flexible working hours',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  const openings = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$120k - $180k',
      description: 'We are looking for an experienced full-stack developer to build scalable web applications using modern technologies like React, Node.js, and cloud platforms.',
      requirements: [
        '5+ years of full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of software architecture',
      ],
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$90k - $130k',
      description: 'Join our design team to create beautiful, intuitive interfaces for web and mobile applications. You will work closely with developers and product managers.',
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma, Adobe Creative Suite',
        'Strong portfolio showcasing web and mobile designs',
        'Understanding of design systems and accessibility',
      ],
    },
    {
      title: 'Digital Marketing Manager',
      department: 'Marketing',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$80k - $120k',
      description: 'Lead our digital marketing efforts including SEO, content strategy, social media, and paid advertising campaigns to drive growth and brand awareness.',
      requirements: [
        '4+ years of digital marketing experience',
        'Expertise in SEO, SEM, and social media marketing',
        'Experience with analytics tools (Google Analytics, etc.)',
        'Proven track record of successful campaigns',
      ],
    },
    {
      title: 'AI/ML Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$140k - $200k',
      description: 'Help us build cutting-edge AI solutions. You will develop machine learning models, implement AI features, and work on innovative projects.',
      requirements: [
        '3+ years of ML/AI development experience',
        'Strong knowledge of Python, TensorFlow, PyTorch',
        'Experience with NLP, computer vision, or recommendation systems',
        'MS/PhD in Computer Science or related field preferred',
      ],
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$110k - $160k',
      description: 'Manage and optimize our cloud infrastructure, implement CI/CD pipelines, and ensure high availability and security of our systems.',
      requirements: [
        '4+ years of DevOps experience',
        'Expertise in Kubernetes, Docker, Terraform',
        'Experience with AWS, Azure, or GCP',
        'Strong scripting skills (Bash, Python)',
      ],
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$100k - $150k',
      description: 'Drive product strategy and roadmap, work with cross-functional teams, and deliver innovative solutions that meet customer needs.',
      requirements: [
        '3+ years of product management experience',
        'Experience in SaaS or tech products',
        'Strong analytical and communication skills',
        'Understanding of agile development methodologies',
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="careers" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Join Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-600">
            Build your career with us and help shape the future of technology. We're always looking for talented, passionate individuals.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">Why Work With Us</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        {/* <div>
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">Open Positions</h3>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Briefcase size={16} />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={16} />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign size={16} />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    <div>
                      <div className="font-semibold text-gray-900 mb-2">Requirements:</div>
                      <ul className="space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <button 
                      onClick={scrollToContact}
                      className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all flex items-center gap-2"
                    >
                      Apply Now
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Don't See Your Role?</h3>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for exceptional talent. Send us your resume and let's talk!
          </p>
          <button 
            onClick={scrollToContact}
            className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full hover:shadow-xl transition-all"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
