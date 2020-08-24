import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgIconSearch(props) {
    return (
        <Svg width={160} height={160} {...props}>
            <Path
                d="M49 74.609C49 60.488 60.488 49 74.609 49c14.121 0 25.61 11.488 25.61 25.609 0 14.121-11.489 25.609-25.61 25.609C60.488 100.218 49 88.73 49 74.609m68.098 36.832L101.019 95.36c4.502-5.719 7.2-12.924 7.2-20.751C108.219 56.077 93.142 41 74.609 41 56.077 41 41 56.077 41 74.609c0 18.532 15.077 33.609 33.609 33.609 7.828 0 15.033-2.697 20.751-7.2l16.08 16.08a3.99 3.99 0 002.83 1.171 4 4 0 002.828-6.828"
                fill="#6F89A9"
                fillRule="evenodd"
            />
        </Svg>
    )
}

export default SvgIconSearch
