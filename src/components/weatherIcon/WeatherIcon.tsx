import React, { FunctionComponent } from "react"

import * as icons from "../../assets/icons"

interface IconProps {
    code: string
    large?: boolean
    small?: boolean
    size?: number
    isCurrent?: boolean
}

const renderIcon: FunctionComponent<IconProps> = ({
    code,
    large,
    small,
    size,
    isCurrent,
}) => {
    const defaultSize = 60
    const largeSize = 200
    const smallSize = 40
    const dimensions = large
        ? largeSize
        : small
        ? smallSize
        : size || defaultSize
    const mappedIcon = icons.iconMap[code]
    const WeatherIcon = icons[mappedIcon]
    return (
        <WeatherIcon
            width={dimensions}
            height={dimensions}
            viewBox={`0 0 ${size || 170} ${size || 170}`}
            isCurrent={isCurrent}
        />
    )
}

export default renderIcon
