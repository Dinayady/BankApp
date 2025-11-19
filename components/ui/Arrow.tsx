import Svg, { Path, SvgProps } from 'react-native-svg';

import { Colors } from '@/constants/Style';


const SvgComponent = (props: SvgProps) => (
    <Svg width={6} height={10} viewBox="0 0 6 10" style={props.style}>
        <Path
            d="M0.530334 0.530327L4.53033 4.53033L0.530334 8.53033"
            fill={props.fill ?? Colors.dark.mainIconColor}
            strokeWidth={1.5}
        />
    </Svg>
)

export default SvgComponent;