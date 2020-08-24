import React, { useRef } from "react"
import { Animated, Easing } from "react-native"
import Svg, { G, Path } from "react-native-svg"

function SvgOrbitIcon(props) {
    const rotateAnimation = useRef(new Animated.Value(0)).current
    props.animated &&
        Animated.loop(
            Animated.timing(rotateAnimation, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start()

    const spin = rotateAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    })
    return (
        <Animated.View
            style={{
                transform: [{ rotate: spin }],
            }}
        >
            <Svg width={80} height={80} {...props}>
                <G fill="none" fillRule="evenodd">
                    <Path
                        d="M60.203 40.648h-.028c-.58 11.708-10.287 21.055-22.137 21.055-12.222 0-22.166-9.943-22.166-22.165s9.944-22.165 22.166-22.165c1.537 0 3.038.158 4.488.457 1.357-5.27 5.01-9.618 9.827-11.917A36.417 36.417 0 0038.038 3C17.858 3 1.5 19.359 1.5 39.538c0 20.18 16.359 36.538 36.538 36.538 20.18 0 36.538-16.359 36.538-36.538 0-1.836-.14-3.639-.4-5.402-3.349 3.98-8.364 6.512-13.973 6.512"
                        fill="#FFBE06"
                    />
                    <Path
                        d="M42.526 17.83c10.078 2.08 17.677 11.023 17.677 21.708 0 .372-.01.742-.028 1.11h.028c5.609 0 10.624-2.531 13.972-6.512C72.287 21.4 63.828 10.806 52.353 5.913c-4.818 2.3-8.47 6.647-9.827 11.917"
                        fill="#FFBE06"
                    />

                    <Path
                        d="M73.927 34.425c-3.345 3.814-8.252 6.223-13.724 6.223h-.028l-.335-.004c-9.913-.193-17.89-8.29-17.89-18.249 0-1.576.2-3.106.576-4.565l.103-.384a18.298 18.298 0 019.724-11.533l.423-.195a18.185 18.185 0 017.427-1.576c10.081 0 18.253 8.172 18.253 18.253 0 4.472-1.61 8.567-4.28 11.741z"
                        fill="#FFF"
                    />
                </G>
            </Svg>
        </Animated.View>
    )
}

export default SvgOrbitIcon
