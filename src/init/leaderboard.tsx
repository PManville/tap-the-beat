
const checkStorage = () => {
	var match = true;
	try {JSON.parse(localStorage.getItem('leaderboard')).map((x:leaderboardState) => {
		if (x.active == undefined){ match = false };
		if (x.bpm == undefined){ match = false };
		if (x.score == undefined){ match = false };
		if (x.username == undefined){ match = false };
	})
	}catch(err){
		console.log("ERROR");
		match = false;
	}
	return match
}

export const initLeaderboardState = () => {
	if(checkStorage()){
		return JSON.parse(localStorage.getItem('leaderboard'));
	}
	else {
		localStorage.setItem('leaderboard', JSON.stringify(defaultLeaderboardState()))
		return defaultLeaderboardState()
	}
}

export interface leaderboardState{
	active: boolean,
	bpm: number,
	score: number,
	username: string
}

const defaultLeaderboardState = ():leaderboardState[] => ([
	{
		active: false,
		bpm: 117,
		score: 140,
		username: "Susan"
	},
	{
		active: false,
		bpm: 84,
		score: 115,
		username: "Tim"
	},
	{
		active: false,
		bpm: 100,
		score: 155,
		username: "Jeff"
	},
	{
		active: false,
		bpm: 98,
		score: 130,
		username: "Dave"
	},
	{
		active: false,
		bpm: 95,
		score: 100,
		username: "Joan"
	}
])