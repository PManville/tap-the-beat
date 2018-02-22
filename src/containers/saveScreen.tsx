import * as React from 'react';
import * as PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Container from '../components/Container';
import Title from '../components/Title';
import Button from '../components/Button';
import GameScreenHeader from './gameScreenHeader';
import LeaderboardList from './leaderboardList';
import { 
	submitScoreFunction,
	updateUsernameFunction,
} from '../actions';
import { 
	getPosition,
	getSaveLeaderboard
} from '../reducers';



const SaveScreen = ({leaderboard, currentPlayer, position, submitScoreFunction, updateUsernameFunction}:any):JSX.Element => (
	<Container>
		<Title>Congratuations, you came</Title>
		<Title position>{ position }</Title>
		<Container leaderboard>
			<LeaderboardList leaderboard={leaderboard} update={updateUsernameFunction} />
		</Container>
		<Button onClick={ () => submitScoreFunction(currentPlayer) }>Submit</Button>
	</Container>
);



const mapStateToProps = (state:any) => ({
	currentPlayer: state.currentPlayer,
	leaderboard: getSaveLeaderboard(state.leaderboard, state.currentPlayer),
	position: getPosition(getSaveLeaderboard(state.leaderboard, state.currentPlayer))
})

export default connect(
  mapStateToProps,
  { submitScoreFunction, updateUsernameFunction }
)(SaveScreen)