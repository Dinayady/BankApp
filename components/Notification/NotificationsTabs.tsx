import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, fonts, text } from '@/constants/Style';

interface NotificationsTabsProps {
    tabs: string[];
    activeTabs: number;
    setActiveTabs: any;
}

export const NotificationsTabs: FC<NotificationsTabsProps> = ({
    tabs,
    activeTabs,
    setActiveTabs,
}) => {

    return (
        <View style={styles.container}>
            {tabs.map((el, index) => (
                <Text
                    key={el}
                    onPress={() => setActiveTabs(index)}
                    style={[
                        styles.tabsTitle,
                        activeTabs === index && styles.activeTabsTitle
                    ]}
                >
                    {el}
                </Text>
            ))}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.dark.mainBorderColor,
    },
    tabsTitle: {
        padding: 12,
        color: Colors.dark.secondaryTextColor,
        ...text.m,
        ...fonts.regular
    },
    activeTabsTitle: {
        color: Colors.dark.accentMainColor,
        borderBottomColor: Colors.dark.accentMainColor,
        borderBottomWidth: 2,
    }
})
