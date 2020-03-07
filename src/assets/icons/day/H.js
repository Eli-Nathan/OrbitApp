import * as React from 'react';
import Svg, {G, Ellipse, Path} from 'react-native-svg';

function SvgH(props) {
    return (
        <Svg width={200} height={200} {...props}>
            <G fill="none" fillRule="evenodd">
                <G fill="#ADE8FF">
                    <Ellipse
                        cx={7.147}
                        cy={7.146}
                        rx={7.147}
                        ry={7.146}
                        transform="translate(60.562 115.133)"
                    />
                    <Ellipse
                        cx={7.147}
                        cy={7.146}
                        rx={7.147}
                        ry={7.146}
                        transform="translate(78.219 139.513)"
                    />
                    <Ellipse
                        cx={7.147}
                        cy={7.146}
                        rx={7.147}
                        ry={7.146}
                        transform="translate(95.876 115.133)"
                    />
                    <Ellipse
                        cx={7.147}
                        cy={7.146}
                        rx={7.147}
                        ry={7.146}
                        transform="translate(131.19 115.133)"
                    />
                    <Ellipse
                        cx={7.147}
                        cy={7.146}
                        rx={7.147}
                        ry={7.146}
                        transform="translate(113.532 139.513)"
                    />
                    <Ellipse
                        cx={7.147}
                        cy={7.146}
                        rx={7.147}
                        ry={7.146}
                        transform="translate(95.876 163.894)"
                    />
                </G>
                <Path
                    d="M115.546 108.687H60.82c-16.86 0-30.526-13.665-30.526-30.523 0-16.857 13.667-30.523 30.526-30.523 5.087 0 9.884 1.245 14.102 3.446 5.874-17.035 22.048-29.273 41.08-29.273 23.992 0 43.44 19.447 43.44 43.437 0 .491-.007.981-.024 1.469 7.004 3.762 11.766 11.156 11.766 19.662 0 12.319-9.988 22.305-22.308 22.305H115.546h.456-.456z"
                    fill="#FFF"
                />
            </G>
        </Svg>
    );
}

export default SvgH;
