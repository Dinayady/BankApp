import dayjs from "dayjs";

export const groupTransactions = (
    data: any,
    mockToday?: string | null,
    useAlternativeFormat: boolean = false,
) => {
    const today = mockToday ? dayjs(mockToday) : dayjs();
    const yesterday = today.subtract(1, "day");

    const groups: Record<string, any[]> = {};

    data.forEach((item: any) => {
        const date = dayjs(item.date);
        let groupTitle = "";

        if (useAlternativeFormat) {
            // Альтернативный формат: "Today, 17 JunE", "YESTERDay, 16 JunE", "24 MARCH, 2025"
            if (date.isSame(today, "day")) {
                groupTitle = `TODAY, ${today.format("DD MMM").toUpperCase()}`;
            } else if (date.isSame(yesterday, "day")) {
                groupTitle = `YESTERDAY, ${yesterday.format("DD MMM").toUpperCase()}`;
            } else {
                groupTitle = `${date.format("DD MMMM, YYYY").toUpperCase()}`;
            }
        } else {
            // Оригинальный формат: "Today", "Yesterday", "DD.MM.YYYY"
            if (date.isSame(today, "day")) {
                groupTitle = "Today";
            } else if (date.isSame(yesterday, "day")) {
                groupTitle = "Yesterday";
            } else {
                groupTitle = date.format("DD.MM.YYYY");
            }
        }

        if (!groups[groupTitle]) groups[groupTitle] = [];
        groups[groupTitle].push(item);
    });

    return Object.entries(groups).map(([title, items]) => ({
        title,
        data: items,
    }));
};
