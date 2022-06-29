let coins:number[] = [200, 100, 50, 20, 10, 5, 2, 1]
function getChange (payable:number, paid:number) {
  let change:number[] = [];
  let length:number = coins.length;
  let remaining = paid - payable; // we reduce this below

  for (let i = 0; i < length; i++) { // loop through array of notes & coins:
    let coin = coins[i];

    let times_coin_fits = Math.floor(remaining / coin); // no partial coins
    if(times_coin_fits >= 1) { // check coin fits into the remaining amount

      for(let j = 0; j < times_coin_fits ; j++) { // add coin to change x times
        change.push(coin);
        remaining = remaining - coin;  // subtract coin from remaining
      }
    }
  }
  return change;
};

export {
  getChange
}