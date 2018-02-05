// Put all reducers here
import { combineReducers } from 'redux';
import postState from './redux/posts/reducers';

const rootReducer = combineReducers({
  postState,
});

export default rootReducer;
