export interface SocialLinks {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
}

export type SocialPlatform = keyof SocialLinks;

export type Department = 'Engineering' | 'Design' | 'Research' | 'Management' | 'Marketing';

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