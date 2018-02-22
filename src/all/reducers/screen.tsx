import { CHANGE_SCREEN } from '../constants/ActionTypes'
import { initScreenState, screenState } from '../init/screen'

const screen = (state:screenState = initScreenState(), action:any) => {
	switch (action.type) {
	    case CHANGE_SCREEN:
			return {
				...state,
				currentScreen: action.screen
			}
	    default:
			return state
	}
}

export default screen;