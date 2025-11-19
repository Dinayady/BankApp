import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const scale = SCREEN_WIDTH / 375;

export function normalize(size: number) {
    return size;
}
