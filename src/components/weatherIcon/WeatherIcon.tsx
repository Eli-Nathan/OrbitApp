import React, { FunctionComponent } from "react"
import { Image } from "react-native"

import { API } from "../../constants/api"

interface IconProps {
    code: string
    large?: boolean
}

const renderIcon: FunctionComponent<IconProps> = ({ code, large }) => {
    const size = large ? 200 : 60
    return (
        <Image
            source={{ uri: `${API.ICON}${code}@4x.png` }}
            style={{ width: size, height: size }}
        />
    )
}

export default renderIcon
