import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Tech Insights & Industry Trends | TechSolutions',
  description: 'Stay updated with the latest IT trends, best practices, and industry insights from our experts.',
};

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Cloud Computing in 2025',
    slug: 'future-of-cloud-computing-2025',
    excerpt: 'Explore the emerging trends in cloud technology and how they will shape business operations in the coming years.',
    coverImage: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cloud Computing',
    author: 'David Chen',
    date: '2024-12-15',
    readTime: '8 min read',
    featured: true
  },
  {
    id: 2,
    title: 'AI-Powered Cybersecurity: Protecting Your Business',
    slug: 'ai-powered-cybersecurity',
    excerpt: 'Learn how artificial intelligence is revolutionizing cybersecurity and helping businesses stay ahead of threats.',
    coverImage: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cybersecurity',
    author: 'Sarah Johnson',
    date: '2024-12-10',
    readTime: '6 min read',
    featured: true
  },
  {
    id: 3,
    title: 'Microservices Architecture: Best Practices',
    slug: 'microservices-architecture-best-practices',
    excerpt: 'A comprehensive guide to implementing microservices architecture for scalable and maintainable applications.',
    coverImage: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Software Development',
    author: 'Michael Torres',
    date: '2024-12-05',
    readTime: '10 min read',
    featured: false
  },
  {
    id: 4,
    title: 'Data Analytics Trends Every Business Should Know',
    slug: 'data-analytics-trends',
    excerpt: 'Discover the latest trends in data analytics and how they can transform your business decision-making.',
    coverImage: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Data Analytics',
    author: 'Emily Rodriguez',
    date: '2024-11-28',
    readTime: '7 min read',
    featured: false
  },
  {
    id: 5,
    title: 'DevOps Automation: Streamlining Your Pipeline',
    slug: 'devops-automation-guide',
    excerpt: 'Learn how to automate your DevOps pipeline for faster deployments and better reliability.',
    coverImage: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'DevOps',
    author: 'David Chen',
    date: '2024-11-20',
    readTime: '9 min read',
    featured: false
  },
  {
    id: 6,
    title: 'Mobile App Development: Native vs Cross-Platform',
    slug: 'native-vs-cross-platform-mobile',
    excerpt: 'Compare native and cross-platform development approaches to choose the best for your project.',
    coverImage: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mobile Development',
    author: 'Sarah Johnson',
    date: '2024-11-15',
    readTime: '8 min read',
    featured: false
  }
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <main>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Tech Insights & Industry Trends
            </h1>
            <p className="text-xl text-slate-300">
              Expert perspectives on technology, best practices, and digital transformation
              from our team of IT professionals.
            </p>
          </div>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-64 overflow-hidden bg-slate-200">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-blue-600">
                        Featured
                      </Badge>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <Badge variant="secondary">{post.category}</Badge>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-500 pt-4 border-t">
                        <span>{post.author}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden bg-slate-200">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t">
                      <span>{post.author}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
