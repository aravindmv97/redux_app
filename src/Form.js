import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        email: ''
      }
    };
  }

  handleNameChange = (event) => {
    this.props.dispatch({ type: 'NAME', value: event.target.value });
  }

  handleEmailChange = (event) => {
    this.props.dispatch({ type: 'EMAIL', value: event.target.value });
  }

  handleSubmit = (event) => {
    this.props.dispatch({ type: 'SUBMIT', value: event });
   
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.props.name} onChange={this.handleNameChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={this.props.email} onChange={this.handleEmailChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.name,
    email: state.email
  };
}

export default connect(mapStateToProps)(Form);
