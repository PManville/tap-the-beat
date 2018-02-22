import { 
	UPDATE_USERNAME,
	CHANGE_SCREEN,
	RESET_PLAYER,
	SUBMIT_SCORE,
	COUNTDOWN,
	RESET_GAME,
	START_GAME,
	KEYBOARD_LISTENER,
	CHANGE_SCORE,
	UPDATE_BPM
} from '../constants/ActionTypes';

export const changeScore = (score: number) => ({
	type: CHANGE_SCORE,
	score: score
})

export const changeScreen = (screen:number) => ({
	type: CHANGE_SCREEN,
	screen
})

export const countdown = () => ({
	type: COUNTDOWN
})

export const keyboardListener = () => ({
	type: KEYBOARD_LISTENER
})

export const restartGame = (newGameStats: object) => ({
	type: RESET_GAME,
	newGameStats
})

export const resetPlayer = (newPlayer:object) => ({
	type: RESET_PLAYER,
	newPlayer
})

export const startGame = (started: boolean) => ({
	type: START_GAME,
	started: started
})

export const submitScore = (newPlayer:object) => ({
	type: SUBMIT_SCORE,
	newPlayer
})

export const updateBPM = (newbpm: object) => ({
	type: UPDATE_BPM,
	newbpm
})

export const updateUsername = (username:string) => ({
	type: UPDATE_USERNAME,
	username
})