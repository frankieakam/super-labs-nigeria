'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      description: 'Transformed a local retail business into a scalable e-commerce platform with integrated payment systems and inventory management.',
      results: ['+300% online sales', '+45% customer retention', '-60% operational costs'],
      image: '/case-studies/ecommerce.jpg', // You'll need to add this image
      category: 'E-commerce',
      duration: '3 months'
    },
    {
      id: 2,
      title: 'SaaS Product Launch & Scaling',
      description: 'Developed and launched a B2B SaaS product from concept to market, including UX design, development, and growth strategy.',
      results: ['+5000 users in 6 months', '+89% user satisfaction', '+200% MRR growth'],
      image: '/case-studies/saas.jpg', // You'll need to add this image
      category: 'SaaS',
      duration: '6 months'
    },
    {
      id: 3,
      title: 'Author Platform & Book Marketing',
      description: 'Built a comprehensive author platform with personal branding, website, and Amazon Kindle marketing strategy.',
      results: ['#1 Amazon Bestseller', '+10,000 book sales', '+200% social media growth'],
      image: '/case-studies/author.jpg', // You'll need to add this image
      category: 'Publishing',
      duration: '2 months'
    },
    {
      id: 4,
      title: 'Corporate Digital Overhaul',
      description: 'Complete digital transformation for an established corporation including rebranding, web development, and digital infrastructure.',
      results: ['+150% web traffic', '+75% lead generation', '+40% brand recognition'],
      image: '/case-studies/corporate.jpg', // You'll need to add this image
      category: 'Corporate',
      duration: '4 months'
    }
  ];

  return (
    <section id="case-studies" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we&apos;ve helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-48 bg-linear-to-br from-accent/20 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-gray-700 px-2 py-1 rounded text-xs">
                    {study.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">
                  {study.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="space-y-2 mb-4">
                  {study.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-gray-700 font-medium">{result}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-white border border-black text-gray-700 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white hover:bg-black transition-all duration-300 flex items-center justify-center space-x-2 group/btn">
                  <span>View Case Study</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let&apos;s work together to transform your business and achieve remarkable results.
            </p>
            <a
              href="#contact"
              className="inline-block border border-blue-500 text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors"
            >
              Start Your Project
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}