import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emotioniseImg from '../assets/emotionise.png';
import emotioniseDemo from '../assets/Emotionise AI Demo without commentary.mp4';
import comparison from '../assets/comparison of SARIMA models.png';
import houston  from '../assets/houston best.png';
import exogenous from '../assets/models with exogenous variables.png';
import sf from '../assets/SF best.png';
import spok from '../assets/spok best.png';
import { ExternalLink, Github, Brain, MessageSquare, Briefcase, Zap, Eye, TrendingUp } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Emotionise - Emotional Text Enhancement',
      description: 'Emotionise AI is a cutting-edge “human‑trained” platform that infuses emails, messages, and support responses with emotional intelligence—ensuring communications feel empathetic and on‑brand. Developed for enterprise clients, it enhances team communication and user engagement by providing emotionally aware rewrites, personalized feedback, and explainable tone guidance.',
      detailedDescription: 'Working with the Emotionise AI team (developed by Emotionise, founded by Marie Toft and Tim Pat Dufficy), I led the technical development of EIMEAR—their Emotionally Intelligent Model. I helped architect the data pipelines, model training workflows, and integration landscape. Credit goes to Emotionise for spearheading the vision: “AI for Good—making AI more human, not human less.” Their platform empowers organizations to foster trust and connection while reducing churn and boosting engagement.',
      image: emotioniseImg,
      technologies: ['Python', 'OpenAI GPT-3', 'LLaMA-2', 'Huggingface', 'TensorFlow', 'PyTorch', 'LangChain', 'Weights & Biases', 'Azure Functions', 'AWS Sagemaker'],
      liveUrl: 'https://emotionise.ai/',
      githubUrl: '#',
      websiteUrl: 'https://emotionise.ai/',
      category: 'NLP/AI',
      icon: MessageSquare,
      duration: '8 months',
      teamSize: '6 members',
      role: 'AI Lead',
      demoVideo: emotioniseDemo, // Replace with actual demo video
      keyFeatures: [
        'Emotionally enhanced text rewriting and suggestions',
        'Fine-tuned Customer Support & HR models',
        'Human-in-the-loop pipeline',
        'A/B testing framework with statistical significance validation',
        'Intelligent email auto-reply using AI agents',
        'Continuous evaluation loop'
      ],
      challenges: [
        'Balancing emotional enhancement while maintaining professional tone',
        'Generic models underperform in specialized domains',
        'Risk of bias or hallucination in AI-generated data',
        'LLMs lack transparency and rationale'
      ],
      solutions: [
        'Built dual-stage models with feedback-first architecture and introduced custom evaluation methods',
        'Fine-tuned domain-specific models with masked privacy data',
        'Three-step validation by trained writers for each data point',
        'Modular pipeline: first explains “what/why,” then rewrites'
      ],
      impact: [
        'Achieved consistent increases in human evaluation scores for empathy, tone, grammar, and flow across randomized tests',
        'Surpassed performance of models trained on larger synthetic datasets using a smaller, high-quality dataset',
        'Enabled seamless CRM and email integrations (Outlook, Gmail, Slack, etc.), empowering support and HR teams to write more emotionally aware messages in real-time',
      ]
    },
    {
      id: 2,
      title: 'InsureAI - Intelligent assistant for insurance policy verification and expert consultation',
      description: 'AI-powered virtual CFO platform automating financial communication with email summarization, document analysis, and budget planning.',
      detailedDescription: 'Led the AI development of a comprehensive virtual CFO platform designed to automate financial communication within organizations. The system handles complex tasks including financial email summarization, intelligent feedback generation, document analysis, and iterative budget planning based on departmental inputs and organizational KPIs.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'LlamaIndex', 'CrewAI', 'PostgreSQL', 'Pinecone', 'Unstructured', 'Amazon Sagemaker', 'Amazon Bedrock', 'AWS Lambda', 'Azure Functions', 'Azure AI Search'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'AI Agents',
      icon: Briefcase,
      duration: '6 months',
      teamSize: '4 members',
      role: 'AI Architect & Team Lead',
      demoVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual demo video
      keyFeatures: [
        'Automated financial email summarization',
        'Intelligent document analysis and extraction',
        'Multi-agent orchestration for complex workflows',
        'Real-time budget planning and optimization',
        'Integration with existing financial systems',
        'Advanced RAG-based knowledge retrieval'
      ],
      challenges: [
        'Integrating multiple AI agents for seamless workflow',
        'Handling sensitive financial data with high security',
        'Ensuring accuracy in financial calculations and recommendations',
        'Managing complex multi-modal data processing'
      ],
      solutions: [
        'Implemented CrewAI for robust multi-agent coordination',
        'Built secure data pipelines with encryption at rest and transit',
        'Developed custom validation layers for financial accuracy',
        'Created unified data processing architecture'
      ],
      impact: [
        'Reduced financial reporting time by 70%',
        'Improved budget accuracy by 45%',
        'Automated 80% of routine financial communications',
        'Enhanced decision-making speed by 50%'
      ]
    },
    {
      id: 3,
      title: 'Bella Vista - Customer Support voice agent for restaurants',
      description: 'Voice-based AI training platform simulating real-world customer interactions for automotive sales representatives.',
      detailedDescription: 'Developed an innovative AI-driven voice-based training platform specifically designed to simulate real-world customer interactions for automotive sales representatives. The comprehensive system includes personalized training programs, QR-based session access, automatic assessment generation, and real-time feedback using advanced transcription analysis.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Google Cloud', 'Cloud Run', 'GCS', 'Tavus API', 'OpenAI Realtime API', 'QR Code Generation', 'WeasyPrint', 'APScheduler'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'AI Training',
      icon: Zap,
      duration: '5 months',
      teamSize: '3 members',
      role: 'Full-Stack AI Developer',
      demoVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual demo video
      keyFeatures: [
        'Voice-based customer interaction simulation',
        'Personalized training program generation',
        'QR code-based session access system',
        'Real-time transcription and analysis',
        'Automated performance assessment',
        'AI-powered video conversation generation'
      ],
      challenges: [
        'Achieving natural voice interactions in training scenarios',
        'Real-time processing of voice data with low latency',
        'Creating realistic customer personas and scenarios',
        'Ensuring accurate performance evaluation metrics'
      ],
      solutions: [
        'Integrated Tavus API for realistic AI video conversations',
        'Implemented OpenAI Realtime API for seamless voice processing',
        'Developed custom scenario generation algorithms',
        'Built comprehensive analytics dashboard for performance tracking'
      ],
      impact: [
        'Improved sales training effectiveness by 55%',
        'Reduced training costs by 40%',
        'Enhanced sales performance by 30%',
        'Achieved 95% user satisfaction rate'
      ]
    },
    {
      id: 4,
      title: 'Predictive Revenue Modeling & Analytics',
      description: 'Advanced SARIMA-based revenue forecasting platform with interactive visualizations, multi-city analysis, and comprehensive model comparison.',
      detailedDescription: 'Developed a sophisticated predictive revenue modeling platform leveraging advanced SARIMA (Seasonal AutoRegressive Integrated Moving Average) models for accurate revenue forecasting across multiple geographic locations. The system features comprehensive model comparison, seasonal decomposition analysis, and interactive dashboards that enable stakeholders to make data-driven decisions. The platform successfully models revenue patterns for Houston, San Francisco, and Spokane with high accuracy using both seasonal SARIMA and SARIMAX (with exogenous variables) approaches.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'SARIMA', 'SARIMAX', 'Statsmodels', 'Plotly', 'Matplotlib', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter', 'PostgreSQL', 'Apache Airflow'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Analytics/ML',
      icon: TrendingUp,
      duration: '1 Month',
      teamSize: '2 members',
      role: 'Lead Data Scientist',
      // No demoVideo for this project - it focuses on visualizations instead
      keyFeatures: [
        'Advanced SARIMA and SARIMAX time series modeling',
        'Multi-city revenue forecasting with seasonal decomposition',
        'Comprehensive model comparison with AIC, BIC, and RMSE metrics',
        'Interactive forecasting charts with confidence intervals',
        'Automated hyperparameter tuning and model selection',
        'Integration with business intelligence systems'
      ],
      challenges: [
        'Handling complex seasonal patterns across different geographic markets',
        'Managing model performance across varying data quality and availability',
        'Creating interpretable visualizations for non-technical stakeholders',
      ],
      solutions: [
        'Implemented automated grid search for optimal SARIMA parameters (p,d,q)(P,D,Q,s)',
        'Built robust data preprocessing pipelines with outlier detection',
        'Created interactive dashboards with drill-down capabilities and model explanations',
      ],
      impact: [
        'Achieved 92% forecasting accuracy across all geographic locations',
        'Enabled proactive business planning with 12-week revenue forecasts',
        'Improved stakeholder confidence in financial planning by 85%',
        'Automated 80% of manual forecasting processes'
      ],
      visualizations: [
        {
          title: 'Houston Revenue Forecast with Seasonal SARIMA',
          description: 'Time series analysis showing training actuals, validation actuals, and SARIMA forecasts with model performance metrics (AIC: 1662.45, BIC: 1662.46, RMSE: 543281.84)',
          image: houston
        },
        {
          title: 'San Francisco Revenue Forecast with Seasonal SARIMA', 
          description: 'Advanced forecasting model demonstrating seasonal patterns and trend analysis with superior performance metrics (AIC: 1604.18, BIC: 1614.31, RMSE: 265068.74)',
          image: sf
        },
        {
          title: 'Spokane Revenue Forecast with Seasonal SARIMA',
          description: 'Comprehensive time series modeling showing consistent forecasting accuracy across different market conditions (AIC: 1540.00, BIC: 1550.13, RMSE: 139511.41)',
          image: spok
        },
        {
          title: 'SARIMA Model Performance Comparison',
          description: 'Detailed comparison table showing AIC, BIC, and RMSE validation metrics across different SARIMA configurations and seasonal orders for optimal model selection',
          image: comparison
        },
        {
          title: 'SARIMAX Models with Exogenous Variables',
          description: 'Advanced modeling approach incorporating external variables for enhanced forecasting accuracy, showing Houston, San Francisco, and Spokane revenue predictions with exogenous factors',
          image: exogenous
        }
      ]
    },
    {
      id: 5,
      title: 'Real-Time Workout Pose Estimation and Feedback System',
      description: 'Advanced object detection and classification algorithms for industrial applications with optimized performance.',
      detailedDescription: 'Developed state-of-the-art computer vision solutions featuring advanced object detection and classification algorithms specifically designed for industrial applications. The project involved implementing cutting-edge deep learning models with heavily optimized performance for real-time production deployment in challenging industrial environments.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'YOLO', 'Docker', 'CUDA', 'TensorRT', 'Flask'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Computer Vision',
      icon: Brain,
      duration: '6 months',
      teamSize: '3 members',
      role: 'Computer Vision Engineer',
      demoVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual demo video
      keyFeatures: [
        'Real-time object detection and tracking',
        'Multi-class classification with high accuracy',
        'Edge deployment optimization',
        'Custom model training pipelines',
        'Performance monitoring and analytics',
        'Scalable inference architecture'
      ],
      challenges: [
        'Achieving real-time performance in resource-constrained environments',
        'Handling varying lighting and environmental conditions',
        'Maintaining accuracy across different object scales and orientations',
        'Optimizing models for edge deployment'
      ],
      solutions: [
        'Implemented model quantization and pruning techniques',
        'Developed robust data augmentation strategies',
        'Built multi-scale training and inference pipelines',
        'Created efficient model serving architecture with TensorRT'
      ],
      impact: [
        'Achieved 95% detection accuracy in production',
        'Reduced processing time by 60%',
        'Improved quality control efficiency by 80%',
        'Successfully deployed across 5 industrial facilities'
      ]
    },
    {
      id: 6,
      title: 'Sport Analytics with Computer vision',
      description: 'Comprehensive NLP-based data analysis platform with automated insights generation and sentiment analysis.',
      detailedDescription: 'Built a comprehensive NLP-based data analysis platform featuring automated insights generation, advanced sentiment analysis, and sophisticated text classification capabilities. The platform serves as a powerful business intelligence tool, enabling organizations to extract actionable insights from large volumes of textual data.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'spaCy', 'NLTK', 'Transformers', 'FastAPI', 'Redis', 'Elasticsearch', 'Plotly', 'Streamlit'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'NLP/Analytics',
      icon: MessageSquare,
      duration: '5 months',
      teamSize: '4 members',
      role: 'NLP Engineer & Data Scientist',
      demoVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual demo video
      keyFeatures: [
        'Multi-language sentiment analysis',
        'Automated topic modeling and clustering',
        'Real-time text classification',
        'Interactive analytics dashboard',
        'Custom entity recognition',
        'Trend analysis and forecasting'
      ],
      challenges: [
        'Processing large volumes of text data efficiently',
        'Handling multiple languages and dialects',
        'Ensuring consistent performance across different text domains',
        'Creating intuitive visualizations for complex NLP results'
      ],
      solutions: [
        'Implemented distributed processing with Redis and Elasticsearch',
        'Developed multi-language model ensemble approaches',
        'Built domain adaptation techniques for model robustness',
        'Created interactive dashboards with real-time updates'
      ],
      impact: [
        'Processed 1M+ documents with 92% accuracy',
        'Reduced manual analysis time by 85%',
        'Improved business decision-making speed by 60%',
        'Generated actionable insights for 20+ business units'
      ]
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const getCategoryIcon = (category: string, IconComponent: any) => {
    return <IconComponent size={16} />;
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

  return (
    <section id="projects" className="py-20 bg-white">
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
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A showcase of my AI/ML projects, demonstrating expertise in cutting-edge technologies 
            from NLP and computer vision to multi-agent systems and recommendation engines.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Category Badge */}
                <motion.div 
                  className="absolute top-4 left-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                    {getCategoryIcon(project.category, project.icon)}
                    <span>{project.category}</span>
                  </span>
                </motion.div>

                {/* View Details Button */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye size={16} />
                    <span>View Details</span>
                  </motion.button>
                </motion.div>

                {/* Action Buttons */}
                <motion.div 
                  className="absolute top-4 right-4 flex space-x-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href={project.liveUrl}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white transition-colors"
                    title="View Live"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white transition-colors"
                    title="View Code"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                  </motion.a>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-4 leading-relaxed text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "#3B82F6",
                        color: "#FFFFFF"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Projects;