export const calcDayNight = (
    sun_rise: string,
    sun_set: string,
    now: Date,
): boolean => {
    // Index of full stop char in sun rise str
    const n: number = sun_rise.indexOf('.');
    // Date from substring
    const sunRise: Date = new Date(
        sun_rise.substring(0, n !== -1 ? n : sun_rise.length),
    );

    // Index of full stop char in sun set str
    const i = sun_set.indexOf('.');
    // Date from substring
    const sunSet: Date = new Date(
        sun_set.substring(0, i !== -1 ? i : sun_set.length),
    );
    return now >= sunRise && now < sunSet;
};
