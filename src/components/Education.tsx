import React from 'react';
import Timeline from './Timeline';

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: 'MSc in Data Science and Artificial Intelligence',
      company: 'University of Sri Jayewardenepura',
      location: 'Nugegoda, Sri Lanka',
      period: 'Jan 2022 - Present (Reading)',
      description: [
        'Advanced coursework in Machine Learning, Deep Learning, and AI algorithms',
        'Research focus on Natural Language Processing and Large Language Models',
        'Thesis work on advanced AI applications in real-world scenarios',
        'Collaborative research projects with industry partners'
      ],
      type: 'education' as const
    },
    {
      id: 2,
      title: 'BSc (Hons) in Statistics',
      company: 'University of Colombo',
      location: 'Colombo, Sri Lanka',
      period: 'Jan 2017 - Apr 2021',
      description: [
        'Comprehensive foundation in statistical theory and mathematical modeling',
        'Specialized coursework in probability theory, statistical inference, and data analysis',
        'Capstone project on predictive modeling using statistical methods',
        'Strong mathematical foundation supporting advanced AI/ML studies'
      ],
      type: 'education' as const
    },
    {
      id: 3,
      title: 'Google Certified TensorFlow Developer',
      company: 'Google',
      location: 'Online Certification',
      period: '2023',
      description: [
        'Performance-based programming exam demonstrating ML/DL expertise',
        'Validated skills in building and training neural networks with TensorFlow',
        'Demonstrated proficiency in computer vision, NLP, and time series analysis',
        'Digital credential: https://www.credential.net/12cfa00a-348f-482c-bf76-c403862d3a18'
      ],
      type: 'education' as const
    },
    {
      id: 4,
      title: 'Certificate in IT',
      company: 'BCS (British Computer Society)',
      location: 'Professional Certification',
      period: '2022',
      description: [
        'Higher Education Qualification from BCS professional body',
        'Comprehensive coverage of IT fundamentals and best practices',
        'Professional development in software engineering principles',
        'Industry-recognized certification for IT professionals'
      ],
      type: 'education' as const
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and professional certifications that have provided the theoretical 
            foundation and practical skills for my expertise in data science and artificial intelligence.
          </p>
        </div>

        <Timeline items={educationData} type="education" />
      </div>
    </section>
  );
};

export default Education;