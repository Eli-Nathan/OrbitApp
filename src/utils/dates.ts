export const calcIsDay = (
    sun_rise: number,
    sun_set: number,
    now: Date
): boolean => {
    const unixNow = Math.floor(now.getTime() / 1000)
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
    return check >= rise && check < set
}

export const ordinalSuffix = (i: number) => {
    let j = i % 10,
        k = i % 100
    if (j == 1 && k != 11) {
        return i + "st"
    }
    if (j == 2 && k != 12) {
        return i + "nd"
    }
    if (j == 3 && k != 13) {
        return i + "rd"
    }
    return i + "th"
}
