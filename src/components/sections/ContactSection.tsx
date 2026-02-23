import { ContactForm } from '@/components/ContactForm';

export function ContactSection() {
  return (
    <section id="contact" className="bg-bg-contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-accent-2 to-primary bg-clip-text text-transparent">Get In Touch</h2>
          <p className="text-foreground/80 md:text-xl/relaxed">
            Have a question or want to work together? Feel free to reach out. I'm always open to discussing new projects and opportunities.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
