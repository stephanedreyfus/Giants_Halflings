import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  WagerButton,
  WagerForm,
  WagerError,
} from './styling/ModalStyle'

class Wager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 1,
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({val: evt.target.value});
  }

  handleSubmit(evt) {
    evt.preventDefault()
    if (this.state.val > this.props.gold) {
      this.setState(() => ({ error: true }));
    } else {
      this.setState(() => ({ error: false }));
      this.props.wager(parseInt(this.state.val));
    }
  }

  render() {
    return(
      <div>
        <WagerForm onSubmit={this.handleSubmit}>
          <label htmlFor="wager">What's your wager?</label>
          <input
            name="wager"
            type="number"
            min="1"
            max={this.props.gold}
            defaultValue={this.state.val}
            onChange={this.handleChange}
          />
          <WagerButton>
            Place Wager
          </WagerButton>
        </WagerForm>
        <WagerError error={this.state.error}>
          Please enter a whole number less than or equal to {this.props.gold}
        </WagerError>
      </div>
    );
  }
}

Wager.propTypes = {
  wager: PropTypes.func
}

export default Wager;
