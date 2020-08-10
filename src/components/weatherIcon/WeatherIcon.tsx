import React, { FunctionComponent } from "react"
import { Image } from "react-native"

import { API } from "../../constants/api"

interface IconProps {
    code: string
}

const renderIcon: FunctionComponent<IconProps> = ({ code }) => (
    <Image
        source={{ uri: `${API.ICON}${code}@4x.png` }}
        style={{ width: 225, height: 225 }}
    />
)

export default renderIcon
