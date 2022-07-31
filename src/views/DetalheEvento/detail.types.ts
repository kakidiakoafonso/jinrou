export type User = {
    id: string;
    email: string;
    name: string;
    password: string;
    rg: string;
    cpf: string;
    birth_day: string;
    avatar: string;
    subscriber: boolean;
    expiration_date: string;
}

export type Purchase = {
    id: string;
    date: Date;
    userId: string;
    eventId: string;
    type: string;
    user: User;
}

export type Evento = {
    id: string;
    name: string;
    description: string;
    date: string;
    price: string;
    subscriber_price: string;
    local: string;
    avatar: string;
    purchase: Purchase[];
}
