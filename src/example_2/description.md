## Parse Args In Command Line

> This topic is from a book named 《Clean Code》

we often need to parse command line arguments. There are many open source tools that can handle this task, but they can not entirely satisfy our demand. So, let's create it!

## Example

`get_name -> getName`

`_ab_c_ -> abC`

## Understand what is needed

* create a function named `toHump` that accepts one parameter: `str`
* `toHump` should return a string as result.
