import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Users, Target, Lightbulb, Play, Globe, ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  websiteUrl?: string;
  category: string;
  icon: any;
  detailedDescription?: string;
  challenges?: string[];
  solutions?: string[];
  impact?: string[];
  duration?: string;
  teamSize?: string;
  role?: string;
  keyFeatures?: string[];
  demoVideo?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-gray-900 hover:bg-white transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} />
            </motion.button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Header Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Category Badge */}
                <motion.div
                  className="absolute bottom-4 left-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="inline-flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                    <project.icon size={16} />
                    <span>{project.category}</span>
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <motion.div
                className="p-8"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Title and Actions */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <motion.div variants={itemVariants}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h2>
                    <p className="text-lg text-gray-600">{project.description}</p>
                  </motion.div>
                  
                  <motion.div
                    className="flex space-x-3 mt-4 sm:mt-0"
                    variants={itemVariants}
                  >
                    <motion.a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      <span>View Live</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                  </motion.div>
                </div>

                {/* Demo Video Section */}
                {project.demoVideo && (
                  <motion.div
                    className="mb-8"
                    variants={itemVariants}
                  >
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-4 flex items-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Play className="mr-2 text-red-500" size={20} />
                      Project Demo
                    </motion.h3>
                    <motion.div 
                      className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="aspect-video">
                        <iframe
                          src={project.demoVideo}
                          title={`${project.title} Demo`}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      {/* Video Overlay for Loading State */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                      >
                        <motion.div
                          className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    </motion.div>
                    <motion.p 
                      className="text-sm text-gray-500 mt-2 text-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      Watch the live demonstration of {project.title} in action
                    </motion.p>
                  </motion.div>
                )}

                {/* Project Stats */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
                  variants={itemVariants}
                >
                  {project.duration && (
                    <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                      <Calendar className="text-blue-600" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="font-semibold text-gray-900">{project.duration}</p>
                      </div>
                    </div>
                  )}
                  {project.teamSize && (
                    <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                      <Users className="text-green-600" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Team Size</p>
                        <p className="font-semibold text-gray-900">{project.teamSize}</p>
                      </div>
                    </div>
                  )}
                  {project.role && (
                    <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                      <Target className="text-purple-600" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Role</p>
                        <p className="font-semibold text-gray-900">{project.role}</p>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Detailed Description */}
                {project.detailedDescription && (
                  <motion.div className="mb-8" variants={itemVariants}>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Project Overview</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{project.detailedDescription}</p>
                    
                    {/* Website Link for Emotionise */}
                    {project.websiteUrl && project.id === 1 && (
                      <motion.div 
                        className="mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <motion.a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
                          whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.div 
                            className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                            whileHover={{ 
                              rotate: 5,
                              scale: 1.1,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <Globe className="text-white" size={20} />
                          </motion.div>
                          <div className="flex-1">
                            <motion.h4 
                              className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 }}
                              viewport={{ once: true }}
                            >
                              Visit Emotionise Platform
                              <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" size={16} />
                            </motion.h4>
                            <motion.p 
                              className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 }}
                              viewport={{ once: true }}
                            >
                              Experience the live AI-powered emotional text enhancement platform
                            </motion.p>
                          </div>
                          <motion.div
                            className="text-blue-500 group-hover:text-purple-600 transition-colors"
                            whileHover={{ 
                              x: 5,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <ExternalLink size={20} />
                          </motion.div>
                        </motion.a>
                        
                        {/* Additional context */}
                        <motion.p 
                          className="text-xs text-gray-500 mt-2 italic"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          viewport={{ once: true }}
                        >
                        </motion.p>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Key Features */}
                {project.keyFeatures && (
                  <motion.div className="mb-8" variants={itemVariants}>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Lightbulb className="mr-2 text-yellow-500" size={20} />
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.keyFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-700">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Challenges & Solutions */}
                {(project.challenges || project.solutions) && (
                  <motion.div className="mb-8" variants={itemVariants}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {project.challenges && (
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4">Challenges</h3>
                          <div className="space-y-3">
                            {project.challenges.map((challenge, index) => (
                              <motion.div
                                key={index}
                                className="p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * index }}
                              >
                                <p className="text-gray-700">{challenge}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {project.solutions && (
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4">Solutions</h3>
                          <div className="space-y-3">
                            {project.solutions.map((solution, index) => (
                              <motion.div
                                key={index}
                                className="p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * index }}
                              >
                                <p className="text-gray-700">{solution}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Impact */}
                {project.impact && (
                  <motion.div className="mb-8" variants={itemVariants}>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Impact & Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.impact.map((impact, index) => (
                        <motion.div
                          key={index}
                          className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <p className="text-gray-700 font-medium">{impact}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Technologies */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * index }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;