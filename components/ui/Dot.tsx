import Svg, { Circle, SvgProps } from 'react-native-svg';

import { Colors } from '@/constants/Style';

const SvgComponent = (props: SvgProps) => (
    <Svg width={6} height={6} viewBox="0 0 6 6" style={props.style}>
        <Circle
            cx={3}
            cy={3}
            r={3}
            fill={props.fill ?? Colors.dark.mainIconColor}
        />
    </Svg>
)

export default SvgComponent;