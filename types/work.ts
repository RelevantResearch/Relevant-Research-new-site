export interface Project {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    category: string;
    image: string;
    link: string;
    client: string;
    challenge: string;
    solution: string;
    technologies: string[];
    year: string;
    status: 'live' | 'in-development' | 'completed';
}

export interface ResearchPaper {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    category: string;
    downloadLink?: string;
    authors: string[];
    year: string;
    status: 'published' | 'in-review' | 'draft';
    abstract: string;
    keywords: string[];
    citation: string;
}