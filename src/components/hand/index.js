import React, { PropTypes, Text, View } from 'react-native';
import Card from './../card'

const Hand = ({ cards, dealer, label }) => {
  return (
    <View>
      <Text>{label}</Text>
      {cards.map((card, index) => {
        const isFacedown = !!(index === 0 && dealer);
        return (
          <Card key={index} number={card.number} suit={card.suit} facedown={isFacedown}/>
        );
      })}
    </View>
  );
};

Hand.propTypes = {
  dealer: PropTypes.bool,
  label: PropTypes.string.isRequired,
  cards: PropTypes.array
};
Hand.defaultProps = {
  dealer: false
};

export const DealerHand = ({ cards }) => (Hand({ cards, label: 'Dealer\'s Hand', dealer: true }));
export const PlayerHand = ({ cards }) => (Hand({ cards, label: 'Your Hand' }));
