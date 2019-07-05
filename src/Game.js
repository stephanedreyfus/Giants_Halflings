import React, { Component } from 'react';
import Dice from './Dice';
import Halflings from './Halflings';
import Giant from './Giant';
import '.Game.css';

const NUM_DICE = 2;
const STARTING_FUNDS = 30;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      halflingDice: Array.from({ length: NUM_DICE}),
      locked: Array(NUM_DICE).fill(false),
      giantDie: [5],
      giantLock: false,
      split: false,
      legendary: false,
      coins: {
        // House has unlimited funds, so this is how much you have lost to Giant
        giant: undefined,
        halflings: STARTING_FUNDS,
        pot: undefined,
      }
    };
    this.rollHalflings = this.rollHalflings.bind(this);
    this.rollGiant = this.rollGiant.bind(this);
    this.toggleHalfLock = this.toggleHalfLock.bind(this);
    this.doResults = this.doResults.bind(this);
  }

  /**
   * Roll dice for halflings.
   * Currently rolls dice and locks all.
   * EVENTUALLY add ability to roll each die individually.
   */
  rollHalflings() {
    this.setState(st => ({
      dice: st.dice.map(
        (d, i) => st.locked[i] ? d : Math.ceil(Math.random() * 6)),
      locked: Array(NUM_DICE).fill(true),
    }));
  }

  /**
   * Roll die for Giant.
   */
  rollGiant() {
    this.setState(st => ({
      giantDie: [Math.ceil(Math.random() * 10)]
    }));
  }

  /**
   * Takes in rolls and determines increase or decrease in coins depending
   * on rules and payout ratios.
   * @param {*} giantDie 
   * @param {*} halflingDice 
   */
  doResults(giantDie, halflingDice) {
    this.setState(st => ({

      locked: Array(NUM_DICE).fill(false),
    }));
  }

  render() {
    return (
      <section>
        <Halflings />
        <Dice
          dice={this.state.dice}
          locked={this.state.locked}
          handleClick={this.rollHalflings}
        />

        <Giant
          die={this.state.giantDie}
          locked={this.state.giantLock}
          handleClick={this.rollGiant}
        />
      </section>
    );
  }
}

export default Game;