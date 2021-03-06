import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Action Creators
function incrementCounter() {
  return { type: 'INCREMENT_COUNTER' };
}
function decrementCounter() {
  return { type: 'DECREMENT_COUNTER' };
}

// Reducer
function counter(state = {counter: 0}, action) {
  switch(action.type) {
  case 'INCREMENT_COUNTER':
    return { counter: state.counter + 1 };
  case 'DECREMENT_COUNTER':
    return { counter: state.counter - 1 };
  default:
    return state;
  }
}

// Reactコンポーネント
let App = ({counter, dispatch}) => (
  <div>
    <div>{counter}</div>
    <button onClick={() =>
      dispatch(incrementCounter())}> + </button>
    <button onClick={() =>
      dispatch(decrementCounter())}> - </button>
  </div>
);

// ReactとReduxの接続
function mapStateToProps(state) {
  return {counter: state.counter};
}
App = connect(mapStateToProps)(App);

const store = createStore(counter, {counter: 0});


console.log(React);


render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);

