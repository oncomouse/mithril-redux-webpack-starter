import R from 'ramda'
import createReducer from '../utilities/createReducer'
import { SAMPLE_ACTION, RESET_STATE } from '../constants/ActionTypes'
//import { REHYDRATE } from 'redux-persist'

const initialState = []
const actionMaps = {
	[SAMPLE_ACTION]: (state, action) => {
		const randomString = Math.random()
			.toString(36)
			.replace(/[^a-z]+/g, '')
			.substr(0, 7)
		state = R.concat([randomString], state)
		return state
	}
	, [RESET_STATE]: (state, action) => {
		return initialState
	}
	// Do something at REHYDRATE (when persisted store loads from storage)
	//[REHYDRATE]: (state, action) => {
	//	return state;
	//}
}

export default createReducer(initialState, actionMaps)
