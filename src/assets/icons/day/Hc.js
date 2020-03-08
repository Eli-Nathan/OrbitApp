import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHc(props: any) {
    return (
        <Svg width={200} height={200} {...props}>
            <Path
                d="M117.395 152.333H52.306C32.255 152.333 16 136.078 16 116.027s16.255-36.306 36.306-36.306a36.15 36.15 0 0116.773 4.098C76.065 63.556 95.301 49 117.937 49c28.535 0 51.667 23.132 51.667 51.667 0 .584-.01 1.167-.03 1.747 8.33 4.475 13.994 13.27 13.994 23.388 0 14.653-11.879 26.531-26.532 26.531h-39.641.542-.542z"
                fill="#FFF"
                fillRule="evenodd"
            />
        </Svg>
    );
}

export default SvgHc;
