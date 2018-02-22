export interface screenState{
	currentScreen: number
}

export const initScreenState = ():screenState => ({
	currentScreen: 1
})