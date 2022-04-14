import { combineReducers } from 'redux'

/* ====================================================== */
/*                    Custom Reducers                     */
/* ====================================================== */




/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

const appReducer = combineReducers({
/*
	// Demo API
	[customer]: customerReducer,

	// Metadata
	[asyncMetada]: asyncMetadaReducer */
})

const rootReducer = (state, action) => {
	/*if (action.type === LOG_OUT.SUCCESS) {
		// Reset whole store on logout
		return appReducer(undefined, action)
	}*/

	return appReducer(state, action)
}

export default rootReducer
