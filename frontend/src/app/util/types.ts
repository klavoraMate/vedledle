export type Dog = {
    name: string;
    breed: Breed;
    size: Size;
    age: number;
};

export type DogWithUpcomingReservation = {
    dog: Dog,
    start: Date | null,
    end: Date | null,
}

export type User = {
    name: string;
    email: string;
};

export type Grooming =  {
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