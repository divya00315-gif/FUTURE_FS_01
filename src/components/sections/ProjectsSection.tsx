import { ProjectCard } from '@/components/ProjectCard';
import type { Project } from '@/lib/definitions';

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="bg-bg-projects">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">My Projects</h2>
          <p className="text-foreground/80 md:text-xl/relaxed">
            Here are some of the projects I've worked on. Each one was a unique challenge and a great learning experience.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
