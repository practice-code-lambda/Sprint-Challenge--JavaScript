// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

let consume = (x,y,cb)=>{
  console.log(cb(x,y))
} 


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
let add = (x,y)=> {
  return x + y
}
let multiply = (x,y)=> x * y
let greeting = (x,y)=> `Hello ${x} ${y}`

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

 return function() {
    console.log(internal);
    console.log(external)
    return 2
  };

}
let funfunfunction = myFunction();

console.log(funfunfunction())


let counter = function(){
  let count = 0


  return function(){
    count = count + 1
    return count

  } 
}

let outsideCount = counter()

console.log(outsideCount())
console.log(outsideCount())
let final = outsideCount()

console.log(final)

