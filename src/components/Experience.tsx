import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Led development of scalable web applications serving 100K+ users. Implemented microservices architecture and improved system performance by 40%.',
      achievements: [
        'Architected and built a real-time analytics dashboard',
        'Mentored junior developers and established coding standards',
        'Reduced deployment time by 60% through CI/CD optimization'
      ]
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using React, Node.js, and cloud technologies. Collaborated with cross-functional teams to deliver high-quality solutions.',
      achievements: [
        'Built 15+ responsive web applications',
        'Integrated third-party APIs and payment systems',
        'Improved code coverage from 60% to 95%'
      ]
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Creative Web Agency',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: 'Specialized in creating responsive and interactive user interfaces. Worked closely with designers to implement pixel-perfect designs and smooth user experiences.',
      achievements: [
        'Delivered 20+ client projects on time and budget',
        'Optimized website performance achieving 95+ Lighthouse scores',
        'Implemented accessibility standards (WCAG 2.1)'
      ]
    },
    {
      type: 'education',
      title: 'Master of Science in Computer Science',
      company: 'Stanford University',
      location: 'Stanford, CA',
      period: '2017 - 2019',
      description: 'Specialized in Software Engineering and Machine Learning. Completed thesis on "Scalable Web Application Architecture".',
      achievements: [
        'GPA: 3.8/4.0',
        'Research published in ACM Digital Library',
        'Teaching Assistant for Data Structures course'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Technology in Information Technology',
      company: 'Anna University',
      location: 'Chennai, India',
      period: '2013 - 2017',
      description: 'Foundation in computer science fundamentals, software development, and database systems.',
      achievements: [
        'First Class with Distinction',
        'Winner of Inter-college Programming Contest',
        'President of Computer Science Club'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My professional journey and academic background
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-teal-200"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                      {exp.type === 'work' ? (
                        <Briefcase className="w-5 h-5 text-teal-600 mr-2" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-teal-600 mr-2" />
                      )}
                      <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">
                        {exp.type === 'work' ? 'Work Experience' : 'Education'}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="text-teal-600 font-semibold mb-2">
                      {exp.company}
                    </div>
                    
                    <div className="flex flex-wrap items-center text-gray-500 text-sm mb-4 gap-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;