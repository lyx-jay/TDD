## Scenario: Vending Machine Change Calculator Micro-Project

Imagine you are building a Vending Machine that allows people to buy any item it contains. The machine accepts coins and calculates the change to be returned to the customer, given the item price and the cash received.

### Example
If a customer buys an item costing 215 and pays 300 into the vending machine, the change will be 85p.
To dispense the 85 of change we should return four coins to the person: 50, 20, 10 and 5.
An array of these coins would look like: [50, 20, 10, 5]

## Requirements
As a customer, I want to buy a selected item from the vending machine and see what my change is as a result into the various coins so that I can select one of the options and receive my change.

Acceptance criteria:

* A successful call of a function getChange should return the change value in the various coins available
* Unit Tests should exist when the function is ready
* The selection of the desired return is out of scope

## Understand what is needed
* create a function named `getChange` that accepts two parameters: `totalPayable` and `cashPaid`
* For a given `totalPayable` (the total amount an item in the vending machine costs) and `cashPaid` (the amount of cash the customer paid into the vending machine), `getChange` should calculate the change the machine should return to the customer
* `getChange` should return change as an array of coins(largest to smallest) that vending machine will need to dispense to the customer.


## Specific steps

### First: Write a Failing Test

1. check if vitest works normally


### Second: Make the (failing) Test Pass

### Third: Refactor the code you write
