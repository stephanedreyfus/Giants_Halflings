/** Rules for scoring Giants and Halflings:
 * @param {int} gold
 * @param {int} halflingDice    sum of two die vals
 * @param {int} giantDie
 */

class Rules {
  constructor(params) {
    Object.assign(this, params);
  }

  sum(halflingDice) {
    return halflingDice.reduce((prev, curr)=> prev + curr);
  }

  evalResults(halflings = this.sum, knee, pot) {
    const fiveToOne = [10];
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
    if (fiveToOne.includes(knee) && fiveToOne.includes(halflings)) {
      return ( pot + (pot * 5));
    }
    
    // 3:1 win condition
    if (threeToOne.includes(knee) && halflings > threeToOne[0]) {
      return ( pot + (pot * 3));
    }
    
    // 2:1 win condition
    if (twoToOne.includes(knee) && halflings > twoToOne[0]) {
      return ( pot + (pot * 2));
    }

    // 1:1 win condition
    if (oneToOne.includes(knee) && halflings > oneToOne[0]) {
      return ( pot + (pot * 2));
    }
    
    return -1;
  }

}

export default Rules;
