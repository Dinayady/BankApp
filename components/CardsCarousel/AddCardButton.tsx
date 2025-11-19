import { StyleSheet, View } from 'react-native';

import Plus from '@/components/ui/Plus';

import { Colors } from '@/constants/Style';

export const AddCardButton = () => {
    return (
        <View style={styles.container}>
            <Plus />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.secondBackground,
        width: 40,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
})