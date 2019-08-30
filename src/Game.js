import React, { Component } from 'react';
import Modal from './Modal';
import Pot from './Pot';
import Halflings from './Halflings';
import Giant from './Giant';
import WrittenRules from './WrittenRules';
import Wager from './Wager';
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
      coins: {
        // House has unlimited funds, so giantHoard is how much Giant has
        // gained or lost this game.
        giantHoard: 0,
        halflingLoot: STARTING_FUNDS,
        pot: 0,
      },
      isShowing: false,
      modalContent: {
        btnText: 'CONTINUE',
        header: 'Welcome to Giants and Halflings!',
        gold: STARTING_FUNDS,
        message: `You start with ${STARTING_FUNDS} gold pieces.`,
        close: this.toggleModal,
      }
    };
    this.wager = this.wager.bind(this);
    this.rollHalflings = this.rollHalflings.bind(this);
    this.rollGiant = this.rollGiant.bind(this);
    this.doResults = this.doResults.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.wagerModal = this.wagerModal.bind(this);
    this.rulesModal = this.rulesModal.bind(this);
    this.lossModal = this.lossModal.bind(this);
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

  //** modal toggle */
  toggleModal = () => {
    this.setState(
      st => ({isShowing: !st.isShowing})
    );
  }

  /**
   * Allows player to place a bet into the 'pot',
   * Accepts integer input, locks pot, rolls for Giant,
   * and allows for Halfling roll.
   * Pot value set to wager.
   * Halflings coins decreased by wager.
   * 
   * @param {int} gold    Amount wagered.
   */
  wager(gold) {
    this.setState(st => ({
      coins: {
        ...st.coins,
        pot: gold,
        halflingLoot: (st.coins.halflingLoot - gold),
      }
    }));
    // Giant is currently rolled automatically upon wager.
    // Index is zero since we are currenly using only one die.
    this.rollGiant(0);
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
      this.lossModal();
    } else {
      this.wagerModal();
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

  /** Sets state to display rules modal iformation*/
  rulesModal() {
    this.setState(st => ({
      modalContent: {
        ...st.modalContent,
        message: <WrittenRules />,
        btnText: "Return to Game",
      }
    }));
    this.toggleModal();
    return this.state.modalContent.btnText;
  }

  /** Sets state to display wager modal information*/
  wagerModal() {
    this.setState(st =>({
      modalContent: {
        ...st.modalContent,
        header: "Time to Ante Up!",
        message: <Wager wager={this.wager} gold={this.state.coins.halflingLoot}/>,
        btnText: "Place your bet!",
        close: this.wager,
      }
    }));
    this.toggleModal();
    return this.state.modalContent.btnText;
  }

  // FIXME Create reset method
  /** Sets state to display loss modal information */
  lossModal() {
    this.setState(st => ({
      modalContent: {
        ...st.modalContent,
        header: "You've Lost It All!",
        btnText: "New Game",
        message: "The Giant has won and you are out of gold. Click below to restart.",
        // close: this.reset,
      }
    }));
    this.toggleModal();
    return this.state.modalContent.header;
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
          <button className="open-modal-btn" onClick={this.wagerModal}>Play Time!</button>
          <button className="open-modal-btn" onClick={this.rulesModal}>Show Rules</button>

          <Modal
            className="modal"
            btnText={this.state.modalContent.btnText}
            header={this.state.modalContent.header}
            show={this.state.isShowing}
            gold={this.state.modalContent.gold}
            close={this.state.modalContent.close}
          >
           {this.state.modalContent.message}
          </Modal>
        </div>
      </section>
    );
  }
}

export default Game;
