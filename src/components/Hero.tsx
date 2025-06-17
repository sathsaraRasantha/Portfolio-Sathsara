import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const nameVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div 
              className="text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="mb-6">
                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4"
                  variants={itemVariants}
                >
                  <motion.span 
                    className="block"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Hello, I'm
                  </motion.span>
                  <motion.span 
                    className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                    variants={nameVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    Sathsara Rasantha
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="text-xl sm:text-2xl bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent font-semibold mb-2"
                  variants={itemVariants}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  Data Science Lead | AI/ML Consultant | Lecturer
                </motion.p>
                <motion.p 
                  className="text-lg text-gray-300 max-w-2xl"
                  variants={itemVariants}
                >
                  I build AI-driven systems that empower people, organizations, and products to think smarter.  

                  Passionate about transforming data into actionable insights through advanced 
                  Machine Learning, Deep Learning, and Generative AI technologies. I lead teams to build 
                  innovative solutions that drive business impact.
                </motion.p>
              </div>

              {/* Social Links */}
              <motion.div 
                className="flex justify-center lg:justify-start space-x-6 mb-8"
                variants={itemVariants}
              >
                {[
                  { icon: Github, href: "https://github.com/sathsaraRasantha", gradient: "hover:from-cyan-400 hover:to-blue-500" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/sathsara-rasantha/", gradient: "hover:from-blue-500 hover:to-purple-600" },
                  { icon: Mail, href: "mailto:rasantha.ssathsara@gmail.com", gradient: "hover:from-purple-500 hover:to-pink-500" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-gradient-to-r ${social.gradient} transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(6, 182, 212, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 10px 15px -3px rgba(6, 182, 212, 0.1)",
                      "0 20px 25px -5px rgba(6, 182, 212, 0.3)",
                      "0 10px 15px -3px rgba(6, 182, 212, 0.1)"
                    ]
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  Get In Touch
                </motion.button>
                <motion.button
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border-2 border-transparent bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:border-cyan-400 transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(34, 211, 238, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">View My Work</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div 
                className="relative"
                animate={floatingAnimation}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-40"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 rounded-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img
                    src="/src/assets/IMG_1059.JPG"
                    alt="Sathsara Rasantha - Data Science Lead"
                    className="w-80 h-96 object-cover rounded-xl shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-cyan-300 transition-colors"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;