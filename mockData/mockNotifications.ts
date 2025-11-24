import { Notification } from "@/types/cards";
import { Anna, Card, Matthew } from "./mockUser";


export const Notifications: Notification[] = [
    {
        id: 0,
        date: '2025-03-12T09:20:00',
        type: 'Payments',
        info: {
            user: Anna,
            type: 'Received',
            count: 110,
            card: 4385,
        },
        isRead: true,
    },
    {
        id: 1,
        date: '2025-03-11T23:08:00',
        type: 'Travel',
        info: {
            title: 'See our limited offer!',
            subtitle: 'Would you like to visit new countries? Maybe it’s your time!'
        },
        isRead: false,
    },
    {
        id: 2,
        date: '2025-03-11T06:18:00',
        type: 'Payments',
        info: {
            user: Card,
            type: 'Sent',
            count: 110,
            card: 4385,
        },
        isRead: false,
    },
    {
        id: 3,
        date: '2025-03-10T15:44:00',
        type: 'System',
        info: {
            title: 'New login into account',
            subtitle: 'You have logged in from a new location: iOS 26.0.1 · 109.255.84.7 · Spain'
        },
        isRead: false,
    },
    {
        id: 4,
        date: '2025-03-09T09:20:00',
        type: 'Payments',
        info: {
            user: Matthew,
            type: 'Sent',
            count: 3594.56,
            card: 4385,
        },
        isRead: false,
    },
    {
        id: 5,
        date: '2025-03-08T23:08:00',
        type: 'System',
        info: {
            title: 'See our limited offer!',
            subtitle: 'Would you like to visit new countries? Maybe it’s your time!'
        },
        isRead: false,
    },
    {
        id: 6,
        date: '2025-03-08T06:18:00',
        type: 'Payments',
        info: {
            user: Card,
            type: 'Received',
            count: 110,
            card: 4385,
        },
        isRead: false,
    },
    {
        id: 7,
        date: '2025-03-07T23:08:00',
        type: 'Delivery',
        info: {
            title: 'See our limited offer!',
            subtitle: 'Would you like to visit new countries? Maybe it’s your time!'
        },
        isRead: false,
    },
];