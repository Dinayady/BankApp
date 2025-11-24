import { useMemo } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

import { Notifications } from "@/mockData/mockNotifications";
import { MOCK_TODAY } from "../TransactionsList";

import { groupTransactions } from "@/utils/groupTransactions";

import { NotificationItem } from "./NotificationItem";

import { Colors, fonts, text } from "@/constants/Style";

export const NotificationsList = () => {
  const sections = useMemo(() => {
    return groupTransactions(Notifications, MOCK_TODAY, true);
  }, [Notifications]);

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