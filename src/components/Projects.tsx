import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Code, Database, Smartphone } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Full Stack"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "JWT"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Web App"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "A data visualization dashboard for weather analytics with interactive charts, real-time data updates, and predictive modeling.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Data Visualization"
    },
    {
      title: "Mobile Fitness Tracker",
      description: "A React Native mobile app for fitness tracking with workout plans, progress monitoring, and social features.",
      image: "https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Mobile"
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered content generation tool with natural language processing capabilities and custom model training.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "TensorFlow", "Flask", "OpenAI API", "Docker"],
      github: "https://github.com",
      live: "https://example.com",
      category: "AI/ML"
    },
    {
      title: "Real Estate Platform",
      description: "A comprehensive real estate platform with property listings, virtual tours, and advanced search filters.",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "Mapbox"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Web Platform"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Mobile': return <Smartphone className="w-5 h-5" />;
      case 'Data Visualization': return <Database className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #0d9488 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy-900/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                    <div className="flex space-x-4">
                      <a 
                        href={project.github} 
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </a>
                      <a 
                        href={project.live} 
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-navy-900">{project.title}</h3>
                    <div className="flex items-center text-teal-600 text-sm">
                      {getCategoryIcon(project.category)}
                      <span className="ml-1">{project.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Projects;