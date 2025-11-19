import { FC } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { Card } from '@/types/cards';

import CardIcon from '@/components/ui/Card';

import { Colors, fonts, text } from '@/constants/Style';
import { formatNumber } from '@/utils/formatNumber';

interface BankCardProps {
    card: Card;
}

export const BankCard: FC<BankCardProps> = ({
    card
}) => {
    return (
        <ImageBackground
            source={require('@/assets/images/card-background.jpg')}
            style={[
                styles.container,
                card.type === 'Virtual' && styles.grayImage
            ]}
            imageStyle={styles.imageStyle}
            resizeMode="cover"
        >
            <CardIcon />
            <Text style={styles.balance}>
                {formatNumber(card.balance)}
            </Text>
            <View style={styles.infoContainer}>
                <Text style={styles.type}>
                    {card.type}
                </Text>
                <Text style={styles.number}>
                    •• {card.number}
                </Text>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 98,
        width: 142,
        flexDirection: 'column',
        gap: 6,
        padding: 12,
    },
    imageStyle: {
        borderRadius: 16,
    },
    grayImage: {
        filter: 'saturate(0%)',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    balance: {
        marginTop: 6,
        color: Colors.dark.mainTextColor,
        ...fonts.bold,
        ...text.x,
    },
    type: {
        color: Colors.dark.mainTextColor,
        ...fonts.regular,
        ...text.m
    },
    number: {
        color: Colors.dark.mainTextColor,
        ...fonts.regular,
        ...text.m
    }
})
