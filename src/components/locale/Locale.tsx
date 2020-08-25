import React from "react"
import { StyleSheet } from "react-native"
import { DateTime } from "luxon"

import { Text } from "../../primitives"
import LocationHeader from "../locationHeader/locationHeader"
import useLiveClock from "../../hooks/useLiveClock"
import { ordinalSuffix } from "../../utils/dates"

interface LocaleProps {
    locationName: string
    nightTheme: boolean
    timezone: string
}

const Locale = (props: LocaleProps) => {
    const liveDate: DateTime = useLiveClock(props.timezone)
    const time = liveDate.toLocaleString(DateTime.TIME_24_SIMPLE)
    const dayOfMonth = ordinalSuffix(liveDate.day)
    const dayOfWeek = liveDate.weekdayShort
    const month = liveDate.monthShort
    const date = `${dayOfWeek} ${dayOfMonth} ${month}`
    return (
        <>
            <LocationHeader location={props.locationName} />
            <Text
                style={{ ...styles.textCenter, ...styles.datetime }}
                marginBottom={12}
            >
                {`${time} - ${date}`}
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
