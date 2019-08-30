import React, { Component } from 'react';

class Wager extends Component {
  constructor(props) {
    super(props);
    this.state = {val: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({value: evt.target.value});
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.anteUp(this.state.val);
  }

  render() {
    return(
      <form action="submit">
        <label htmlFor="wager">What's your wager?</label>
        <input
          name="wager"
          type="int-field"
          defaultValue={this.state.val}
          onChange={this.handleChange}
        />
        <button onSubmit={this.handleSubmit}>Place Wager</button>
      </form>
    );
  }
}

Wager.propTypes = {
  anteUp: PropTypes.func
}

export default Wager;
