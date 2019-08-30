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
      val: 0,
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // FIXME Error handling not functioning
  handleChange(evt) {
    this.setState({val: evt.target.value});
    // console.log("What did I type?", evt.target.value)
    // console.log("What is val?", this.state.val)
    // console.log("Is is a number?", Number.isInteger(this.state.val))
    // if (this.state.val > this.props.gold || Number.isInteger(this.state.val)) {
    //   this.setState(() => ({
    //     error: true
    //   }));
    //   console.log("Error set to true")
    // } else {
    //   this.setState(() => ({
    //     error: false
    //   }));
    //   console.log("Error set to false")
    // }
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.wager(this.state.val);
  }

  render() {
    return(
      <div>
        <WagerForm action="submit">
          <label htmlFor="wager">What's your wager?</label>
          <input
            name="wager"
            type="int-field"
            defaultValue={this.state.val}
            onChange={this.handleChange}
          />
          <WagerButton onSubmit={this.handleSubmit}>
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
