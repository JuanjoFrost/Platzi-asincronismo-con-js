//Class 4 CALLBACKS
//we create a function
function sum(nu1,nu2){
    return nu1+nu2;
}
//Here we make the callback structure of the function
function calc(num1,num2, callback){ //we give it a function as a parameter
    return callback(num1,num2);
};
//we put the function as an argument
console.log(calc(2,2,sum));

//we make a function with the parameter callback,
//we print the date(new Date is the current date),
//we put a setTimeout for delaying the date showing.
//The function takes as a parameter a callback of a function.
function date(callback){
    console.log(new Date); 
    setTimeout(() => {
        let date = new Date;
        callback(date); //callback means printDate() 
    }, 3000)
};

//we make a function with 
function printDate(dateNow) {
    console.log(dateNow) //dateNow means date, and print the second date delayed three second
};

date(printDate);
