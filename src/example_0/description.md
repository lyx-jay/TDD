## Scenario: Vending Machine Change Calculator Micro-Project

Imagine you are building a Vending Machine that allows people to buy any item it contains. The machine accepts coins and calculates the change to be returned to the customer, given the item price and the cash received.

### Example
If a customer buys an item costing 215 and pays 300 into the vending machine, the change will be 85p.
To dispense the 85 of change we should return four coins to the person: 50, 20, 10 and 5.
An array of these coins would look like: [50, 20, 10, 5]

## Requirements
As a customer, I want to buy a selected item from the vending machine and see what my change is as a result into the letious coins so that I can select one of the options and receive my change.

Acceptance criteria:

* A successful call of a function getChange should return the change value in the letious coins available
* Unit Tests should exist when the function is ready
* The selection of the desired return is out of scope

## Understand what is needed
* create a function named `getChange` that accepts two parameters: `totalPayable` and `cashPaid`
* For a given `totalPayable` (the total amount an item in the vending machine costs) and `cashPaid` (the amount of cash the customer paid into the vending machine), `getChange` should calculate the change the machine should return to the customer
* `getChange` should return change as an array of coins(largest to smallest) that vending machine will need to dispense to the customer.


## Specific steps

### First: Write a Failing Test

1. check if vitest works normally

```ts
import { test, expect } from 'vitest';

test('vitest should work normally', () => {
  expect(true).toBe(true);
})
```
when you see result in terminal, it represent vitest work well.
```bash
 ✓ src/example_0/index.spec.ts (1)

Test Files  1 passed (1)
     Tests  1 passed (1)
      Time  949ms (in thread 2ms, 47441.62%)
```
2. adding `getChange` function in `index.spec.ts`. You need to create a new test to check `getChange`

```ts
test('getChange(1,1) should equal [] - an empty array', () => {
  const res = getChange(1, 1);
  expect(res).toEqual([]);
})
```

Obviously, it will fail. Beacuse we didn't implement the getChange function. Now let's go back to `index.ts` to write the function.

> cheating is a good way to make tests pass, which means that making function return what the test function wants.

```ts
  function getChange(totalPayable:number, cashPaid:number):number[] {
    return [];
  }
```
Now, it pass!


### Second: Make the (failing) Test Pass

The `getChange` function needs to cater for two scenarios:
* when change should be returned 
* when it shouldn't. 

Currently, second scenario is implemented. So, if we add new tests involved first scenario, it still fail.

```ts
test('getChange(215, 300) should return [50, 20 ,10 ,5]', () => {
  const res = getChange(215, 300);
  expect(res).toEqual([50, 20, 10, 5]);
})
```

getChange function can be modified as:
```ts
function getChange(totalPayable:number, cashPaid:number):number[] {
    return [50, 20, 10, 5];
  }
```
Now, it pass, but original test fail.
> the TDD process requires that all tests should pass, not just the newly added one.


A new implementation of getChange that handles both scenarios could be:

```ts
function getChange(totalPayable:number, cashPaid:number): number[] {
  let change = [];

  if((cashPaid - totalPayable) != 0) { // Is any change required?
    change = [50, 20, 10, 5]; // just "enough to pass the failing test"
  }

  return change;
}
```

if we add more test, like:
```ts
test('getChange(486, 600) should return [50, 20 ,10 ,5]', () => {
  const res = getChange(486, 600);
  expect(res).toEqual([100, 10, 2, 2]);
})
```
we can still modify `getChange` to make test pass, like:
```ts
function getChange (totalPayable:number, cashPaid:number):number[] {
  let change:number[] = [];

  if((cashPaid - totalPayable) != 0) { // Is any change required?
    if(totalPayable == 486 && cashPaid == 600)
        change = [100, 10, 2, 2];
    else if(totalPayable == 215 && cashPaid == 300)
        change = [50, 20, 10, 5];
  }

  return change;
};
```
But, if we add thouands of tests, `getChange` function will add endless `if else` statement. That's too bad.

It's time to refactor `getChange` function.

### Third: Refactor the code you write

one of solutions is like:

```ts
let coins = [200, 100, 50, 20, 10, 5, 2, 1]
function getChange (payable:number, paid:number):number[] {
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
```

## NOTE: Test code first, business code second.
