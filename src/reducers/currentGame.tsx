import { COUNTDOWN } from '../constants/ActionTypes'
import { RESET_GAME } from '../constants/ActionTypes'
import { START_GAME } from '../constants/ActionTypes'
import { UPDATE_BPM } from '../constants/ActionTypes'
import { initGameState, gameState } from '../init/game'


const currentGame = (state:gameState = initGameState(), action:any) => {
	switch (action.type) {
	    case COUNTDOWN:
			return {
				...state,
				time: state.time - 1
			}
	    case RESET_GAME:
			return{
				...action.newGameStats
			}
	    case START_GAME:
			return{
				...state,
				started: action.started
			}
	    case UPDATE_BPM:
			return {
				...state,
				...action.newbpm
			}
	    default:
			return state
	}
}

export default currentGame;