export const addLocation = (lat: number, lng: number) => ({
    type: 'ADD_LOCATION',
    lat,
    lng,
    fetching: false,
});

export const setFetching = () => ({
    type: 'SET_FETCHING',
    fetching: true,
});

export const setError = (error: string) => ({
    type: 'SET_ERROR',
    fetching: false,
    error: true,
});
