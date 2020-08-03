import { API } from '../../constants/api';
import { paramsAsQueryString, UrlParameters } from './paramsAsQueryString';

const generateApiUri = (api: string, params?: UrlParameters) => {
    return `${api}${paramsAsQueryString(params)}&appid=${API.KEY}`;
};

const apiFetch = (api: string, params: UrlParameters, options?: any) => {
    const fetchData = async (url: string, options: any) => {
        const res = await fetch(url, options);
        const json = await res.json();
        return json;
    };
    return fetchData(generateApiUri(api, params), options);
};

export default apiFetch;
