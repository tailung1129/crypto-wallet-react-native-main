import React from 'react'

import useDispatch from './use_dispatch'

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

function useDispatchOnMount(action) {
	const { dispatch, ...info } = useDispatch()

	React.useEffect(() => {
		dispatch(action)
	}, [action, dispatch])

	return info
}

/* ====================================================== */
/*                       Public API                       */
/* ====================================================== */

export default useDispatchOnMount
