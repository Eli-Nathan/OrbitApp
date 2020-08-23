export const calcIsDay = (
    sun_rise: number,
    sun_set: number,
    now: Date
): boolean => {
    const unixNow = now.getTime() / 1000
    return unixNow >= sun_rise && unixNow < sun_set
}

export const calcIsDayRoughly = (
    sun_rise: number,
    sun_set: number,
    time: number
): boolean => {
    const rise = new Date(sun_rise * 1000).getHours()
    const set = new Date(sun_set * 1000).getHours()
    const check = new Date(time * 1000).getHours()
    console.log(`${rise} ${set} ${check}`)
    return check >= rise && check < set
}
