/** Rules for scoring Giants and Halflings
 * 
 * This abstract class contains the rules as subclasses.
 * All passed in parameters are stored as properties on the instance.
 * 
 * This contains the functions that will calculate losses, and
 * payouts for win conditions.
 */

class Rule {
  constructor(params) {
    Object.assign(this, params);
  }

  /** Sum of Halfling dice
   * If split: true, sum of a set of Halfling dice */
  sum(dice) {
    return dice.reduce((prev, curr) => prev + curr);
  }

  compare(giant, halflingTotal) {
    return giant > halflingTotal ? 'loss' : 'win';
  }
}

class Kick extends Rule {
  evalRoll = (giant, dice) => {
    return 'reset';
  }
}