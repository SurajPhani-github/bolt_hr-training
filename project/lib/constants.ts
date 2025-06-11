export const SITE_NAME = 'TrainWise AI';
export const SITE_DESCRIPTION = 'Intelligent HR Training Platform';

export const INDUSTRY_CATEGORIES = [
  { id: 'sales', name: 'Sales' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'it', name: 'IT' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'railways', name: 'Railways' },
  { id: 'finance', name: 'Finance' },
  { id: 'education', name: 'Education' },
  { id: 'manufacturing', name: 'Manufacturing' },
];

export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Resources', href: '/resources' },
  { name: 'Discussions', href: '/discussions' },
  { name: 'Chat', href: '/chat' },
];

export const FEATURES = [
  {
    title: 'AI-Powered Learning',
    description: 'Personalized training paths recommended by our advanced AI algorithms.',
    icon: 'Brain',
  },
  {
    title: 'Expert-Led Sessions',
    description: 'Connect with industry professionals for live training and Q&A sessions.',
    icon: 'Users',
  },
  {
    title: 'Interactive Resources',
    description: 'Access a vast library of videos, documents, and interactive modules.',
    icon: 'FileText',
  },
  {
    title: 'Community Discussions',
    description: 'Join domain-specific forums to share knowledge and solve problems together.',
    icon: 'MessageSquare',
  },
];

export const TESTIMONIALS = [
  {
    quote: "TrainWise AI has transformed how we onboard new employees. The platform's personalized approach has reduced our training time by 40%.",
    author: "Sarah Johnson",
    role: "HR Director, TechCorp",
    image: "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "As a trainer, I've been able to reach more professionals and make a bigger impact. The discussion forums create a community that continues learning beyond sessions.",
    author: "Michael Chen",
    role: "Corporate Trainer, LearnCo",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "The industry-specific resources helped me advance my career in healthcare management. The AI recommendations were spot on for my needs.",
    author: "Priya Patel",
    role: "Healthcare Administrator",
    image: "https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export const MOCK_RESOURCES = [
  {
    id: '1',
    title: 'Effective Leadership in Remote Teams',
    description: 'Learn strategies to lead and motivate remote teams effectively.',
    category: 'management',
    industry: 'it',
    type: 'course',
    duration: '2 hours',
    author: 'Dr. Emily Chen',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    title: 'Crisis Management Fundamentals',
    description: 'Essential techniques for managing workplace crises and emergencies.',
    category: 'crisis-management',
    industry: 'healthcare',
    type: 'workshop',
    duration: '3 hours',
    author: 'James Wilson',
    image: 'https://images.pexels.com/photos/3205568/pexels-photo-3205568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '3',
    title: 'Financial Compliance Training',
    description: 'Stay up-to-date with the latest regulations and compliance requirements.',
    category: 'compliance',
    industry: 'finance',
    type: 'certification',
    duration: '5 hours',
    author: 'Maria Rodriguez',
    image: 'https://images.pexels.com/photos/7681530/pexels-photo-7681530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '4',
    title: 'Digital Marketing Essentials',
    description: 'Master core digital marketing concepts and strategies for your business.',
    category: 'marketing',
    industry: 'marketing',
    type: 'course',
    duration: '4 hours',
    author: 'Alex Thompson',
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '5',
    title: 'Safety Protocols for Railway Operations',
    description: 'Comprehensive training on safety standards and emergency procedures.',
    category: 'safety',
    industry: 'railways',
    type: 'certification',
    duration: '6 hours',
    author: 'Robert Singh',
    image: 'https://images.pexels.com/photos/2790396/pexels-photo-2790396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '6',
    title: 'Customer Service Excellence',
    description: 'Enhance your customer service skills to drive satisfaction and loyalty.',
    category: 'customer-service',
    industry: 'sales',
    type: 'workshop',
    duration: '2 hours',
    author: 'Lisa Johnson',
    image: 'https://images.pexels.com/photos/7709294/pexels-photo-7709294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const MOCK_DISCUSSIONS = [
  {
    id: '1',
    title: 'Best practices for onboarding remote employees',
    author: 'Jennifer Adams',
    authorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '2023-09-15',
    category: 'Remote Work',
    replies: 24,
    views: 342,
    excerpt: 'With more companies shifting to remote work, what are your proven strategies for effectively onboarding new team members?',
  },
  {
    id: '2',
    title: 'Implementing AI in healthcare training programs',
    author: 'Dr. Michael Singh',
    authorAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '2023-09-12',
    category: 'Healthcare',
    replies: 18,
    views: 256,
    excerpt: 'Looking for insights on how AI can improve medical staff training while maintaining patient care standards.',
  },
  {
    id: '3',
    title: 'Compliance training that actually engages employees',
    author: 'Sarah Johnson',
    authorAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '2023-09-10',
    category: 'Compliance',
    replies: 32,
    views: 415,
    excerpt: 'How do you make mandatory compliance training more engaging? Share your creative approaches!',
  },
  {
    id: '4',
    title: 'Measuring ROI on leadership development programs',
    author: 'Robert Chen',
    authorAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '2023-09-08',
    category: 'Leadership',
    replies: 21,
    views: 289,
    excerpt: 'What metrics and methods have proven effective for measuring the return on investment for leadership training?',
  },
];