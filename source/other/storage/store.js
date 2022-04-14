import StorageManager from './storage_manager'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'

import rootReducer from './root_reducer'

function startStore() {
	const initialState = {}

	const persistConfig = {
		key: 'root',
		storage: StorageManager,
		//blacklist: [asyncMetadataModule],
		timeout: false
	}

	const persistedReducer = persistReducer(persistConfig, rootReducer)

	// Always async middleware first
	const middleware = [
	]

	const middlewareStack = composeWithDevTools(applyMiddleware(...middleware))

	const store = createStore(persistedReducer, initialState, middlewareStack)
	const persistor = persistStore(store)

	return { store, persistor }
}

const { store, persistor } = startStore()

export { store as reduxStore }
export { persistor }
