import { Tabs } from "expo-router";

import Analytics from '@/components/ui/navigationIcon/Analytics';
import Chats from '@/components/ui/navigationIcon/Chats';
import History from '@/components/ui/navigationIcon/History';
import Home from '@/components/ui/navigationIcon/Home';
import Payments from '@/components/ui/navigationIcon/Payments';

import { Colors } from "@/constants/Style";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.dark.mainBorderColor,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: Colors.dark.activeIconColor,
        tabBarInactiveTintColor: Colors.dark.mainIconColor,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home fill={color} />,
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: 'Payments',
          tabBarIcon: ({ color }) => <Payments fill={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => <History fill={color} />,
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: ({ color }) => <Analytics fill={color} />,
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: 'Chats',
          tabBarIcon: ({ color }) => <Chats fill={color} />,
        }}
      />
    </Tabs>
  );
}
