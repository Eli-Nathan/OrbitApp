import React, { createRef, FunctionComponent } from "react"
import { View, Dimensions } from "react-native"
import BottomSheet from "reanimated-bottom-sheet"

import { Row } from "../../primitives"
import WeeklyForecast from "../../components/weather/WeeklyForecast"
interface BottomDrawerProps {
    dailyWeather: any
    snapPoints?: number[]
}

const BottomDrawer: FunctionComponent<BottomDrawerProps> = ({
    dailyWeather,
    snapPoints,
}) => {
    let bottomSheetRef = createRef<BottomSheet>()
    const windowHeight = Dimensions.get("window").height
    const thirtyPercentHeight = (windowHeight / 100) * 30
    const seventyFivePercent = (windowHeight / 100) * 75
    const renderContent = () => {
        return (
            <View
                style={{
                    backgroundColor: "#fff",
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingBottom: 60,
                }}
            >
                <WeeklyForecast dailyWeather={dailyWeather} />
            </View>
        )
    }
    const renderHeader = () => {
        return (
            <Row
                style={{
                    backgroundColor: "#fff",
                    borderTopRightRadius: 16,
                    borderTopLeftRadius: 16,
                    justifyContent: "center",
                    padding: 12,
                    marginBottom: -2,
                }}
            >
                <View
                    style={{
                        backgroundColor: "#e5e5e5",
                        borderRadius: 50,
                        width: 40,
                        height: 6,
                    }}
                ></View>
            </Row>
        )
    }
    return (
        <View style={{ flex: 2 }}>
            <BottomSheet
                ref={bottomSheetRef}
                initialSnap={1}
                snapPoints={[650, 240]}
                renderContent={renderContent}
                renderHeader={renderHeader}
                enabledBottomInitialAnimation={true}
            />
        </View>
    )
}

export default BottomDrawer
