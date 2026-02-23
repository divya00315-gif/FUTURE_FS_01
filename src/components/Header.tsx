'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Briefcase className="h-7 w-7 text-primary" />
          <span className="font-headline text-2xl font-bold">Portfolio Pro</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-medium text-foreground/70 transition-colors hover:text-primary"
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="/admin">Admin Login</Link>
          </Button>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="container mx-auto flex flex-col items-center gap-4 px-4 pb-8 md:px-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block w-full rounded-md py-2 text-center font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsOpen(false)}
                prefetch={false}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link href="/admin">Admin Login</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
