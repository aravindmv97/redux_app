import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import Form from './Form';

const initialState = {
  data: {
    name: '',
    email: ''
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'NAME':
      state.data.name = action.value;
      return state;

    case 'EMAIL':
      state.data.email = action.value;
      return state;

    case 'SUBMIT':
      alert('A name was submitted: ' + JSON.stringify(this.state.data));
      action.value.preventDefault();
      return state;

    default:
      return state;
  }
}

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Form />
      </Provider>
    );
  }
}

export default App;
