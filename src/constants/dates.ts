export const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

export const calculateNextSevenDays = () => {
    const currentDay = new Date().getDay()
    const daysBeforeToday = weekdays.slice(0, currentDay)
    const daysAfterToday = weekdays.slice(currentDay + 1, 7)
    return [...daysAfterToday, ...daysBeforeToday, weekdays[currentDay]]
}
