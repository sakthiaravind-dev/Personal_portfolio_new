import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';
import developerImage from '../assets/200.jpg';


const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Expert in modern web technologies including React, Node.js, and cloud platforms"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Proficient in both SQL and NoSQL databases, optimization and architecture"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      description: "Deep knowledge of web standards, performance optimization, and security"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Experience with React Native and responsive web design for all devices"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-50 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-navy-50 to-transparent rounded-full translate-y-48 -translate-x-48"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl font-bold text-navy-900 mb-6">
                Crafting Digital Experiences
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hey! I’m Sakthi Aravind — a Full Stack Developer from Chennai, currently studying Computer Science with a focus on Cybersecurity at SRM University. I love building cool, functional stuff that makes life easier (and looks good while doing it). Over the past few years, I’ve worked on everything from VR learning tools for kids with special needs to full-blown ERP systems for gyms with thousands of members. During my internship at Mediatrix, I got to lead a dev team, work with real clients, and deploy apps using platforms like Vercel and Render.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm pretty comfortable with tools like React, Next.js, React Native, Python, Java, Firebase, Supabase, Docker, MySQL, and AWS. On top of that, I have a growing interest in digital marketing and forex trading — always curious to learn something new and mix tech with real-world strategy.
              </p>
              <p className="text-gray-600 leading-relaxed">
               Whether it's coding, designing, or figuring out how to make an app run faster and smoother, I'm all about solving problems and having fun doing it.

Let’s build something awesome together!
              </p>
            </div>
            
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <img 
  src={developerImage}
  alt="Developer workspace"
  className="w-full max-w-sm mx-auto rounded-lg shadow-2xl hover:scale-105 transition-all duration-500 hover:shadow-3xl"
/>

            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className={`text-center p-6 rounded-lg hover:shadow-lg transition-all duration-500 hover:scale-105 hover:bg-gray-50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-teal-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-navy-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;