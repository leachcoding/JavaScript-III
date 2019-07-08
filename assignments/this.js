/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: When in the global scope, the value of “this” will be the window/console Object.

* 2. Implicit Binding: Whenever a function is called by a preceding dot, the object before that dot is this.

* 3. New Binding: A constructor function is a function that returns an object. It’s an object creator. We use them a lot in JavaScript and they lend themselves to a paradigm called: ‘Object Oriented Programming’. CordialPerson will be a function that creates an object for us. When we call it we have to use the new keyword.

* 4. Explicit Binding: Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function myName(name) {
  console.log(this); //This will set value of this as the window/console Object
  return name;
}

myName("Jay Leach");

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
