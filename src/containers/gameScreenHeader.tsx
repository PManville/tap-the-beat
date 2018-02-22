import * as React from 'react';
import * as PropTypes from 'prop-types'
import Container from '../components/Container';
import Title from '../components/Title';
import Span from '../components/Span';


const GameScreenHeader = ({player, game}:any):JSX.Element => (
	<Container>
		<Title gameInfo>Score: <Span>{player.score}</Span></Title>
		<Title gameInfo>Target BPM: <Span>{player.bpm}</Span></Title>
		<Title gameInfo>Time: <Span>{game.time}</Span></Title>
	</Container>
);

export default GameScreenHeader;