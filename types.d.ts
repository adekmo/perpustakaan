interface Book {
    id: number
    title: string;
    author: string;
    genre: string;
    rating: number;
    total_copies: number;
    available_copies: number;
    description: string;
    color: string;
    coverUrl: string;
    video: string;
    summary: string;
    isLoanedBook?: boolean;
}

interface AuthCredentials {
    fullName: string;
    email: string;
    password: string;
    universityId: number;
    universityCard: string;
}

interface User {
    id: string;
    fullname: string;
    email: string;
    universityId: number;
    universityCard: string;
    status: "PENDING"| "APPROVED" | "REJECTED" | null;
    role: "USER" | "ADMIN" | null;
    lastActivityDate: string | null;
    createdAt: Date | null;
}