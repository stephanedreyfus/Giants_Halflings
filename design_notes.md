# Rules to be implemented (in pseudo code)
**Incoming Data**
- Giant Roll of `1-10`, result is called the `Knee`
- Halfing Roll of `(1-6 + 1-6)`
- Split or Legendary `2` or `4` sets of `(1-6 + 1-6)`

**Conditions**
- If Giant rolls 1 house wins (`Kick`)
- If Halflings roll >= `Knee` win -> calculate payout
- If Halflings roll 2 (snake-eyes) bet pushes (`Snake`)
- If Halflings roll => 11, Giant wins (`Maw`)
- If Halflings roll === `Knee`, split and double bet
    - Roll as normal for each split
    - Can split one more time (`Legendary`)

Only math needed is `sum`. Rest is all comparison.

**Payouts**
Knee is 2-3, house pays 1:1
Knee is 4-6, house pays 2:1
Knee is 7-9, house pays 3:1
Knee is 10, house pays 5:1

# Map of site
 - public
 - |- favicon

# Design Ideas
- Be able to switch between a dice roller API and an "in game" roller?
- Look up dice rolling animation
- 

# Tasks
- [ ] Decide basic visual layout
- [ ] Testing
- [ ] `Dice` and `dice rolling`
- [ ] `Pot` tracking
- [ ] `Payout` display and code
- [ ] Images?
- [ ] Wagering
- [ ] Keeping track of scores: cookies? db?