import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Calendar, MapPin, Award, BookOpen, Presentation } from 'lucide-react';

const LecturingWorkshops = () => {
  const lecturingData = [
    {
      id: 1,
      title: 'Visiting Lecturer - Machine Learning',
      institution: 'General Sir John Kotelawala Defense University',
      location: 'Ratmalana, Sri Lanka',
      period: 'Jan 2025 - Present',
      description: [
        'Conducting comprehensive lectures on Machine Learning fundamentals and advanced topics',
        'Teaching Computer Science, Software Engineering and Computer Engineering final year students',
        'Developing curriculum for practical ML applications and industry best practices',
        'Mentoring students in capstone projects involving AI/ML implementations'
      ],
      type: 'lecturing',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const workshopsData = [
    {
      id: 1,
      title: 'Industry Sessions - Hands-on AI Application Development with Python',
      institution: 'General Sir John Kotelawala Defense University',
      location: 'Ratmalana, Sri Lanka',
      period: '2024',
      description: [
        'Conducted intensive hands-on workshops on AI application development',
        'Covered practical implementation of machine learning algorithms using Python',
        'Demonstrated real-world AI project development lifecycle',
        'Provided industry insights and best practices for AI development'
      ],
      type: 'workshop',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 2,
      title: 'Guest Session - Fundamentals of AI',
      institution: 'University of Colombo',
      location: 'Colombo, Sri Lanka',
      period: '2023',
      description: [
        'Delivered comprehensive overview of Artificial Intelligence fundamentals',
        'Covered key concepts in machine learning, deep learning, and neural networks',
        'Discussed current trends and future directions in AI technology',
        'Interactive Q&A session on AI career paths and opportunities'
      ],
      type: 'workshop',
      icon: Presentation,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Session on Artificial Intelligence',
      institution: 'NSBM IEEE Day 2022',
      location: 'Homagama, Sri Lanka',
      period: '2022',
      description: [
        'Represented Orel IT in prestigious IEEE Day event',
        'Presented cutting-edge AI technologies and applications',
        'Demonstrated practical AI solutions and their business impact',
        'Engaged with students and professionals on AI innovation opportunities'
      ],
      type: 'workshop',
      icon: Award,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const renderSection = (title: string, data: any[], sectionIcon: any) => (
    <motion.div 
      className="mb-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div 
        className="flex items-center justify-center mb-12"
        variants={itemVariants}
      >
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
            whileHover={{ 
              rotate: 10,
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
          >
            <sectionIcon className="text-white" size={24} />
          </motion.div>
          <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <motion.div 
                className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4`}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <item.icon className="text-white" size={24} />
              </motion.div>
              <motion.div 
                className="text-right"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center text-gray-500 mb-1">
                  <Calendar size={14} className="mr-1" />
                  <span className="text-sm">{item.period}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin size={14} className="mr-1" />
                  <span className="text-sm">{item.location}</span>
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-lg text-blue-600 font-semibold mb-4">
                {item.institution}
              </p>
            </motion.div>

            {/* Description */}
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              viewport={{ once: true }}
            >
              {item.description.map((desc: string, descIndex: number) => (
                <motion.p 
                  key={descIndex} 
                  className="text-gray-600 leading-relaxed text-sm flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1 + 0.5 + descIndex * 0.1 
                  }}
                  viewport={{ once: true }}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {desc}
                </motion.p>
              ))}
            </motion.div>

            {/* Achievement Badge */}
            <motion.div 
              className="mt-6 flex items-center justify-between"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center text-amber-600"
                whileHover={{ scale: 1.05 }}
              >
                <Users size={16} className="mr-2" />
                <span className="text-sm font-medium">
                  {item.type === 'lecturing' ? 'Academic Excellence' : 'Knowledge Sharing'}
                </span>
              </motion.div>
              
              <motion.div 
                className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#EBF8FF"
                }}
              >
                <span className="text-xs font-medium text-blue-700 capitalize">
                  {item.type}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="lecturing-workshops" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Teaching & Knowledge Sharing
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Passionate about educating the next generation of AI professionals through academic 
            lectures, industry workshops, and knowledge sharing sessions across leading institutions.
          </motion.p>
        </motion.div>

        {/* Lecturing Section */}
        {renderSection('Academic Lecturing', lecturingData, GraduationCap)}

        {/* Workshops Section */}
        {renderSection('Workshops & Sessions', workshopsData, Presentation)}

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto"
            whileHover={{ 
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Interested in AI/ML Training?
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              I'm available for guest lectures, workshops, and training sessions on AI/ML topics. 
              Let's collaborate to advance AI education and knowledge sharing.
            </motion.p>
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Get In Touch for Training
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LecturingWorkshops;