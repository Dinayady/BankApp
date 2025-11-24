import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Transactions } from "@/mockData/mockTransactions";

import { CardsCarousel } from "@/components/CardsCarousel/CardsCarousel";
import { CategoryTabs } from "@/components/CategoryTabs";
import { ExpensesSummary } from "@/components/ExpensesSummary";
import { TransactionsList } from "@/components/TransactionsList";
import { UserHeader } from "@/components/UserHeader";

import { Colors } from "@/constants/Style";

export default function Index() {

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.dark.mainBackground,
      }}
    >
      <UserHeader />
      <ScrollView>
        <View style={{ paddingVertical: 24 }}>
          <CategoryTabs />
        </View>
        <View style={{ paddingHorizontal: 16, gap: 24 }}>
          <CardsCarousel />
          <ExpensesSummary
            balance={5091}
            month="June"
          />
          <TransactionsList data={Transactions} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
