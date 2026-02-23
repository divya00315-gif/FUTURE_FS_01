import type { PersonalDetails } from '@/lib/definitions';

type AboutSectionProps = {
  personalDetails: PersonalDetails;
};

export function AboutSection({ personalDetails }: AboutSectionProps) {
  return (
    <section id="about" className="bg-bg-about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
          <p className="whitespace-pre-line text-foreground/80 md:text-xl/relaxed">
            {personalDetails.about}
          </p>
        </div>
      </div>
    </section>
  );
}
