## Parse Args In Command Line

> This topic is from a book named 《Clean Code》

we often need to parse command line arguments. There are many open source tools that can handle this task, but they can not entirely satisfy our demand. So, let's create it!

command line arguments consist of flags and values. flags that start with '-' are string, each flag should have more than one (include zero) value associated with it. If flag has more than one value, it represent a list. For example:

`-l -p 8080 -d /user/logos`
`-g this is a list -d 1 2 -3 5`

## Example

`-l -p 8080 -d /user/logos` -> `{
  l: true,
  p: 8080,
  d: "user/logos"
}`

`-g this is a list -d 1 2 -3 5` -> `{
  g: ["this", "is", "a", "list"],
  d: [1,2,-3,5]
}`

## Understand what is needed

* create a function named `parseArgs` that accepts one parameter: `args`
* l represents logging. If it exists, its value is true; otherwise, it's false
* p represents port, whose value is a number
* d represents directory, whose value is string
* If flag has more than one value, it represent a list
* If a flag is not specified in the argument, the parser should specify a default value. For example, false is a boolean, 0 is a number, "" is a string, and [] is a list.
* parseArgs should return an object containing all parsed parameters.
