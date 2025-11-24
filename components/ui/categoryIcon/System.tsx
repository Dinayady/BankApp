import Svg, { Path, SvgProps } from 'react-native-svg';

import { Colors } from '@/constants/Style';

const SvgComponent = (props: SvgProps) => (
    <Svg width={17} height={20} viewBox="0 0 17 20" style={props.style}>
        <Path
            d="M8.33333 0.000189244L7.75467 0.558605C6.09377 2.16137 3.53848 2.38492 1.6245 1.09491L1.29908 0.875581L0 0V15.497L0.437375 15.7332L7.93733 19.7832L8.33325 19.997L8.33333 0.000189244Z"
            fill={props.fill ?? Colors.dark.mainIconColor}
        />
        <Path
            d="M8.33325 0.000189244L8.91192 0.558605C10.5728 2.16137 13.1281 2.38492 15.0421 1.09491L15.3675 0.875581L16.6666 0V15.497L16.2292 15.7332L8.72925 19.7832L8.33334 19.997L8.33325 0.000189244Z"
            fill={props.fill ?? Colors.dark.mainIconColor}
            opacity={0.2}
        />

    </Svg>
);

export default SvgComponent;