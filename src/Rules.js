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

  evalResults(halflingSum, giantDie, pot, ante) {
    if (giantDie === 1) return 
  }

}

export default Rules;

// return boolean and have component set state depending on boolena value
