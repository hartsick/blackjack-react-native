import React, { Component, PropTypes, Text, View, TouchableOpacity } from 'react-native';
import * as BlackjackActions from '../../actions/Actions';
import { DealerHand, PlayerHand } from './../hand';

class BlackjackGame extends Component {
  render() {
    const { dealerHand, playerHand, gameStarted, startGame } = this.props;
    return (
      <View>
        <Text>Blackjack!</Text>
        {
          gameStarted ?
            <Game dealerHand={ dealerHand } playerHand={ playerHand }/> :
            <TouchableOpacity onPress={(event) => startGame()}>
              <Text>Start Game</Text>
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

const Game = ({ dealerHand, playerHand }) => (
  <View>
    <Text>Game started!</Text>
    <DealerHand cards={dealerHand}/>
    <PlayerHand cards={playerHand}/>
  </View>
);

Game.propTypes = {
  dealerHand: PropTypes.array.isRequired,
  playerHand: PropTypes.array.isRequired
};


export default BlackjackGame;
