import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgMist(props) {
    return (
        <Svg width={160} height={160} {...props}>
            <G fill="#6F89A9" fillRule="evenodd">
                <Path d="M126.564 75H24a4 4 0 010-8h102.563a4 4 0 010 8M50.533 59H30.236a4 4 0 010-8h20.297a4 4 0 010 8M135.965 59H69.77a4 4 0 010-8h66.194a4 4 0 010 8M135.965 92.269H33.402a4 4 0 010-8h102.563a4 4 0 010 8M129.748 108.269h-20.297a4 4 0 010-8h20.297a4 4 0 010 8M90.214 108.269H24.02a4 4 0 010-8h66.194a4 4 0 010 8" />
            </G>
        </Svg>
    )
}

export default SvgMist
