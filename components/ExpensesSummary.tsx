import { Colors, fonts, text } from "@/constants/Style";
import { formatNumber } from "@/utils/formatNumber";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MultiSegmentProgressBar } from "./MultiSegmentProgressBar";

interface ExpensesSummaryProps {
    month: string;
    balance: number;
}

export const ExpensesSummary: FC<ExpensesSummaryProps> = ({
    month,
    balance
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.expensesContainer}>
                    <Text style={styles.expenses} >
                        Expenses in
                    </Text>
                    <Text style={styles.month}>
                        {month}
                    </Text>
                </View>
                <Text style={styles.balance}>
                    ${formatNumber(balance)}
                </Text>
            </View>
            <MultiSegmentProgressBar progress={[34, 67, 86, 30]} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 16,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    expensesContainer: {
        flexDirection: 'row',
        gap: 6,
    },
    expenses: {
        color: Colors.dark.mainTextColor,
        ...text.xl,
        ...fonts.medium
    },
    month: {
        color: Colors.dark.accentMainColor,
        ...text.xl,
        ...fonts.medium
    },
    balance: {
        color: Colors.dark.secondaryTextColor,
        ...text.x,
        ...fonts.regular
    }
})
