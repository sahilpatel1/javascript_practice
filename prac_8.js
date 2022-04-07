//using the if, else if, and else statements in js
function prime_number(n)
{
    var count = 0;
    var divider = 1; //start with 1 to n

    while(count <= 2 && divider <= n)
    {
        if (n % divider == 0 ) 
        {
            count += 1
        }
        divider += 1 //increment the divider by 1 on every iteration
    }

    if (count > 2)
    {
        console.log(n + " is not a prime number")
    }
    else 
    {
        console.log(n + " is prime")
    }
}

//prime_number(10)

//console.log(parseInt("4F", 16))

// == checks only for equality in value
console.log('4' == 4) //prints true

// === checks for equality in terms of value and type of the two
// values being compared
console.log('4' === 4) //prints false as the types are different

var key = 45

//what does undefined mean

/*
variable used in the code doesn't exist
variable is not assigned to any value
property doesn't exist
*/

