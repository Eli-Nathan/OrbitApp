export const calcIsDay = (
    sun_rise: number,
    sun_set: number,
    now: Date
): boolean => {
    const unixNow = now.getTime() / 1000
    console.log("isDay", unixNow >= sun_rise && unixNow < sun_set)
    return unixNow >= sun_rise && unixNow < sun_set
}
