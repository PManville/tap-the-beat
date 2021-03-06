import axios from 'axios';
import { initPlayerState, playerState } from '../init/player'
import { initGameState, gameState } from '../init/game'

import * as Actions from './actions';




export const updateUsernameFunction = (username:string) => (dispatch:Function) => {
	dispatch(Actions.updateUsername(username))
}

export const changeScreenFunction = (screen:number) => (dispatch:Function) => {
	dispatch(Actions.changeScreen(screen));
}

export const submitScoreFunction = (currentPlayer:playerState) => (dispatch:Function, getState:Function) => {
	dispatch(Actions.submitScore(createSubmission(currentPlayer)));
	dispatch(Actions.changeScreen(1));
	dispatch(Actions.resetPlayer(initPlayerState()));
	localStorage.setItem('leaderboard', JSON.stringify(getState().leaderboard))
}

const restartGameAsync = (dispatch:Function) => {
	axios.get('http://localhost:8888/restartGame')
	.then((data) => {
		dispatch(Actions.restartGame(data.data));
	})
	.catch(
		dispatch(Actions.restartGame(initGameState()))
	)
}

const calculateScore = (game:gameState, player:playerState, dispatch:Function) => {
	var bpm = Math.round(60000 / (Date.now() - game.currentTime));
	var bpmDif = bpm - player.bpm;
	if (bpmDif == 0){
		dispatch(Actions.changeScore(10));
	}
	else if (bpmDif > -3 && bpmDif < 3){
		dispatch(Actions.changeScore(5));
	}
	dispatch(Actions.updateBPM(updateBPMFunction(bpm)))
}

export const addKeyboardListener = () => (dispatch:Function, getState:Function) => {
	var listener = () => {
		if(getState().screen.currentScreen == 2){
			tap(getState().currentGame,getState().currentPlayer,dispatch,getState);
		}
	}
	if (!getState().screen.keyboardListener){
		dispatch(Actions.keyboardListener());
		document.addEventListener("keydown", listener);
	}
}

export const mouseTap = (game:gameState, player:playerState) => (dispatch:Function, getState:Function) => {
	tap(game, player, dispatch, getState)
}

const tap = (game:gameState, player:playerState, dispatch:Function, getState:Function) => {
	if(!game.started){
		startTimer(game.time, dispatch, getState, tapCallback);
		dispatch(Actions.startGame(true))
	}
	calculateScore(game, player, dispatch)
}

const updateBPMFunction = (bpm:number) => ({
	currentTime: Date.now(),
	bpmCurrent: bpm
})


const startTimer = (time:number, dispatch:Function, getState:Function, callback:Function) => {
	var timer = time;
	var currentTimer = setInterval(() => {
		timer--;
		dispatch(Actions.countdown())
		if(timer == 0){
			callback(dispatch, getState)
			clearInterval(currentTimer);
		}
	}, 1000)
}

const tapCallback = (dispatch:Function, getState:Function) => {
	dispatch(Actions.changeScreen(3));
	dispatch((dispatch:Function) => restartGameAsync(dispatch));
}

export const bpmNew = () => (Math.floor(Math.random()*220) + 60)

const createSubmission = (state:playerState) => ({
	...state,
	username: checkUsernameBlank(state),
	active: false
})

const checkUsernameBlank = (state:playerState) => {
	if (state.username == ''){
		return 'Player';
	}
	else {
		return state.username
	}
}

