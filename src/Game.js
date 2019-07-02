import React, { Component } from 'react';
import Dice from './Dice';
import Halflings from './Halflings';
import Giant from './Giant';
import '.Game.css';

const NUM_DICE = 2;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      halflingDice: Array.from({ length: NUM_DICE}),
      locked: Array(NUM_DICE).fill(false),
      giantDie: [5],
      split: false,
      legendary: false,
      coins: {
        giant: undefined,
        halflings: undefined,
        pot: undefined,
      }
    };
    this.roll = this.roll.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.doResults = this.doResults.bind(this);
  }

  /**
   * Roll dice for halflings.
   * Currently rolls dice and locks all.
   * ADD roll each die individually.
   */
  roll() {
    this.setState(st => ({
      dice: st.dice.map(
        (d, i) => st.locked[i] ? d : Math.ceil(Math.random() * 6)),
      locked: Array(NUM_DICE).fill(true),
      giantDie: [Math.ceil(Math.random() * 10)],
    }));
  }

  /**
   * Takes in rolls and determines increase or decrease in coins depending
   * on rules and payout ratios.
   * @param {*} ruleName 
   * @param {*} ruleFn 
   */
  doResults(ruleName, ruleFn) {
    this.setState(st => ({

      locked: Array(NUM_DICE).fill(false),
    }));
  }

  render() {
    return (
      <section>
        <Halflings />
        <Dice dice={this.state.dice} locked={this.state.locked} handleClick={this.toggleLocked} />

        <Giant />
      </section>
    );
  }
}

export default Game;