import Svg, { Path, SvgProps } from 'react-native-svg';

import { Colors } from '@/constants/Style';


const SvgComponent = (props: SvgProps) => (
    <Svg width={18} height={17} viewBox="0 0 18 17" style={props.style}>
        <Path
            d="M0 13.9596H4.89131V17L8.86028 13.9596H18V0H2.43168L3.51519e-06 0L0 13.9596ZM8.07765 7.16485L6.73603 5.8958L5.33852 7.21772L6.68013 8.46033L8.0497 9.78226L9.44721 8.48677L12.6335 5.49922L11.264 4.17729L8.07765 7.16485Z"
            fill={props.fill ?? Colors.dark.mainIconColor}
            fillRule='evenodd'
            clipRule='evenodd'
        />
    </Svg>
)

export default SvgComponent;