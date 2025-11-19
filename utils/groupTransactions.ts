import dayjs from "dayjs";

export const groupTransactions = (
    data: any,
    mockToday?: string | null
) => {
    const today = mockToday ? dayjs(mockToday) : dayjs();
    const yesterday = today.subtract(1, "day");

    const groups: Record<string, any[]> = {};

    data.forEach((item: any) => {
        const date = dayjs(item.date);
        let groupTitle = date.format("DD.MM.YYYY");

        if (date.isSame(today, "day")) {
            groupTitle = "Today";
        } else if (date.isSame(yesterday, "day")) {
            groupTitle = "Yesterday";
        }

        if (!groups[groupTitle]) groups[groupTitle] = [];
        groups[groupTitle].push(item);
    });

    return Object.entries(groups).map(([title, items]) => ({
        title,
        data: items,
    }));
};
