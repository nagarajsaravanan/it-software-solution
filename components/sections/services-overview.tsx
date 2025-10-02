import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Cloud,
  Shield,
  Code,
  Database,
  Smartphone,
  Network,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom web, mobile, and desktop applications built with modern technologies.',
    href: '/services/software-development'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure on AWS, Azure, and Google Cloud Platform.',
    href: '/services/cloud-solutions'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security audits, monitoring, and threat protection services.',
    href: '/services/cybersecurity'
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    description: 'Big data solutions, BI tools, and AI/ML implementation for insights.',
    href: '/services/data-analytics'
  },
  {
    icon: Network,
    title: 'IT Infrastructure',
    description: 'Server management, networking, and 24/7 monitoring services.',
    href: '/services/it-infrastructure'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    href: '/services/mobile-development'
  }
];

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive IT Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            End-to-end technology solutions tailored to your business needs,
            from development to deployment and beyond.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
