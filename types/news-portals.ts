export interface NewsPortal {
    id: string;
    name: string;
    displayName: string;
    url: string;
    logoUrl?: string;
    colors: {
        from: string;
        to: string;
    };
    textSize: string;
    width: string;
    description: string;
}