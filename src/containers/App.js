import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native'
import * as BlackjackActions from '../actions/Actions';
import BlackjackGame from './../components/blackjack-game';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(BlackjackActions, dispatch)
}

export default connect((state) => state, mapDispatchToProps)(BlackjackGame);
