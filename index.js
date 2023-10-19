//Write a function to check if an input is an array or not
//Atempt 1
isArray = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      };
  console.log(isArray('w3resource'));
  console.log(isArray([1, 2, 4, 0, 22, 10, 9]));


//Attempt 2
function checkForArray(input) {
    if (Array.isArray(input)){
        return true;
    }
    else{
        return false
    }
}
  console.log(checkForArray('w3resource'));
  console.log(checkForArray([1, 2, 4, 0, 22, 10, 9]));
  console.log(checkForArray('Benedict', 'Olorunda'));


  //Write a  function to clone an array.
  // The slice(0) returns same value

  function cloneArray(clone) {
    return clone.slice();
    // return clone.slice(0);
  };
  console.log(cloneArray([1, 2, 4, 0]));
  console.log(cloneArray([1, 2, [4, 0]]));

  //Write a function to get the first element of an array and return the first 'n' elements
  function firstandnth(array, n) {
    if (array==null)
    return void 0;
    if (n == null)
    return array[0];
    if (n < 0)
    return [];
    return array.slice(array,n);
    // return array.slice(0,n);
  };

// function farray(arrs, s) {
//     if (arrs == '')
//     return 0;
//     if (s == 0)
//     return arrs[0];
//     if (s < 0)
//     return [];
//     return arrs.slice(arrs, s)
// }
  console.log(firstandnth([7, 9, 0, -2]));
  console.log(firstandnth([],3));
  console.log(firstandnth([7, 9, 0, -2],3));
  console.log(firstandnth([7, 9, 0, -2],6));
  console.log(firstandnth([7, 9, 0, -2],-3));


    //Write a function to get the last element of an array and return the first 'n' elements
    function lastandnth(array, n) {
        if (array==null)
        return void 0;
        if (n == null)
        return array[array.length -1];
        // return array.slice(array,n);
        // return array.slice(0,n);
        return array.slice(Math.max(array.length - n, 0)); 
      };

    console.log(lastandnth([7, 9, 0, -2]));
    console.log(lastandnth([7, 9, 0, -2],3));
    console.log(lastandnth([7, 9, 0, -2],6));

    //Write a simple JavaScript program to join all elements of the following array into a string.
    myColor = ["Red", "Green", "White", "Black"];
    console.log(myColor.join(" , "))
    console.log(myColor.toString(" "))
    console.log(myColor.join(" + "))

    

    //Write a function that checks an array of integers contains only prime numbers. It should return false if every number is not prime. Otherwise, return true.

    
    //Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

    //Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

    //Write a JavaScript program to sort the items of an array.

    const rearrangeNumbers = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
    rearrangeNumbers.sort((a, b) => a - b);
    console.log(rearrangeNumbers);


    //Write a JavaScript program to count the number of arrays inside a given array.

    function test(arr_nums){
      return arr_nums.filter(n=> n.length).length;  
     }
    arr_nums = [2,8,[6],3,3,5,3,4,[5,4]]
    console.log("Number of arrays inside the said array: "+test(arr_nums));
    arr_nums = [2,8,[6,3,3],[4],5,[3,4,[5,4]]]
    console.log("Number of arrays inside the said array: "+test(arr_nums));