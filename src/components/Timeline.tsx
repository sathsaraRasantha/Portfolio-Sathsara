import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: 'experience' | 'education';
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  type: 'experience' | 'education';
}

const Timeline: React.FC<TimelineProps> = ({ items, type }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      <motion.div 
        className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ transformOrigin: "top" }}
      />

      <motion.div 
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((item, index) => (
          <motion.div 
            key={item.id} 
            className="relative flex items-start"
            variants={itemVariants}
          >
            {/* Timeline Dot */}
            <motion.div 
              className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.5,
                transition: { duration: 0.2 }
              }}
            />

            {/* Content Card */}
            <motion.div 
              className="ml-16 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 w-full"
              whileHover={{ 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-lg text-blue-600 font-semibold"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {item.company}
                  </motion.p>
                </div>
                <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                  <motion.div 
                    className="flex items-center text-gray-500 mb-1"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{item.period}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center text-gray-500"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{item.location}</span>
                  </motion.div>
                </div>
              </div>

              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                viewport={{ once: true }}
              >
                {item.description.map((desc, descIndex) => (
                  <motion.p 
                    key={descIndex} 
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1 + 0.7 + descIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    • {desc}
                  </motion.p>
                ))}
              </motion.div>

              {type === 'education' && (
                <motion.div 
                  className="mt-4 flex items-center text-amber-600"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Award size={16} className="mr-2" />
                  <span className="text-sm font-medium">Academic Achievement</span>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;