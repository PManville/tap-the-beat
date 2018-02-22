import * as React from 'react';
import * as PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Container from '../components/Container';
import Title from '../components/Title';
import Button from '../components/Button';
import LeaderboardList from './leaderboardList';
import { 
	changeScreenFunction
} from '../actions';
import { 
	getStartLeaderboard
} from '../reducers';



const StartScreen = ({leaderboard, changeScreenFunction}:any):JSX.Element => (
	<Container>
		<Title>Tap the Beat!</Title>
		<Title leaderboard>Top 5</Title>
		<Container leaderboard>
			<LeaderboardList leaderboard={leaderboard}/>
		</Container>
		<Button onClick={ () => changeScreenFunction(2) } >Play</Button>
	</Container>
);	




const mapStateToProps = (state:any) => ({
	leaderboard: getStartLeaderboard(state.leaderboard)
})

export default connect(
  mapStateToProps,
  { changeScreenFunction }
)(StartScreen)