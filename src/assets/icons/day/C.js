import * as React from 'react';
import Svg, { G, Ellipse } from 'react-native-svg';

function SvgC(props: any) {
    return (
        <Svg width={17} height={17} {...props}>
            <G
                transform="translate(17.717 17.985)"
                fill="none"
                fillRule="evenodd">
                <Ellipse
                    strokeOpacity={0.2}
                    stroke="#FFF308"
                    strokeWidth={2.759}
                    cx={82.783}
                    cy={82.976}
                    rx={81.403}
                    ry={81.596}
                />
                <Ellipse
                    strokeOpacity={0.6}
                    stroke="#FFF308"
                    strokeWidth={3.679}
                    cx={82.323}
                    cy={82.515}
                    rx={71.285}
                    ry={71.455}
                />
                <Ellipse
                    fill="#FFEC65"
                    cx={82.323}
                    cy={82.515}
                    rx={62.087}
                    ry={62.232}
                />
            </G>
        </Svg>
    );
}

export default SvgC;
