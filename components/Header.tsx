import { useNavigation } from "expo-router";
import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Arrow from '@/components/ui/Arrow';
import Notifications from '@/components/ui/Notifications';

import { Colors, fonts, text } from "@/constants/Style";

interface HeaderProps {
    title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleBackPress}>
                <Arrow
                    width={9}
                    height={14}
                    strokeWidth={2}
                    style={{ transform: [{ rotate: '180deg' }] }}
                />
            </TouchableOpacity>
            <Text style={styles.title}>
                {title}
            </Text>
            <Notifications />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 16,
    },
    title: {
        color: Colors.dark.mainTextColor,
        ...text.xl,
        ...fonts.bold
    }
})
