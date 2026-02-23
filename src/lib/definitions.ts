export type Project = {
  id: string;
  title: string;
  description: string;
  technologyUsed: string[];
  githubLink: string;
  imageUrl: string;
  imageHint: string;
};

export type Skill = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type PersonalDetails = {
  name: string;
  title: string;
  shortIntro: string;
  about: string;
  email: string;
  resumeUrl: string;
  linkedin: string;
  github: string;
  imageUrl: string;
  imageHint: string;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
};
