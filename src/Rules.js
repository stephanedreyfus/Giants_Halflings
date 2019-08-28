
/** Simple Rules
 * An abstract class with basic helper functions for
 * more complext rules instances. Currently only has a
 * sum function.
 */
class Rules {
  constructor(params) {
    Object.assign(this, params);
  }
  
  sum(dice) {
    return dice.reduce((prev, curr)=> prev + curr);
  }
}

/** Evalutations for scoring Giants and Halflings:
 * @param {arr} halflingDice    sum of two die vals
 * @param {int} giantDie
 * @param {int} gold
 */
class Score extends Rules {
  evalResults(hDice, gDice, pot) {
    const halflings = this.sum(hDice);
    const knee = this.sum(gDice)
    const threeToOne = [7, 8, 9];
    const twoToOne = [4, 5, 6];
    const oneToOne = [2, 3];

    // "The Kick": Immediate player loss of everything in pot
    if (knee === 1) return -1;

    // "The Maw": Immediate player loss of everything in pot
    if (halflings > 10) return -1;

    // "The Snake": Current pot is reset, gold ante returned to player
    if (halflings === 2) return 0;

    // 5:1 win condition
    if (knee === 10 && halflings === 10) {
      return ( pot + (pot * 5));
    }
    
    // 3:1 win condition
    if (threeToOne.includes(knee) && halflings >= knee) {
      return ( pot + (pot * 3));
    }
    
    // 2:1 win condition
    if (twoToOne.includes(knee) && halflings >= knee) {
      return ( pot + (pot * 2));
    }

    // 1:1 win condition
    if (oneToOne.includes(knee) && halflings >= knee) {
      return ( pot + pot);
    }
    
    return -1;
  }
}

const doScore = new Score()

export { doScore }
