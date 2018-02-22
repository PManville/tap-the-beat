 import * as React from 'react';
import * as PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Container from '../components/Container';
import StartScreen from './startScreen';
import GameScreen from './gameScreen';
import SaveScreen from './saveScreen';

const App = ({currentScreen}:any):JSX.Element => (
	<Container>
		{ currentScreen == 1 && <StartScreen/> }
		{ currentScreen == 2 && <GameScreen/> }
		{ currentScreen == 3 && <SaveScreen/> }
	</Container>
)



const mapStateToProps = (state:any) => ({
	currentScreen: state.screen.currentScreen
})

export default connect(
  mapStateToProps,
  {  }
)(App)