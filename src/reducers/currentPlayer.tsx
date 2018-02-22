import { CHANGE_SCORE } from '../constants/ActionTypes'
import { RESET_PLAYER } from '../constants/ActionTypes'
import { UPDATE_USERNAME } from '../constants/ActionTypes'
import { initPlayerState, playerState } from '../init/player'

const currentPlayer = (state:playerState = initPlayerState(), action:any) => {
	switch (action.type) {
	    case RESET_PLAYER:
			return {
				...action.newPlayer
			}
	    case UPDATE_USERNAME:
			return {
				...state,
				username: action.username
			}
	    case CHANGE_SCORE:
			return {
				...state,
				score: state.score + action.score
			}
	    default:
			return state
	}
}

export default currentPlayer;