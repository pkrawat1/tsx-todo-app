import Types from 'Types';
import { connect } from 'react-redux';

import { SFCCounter } from './';
import { countersSelectors, countersActions } from './store';

const mapStateToProps = (state: Types.RootState) => ({
  count: countersSelectors.getReduxCounter(state.counters),
});

export const SFCCounterConnected = connect(mapStateToProps, {
  onIncrement: countersActions.increment,
})(SFCCounter);
