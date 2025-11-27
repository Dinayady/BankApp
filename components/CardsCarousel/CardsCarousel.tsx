import { StyleSheet, View } from 'react-native';

import { Card } from '@/types/cards';

import { AddCardButton } from './AddCardButton';
import { BankCard } from './BankCard';

export const CardsCarousel = () => {
    const debitCard: Card = {
        type: 'Debit',
        number: 4385,
        balance: 4098.12,
    }
    const virtualCard: Card = {
        type: 'Virtual',
        number: 9081,
        balance: 14.71,
    }

    const onClickButton = () => {
        // TODO: implementation of adding additional bank cards
    }

    return (
        <View style={styles.container}>
            <BankCard card={debitCard} />
            <BankCard card={virtualCard} />
            <AddCardButton onClick={onClickButton} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
})
