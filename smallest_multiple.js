/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
  // do work here
  var smallestMultiple = 1;
  var notFound = true;

  while(notFound) { // check if it is smallest multiple
    for(var i = 1; i <= ceiling; i++) { // loop through numbers from 1 to "ceiling" to check
      if(smallestMultiple % i !== 0) { // if not a multiple of any one of the numbers
        i = 1; // reset loop
        smallestMultiple++; // check next number
      }
    }
    notFound = false; // if for loop is finished, smallest multiple is found
  }

  return smallestMultiple; // return smallest multiple
};