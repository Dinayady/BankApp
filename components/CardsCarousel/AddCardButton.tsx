import { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Plus from '@/components/ui/Plus';

import { Colors } from '@/constants/Style';

interface AddCardButtonProps {
    onClick: () => void;
}

export const AddCardButton: FC<AddCardButtonProps> = ({ onClick }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onClick}>
            <Plus />
        </TouchableOpacity>
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