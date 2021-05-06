

     export interface User {
        id: number;
        username: string;
        password: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }

    export interface IComment {
        id: number;
        comments: string;
        rating: number;
        createdAt: Date;
        updatedAt: Date;
        photoURL: string;
       
    }