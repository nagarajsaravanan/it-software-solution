import { supabase } from './supabase';

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  features: any[];
  order_position: number;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  results: any;
  images: any[];
  technologies: string[];
  service_id: string;
  published: boolean;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  author_id: string;
  published: boolean;
  featured: boolean;
  views: number;
  created_at: string;
  updated_at: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  avatar: string;
  social_links: any;
  order_position: number;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service_interest?: string;
  message: string;
}

export async function getServices() {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('published', true)
    .order('order_position', { ascending: true });

  if (error) throw error;
  return data as Service[];
}

export async function getServiceBySlug(slug: string) {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  if (error) throw error;
  return data as Service | null;
}

export async function getCaseStudies(featured?: boolean) {
  let query = supabase
    .from('case_studies')
    .select('*')
    .eq('published', true);

  if (featured) {
    query = query.eq('featured', true);
  }

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) throw error;
  return data as CaseStudy[];
}

export async function getCaseStudyBySlug(slug: string) {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  if (error) throw error;
  return data as CaseStudy | null;
}

export async function getBlogPosts(featured?: boolean) {
  let query = supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true);

  if (featured) {
    query = query.eq('featured', true);
  }

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) throw error;
  return data as BlogPost[];
}

export async function getBlogPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  if (error) throw error;
  return data as BlogPost | null;
}

export async function getTeamMembers() {
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .eq('published', true)
    .order('order_position', { ascending: true });

  if (error) throw error;
  return data as TeamMember[];
}

export async function submitContactForm(submission: ContactSubmission) {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([submission])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function subscribeNewsletter(email: string) {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email }])
    .select()
    .single();

  if (error) throw error;
  return data;
}
