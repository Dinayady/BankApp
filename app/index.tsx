import { ScrollView, View } from "react-native";

import { CardsCarousel } from "@/components/CardsCarousel/CardsCarousel";
import { CategoryTabs } from "@/components/CategoryTabs";
import { ExpensesSummary } from "@/components/ExpensesSummary";
import { Header } from "@/components/Header";

import { TransactionsList } from "@/components/TransactionsList";
import { Colors } from "@/constants/Style";
import { Transactions } from "@/mockData/mockTransactions";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.dark.mainBackground,
      }}
    >
      <Header />
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
