import React from "react"
import { StyleSheet } from "react-native"
import { DateTime } from "luxon"

import { Text } from "../../primitives"
import LocationHeader from "../locationHeader/locationHeader"
import useLiveClock from "../../hooks/useLiveClock"

interface LocaleProps {
    locationName: string
    nightTheme: boolean
    timezone: string
}

const Locale = (props: LocaleProps) => {
    const liveDate: DateTime = useLiveClock(props.timezone)
    return (
        <>
            <LocationHeader location={props.locationName} />
            <Text
                style={{ ...styles.textCenter, ...styles.datetime }}
                marginBottom={12}
            >
                {`${liveDate.toLocaleString(DateTime.DATETIME_FULL)} - `}
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
