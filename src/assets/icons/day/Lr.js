import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgLr(props: any) {
    return (
        <Svg width={200} height={200} {...props}>
            <G fill="none" fillRule="evenodd">
                <Path
                    d="M115.053 109.567H60.598c-16.776 0-30.375-13.604-30.375-30.386 0-16.78 13.6-30.385 30.375-30.385 5.062 0 9.835 1.24 14.033 3.43 5.844-16.958 21.938-29.14 40.876-29.14 23.873 0 43.226 19.36 43.226 43.24 0 .49-.008.977-.025 1.463 6.97 3.745 11.707 11.105 11.707 19.573 0 12.263-9.938 22.205-22.197 22.205h-33.165.454-.454z"
                    fill="#FFF"
                />
                <Path
                    d="M100.54 116.043l.16.038a2.506 2.506 0 011.776 3.07l-15.377 57.405a2.51 2.51 0 01-2.912 1.809l-.16-.038a2.506 2.506 0 01-1.777-3.07l15.377-57.405a2.51 2.51 0 012.912-1.809zm13.179-.216l.16.038a2.51 2.51 0 011.776 3.071l-7.148 26.685a2.51 2.51 0 01-2.912 1.809l-.16-.038a2.51 2.51 0 01-1.776-3.071l7.147-26.684a2.51 2.51 0 012.913-1.81zm-28.4-.162l.16.037a2.51 2.51 0 011.777 3.071l-7.148 26.685a2.51 2.51 0 01-2.913 1.809l-.16-.038a2.51 2.51 0 01-1.776-3.071l7.148-26.684a2.51 2.51 0 012.912-1.81zm42.78-.106l.16.037a2.51 2.51 0 011.777 3.068l-4.118 15.374a2.507 2.507 0 01-2.911 1.805l-.16-.037a2.51 2.51 0 01-1.778-3.068l4.119-15.374a2.507 2.507 0 012.911-1.805z"
                    fill="#ADE8FF"
                />
            </G>
        </Svg>
    );
}

export default SvgLr;
