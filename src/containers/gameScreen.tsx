import * as React from 'react';
import * as PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Container from '../components/Container';
import Title from '../components/Title';
import Button from '../components/Button';
import Span from '../components/Span';
import GameScreenHeader from './gameScreenHeader';
import { mouseTap } from '../actions';
import { 
	getCurrentBPMPrefix,
	compare
} from '../reducers';



const GameScreen = ({bpmPrefix, bpmSuffix, bpmCurrent, game, player, mouseTap}:any):JSX.Element => (
	<Container>
		<GameScreenHeader game={game} player={player}/>
		<Title currentBPM>
		<Span>{ bpmPrefix }</Span>
		<Span>{ bpmCurrent }</Span>
			{ bpmSuffix }
		</Title>
		<Button tapper onClick={ () => mouseTap(game,player) }>Tap</Button>
	</Container>
);

const mapStateToProps = (state:any) => ({
	game: state.currentGame,
	player: state.currentPlayer,
	bpmPrefix: getCurrentBPMPrefix(state.currentGame.bpmCurrent, state.currentPlayer.bpm),
	bpmCurrent: compare(state.currentGame.bpmCurrent, 0, state.currentGame.bpmCurrent, ''),
	bpmSuffix: compare(state.currentGame.bpmCurrent, 0, 'BPM', 'Start Tapping!')
})

export default connect(
  mapStateToProps,
  { mouseTap }
)(GameScreen)