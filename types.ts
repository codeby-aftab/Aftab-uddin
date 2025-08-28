
export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  details: {
    description: string;
    detailedDescription: string;
    role: string;
    technologies: string[];
    images: string[];
    liveUrl?: string;
  };
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface TimelineEvent {
  date: string;
  title: string;
  subtitle: string;
  description: string;
}