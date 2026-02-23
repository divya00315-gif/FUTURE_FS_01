import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Skill } from '@/lib/definitions';

type SkillsSectionProps = {
  skills: Skill[];
};

const iconColors = [
  'text-primary',
  'text-accent',
  'text-accent-1',
  'text-accent-2',
  'text-accent-3',
  'text-accent-4',
];

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="bg-bg-skills">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">My Skills</h2>
          <p className="text-foreground/80 md:text-xl/relaxed">
            A showcase of my technical abilities and tools I use to bring ideas to life.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center transition-transform hover:scale-105 hover:shadow-lg">
              <CardHeader className="p-0">
                <skill.icon className={`mx-auto h-12 w-12 ${iconColors[index % iconColors.length]}`} />
              </CardHeader>
              <CardContent className="p-0 pt-4">
                <p className="font-semibold">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
