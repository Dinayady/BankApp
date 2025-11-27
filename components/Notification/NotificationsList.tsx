import { FC, useMemo } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

import { Notifications } from "@/mockData/mockNotifications";
import { MOCK_TODAY } from "../TransactionsList";

import { groupTransactions } from "@/utils/groupTransactions";

import { NotificationItem } from "./NotificationItem";

import { Colors, fonts, text } from "@/constants/Style";

const NOTIFICATION_TYPES = {
  All: 'All',
  Payments: 'Payments',
  System: 'System',
  Delivery: 'Delivery',
  Travel: 'Travel'
};

interface NotificationsListProps {
  activeTab: number;
}

export const NotificationsList: FC<NotificationsListProps> = ({ activeTab }) => {
  const filteredNotifications = useMemo(() => {
    if (activeTab === 0) {
      return Notifications;
    }

    const tabName = Object.keys(NOTIFICATION_TYPES)[activeTab];
    const notificationType = NOTIFICATION_TYPES[tabName as keyof typeof NOTIFICATION_TYPES];

    return Notifications.filter(notification =>
      notification.type === notificationType
    );
  }, [Notifications, activeTab]);

  const sections = useMemo(() => {
    return groupTransactions(filteredNotifications, MOCK_TODAY, true);
  }, [filteredNotifications]);

  return (
    <View>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        renderItem={({ item }) => (
          <NotificationItem
            data={item.info}
            type={item.type}
            date={item.date}
            isRead={item.isRead}
          />
        )}
        scrollEnabled={false}
        renderSectionHeader={({ section }) => (
          <View style={styles.containerTitle}>
            <Text style={styles.title}>
              {section.title}
            </Text>
          </View>
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  containerTitle: {
    paddingHorizontal: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.dark.mainBorderColor,
  },
  title: {
    color: Colors.dark.secondaryTextColor,
    ...text.s,
    ...fonts.bold,
  }
});