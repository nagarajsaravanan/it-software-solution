'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Healthcare', 'E-Commerce', 'Finance', 'Education', 'Enterprise'];

const projects = [
  {
    id: 1,
    title: 'Healthcare Management System',
    client: 'MedTech Solutions',
    category: 'Healthcare',
    description: 'Comprehensive patient management platform with telemedicine integration and real-time health monitoring.',
    image: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'WebRTC'],
    results: { efficiency: '+45%', users: '10K+', uptime: '99.9%' },
    slug: 'healthcare-management-system',
    featured: true
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    client: 'RetailPro',
    category: 'E-Commerce',
    description: 'Scalable multi-vendor marketplace with real-time inventory management and advanced analytics.',
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redis', 'Docker'],
    results: { revenue: '+120%', orders: '50K+', speed: '2.5s' },
    slug: 'ecommerce-platform',
    featured: true
  },
  {
    id: 3,
    title: 'Financial Analytics Dashboard',
    client: 'FinanceHub',
    category: 'Finance',
    description: 'Real-time financial data visualization with predictive analytics and risk assessment tools.',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'Kafka'],
    results: { accuracy: '94%', speed: '3x faster', insights: '1000+' },
    slug: 'financial-analytics-dashboard',
    featured: true
  },
  {
    id: 4,
    title: 'Learning Management System',
    client: 'EduTech Pro',
    category: 'Education',
    description: 'Interactive online learning platform with video streaming, assessments, and progress tracking.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Express', 'MySQL', 'AWS S3', 'Socket.io'],
    results: { students: '25K+', courses: '500+', satisfaction: '4.8/5' },
    slug: 'learning-management-system',
    featured: false
  },
  {
    id: 5,
    title: 'Enterprise Resource Planning',
    client: 'GlobalCorp Industries',
    category: 'Enterprise',
    description: 'Custom ERP solution integrating HR, finance, inventory, and supply chain management.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Java', 'Spring Boot', 'Oracle', 'Angular', 'Kubernetes'],
    results: { efficiency: '+60%', cost: '-30%', integration: '15 systems' },
    slug: 'enterprise-resource-planning',
    featured: false
  },
  {
    id: 6,
    title: 'Mobile Banking App',
    client: 'SecureBank',
    category: 'Finance',
    description: 'Secure mobile banking application with biometric authentication and instant transfers.',
    image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Plaid'],
    results: { users: '100K+', transactions: '1M+', rating: '4.7/5' },
    slug: 'mobile-banking-app',
    featured: false
  },
  {
    id: 7,
    title: 'Telemedicine Platform',
    client: 'HealthConnect',
    category: 'Healthcare',
    description: 'HIPAA-compliant telemedicine platform with video consultations and prescription management.',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Twilio', 'Stripe'],
    results: { consultations: '50K+', doctors: '2K+', satisfaction: '95%' },
    slug: 'telemedicine-platform',
    featured: false
  },
  {
    id: 8,
    title: 'Restaurant Ordering System',
    client: 'FoodDelivery Co',
    category: 'E-Commerce',
    description: 'Multi-restaurant food ordering platform with real-time tracking and payment integration.',
    image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'Firebase', 'Node.js', 'Google Maps', 'Stripe'],
    results: { orders: '200K+', restaurants: '500+', delivery: '30min avg' },
    slug: 'restaurant-ordering-system',
    featured: false
  }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <main>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Portfolio
            </h1>
            <p className="text-xl text-slate-300">
              Explore our successful projects and see how we've helped businesses
              achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-blue-600">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-blue-600 mb-2">
                      {project.client}
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-3 border-t">
                    {Object.entries(project.results).slice(0, 3).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold text-blue-600">
                          {value}
                        </div>
                        <div className="text-xs text-slate-500 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 group/link"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-slate-600">
              Let's discuss how we can help you bring your vision to life with our
              proven expertise and innovative solutions.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
