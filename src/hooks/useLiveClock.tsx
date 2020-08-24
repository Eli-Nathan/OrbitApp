import { useState, useEffect } from "react"
import { DateTime, IANAZone } from "luxon"

const zonedDate = (date: Date, timezone: string) => {
    return DateTime.fromISO(date.toISOString()).setZone(
        IANAZone.create(timezone)
    )
}

const useLiveClock = (timezone: string) => {
    console.log(timezone)
    const date = new Date()
    const zoned = zonedDate(date, timezone)
    const [liveDate, setLiveDate] = useState(zoned)
    const timerID = setInterval(() => tick(), 5000)
    const tick = () => {
        const dateTick = new Date()
        const zonedTick = zonedDate(dateTick, timezone)
        setLiveDate(zonedTick)
    }

    useEffect(() => () => clearInterval(timerID))
    return liveDate
}

export default useLiveClock
