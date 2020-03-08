import * as React from 'react';
import Svg, {G, Ellipse, Path} from 'react-native-svg';

function SvgH(props: any) {
    return (
        <Svg width={200} height={200} {...props}>
            <G fill="none" fillRule="evenodd">
                <G fill="#ADE8FF">
                    <Ellipse
                        cx={7.147}
                        cy={7.146}
                        rx={7.147}
                        ry={7.146}
                        transform="translate(60.562 117.655)"
                    />
                    <Ellipse
                        cx={7.147}
                        cy={7.146}
                        rx={7.147}
                        ry={7.146}
                        transform="translate(78.219 142.035)"
                    />
                    <Ellipse
                        cx={7.147}
                        cy={7.146}
                        rx={7.147}
                        ry={7.146}
                        transform="translate(95.876 117.655)"
                    />
                    <Ellipse
                        cx={7.147}
                        cy={7.146}
                        rx={7.147}
                        ry={7.146}
                        transform="translate(131.19 117.655)"
                    />
                    <Ellipse
                        cx={7.147}
                        cy={7.146}
                        rx={7.147}
                        ry={7.146}
                        transform="translate(113.532 142.035)"
                    />
                    <Ellipse
                        cx={7.147}
                        cy={7.146}
                        rx={7.147}
                        ry={7.146}
                        transform="translate(95.876 166.416)"
                    />
                </G>
                <Path
                    d="M115.546 111.21H60.82c-16.86 0-30.526-13.666-30.526-30.524 0-16.857 13.667-30.523 30.526-30.523 5.087 0 9.884 1.245 14.102 3.446 5.874-17.035 22.048-29.273 41.08-29.273 23.992 0 43.44 19.448 43.44 43.437 0 .492-.007.981-.024 1.469 7.004 3.762 11.766 11.156 11.766 19.662 0 12.319-9.988 22.305-22.308 22.305H115.546h.456-.456z"
                    fill="#FFF"
                />
                <Path
                    d="M54.686 34.777c0 17.979 14.576 32.554 32.558 32.554a32.76 32.76 0 005.75-.506c-5.84 7.41-14.842 12.157-24.942 12.157-17.603 0-31.873-14.421-31.873-32.212 0-15.39 10.68-28.26 24.96-31.452a32.409 32.409 0 00-6.453 19.459z"
                    fill="#000"
                    fillOpacity={0.6}
                />
            </G>
        </Svg>
    );
}

export default SvgH;
