export type UrlParameters =
    | Record<string, string | number | boolean | number[] | string[]>
    | undefined;

export type ParamsAsQueryString = (params?: UrlParameters) => string;

export const paramsAsQueryString: ParamsAsQueryString = params => {
    if (params) {
        return Object.keys(params)
            .map(key => {
                const val = params[key];
                return `${key}=${val}`;
            })
            .join('&');
    } else {
        return '';
    }
};
