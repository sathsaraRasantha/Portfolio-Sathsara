import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Code, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Brain,
      title: 'Machine Learning & AI',
      description: 'Deep Learning, NLP, Computer Vision, LLMs, Transformers',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Data Science & Analytics',
      description: 'Statistical Analysis, Predictive Modeling, A/B Testing',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'Technical Stack',
      description: 'Python, TensorFlow, PyTorch, AWS, Azure, LangChain',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Leadership & Mentoring',
      description: 'Team Leadership, Project Management, Technical Mentoring',
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

  const skillCardVariants = {
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

  return (
    <section id="about" className="py-20 bg-gray-50">
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
            About Me
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I'm a passionate AI/ML engineer and educator with deep expertise in Data Science, NLP, Computer Vision and Generative AI. I've led multiple teams in             delivering impactful AI-driven solutions across industries.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              My Journey
            </motion.h3>
            <div className="space-y-4 text-gray-600">
              <motion.p variants={itemVariants}>
                My journey in data science began with a BSc in Statistics from the University of Colombo, 
                where I developed a strong foundation in statistical analysis and mathematical modeling. 
                This academic background sparked my passion for extracting meaningful insights from complex data.
              </motion.p>
              <motion.p variants={itemVariants}>
                Currently pursuing my MSc in Data Science and AI at the University of Sri Jayewardenepura, 
                I've evolved from a junior software engineer to a Lead Data Scientist, working with cutting-edge 
                technologies like LLMs, transformers, and advanced AI frameworks. I've led teams in developing 
                innovative solutions across various domains.
              </motion.p>
              <motion.p variants={itemVariants}>
                As a Google Certified TensorFlow Developer and visiting lecturer, I'm committed to continuous 
                learning and knowledge sharing. I enjoy mentoring the next generation of AI professionals and 
                contributing to the advancement of the field through research and practical applications.
              </motion.p>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="relative bg-white p-8 rounded-2xl shadow-xl"
              whileHover={{ 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h4>
              <div className="space-y-3">
                {[
                  { label: 'Experience', value: '4+ Years' },
                  { label: 'AI Projects Led & Developed', value: '15+' },
                  { label: 'Team Members Mentored', value: '10+' },
                  
                ].map((fact, index) => (
                  <motion.div 
                    key={index}
                    className="flex justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-gray-600">{fact.label}</span>
                    <motion.span 
                      className="font-semibold"
                      whileHover={{ scale: 1.1, color: "#3B82F6" }}
                    >
                      {fact.value}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              variants={skillCardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mb-4`}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <skill.icon className="text-white" size={24} />
              </motion.div>
              <motion.h4 
                className="text-lg font-bold text-gray-900 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                {skill.title}
              </motion.h4>
              <motion.p 
                className="text-gray-600 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                {skill.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;