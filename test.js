/*
In javascript arithmetic with float/double can cause issues. For example, during calculation there may be too many decimals 
during calculations. This issue may issue because of how js handles the numbers  

So in case we have calculations that include floats, a solution can be to use toFixed method and multiply the result by 1 
because toFixed returns string
(example ) 
*/


let x = 0.2 + 0.1; //will be sth like 0.3000000000001

console.log(x.toFixed(1)*1); //will return 0.3 because to fixed will properly round the result and the *1 will convert it to number properly
