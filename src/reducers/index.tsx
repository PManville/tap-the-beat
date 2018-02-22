import { combineReducers } from 'redux'
import currentGame from './currentGame';
import currentPlayer from './currentPlayer';
import leaderboard from './leaderboard';
import screen from './screen';
import { leaderboardState } from '../init/leaderboard';
import { playerState } from '../init/player';

export default combineReducers({
	currentGame,
	currentPlayer,
	leaderboard,
	screen
})

export const getPosition = (leaderboard:leaderboardState[]) => (
	leaderboard.map((user:any, index:number) => {
		if(user.active){
			var indexSuffix: any = (index + 1).toString().split('');
			switch (indexSuffix[indexSuffix.length-2]) {
				case '1':
					return index + 1 + 'th';
				default:
					switch (indexSuffix[indexSuffix.length-1]) {
						case '1':
							return index + 1 + 'st';
						case '2':
							return index + 1 + 'nd';
						case '3':
							return index + 1 + 'rd';
						default:
							return index + 1 + 'th';
					}
			}
		}
	})
);


export const getCurrentBPMPrefix = (target:number, current:number) => {
	if(target == current){
		return 'Perfect!';
	}
	else if((target - current) > -3 && (target - current) < 3){
		return 'Ok!';
	}
	else {
		return '  ';
	}
}

export const compare = (left:any, right:any, succeed:any, fail:any) => (
	left != right ? succeed : fail
)

export const getSaveLeaderboard = (leaderboard:leaderboardState[], currentPlayer:playerState) => (
	leaderboard.concat(currentPlayer).sort((a:any,b:any) => b.score - a.score)
)

export const getStartLeaderboard = (leaderboard:leaderboardState[]) => (
	leaderboard.sort((a:any,b:any) => b.score - a.score).slice(0,5)
)