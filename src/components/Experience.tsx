import React from 'react';
import Timeline from './Timeline';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      title: 'Lead Data Scientist',
      company: 'Sysco Labs',
      location: 'Colombo, Sri Lanka',
      period: 'Jun 2025 - Present',
      description: [
        'Leading the data science team for developing predictive analytics pipelines',
        'Architecting scalable ML solutions for enterprise-level applications',
        'Driving strategic initiatives in AI/ML adoption across the organization',
        'Mentoring junior data scientists and establishing best practices'
      ],
      type: 'experience' as const
    },
    {
      id: 3,
      title: 'Machine Learning Consultant',
      company: 'Allion Technologies (Pvt) Ltd',
      location: 'Colombo, Sri Lanka',
      period: 'Dec 2022 - Feb 2025',
      description: [
        'Led an AI team of 4 members across multiple high-impact projects',
        'Designed conceptual architecture and AI workflows for client solutions',
        'Fine-tuned and evaluated GPT-3 models and open-source LLMs (Mixtral, Falcon, Llama-2/3)',
        'Developed conversational agents using LLMs and LangChain framework',
        'Implemented A/B testing and statistical significance testing for model validation',
        'Deployed LLMs using AWS Sagemaker with REST API endpoints'
      ],
      type: 'experience' as const
    },
    {
      id: 4,
      title: 'Applied Research Engineer',
      company: 'Orel IT',
      location: 'Colombo, Sri Lanka',
      period: 'July 2022 - Dec 2022',
      description: [
        'Developed object detection and classification algorithms',
        'Trained and evaluated deep learning models for computer vision tasks',
        'Optimized model performance and deployed solutions to production',
        'Conducted research on state-of-the-art computer vision techniques'
      ],
      type: 'experience' as const
    },
    {
      id: 5,
      title: 'Software Engineer (Data Science)',
      company: 'DigitalX (pvt) Ltd - Freelance',
      location: 'Remote',
      period: 'May 2022 - Sep 2022',
      description: [
        'Performed data extraction, preprocessing and ETL operations',
        'Conducted NLP-based data analysis for business insights',
        'Developed and maintained API endpoints for data services',
        'Collaborated with cross-functional teams on data-driven projects'
      ],
      type: 'experience' as const
    },
    {
      id: 6,
      title: 'Software Engineer',
      company: 'Azend Technologies (pvt) Ltd',
      location: 'Colombo, Sri Lanka',
      period: 'Feb 2022 - July 2022',
      description: [
        'Designed and developed a comprehensive job recommendation system',
        'Created Data Lake architecture using DynamoDB and S3',
        'Contributed to front-end development using React and TypeScript',
        'Implemented content-based filtering algorithms for job matching'
      ],
      type: 'experience' as const
    },
    {
      id: 7,
      title: 'Associate Software Developer',
      company: 'SLT VisionCom (pvt) Ltd',
      location: 'Colombo, Sri Lanka',
      period: 'May 2021 - Dec 2021',
      description: [
        'Managed software version control and prepared technical documentation',
        'Performed troubleshooting, bug fixing and deployed new application modules',
        'Generated monthly and scheduled reports for stakeholders',
        'Provided support and maintenance for intranet and corporate websites'
      ],
      type: 'experience' as const
    },
    {
      id: 8,
      title: 'Junior Software Engineer',
      company: 'Vevro (pvt) Ltd',
      location: 'Colombo, Sri Lanka',
      period: 'Nov 2020 - May 2021',
      description: [
        'Developed image recognition and computer vision solutions',
        'Built natural language chatbots using RASA framework',
        'Implemented machine learning models for various business applications',
        'Collaborated with senior developers on AI/ML projects'
      ],
      type: 'experience' as const
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive journey through my career in data science and AI, showcasing progression 
            from junior developer to lead data scientist and technical leader.
          </p>
        </div>

        <Timeline items={experienceData} type="experience" />
      </div>
    </section>
  );
};

export default Experience;