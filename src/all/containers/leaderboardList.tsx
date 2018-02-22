import * as React from 'react';
import Container from '../components/Container';
import Input from '../components/Input';
import Info from '../components/Info';

const LeaderboardList = ({leaderboard, update}:any):JSX.Element => (
	<div>
		{leaderboard.map((user:any, index:number) => 
			<Container key={index} leaderboardRow active={user.active}>
				<Info position>{index + 1}</Info>
				{user.active && 
					<Input autoFocus username onChange={(e) => update((e.target as HTMLInputElement).value)}></Input>
				}
				{!user.active && 
					<Info username>{user.username}</Info>
				}
				<Info score>{user.score}</Info>
				<Info bpm>{user.bpm}BPM</Info>
			</Container>
		)}
	</div>
);

export default LeaderboardList;