import Svg, { Path, SvgProps } from 'react-native-svg';

import { Colors } from '@/constants/Style';


const SvgComponent = (props: SvgProps) => (
    <Svg width={20} height={20} viewBox="0 0 20 20" style={props.style}>
        <Path
            d="M19.25 8.25L9.625 0L0 8.25V19.1628H19.25V8.25Z"
            fill={props.fill ?? Colors.dark.mainIconColor}
            fillRule='evenodd'
            clipRule='evenodd'
        />
    </Svg>
)

export default SvgComponent;