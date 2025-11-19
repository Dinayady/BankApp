import { FC, ReactNode } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

import { Colors, fonts, text } from "@/constants/Style";

interface SegmentedTabProps {
    icon: ReactNode;
    title: string;
}

export const SegmentedTab: FC<SegmentedTabProps> = ({
    icon,
    title
}) => {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                {icon}
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        color: Colors.dark.mainTextColor,
        ...text.m,
        ...fonts.medium,
    }
})
