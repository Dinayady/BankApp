import { Commercial, User } from "./user";

export type Card = {
    type: 'Debit' | 'Virtual';
    number: number;
    balance: number;
}

export type CardHistory = {
    user: User | Card;
    balance: string;
    type: 'to' | 'from';
}

export type Info = {
    user: User | Commercial;
    category: string;
    categoryColor: string;
    count: number;
}

export type Transaction = {
    info: Info;
    date: string;
};

export type Notification = {
    id: number;
    date: string;
    type: 'Payments' | 'System' | 'Delivery' | 'Travel';
    info: Payments | Other,
    isRead: boolean;
};

export type Payments = {
    user: User | Card;
    type: 'Received' | 'Sent';
    count: number;
    card: number;
}

export type Other = {
    title: string;
    subtitle: string;
}
