import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgStar(props) {
    return (
        <Svg width={80} height={80} {...props}>
            <Path
                d="M78.635 28.58a5.791 5.791 0 00-3.526-1.882v-.003l-21.263-2.937-8.414-20.104a5.775 5.775 0 00-10.658 0L26.36 23.758 5.096 26.695a5.791 5.791 0 00-3.054 10.06l16.02 14.284-3.291 22.416a5.714 5.714 0 002.651 5.75 5.695 5.695 0 006.312-.117l16.369-11.13L56.472 79.1a5.78 5.78 0 008.963-5.634l-3.292-22.424 16.02-14.285a5.79 5.79 0 00.472-8.176zM57.189 47.814a2.857 2.857 0 00-.923 2.549l3.429 23.998-17.978-12.222a2.857 2.857 0 00-3.211 0L20.422 74.286l3.517-23.935c.137-.947-.21-1.9-.923-2.537L5.873 32.364l22.88-3.158A2.857 2.857 0 0031 27.478l9.137-21.662c.01.013.018.028.023.043l9.043 21.607a2.857 2.857 0 002.246 1.729l22.909 3.297-17.169 15.321z"
                fill="#FFF"
                fillRule="nonzero"
            />
        </Svg>
    )
}

export default SvgStar
