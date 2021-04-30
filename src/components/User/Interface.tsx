

    export interface User {
        id: number;
        username: string;
        password: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }

    export interface IRecipe {
        id: number;
        name: string;
        ingredients: string;
        directions: string;
        categories: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        user: User;
    }

