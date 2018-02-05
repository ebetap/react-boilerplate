// Put all reducers here
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postState from './redux/posts/reducers';

const rootReducer = combineReducers({
  postState,
  // redux-forms
  form: formReducer,
});

export default rootReducer;
