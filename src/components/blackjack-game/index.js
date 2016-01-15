import React, { Component, PropTypes, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as BlackjackActions from '../../actions/Actions';
import { DealerHand, PlayerHand } from './../hand';

class BlackjackGame extends Component {
  render() {
    const { dealerHand, playerHand, gameStarted, startGame } = this.props;
    return (
      <View style={componentStyles.container}>
        <Text style={[componentStyles.base, componentStyles.header]}>Blackjack!</Text>
        {
          gameStarted ?
            <Game styles={componentStyles.base} dealerHand={ dealerHand } playerHand={ playerHand }/> :
            <TouchableOpacity onPress={(event) => startGame()}>
              <Text style={[componentStyles.base, componentStyles.button]}>Start Game</Text>
            </TouchableOpacity>
        }
      </View>
    );
  }
}

BlackjackGame.propTypes = {
  startGame: PropTypes.func.isRequired,
  gameStarted: PropTypes.bool,
  dealerHand: PropTypes.array,
  playerHand: PropTypes.array
};
BlackjackGame.defaultProps = {
  gameStarted: false,
  dealerHand: [],
  playerHand: []
};

const Game = ({ styles, dealerHand, playerHand }) => (
  <View>
    <Text style={[styles.base, styles.header]}>Game started!</Text>
    <DealerHand style={styles.base} cards={dealerHand}/>
    <PlayerHand style={styles.base} cards={playerHand}/>
  </View>
);

Game.propTypes = {
  dealerHand: PropTypes.array.isRequired,
  playerHand: PropTypes.array.isRequired,
  styles: PropTypes.style
};

var componentStyles = StyleSheet.create({
  base: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 40
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    marginBottom: 20
  },
  header: {
    textAlign: 'center'
  },
  button: {
    borderRadius: 20,
    marginTop: 200,
    backgroundColor: 'orange'
  }
});

export default BlackjackGame;
