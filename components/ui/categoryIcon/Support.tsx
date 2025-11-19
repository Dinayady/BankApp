import Svg, { Path, SvgProps } from 'react-native-svg';

import { Colors } from '@/constants/Style';


const SvgComponent = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 24 24" style={props.style}>
        <Path
            d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V16C18 18.4853 15.9853 20.5 13.5 20.5H13V19H11V24H13V22.5H13.5C17.0899 22.5 20 19.5898 20 16V8C20 3.58172 16.4183 0 12 0C7.58172 0 4 3.58172 4 8V17H6V8Z"
            fill={props.fill ?? Colors.dark.mainIconColor}
            fillRule='evenodd'
            clipRule='evenodd'
        />
        <Path
            d="M6 8H0V17H6V8Z"
            fill={props.fill ?? Colors.dark.mainIconColor}
            opacity={0.2}
            fillRule='evenodd'
            clipRule='evenodd'
        />
        <Path
            d="M24 8H18V17H24V8Z"
            fill={props.fill ?? Colors.dark.mainIconColor}
            opacity={0.2}
            fillRule='evenodd'
            clipRule='evenodd'
        />
    </Svg>
)

export default SvgComponent;