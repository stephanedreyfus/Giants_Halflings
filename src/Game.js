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
      halflingDice: Array.from({ length: NUM_DICE }).fill(6),
      locked: Array(NUM_DICE).fill(false),
      giantDie: [5],
      giantLock: [false],
      split: false,
      legendary: false,
      wagerInput: 0,
      coins: {
        // House has unlimited funds, so giantHoard is how much you have lost to Giant
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
        halflingLoot: (st.coins.halflingLoot - gold),
      }
    }));
    this.toggleModal();
  }

  /**
   * Roll dice for halflings.
   * Currently rolls individual die, locking once rolled.
   */
  rollHalflings(i) {
    let updateLock = this.state.locked.splice();
    updateLock[i] = true;
    this.setState(st => ({
      halflingDice: st.halflingDice.map(
        (d, i) => st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: updateLock,
    }));
    // If all Halfling dice locked, run doResults(this.state.giantDie, this.state.halfLingDice)
  }

  /** Roll die for Giant.*/
  rollGiant(i) {
    let updateLock = this.state.giantLock.splice();
    updateLock[i] = true;
    this.setState(st => ({
      giantDie: st.giantDie.map(
        (d, i) => st.locked[i] ? d : Math.ceil(Math.random() * 10)
      ),
      giantLock: updateLock,
    }));
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
  //   this.anteUp();
  // }

  /** Renders modal with loss message and restart button. */
  restartModal() {
    return (
      <Modal
        className="modal"
        show={this.state.isShowing}
        close={this.restart}
        baseGold={0}
      >
        The Giant has won and you are out of gold. Click below to restart.
      </Modal>
    );
  }

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
              <form action="submit">
                <label htmlFor="wager">What's your wager?</label>
                <input
                  name="wager"
                  type="int-field"
                  defaultValue={this.state.wagerInput}
                />
                <button onSubmit={this.anteUp}>Place Wager</button>
              </form>
            </Modal>
          </div>
          
        <Halflings 
          dice={this.state.halflingDice}
          locked={this.state.locked}
          handleClick={this.rollHalflings}
          loot={this.state.coins.halflingLoot}
        />
        <Pot gold={this.state.coins.pot} />
        <Giant
          dice={this.state.giantDie}
          locked={this.state.giantLock}
          handleClick={this.rollGiant}
          hoard={this.state.coins.giantHoard}
        />
      </section>
    );
  }
}

export default Game;