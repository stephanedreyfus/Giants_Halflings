import React from 'react';

// FIXME FInd a way to have this left justified only when
// this particular information is passed as a child.
export const writtenRules = (
  <p>
    <b>Hello There!</b><br/>
    Halflings and Giants is a game of chance where you,
    the Halflings, gamble against the house, the Giant.

    By rolling two six sided die the Halflings need to
    beat the Giant's roll of a single ten sided die.

    The game begins with the Halflings placing a wager
    into the pot. The Giant then rolls setting the 
    "Knee."

    The Halfling, you the player, then click to roll
    each die individually. You are trying to roll
    higher than the Knee. If you succeed, you get
    varying levels of payout depending on the height
    of the Knee.<br/><br/>

    <b>Intriguing events!</b>
    <ul>
      <li>
        If the Giant rolls a 1, this is the "Kick." The
        Giant wins automatically.
      </li>
      <li>
        If the Halflings roll two ones, that is the "Snake."
        The Giant flees in fear and the game resets to placing
        a wager.
      </li>
      <li>
        If the Halflings roll an 11 or 12 they leap into
        the "Maw." This is another automatic win for the Giant.
      </li>
      <li>
        If the Halflings hit the Knee exactly, they may chose to
        "split" their dice. The Halfling will then roll a total
        of <i>four</i> dice, each pair representing half of the
        doubled wager. Each pair rolled will follow the same
        rules as above.
      </li>
      <li>
        If the Halflings hit the Knee <i>again</i> while split
        they can choose to go lengendary by going "Legendary".
        They now roll <i>eight</i> dice, with each pair
        representing a quarter of their quadrupled wager.
      </li>
    </ul>

    <b>Payouts!</b>
    <ul>
      <li>If the Knee is 2-3, house pays 1:1</li>
      <li>If the Knee is 4-6, house pays 2:1</li>
      <li>If the Knee is 7-9, house pays 3:1</li>
      <li>If the Knee is 10, house pays 5:1</li>
    </ul>
  </p>
);
