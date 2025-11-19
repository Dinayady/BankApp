import { FC } from "react";
import { StyleSheet, View } from "react-native";

import { Colors } from "@/constants/Style";

interface MultiSegmentProgressBarProps {
    progress: number[];
}

export const MultiSegmentProgressBar: FC<MultiSegmentProgressBarProps> = ({
    progress
}) => {
    const total = progress.sort((a, b) => b - a).reduce((sum, value) => sum + value, 0);
    const colors = [
        Colors.dark.accentTertiaryColor,
        Colors.dark.accentMainColor,
        Colors.dark.accentSecondaryColor,
        Colors.dark.accentQuaternaryColor
    ];

    return (
        <View style={styles.container}>
            {progress.map((value, index) => {
                const percentage = total > 0 ? (value / total) * 100 : 0;

                return (
                    <View
                        key={index}
                        style={[
                            styles.segment,
                            {
                                width: `${percentage}%`,
                                backgroundColor: colors[index % colors.length]
                            }
                        ]}
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 2,
        height: 8,
        width: '100%',
    },
    segment: {
        borderRadius: 4,
    },
});
