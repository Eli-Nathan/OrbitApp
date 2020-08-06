export const appendDegrees = (str: string): string => `${str}`

export const parseTemp = (temp: number): string => {
    return appendDegrees(`${Math.round(temp)}`)
}
