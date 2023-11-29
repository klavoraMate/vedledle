
export type Dog = undefined | {
    name: string;
    breed: string;
    size: string;
    age: number;
};

export type User = {
    name: string;
    email: string;
};

export type Grooming = undefined |{
    showerOnly: boolean;
}