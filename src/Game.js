import React, { Component } from 'react';
import Modal from './Modal';
import Pot from './Pot';
import Halflings from './Halflings';
import Giant from './Giant';
import './Game.css';

const NUM_DICE = 2;
const STARTING_FUNDS = 30;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      halflingDice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      giantDie: [5],
      giantLock: false,
      split: false,
      legendary: false,
      coins: {
        // House has unlimited funds, so this is how much you have lost to Giant
        giantHoard: 0,
        halflingLoot: STARTING_FUNDS,
        pot: 0,
      },
      isShowing: false
    };
    this.anteUp = this.anteUp.bind(this);
    this.rollHalflings = this.rollHalflings.bind(this);
    this.rollGiant = this.rollGiant.bind(this);
    // this.toggleHalfLock = this.toggleHalfLock.bind(this);
    // this.doResults = this.doResults.bind(this);
  }

  // modal toggle
  toggleModal = () => {
    this.setState(
      st => ({isShowing: !st.isShowing})
    );
  }

  /**
   * Prompts player to place a bet into the 'pot',
   * Accepts integer input, locks pot and allows for Halfling roll.
   * Pot value set to wager.
   * Halflings coins decreased by wager.
   * 
   * @param {int} gold    Amount wagered.
   */
  anteUp(evt, gold) {
    evt.preventDefault();
    this.setState(st => ({
      coins: {
        ...st.coins,
        pot: gold,
        halflings: (st.coin.halflings - gold),
      }
    }));
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

  /** Roll die for Giant. */
  rollGiant() {
    this.setState({ giantDie: [Math.ceil(Math.random() * 10)] });
  }

  /**
   * Takes in rolls and determines increase or decrease in coins depending
   * on rules and payout ratios.
   * @param {int} giantDie        value of Giant's roll
   * @param {int} halflingDice    sum of Halflings rolls
   */
  // doResults(giantDie, halflingDice) {

  //   this.setState(st => ({

  //     locked: Array(NUM_DICE).fill(false),
  //   }));
  //   // EVENTUALLY offer option to borrow from Giant?
  //   this.anteUp();
  // }

  /**
   * Renders modal with loss message and restart button.
   */
  // restartModal() {

  // }

  render() {
    return (
      <section className="Game">
        <div>
            { this.state.isShowing ? <div onClick={this.toggleModal} className="back-drop"></div> : null }

            <button className="open-modal-btn" onClick={this.toggleModal}>Open Modal</button>

            <Modal
              className="modal"
              show={this.state.isShowing}
              close={this.anteUp}
              baseGold={this.STARTING_FUNDS}
            >
              Maybe aircrafts fly very high because they don't want to be seen in plane sight?
            </Modal>
          </div>
          
        <Halflings 
          dice={this.state.halflingDice}
          locked={this.state.locked}
          handleClick={this.rollHalflings}
          loot={this.state.coins.halflingLoot}
        />
        <Pot gold={this.state.coins.pot} handleSubmit={this.anteUp} />
        <Giant
          val={this.state.giantDie}
          locked={this.state.giantLock}
          handleClick={this.rollGiant}
          hoard={this.state.coins.giantHoard}
        />
      </section>
    );
  }
}

export default Game;