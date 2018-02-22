import { SUBMIT_SCORE } from '../constants/ActionTypes'
import { initLeaderboardState, leaderboardState } from '../init/leaderboard'

const leaderboard = (state:leaderboardState[] = initLeaderboardState(), action:any) => {
	switch (action.type) {
	    case SUBMIT_SCORE:
			return [
					...state,
					{
						...action.newPlayer
					}
			]
	    default:
			return state
	}
}

export default leaderboard;