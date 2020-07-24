import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgHc(props: any) {
    return (
        <Svg width={17} height={17} {...props}>
            <Path
                d="M118.051 152H53.183C33.2 152 17 135.64 17 115.46c0-20.181 16.2-36.541 36.183-36.541 6.03 0 11.717 1.49 16.717 4.125C76.862 62.65 96.033 48 118.592 48c28.438 0 51.491 23.281 51.491 52 0 .589-.01 1.175-.029 1.759A26.735 26.735 0 01184 125.297C184 140.045 172.162 152 157.558 152h-39.506.54-.54z"
                fill="#000"
                fillRule="evenodd"
                fillOpacity={0.6}
            />
        </Svg>
    );
}

export default SvgHc;
