export interface screenState{
	currentScreen: number,
	keyboardListener: boolean
}

export const initScreenState = ():screenState => ({
	currentScreen: 1,
	keyboardListener: false
})