import { CHANGE_SCREEN } from '../constants/ActionTypes'
import { KEYBOARD_LISTENER } from '../constants/ActionTypes'
import { initScreenState, screenState } from '../init/screen'

const screen = (state:screenState = initScreenState(), action:any) => {
	switch (action.type) {
	    case CHANGE_SCREEN:
			return {
				...state,
				currentScreen: action.screen
			}
		case KEYBOARD_LISTENER:
			return {
				...state,
				keyboardListener: true
			}
	    default:
			return state
	}
}

export default screen;