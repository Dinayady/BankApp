import { Transaction } from "@/types/cards";
import { Netflix, Starbucks } from "./mockCommercial";
import { Matthew } from "./mockUser";

import { Colors } from "@/constants/Style";

export const Transactions: Transaction[] = [
    {
        info: {
            category: "Money Transfer",
            count: 56.19,
            user: Matthew,
            categoryColor: Colors.dark.accentTertiaryColor,
        },
        date: "2025-03-12T09:20:00"
    },
    {
        info: {
            category: "Food",
            count: 122.47,
            user: Starbucks,
            categoryColor: Colors.dark.accentMainColor,
        },
        date: "2025-03-11T12:00:00"
    },
    {
        info: {
            category: "Entertainment",
            count: 13.17,
            user: Netflix,
            categoryColor: Colors.dark.accentSecondaryColor,
        },
        date: "2025-03-11T12:00:00"
    },
    {
        info: {
            category: "Money Transfer",
            count: 56.19,
            user: Matthew,
            categoryColor: Colors.dark.accentTertiaryColor,
        },
        date: "2025-03-10T09:20:00"
    },
    {
        info: {
            category: "Food",
            count: 122.47,
            user: Starbucks,
            categoryColor: Colors.dark.accentMainColor,
        },
        date: "2025-03-10T09:20:00"
    },
    {
        info: {
            category: "Entertainment",
            count: 13.17,
            user: Netflix,
            categoryColor: Colors.dark.accentSecondaryColor,
        },
        date: "2025-03-10T09:20:00"
    },
    {
        info: {
            category: "Money Transfer",
            count: 56.19,
            user: Matthew,
            categoryColor: Colors.dark.accentTertiaryColor,
        },
        date: "2025-03-09T09:20:00"
    },
    {
        info: {
            category: "Food",
            count: 122.47,
            user: Starbucks,
            categoryColor: Colors.dark.accentMainColor,
        },
        date: "2025-03-09T09:20:00"
    },
    {
        info: {
            category: "Entertainment",
            count: 13.17,
            user: Netflix,
            categoryColor: Colors.dark.accentSecondaryColor,
        },
        date: "2025-03-09T09:20:00"
    },
];