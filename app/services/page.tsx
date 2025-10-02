import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cloud, Shield, Code, Database, Smartphone, Network, Bot, Globe, Server, Lock, ChartBar as BarChart3, Headphones, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Services - TechSolutions',
  description: 'Comprehensive IT services including software development, cloud solutions, cybersecurity, and more.',
};

const services = [
  {
    icon: Code,
    title: 'Software Development',
    slug: 'software-development',
    description: 'Custom web, mobile, and desktop applications built with cutting-edge technologies.',
    features: [
      'Web application development',
      'Mobile app development (iOS & Android)',
      'Desktop software solutions',
      'SaaS platform development'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    slug: 'cloud-solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    features: [
      'AWS, Azure, GCP deployment',
      'Cloud migration services',
      'Hybrid/multi-cloud management',
      'Cloud cost optimization'
    ]
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    slug: 'cybersecurity',
    description: 'Comprehensive security solutions to protect your business from threats.',
    features: [
      'Security audits & penetration testing',
      'Firewall & antivirus setup',
      'Data encryption solutions',
      'Disaster recovery planning'
    ]
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    slug: 'data-analytics',
    description: 'Transform your data into actionable insights with advanced analytics.',
    features: [
      'Big data solutions',
      'Business Intelligence dashboards',
      'AI/ML implementation',
      'Predictive analytics'
    ]
  },
  {
    icon: Network,
    title: 'IT Infrastructure',
    slug: 'it-infrastructure',
    description: 'Reliable IT infrastructure management and support services.',
    features: [
      'Server management & hosting',
      'Network setup & optimization',
      'Data center management',
      '24/7 system monitoring'
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    slug: 'mobile-development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: [
      'iOS native development',
      'Android native development',
      'Cross-platform (React Native, Flutter)',
      'App store optimization'
    ]
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    slug: 'ai-automation',
    description: 'Leverage AI and automation to streamline your business processes.',
    features: [
      'Machine learning solutions',
      'Robotic Process Automation (RPA)',
      'Chatbot development',
      'AI-powered analytics'
    ]
  },
  {
    icon: Globe,
    title: 'Digital Transformation',
    slug: 'digital-transformation',
    description: 'Strategic consulting to modernize your business operations.',
    features: [
      'Technology strategy & planning',
      'Process digitization',
      'Legacy system modernization',
      'Change management'
    ]
  },
  {
    icon: Server,
    title: 'Managed IT Services',
    slug: 'managed-it-services',
    description: '24/7 IT support and maintenance for worry-free operations.',
    features: [
      '24/7 helpdesk support',
      'Remote monitoring & management',
      'System administration',
      'Outsourced IT teams'
    ]
  },
  {
    icon: Lock,
    title: 'DevOps & CI/CD',
    slug: 'devops-cicd',
    description: 'Streamline development with modern DevOps practices.',
    features: [
      'CI/CD pipeline setup',
      'Container orchestration (Docker, Kubernetes)',
      'Infrastructure as Code',
      'Automated testing & deployment'
    ]
  },
  {
    icon: BarChart3,
    title: 'ERP & CRM Solutions',
    slug: 'erp-crm',
    description: 'Implement and customize enterprise resource planning systems.',
    features: [
      'SAP, Oracle, Odoo implementation',
      'Salesforce, HubSpot customization',
      'Custom ERP development',
      'CRM integration services'
    ]
  },
  {
    icon: Headphones,
    title: 'IT Consulting',
    slug: 'it-consulting',
    description: 'Expert guidance for your technology decisions and investments.',
    features: [
      'Technology assessment',
      'IT strategy development',
      'Vendor selection',
      'Cost optimization'
    ]
  }
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Comprehensive IT Services
            </h1>
            <p className="text-xl text-slate-300">
              From development to deployment, security to scaling - we provide
              end-to-end IT solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.slug}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200"
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
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="text-sm text-slate-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 group/link"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-slate-600">
              Every business is unique. Let's discuss how we can create a tailored
              IT strategy that fits your specific requirements.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
