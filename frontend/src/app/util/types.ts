export type Dog = undefined | {
    name: string;
    breed: Breed;
    size: Size;
    age: number;
};

export type User = {
    name: string;
    email: string;
};

export type Grooming = undefined | {
    showerOnly: boolean;
}


export type Breed = {
    name: string;
}

export type Size = {
    name: string;
}

export type TimeSlot = {
    start: Date;
    end: Date;
}