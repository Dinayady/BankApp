import { StyleSheet, View } from 'react-native';

import { SegmentedTab } from './SegmentedTab';

import Bonuses from '@/components/ui/categoryIcon/Bonuses';
import Deliver from '@/components/ui/categoryIcon/Delivery';
import Support from '@/components/ui/categoryIcon/Support';
import Travel from '@/components/ui/categoryIcon/Travel';

import { Colors } from '@/constants/Style';

export const CategoryTabs = () => {
    return (
        <View style={styles.container}>
            <SegmentedTab
                icon={<Travel fill={Colors.dark.activeIconColor} />}
                title='Travel'
            />
            <SegmentedTab
                icon={<Deliver fill={Colors.dark.activeIconColor} />}
                title='Deliver'
            />
            <SegmentedTab
                icon={<Bonuses fill={Colors.dark.activeIconColor} />}
                title='Bonuses'
            />
            <SegmentedTab
                icon={<Support fill={Colors.dark.activeIconColor} />}
                title='Support'
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
})
