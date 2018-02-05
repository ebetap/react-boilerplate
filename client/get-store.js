import reducers from '../shared/root-reducers';
import configureStore from '../shared/configure-store';

export default function getStore() {
  const appState = window.__APP_STATE__;
  const store = configureStore(appState, reducers);
  return store;
}
