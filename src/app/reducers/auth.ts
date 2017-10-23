import { ActionReducer, Action } from '@ngrx/store'

export const LOGGINGIN = 'LOGGINGIN'
export const LOGGINGOUT = 'LOGGINGOUT'
export const RESET = 'RESET'

export function authReducer(state: boolean = true, action: Action) {
	switch (action.type) {
		case LOGGINGIN:
			return state = true

		case LOGGINGOUT:
			return state = false

		case RESET:
			return state = true

		default:
			return state
	}
}