export interface gameState{
	bpmCurrent: number,
	currentTime: number,
	started: boolean,
	time: number
}

export const initGameState = ():gameState => ({
	bpmCurrent: 0,
	currentTime: Date.now(),
	started: false,
	time: 30
})