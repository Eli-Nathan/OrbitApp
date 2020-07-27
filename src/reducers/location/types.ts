export interface LocationState {
    lat?: number;
    lng?: number;
    fetching?: boolean;
    error?: string | null;
    woeid?: number | null;
    locationName?: string | null;
    nearby?: any;
}

export interface LocationStateAction {
    type: string;
    payload?: LocationState;
}
