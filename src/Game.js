import React, { Component } from 'react';
import Modal from './Modal';
import Pot from './Pot';
import Halflings from './Halflings';
import Giant from './Giant';
import { writtenRules } from './writtenRules';
import { doScore } from './Rules';
import { GameInfo } from './styling/GameStyle';

const NUM_DICE = 2;
const G_DICE = 1;
const STARTING_FUNDS = 30;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      halflingDice: Array.from({ length: NUM_DICE }).fill(6),
      locked: Array(NUM_DICE).fill(false),
      giantDie: Array.from({ length: G_DICE }).fill(5),
      giantLock: Array(G_DICE).fill(false),
      split: false,
      legendary: false,
      wagerInput: 0,
      coins: {
        // House has unlimited funds, so giantHoard is how much Giant has
        // gained or lost this game.
        giantHoard: 0,
        halflingLoot: STARTING_FUNDS,
        pot: 0,
      },
      isShowing: false,
      showRules: false,
    };
    this.anteUp = this.anteUp.bind(this);
    this.rollHalflings = this.rollHalflings.bind(this);
    this.rollGiant = this.rollGiant.bind(this);
    this.doResults = this.doResults.bind(this);
  }

  /** If all dice locked, calculate the results. */
  componentDidUpdate() {
    if (
      this.state.locked.every(i => i === true) &&
      this.state.giantLock.every(i => i === true)
      ) {
      this.doResults(this.state.giantDie, this.state.halflingDice);
    }
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
    if (evt) evt.preventDefault();
    this.setState(st => ({
      coins: {
        ...st.coins,
        pot: gold,
        halflingLoot: (st.coins.halflingLoot - gold),
      }
    }));
    // Since Giant is the house it is currently rolled automatically upon wager.
    this.rollGiant();
    this.toggleModal();
  }

  /**
   * Takes in rolls and determines increase or decrease in coins depending
   * on rules and payout ratios.
   * @param {int} giantDie        value of Giant's roll
   * @param {int} halflingDice    sum of Halflings rolls
   * => calculated result value.
   */
  doResults(hDice, gDice) {
    const result = doScore.evalResults(hDice, gDice, this.state.coins.pot);

    if (result > -1) {
      this.setState(st => ({
        coins: {
          giantHoard: st.coins.giantHoard -= result,
          halfLingLoot: st.coins.halflingLoot += result,
          pot: 0,
        },
        locked: Array(NUM_DICE).fill(false),
        giantLock: Array(G_DICE).fill(false)
      }));
    } else {
      this.setState(st => ({
        coins: {
          ...st.coins,
          giantHoard: st.coins.giantHoard += st.coins.pot,
          pot: 0,
        },
        locked: Array(NUM_DICE).fill(false),
        giantLock: Array(G_DICE).fill(false)
      }));
    }

    if (this.state.coins.halflingLoot <= 0) {
      // FIXME Pop up loss modal
      console.log("You lose! Play gain?");
    } else {
      this.anteUp();
    }

    return result;
  }

  /**
   * Roll dice for halflings.
   * Currently rolls individual die, locking once rolled.
   * => value of rolled die.
   */
  rollHalflings(i) {
    if (!this.state.locked[i]) {
      let updateLock = this.state.locked.slice();
      updateLock[i] = true;
      let updateDie = this.state.halflingDice.slice();
      updateDie[i] = Math.ceil(Math.random() * 6);
      this.setState(() => ({
        halflingDice: updateDie,
        locked: updateLock,
      }));
    }
    return this.state.halflingDice[i];
  }

  /**
   * Roll die for Giant.
   * If there was more than one, all would be rolled.
   * => array of dice values.
  */
  rollGiant(i) {
    let updateLock = this.state.giantLock.splice();
    updateLock[i] = true;
    this.setState(st => ({
      giantDie: st.giantDie.map(
        (d, i) => st.giantLock[i] ? d : Math.ceil(Math.random() * 10)
      ),
      giantLock: updateLock,
    }));
    return this.state.giantDie;
  }

  // FIXME There is not restart function yet!
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

  /** Renders modal with rules */
  rulesModal() {
    return (
      <Modal
        btnText="Back to Game"
        className="modal"
        show={this.state.isShowing}
        close={this.toggleModal}
      >
        { writtenRules }
      </Modal>
    );
  }

  render() {
    return (
      <section className="Game">
        <GameInfo>  
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
        </GameInfo>

        <div>
          { this.state.isShowing ? <div onClick={this.toggleModal} className="back-drop"></div> : null }

          <button className="open-modal-btn" onClick={this.toggleModal}>Show Rules</button>

          <Modal
            className="modal"
            show={this.state.isShowing}
            close={this.toggleModal}
            baseGold={STARTING_FUNDS}
          >
           { writtenRules } 
          </Modal>
        </div>
      </section>
    );
  }
}

export default Game;

// This was a child passed to Modal. Needs to be made it's own.
/*{ <form action="submit">
              <label htmlFor="wager">What's your wager?</label>
              <input
                name="wager"
                type="int-field"
                defaultValue={this.state.wagerInput}
              />
              <button onSubmit={this.anteUp}>Place Wager</button>
            </form> }*/