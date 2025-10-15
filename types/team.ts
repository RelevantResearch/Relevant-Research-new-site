export interface SocialLinks {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
}

export type SocialPlatform = keyof SocialLinks;

export type Department = 'Software Development' | 'Design' | 'Research' | 'Management' | 'Marketing' | 'Co-Founder' | 'Director of Research' | 'Director of Software Development';

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    department: Department;
    bio: string;
    imageUrl: string;
    isActive?: boolean;
    socialLinks?: SocialLinks;
}