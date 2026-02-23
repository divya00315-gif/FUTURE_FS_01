import Image from 'next/image';
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
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4 text-center md:text-left">
            <Badge variant="outline" className="text-md font-headline">
              Available for new opportunities
            </Badge>
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {personalDetails.name}
            </h1>
            <h2 className="font-headline text-2xl font-semibold text-primary">
              {personalDetails.title}
            </h2>
            <p className="max-w-lg text-foreground/80 md:text-xl">
              {personalDetails.shortIntro}
            </p>
            <div className="flex justify-center gap-4 md:justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={personalDetails.resumeUrl} download="resume.pdf">Download Resume</a>
              </Button>
            </div>
            <div className="flex justify-center gap-4 pt-4 md:justify-start">
              <Link href={personalDetails.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github className="h-8 w-8 text-foreground/70 transition-colors hover:text-primary" />
              </Link>
              <Link href={personalDetails.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-8 w-8 text-foreground/70 transition-colors hover:text-primary" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={personalDetails.imageUrl}
              alt={personalDetails.name}
              width={450}
              height={450}
              priority
              className="rounded-full border-4 border-primary/50 object-cover shadow-lg"
              data-ai-hint={personalDetails.imageHint}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
