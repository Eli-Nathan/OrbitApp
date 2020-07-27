export interface LocationState {
    lat: number;
    lng: number;
    fetching: boolean;
    error: string | null;
}

export interface LocationStateAction {
    type: string;
    lat?: number;
    lng?: number;
    fetching?: boolean;
    error?: string | null;
}
