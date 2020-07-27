import { combineReducers } from 'redux';

import locationReducer from './location/location';
import searchReducer from './search/search';
import { LocationState } from './location/types';

export interface RootState {
    location: LocationState;
    search: any;
}

const rootReducer = combineReducers({
    location: locationReducer,
    search: searchReducer,
});

export default rootReducer;
