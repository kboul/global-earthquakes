import { createStore, compose } from 'redux';
import rootReducer from '../store/reducers';

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export type AppState = ReturnType<typeof rootReducer>;

export default store;
