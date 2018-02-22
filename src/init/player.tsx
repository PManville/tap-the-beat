import { bpmNew } from '../actions'

export interface playerState{
	active: boolean,
	bpm: number,
	score: number,
	username: string
}

export const initPlayerState = ():playerState => ({
	active: true,
	bpm: bpmNew(),
	score: 0,
	username: ""
})