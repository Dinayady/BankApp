import Svg, { Path, SvgProps } from 'react-native-svg';

import { Colors } from '@/constants/Style';


const SvgComponent = (props: SvgProps) => (
    <Svg width={20} height={20} viewBox="0 0 20 20" style={props.style}>
        <Path
            d="M9.16498 0C6.73431 0 4.40314 0.965775 2.68437 2.68486C0.965593 4.40394 0 6.73556 0 9.16664C0 11.5978 0.965593 13.9294 2.68437 15.6485C4.40314 17.3676 6.73431 18.3333 9.16498 18.3333C11.5957 18.3333 13.9269 17.3676 15.6456 15.6485C17.3644 13.9294 18.33 11.5978 18.33 9.16664C18.33 6.73556 17.3644 4.40394 15.6456 2.68486C13.9269 0.965775 11.5957 0 9.16498 0ZM8.3318 4.16681V10.0001H12.4977V8.33348H9.99816V4.16681H8.3318Z"
            fill={props.fill ?? Colors.dark.mainIconColor}
            fillRule='evenodd'
            clipRule='evenodd'
        />
    </Svg>
)

export default SvgComponent;