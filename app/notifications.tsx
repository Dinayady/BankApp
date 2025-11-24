import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "@/components/Header";
import { NotificationsList } from "@/components/Notification/NotificationsList";
import { NotificationsTabs } from "@/components/Notification/NotificationsTabs";

import { Colors } from "@/constants/Style";

const TABS = ['All', 'Payments', 'System', 'Delivery', 'Travel'];

export default function Notifications() {
    const [activeTabs, setActiveTabs] = useState<number>(0);

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Notifications" />
            <NotificationsTabs
                tabs={TABS}
                activeTabs={activeTabs}
                setActiveTabs={setActiveTabs}
            />
            <ScrollView>
                <NotificationsList />
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.mainBackground,
        flex: 1,
    }
})