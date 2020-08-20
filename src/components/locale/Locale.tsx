import React from "react"
import { StyleSheet, View } from "react-native"

import { Column, Text } from "../../primitives"
import LocationHeader from "../locationHeader/locationHeader"
import useLiveClock from "../../hooks/useLiveClock"

interface LocaleProps {
    locationName: string
    nightTheme: boolean
}

const Locale = (props: LocaleProps) => {
    const liveDate = useLiveClock()
    return (
        <>
            <LocationHeader location={props.locationName} />
            <Text
                style={{ ...styles.textCenter, ...styles.datetime }}
                marginBottom={12}
            >
                {`${liveDate.format("HH:mm")} - ${liveDate.format(
                    "dddd"
                )} ${liveDate.format("Do MMMM")}`}
            </Text>
        </>
    )
}

const styles: any = StyleSheet.create({
    textCenter: {
        textAlign: "center",
        color: "#fff",
    },
    datetime: {
        fontSize: 18,
    },
})

export default Locale
