import { combineReducers } from 'redux';

import locationReducer from './location/location';
import searchReducer from './search/search';
import { LocationState } from './location/types';
import { ThemeState } from './theme/types';

export interface RootState {
    location: LocationState;
    search: any;
    theme: ThemeState;
}

const rootReducer = combineReducers({
    location: locationReducer,
    search: searchReducer,
});

export default rootReducer;
