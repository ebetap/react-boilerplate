import reducers from '../../../shared/root-reducers';
import configureStore from '../../../shared/configure-store';

export default function getStore() {
  const store = configureStore(null, reducers);
  return store;
}
