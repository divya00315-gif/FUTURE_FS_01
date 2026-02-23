import type { PersonalDetails, Project, Skill, ContactMessage } from '@/lib/definitions';
import { Code, Database, Smartphone, Cloud, PenTool, Linkedin, Github } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const project1Image = PlaceHolderImages.find(img => img.id === 'project-1');
const project2Image = PlaceHolderImages.find(img => img.id === 'project-2');
const project3Image = PlaceHolderImages.find(img => img.id === 'project-3');
const project4Image = PlaceHolderImages.find(img => img.id === 'project-4');

export const personalDetails: PersonalDetails = {
  name: 'Hello, this is V Divyashree',
  title: 'Full Stack Developer',
  shortIntro: 'A passionate 3rd-year engineering student with a knack for building elegant and efficient web applications.',
  about: `I am a dedicated and creative full-stack developer currently in my third year of an engineering program. With a strong foundation in both front-end and back-end technologies, I enjoy turning complex problems into simple, beautiful, and intuitive designs. I am passionate about learning new technologies and leveraging them to build high-quality software.

My journey in software development started with a simple "Hello, World!" and has since grown into a full-fledged passion for creating meaningful applications that can make a difference. I'm always looking for opportunities to collaborate on projects and learn from experienced developers.`,
  email: 'v.divyashree@example.com',
  resumeUrl: '/resume.pdf',
  linkedin: 'https://www.linkedin.com/in/v-divyashree-placeholder',
  github: 'https://github.com/v-divyashree',
  imageUrl: '',
  imageHint: 'professional portrait',
};

export const skills: Skill[] = [
  { name: 'React & Next.js', icon: Code },
  { name: 'Node.js & Express', icon: Code },
  { name: 'MongoDB & Mongoose', icon: Database },
  { name: 'JavaScript & TypeScript', icon: Code },
  { name: 'Responsive Design', icon: Smartphone },
  { name: 'REST APIs', icon: Cloud },
  { name: 'UI/UX Principles', icon: PenTool },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website with product listings, a shopping cart, and a checkout process. Includes an admin panel for managing products and orders.',
    technologyUsed: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/v-divyashree/ecommerce-platform',
    imageUrl: project1Image?.imageUrl ?? '',
    imageHint: project1Image?.imageHint ?? 'abstract tech',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A Kanban-style task management application that allows users to create, organize, and track their tasks through different stages of completion.',
    technologyUsed: ['Next.js', 'Tailwind CSS', 'Firebase'],
    githubLink: 'https://github.com/v-divyashree/task-management-app',
    imageUrl: project2Image?.imageUrl ?? '',
    imageHint: project2Image?.imageHint ?? 'modern workspace',
  },
  {
    id: '3',
    title: 'Real-time Chat Application',
    description: 'A web-based chat application supporting multiple rooms and real-time messaging using WebSockets. Users can join rooms and communicate instantly.',
    technologyUsed: ['Socket.IO', 'React', 'Express'],
    githubLink: 'https://github.com/v-divyashree/real-time-chat-application',
    imageUrl: project3Image?.imageUrl ?? '',
    imageHint: project3Image?.imageHint ?? 'glowing code',
  },
  {
    id: '4',
    title: 'Portfolio Pro',
    description: 'The very portfolio you are looking at. A responsive personal website to showcase my skills and projects, built with Next.js and featuring a GenAI-powered summary generator.',
    technologyUsed: ['Next.js', 'TypeScript', 'Genkit', 'Tailwind CSS'],
    githubLink: 'https://github.com/v-divyashree/portfolio-pro',
    imageUrl: project4Image?.imageUrl ?? '',
    imageHint: project4Image?.imageHint ?? 'data visualization',
  },
];

export const contactMessages: ContactMessage[] = [
  {
    id: '1',
    name: 'Jane Smith',
    email: 'jane@example.com',
    message: 'Great portfolio! I was very impressed with your projects. I would love to connect and discuss a potential opportunity.',
    createdAt: new Date('2024-05-19T10:00:00Z'),
  },
  {
    id: '2',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    message: 'Hi V Divyashree, I saw your profile on LinkedIn and wanted to reach out. Your work on the e-commerce platform is fantastic. Let\'s chat sometime.',
    createdAt: new Date('2024-05-20T14:30:00Z'),
  },
];

export const adminUser = {
  username: 'admin',
  password: 'password123', // In a real app, this would be a hash
};
