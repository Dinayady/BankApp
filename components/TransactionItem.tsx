import { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { formatDate } from '@/utils/formatDate';
import { formatNumber } from '@/utils/formatNumber';

import Dot from '@/components/ui/Dot';

import { Colors, fonts, text } from '@/constants/Style';

interface TransactionItemProps {
    info: any;
    date: any;
}

export const TransactionItem: FC<TransactionItemProps> = ({
    info,
    date
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {info.user.image ? (
                    <Image source={info.user.image} style={styles.image} />

                ) : (
                    <View style={styles.image} />
                )}

                <View style={styles.transactionType}>
                    <Text style={styles.name}>
                        {info.user.name}
                    </Text>
                    <View style={styles.categoryContainer}>
                        <Dot fill={info.categoryColor} />
                        <Text style={styles.category}>
                            {info.category}
                        </Text>
                    </View>

                </View>
            </View>
            <View style={styles.transactionInfo}>
                <Text style={styles.count}>
                    ${formatNumber(info.count)}
                </Text>
                <Text style={styles.date}>
                    {formatDate(date, 'short')}
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderRadius: 16,
        backgroundColor: Colors.dark.secondBackground,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    image: {
        width: 36,
        height: 36,
        backgroundColor: Colors.dark.accentMainColor,
        borderRadius: 12,
    },
    transactionType: {
        flexDirection: 'column',
        gap: 4,
    },
    transactionInfo: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 4,
    },
    categoryContainer: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center'
    },
    name: {
        color: Colors.dark.mainTextColor,
        ...fonts.medium,
        ...text.m,
    },
    count: {
        color: Colors.dark.mainTextColor,
        ...fonts.medium,
        ...text.m,
    },
    category: {
        color: Colors.dark.secondaryTextColor,
        ...fonts.regular,
        ...text.m,
    },
    date: {
        color: Colors.dark.secondaryTextColor,
        ...fonts.regular,
        ...text.m,
    },
})

