import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';
import type { PersonalDetails } from '@/lib/definitions';
import { Badge } from '../ui/badge';

type HeroSectionProps = {
  personalDetails: PersonalDetails;
};

export function HeroSection({ personalDetails }: HeroSectionProps) {
  return (
    <section id="home" className="bg-background">
      <div className="container mx-auto flex min-h-[calc(100vh-80px)] items-center justify-center px-4 md:px-6">
        <div className="space-y-6 text-center">
          <div
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <Badge variant="outline" className="text-md font-headline">
              Available for new opportunities
            </Badge>
          </div>
          <h1
            className="opacity-0 animate-fade-in-up font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            {personalDetails.name}
          </h1>
          <h2
            className="opacity-0 animate-fade-in-up font-headline text-3xl font-semibold text-primary"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            {personalDetails.title}
          </h2>
          <p
            className="opacity-0 animate-fade-in-up mx-auto max-w-2xl text-foreground/80 md:text-xl"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            {personalDetails.shortIntro}
          </p>
          <div
            className="opacity-0 animate-fade-in-up flex justify-center gap-4"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <Button asChild size="lg">
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={personalDetails.resumeUrl} download="resume.pdf">Download Resume</a>
            </Button>
          </div>
          <div
            className="opacity-0 animate-fade-in-up flex justify-center gap-6 pt-4"
            style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          >
            <Link href={personalDetails.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github className="h-8 w-8 text-foreground/70 transition-colors hover:text-primary" />
            </Link>
            <Link href={personalDetails.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-8 w-8 text-foreground/70 transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
