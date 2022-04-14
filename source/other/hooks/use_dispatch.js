import React from 'react'
import _ from 'lodash'

import { useDispatch as useReduxDispatch } from 'react-redux'

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

const DEFAULT_ALIAS = '_no_alias_'

function reducer(state = {}, { type, payload = {}, meta }) {
	const isRequest = _.includes(type, 'REQUEST')
	const isSuccess = _.includes(type, 'SUCCESS')
	const isFailure = _.includes(type, 'FAILURE')

	const alias = _.get(meta, 'alias', DEFAULT_ALIAS)
	const typeName = _.get(meta, 'actionName')

	if (isRequest) {
		return {
			...state,
			[typeName]: {
				...state[typeName],
				[alias]: {
					isLoading: true,
					isSuccessful: false,
					isFailed: false,
					isFinished: false,
					data: undefined,
					error: undefined
				}
			}
		}
	}

	if (isSuccess) {
		return {
			...state,
			[typeName]: {
				...state[typeName],
				[alias]: {
					...state[typeName][alias],
					data: payload,
					isLoading: false,
					isSuccessful: true,
					isFinished: true
				}
			}
		}
	}

	if (isFailure) {
		return {
			...state,
			[typeName]: {
				...state[typeName],
				[alias]: {
					...state[typeName][alias],
					error: payload,
					isLoading: false,
					isSuccessful: false,
					isFailed: true,
					isFinished: true
				}
			}
		}
	}
}

const useDispatch = () => {
	const reduxDispatch = useReduxDispatch()

	const [actionsInfo, updateActionsInfo] = React.useReducer(reducer, {})

	const dispatch = React.useCallback(
		({ type, callAsync, meta }, alias) => {
			updateActionsInfo({ type: type.REQUEST, meta: { alias, actionName: type.NAME } })
			return reduxDispatch({ type, callAsync, meta })
				.then(data => {
					updateActionsInfo({ type: type.SUCCESS, payload: data, meta: { alias, actionName: type.NAME } })
					return data
				})
				.catch(error => {
					updateActionsInfo({
						type: type.FAILURE,
						payload: error,
						meta: { alias, actionName: type.NAME }
					})
					throw error
				})
		},
		[reduxDispatch]
	)

	const getActionStatus = React.useCallback(
		({ action, alias }) => {
			const actionType = action.NAME

			// Action not dispatched yet
			if (!_.has(actionsInfo, actionType)) return defaultRequestStatus

			// Action dispatched and no alias used
			if (_.isUndefined(alias)) return actionsInfo[actionType][DEFAULT_ALIAS]

			// Action not dispatched and alias used
			if (!_.has(actionsInfo[actionType], alias)) return defaultRequestStatus

			// Action dispatched and alias used
			return actionsInfo[actionType][alias]
		},
		[actionsInfo]
	)

	return {
		// Function
		dispatch,
		// Info
		getActionStatus
	}
}

/* ====================================================== */
/*                       Public API                       */
/* ====================================================== */

export default useDispatch

const defaultRequestStatus = {
	// Metadata
	isLoading: false,
	isSuccessful: false,
	isFinished: false,
	isFailed: false,

	// Info
	data: undefined,
	error: undefined
}
