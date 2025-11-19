import { Text, View } from 'react-native';

import Arrow from '@/components/ui/Arrow';
import Qrcode from '@/components/ui/Qrcode';
import UserAvatar from '@/components/ui/UserAvatar';

import { Colors, fonts, text } from '@/constants/Style';

export const Header = () => {
    return (
        <View
            style={{
                backgroundColor: Colors.dark.mainBackground,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 16,
                paddingTop: 20,
                alignItems: 'center'
            }}
        >
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
            }}>
                <View style={{
                    backgroundColor: Colors.dark.secondBackground,
                    padding: 10,
                    width: 36,
                    height: 36,
                    borderRadius: 36,
                }}>
                    <UserAvatar />
                </View>
                <View style={{
                    flexDirection: 'row',
                    gap: 8,
                    alignItems: 'center',
                }}>
                    <Text style={{
                        color: Colors.dark.mainTextColor,
                        ...fonts.medium,
                        ...text.md
                    }}>
                        Charlotte
                    </Text>
                    <Arrow />
                </View>
            </View>
            <Qrcode />
        </View>
    )
}
