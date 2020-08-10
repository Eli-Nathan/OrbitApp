import React from "react"
import { StyleSheet, View } from "react-native"

import { Column, Text } from "../../primitives"
import LocationHeader from "../locationHeader/locationHeader"
import useLiveClock from "../../hooks/useLiveClock"

interface LocaleProps {
    userLocation: any
    nightTheme: boolean
}

const Locale = (props: LocaleProps) => {
    const liveDate = useLiveClock()
    return (
        <>
            <Column style={styles.colStyle}>
                <View style={styles.linearGradient}>
                    <LocationHeader
                        location={props.userLocation.locationName}
                    />
                    <Text
                        style={{ ...styles.textCenter, ...styles.datetime }}
                        marginBottom={12}
                    >
                        {`${liveDate.format("HH:mm")} - ${liveDate.format(
                            "dddd"
                        )} ${liveDate.format("Do MMMM")}`}
                    </Text>
                </View>
            </Column>
        </>
    )
}

const styles: any = StyleSheet.create({
    colStyle: {
        flex: 1,
        textAlign: "center",
        alignItems: "center",
    },
    linearGradient: {
        width: "100%",
        borderRadius: 8,
        height: "100%",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        padding: 12,
    },
    textCenter: {
        textAlign: "center",
        color: "#fff",
    },
    datetime: {
        fontSize: 18,
    },
})

export default Locale
