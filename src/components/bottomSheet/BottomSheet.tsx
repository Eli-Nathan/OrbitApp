import React, { createRef, FunctionComponent } from "react"
import { View } from "react-native"
import BottomSheet from "reanimated-bottom-sheet"

import { Row } from "../../primitives"
import WeeklyForecast from "../../components/weather/WeeklyForecast"
interface BottomDrawerProps {
    dailyWeather: any
}

const BottomDrawer: FunctionComponent<BottomDrawerProps> = ({
    dailyWeather,
}) => {
    let bottomSheetRef = createRef<BottomSheet>()
    const renderContent = () => {
        return (
            <View
                style={{
                    backgroundColor: "#fff",
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingBottom: 50,
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
        <BottomSheet
            ref={bottomSheetRef}
            initialSnap={1}
            snapPoints={[550, 180]}
            renderContent={renderContent}
            renderHeader={renderHeader}
            enabledBottomInitialAnimation={true}
        />
    )
}

export default BottomDrawer
