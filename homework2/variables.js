/**
 * VAR is the old way of declaring a variable the problem with var is it can be reasigned and it polutes the global scope
 * Let is the newer syntax and it scopes to the block context it currently resideds in
 * Const is again new syntax which is similar in that its block scoped but once declared and assigned it can't be reasigned later (const short for constant)
 */

var firstname = "Sean"; // globally scoped
let lastmame = "knowles"; // scoped to this file at the root
const MOOD = "happy"; // mood is a constant and will always be happy trying to reasign sad will not be possible now its declared

firstname = "seanyboy"; // var firstname is now reasigned
lastname = "knows everything"; // lastname is now reasigned
MOOD = "unhappy"; // error breaks the program

/**
 * Hosting is a when variables assignments get hoisted to the top of the execution context, this usually happens on the interpreters first pass through of the program
 * Just the declerations and named functions are hosited, also variables and named functions in block scope are hoisted to the top of their respective scopes.
 */
