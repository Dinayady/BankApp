import { FC, useMemo } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

import { Transaction } from "@/types/cards";
import { groupTransactions } from "@/utils/groupTransactions";

import { TransactionItem } from "./TransactionItem";

import { Colors, fonts, text } from "@/constants/Style";

interface TransactionsListProps {
    data: Transaction[];
}

const MOCK_TODAY = "2025-03-12";

export const TransactionsList: FC<TransactionsListProps> = ({
    data,
}) => {
    const sections = useMemo(() => {
        return groupTransactions(data, MOCK_TODAY);
    }, [data]);

    return (
        <SectionList
            sections={sections}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <TransactionItem info={item.info} date={item.date} />
                </View>
            )}
            scrollEnabled={false}
            renderSectionHeader={({ section }) => (
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {section.title}
                    </Text>
                </View>
            )}
        />
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
    },
    itemContainer: {
        marginBottom: 8,
    },
    title: {
        paddingBottom: 10,
        color: Colors.dark.mainTextColor,
        ...text.md,
        ...fonts.medium
    }
})
