import { normalize } from "@/utils/fontNormalize";
import { StyleSheet } from "react-native";

export const Colors = {
    light: {


    },
    dark: {
        mainBackground: '#060503',
        secondBackground: '#0F0F0F',

        mainButton: '#AEAEAE',
        activeButton: '#FE5900',

        mainBorderColor: '#1F1F1F',

        mainTextColor: '#FFFFFF',
        secondaryTextColor: '#AEAEAE',
        tertiaryTextColor: '#616161',

        mainIconColor: '#FFFFFF',
        activeIconColor: '#FE5900',

        accentMainColor: '#FE5900',
        accentSecondaryColor: '#FF9332',
        accentTertiaryColor: '#CC3F02',
        accentQuaternaryColor: '#FFD8A5',
    },
};

export const fonts = StyleSheet.create({
    regular: {
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
    },
    medium: {
        fontFamily: 'Inter-Medium',
        fontWeight: '500',
    },
    bold: {
        fontFamily: 'Inter-SemiBold',
        fontWeight: '600',
    },
})

export const text = StyleSheet.create({
    xl: {
        fontSize: normalize(21),
        lineHeight: normalize(21),
    },
    x: {
        fontSize: normalize(18),
        lineHeight: normalize(18),
    },
    md: {
        fontSize: normalize(16),
        lineHeight: normalize(16),
    },
    m: {
        fontSize: normalize(14),
        lineHeight: normalize(14),
    },
    s: {
        fontSize: normalize(12),
        lineHeight: normalize(12),
    },
});
