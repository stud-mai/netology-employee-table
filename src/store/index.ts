/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, Store } from 'redux';

import rootReducer from './reducer';


export type AppState = ReturnType<typeof rootReducer>;

type ReduxStore = Store<AppState>

export default function(): ReduxStore {
	const store: ReduxStore = createStore(
		rootReducer,
		(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
	);

	if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
		(module as any).hot.accept('./reducer', () => store.replaceReducer(rootReducer));
	}

	return store;
}