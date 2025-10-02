import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink } from 'lucide-react';

const featuredProjects = [
  {
    title: 'Healthcare Management System',
    client: 'MedTech Solutions',
    description: 'Comprehensive patient management platform with telemedicine integration',
    image: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    results: { efficiency: '+45%', users: '10K+' },
    slug: 'healthcare-management-system'
  },
  {
    title: 'E-Commerce Platform',
    client: 'RetailPro',
    description: 'Scalable multi-vendor marketplace with real-time inventory management',
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redis'],
    results: { revenue: '+120%', uptime: '99.9%' },
    slug: 'ecommerce-platform'
  },
  {
    title: 'Financial Analytics Dashboard',
    client: 'FinanceHub',
    description: 'Real-time financial data visualization and predictive analytics',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
    results: { accuracy: '94%', speed: '3x faster' },
    slug: 'financial-analytics-dashboard'
  }
];

export function FeaturedPortfolio() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their operations
            with cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.slug}
              className={`group overflow-hidden hover:shadow-xl transition-all duration-300 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium text-blue-600 mb-2">
                        {project.client}
                      </p>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-200">
                      {Object.entries(project.results).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-2xl font-bold text-blue-600">
                            {value}
                          </div>
                          <div className="text-sm text-slate-600 capitalize">
                            {key.replace('_', ' ')}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group/link"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
