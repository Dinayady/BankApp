import { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { formatDate } from "@/utils/formatDate";
import { formatNumber } from "@/utils/formatNumber";

import Dot from '@/components/ui/Dot';
import Delivery from '@/components/ui/categoryIcon/Delivery';
import Payments from '@/components/ui/categoryIcon/Payments';
import System from '@/components/ui/categoryIcon/System';
import Travel from '@/components/ui/categoryIcon/Travel';

import { Colors, fonts, text } from "@/constants/Style";

interface NotificationItemProps {
    type: 'Payments' | 'System' | 'Delivery' | 'Travel';
    data: any;
    date: string;
    isRead?: boolean;
}

export const NotificationItem: FC<NotificationItemProps> = ({
    type,
    data,
    date,
    isRead = false
}) => {
    const renderIcon = () => {
        if (data.user?.image) {
            return <Image source={data.user.image} style={styles.image} />;
        }
        switch (type) {
            case 'Payments':
                if (data.type === 'Received') {
                    return (
                        <View style={[styles.image, styles.iconContainer]}>
                            <Payments
                                fill={Colors.dark.accentMainColor}
                                style={{ transform: [{ rotate: '90deg' }] }}
                            />
                        </View>
                    );
                } else {
                    return (
                        <View style={[styles.image, styles.iconContainer]}>
                            <Payments fill={Colors.dark.accentMainColor} />
                        </View>
                    );
                }
            case 'System':
                return (
                    <View style={[styles.image, styles.iconContainer]}>
                        <System fill={Colors.dark.accentMainColor} />
                    </View>
                );
            case 'Delivery':
                return (
                    <View style={[styles.image, styles.iconContainer]}>
                        <Delivery fill={Colors.dark.accentMainColor} />
                    </View>
                );
            case 'Travel':
                return (
                    <View style={[styles.image, styles.iconContainer]}>
                        <Travel fill={Colors.dark.accentMainColor} />
                    </View>
                );
            default:
                return <View style={styles.image} />;
        }
    };

    return (
        <View style={styles.container}>
            {renderIcon()}
            <View style={styles.content}>
                {type === 'Payments' ? (
                    data.user ? (
                        data.type === 'Received' ? (
                            <View style={styles.paymentsContainer}>
                                <Text style={styles.title}>Received from {data.user.name}</Text>
                                <Text style={styles.count}>+$ {formatNumber(data.count)}</Text>
                            </View>
                        ) : (
                            <View style={styles.paymentsContainer}>
                                <Text style={styles.title}>Sent to {data.user.name}</Text>
                                <Text style={styles.count}>-${formatNumber(data.count)}</Text>
                            </View>
                        )
                    ) : (
                        <Text style={styles.title}>{data.title}</Text>
                    )
                ) : (
                    <Text style={styles.title}>{data.title}</Text>
                )}
                {
                    type === 'Payments' ? (
                        <View style={{ gap: 4 }}>
                            <Text style={styles.info}>Debit •• {data.card}</Text>
                            <Text style={styles.info}>$4,098.12</Text>
                        </View>
                    ) : (
                        <Text style={styles.info}>
                            {data.subtitle}
                        </Text>
                    )
                }
                <Text style={styles.date}>{formatDate(date, 'long')} · {type}</Text>
            </View>
            {isRead && (
                <Dot fill={Colors.dark.accentMainColor} />
            )}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 12,
        padding: 16,
    },
    content: {
        flexDirection: 'column',
        gap: 6,
        width: '80%'
    },
    image: {
        width: 42,
        height: 42,
        backgroundColor: Colors.dark.secondBackground,
        borderRadius: 16,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    paymentsContainer: {
        flexDirection: 'column',
        gap: 4,
    },
    title: {
        color: Colors.dark.mainTextColor,
        ...text.m,
        ...fonts.medium
    },
    count: {
        color: Colors.dark.accentMainColor,
        ...text.xl,
        ...fonts.bold
    },
    info: {
        color: Colors.dark.secondaryTextColor,
        ...text.m,
        ...fonts.regular,
    },
    date: {
        color: Colors.dark.tertiaryTextColor,
        ...text.s,
        ...fonts.regular
    },
})