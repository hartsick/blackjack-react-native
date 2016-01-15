import React, { PropTypes, Text } from 'react-native';

const SUITS = ['hearts', 'spades', 'diamonds', 'clubs'];

const Card = ({ facedown, number, suit }) => {
  const cardText = facedown ? '' : `${number} of ${suit}`;
  return (<Text>{cardText}</Text>)
};

Card.propTypes = {
  facedown: PropTypes.bool,
  number: PropTypes.number.isRequired,
  suit: PropTypes.oneOf(SUITS).isRequired
};
Card.defaultProps = {
  facedown: false
};

export default Card;
