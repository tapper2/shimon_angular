export interface Show {
    id: number;
    url: string;
    language: string;
    status: string;
    image: ShowImage;
    name: string;
    summary: string;
}

export interface ShowImage {
    medium: string;
    original: string;
}

