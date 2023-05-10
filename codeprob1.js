//Explain why the following code will have the shown output in the console when it is run. 

// carTwo has a color property of "green" overwriting the color property of "blue" in carOne.  
//carTwo has a status property with running, passengers, and fuelTank properties overiding the running, passengers, and wiperFluid properties in carOne. 
// carTwo has a value property of 9000 overwriting the value property of 8000 in carOne.
const carOne = {
color: 'blue',
status: {
running: true,
passengers: 4,
wiperFluid: 'empty'

},
age: 5,
miles: 50000,
value: '8000'

}


const carTwo = {
color: 'green',
status: {
running: 'yes',
passengers: 2,
fuelTank: 'empty'

},
value: 9000

}

// 'combinedCar' when logged to console shows properties of combined car
// combinedCar merged (carOne & carTwo), properties of carTwo will overlap with carOne
const combinedCar = { // created by using spread operator:
...carOne,           // merge properties of 'carOne' and 'carTwo'
...carTwo        
}                   // meaning properties of carTwo will overwrite properties of carOne if they have the same name

console.log(combinedCar);

//why the output below?
//The color property is "green" -- overwritten by the color property in carTwo. 
// status property has the values of running, passengers, and fuelTank from carTwo-- overwrite the running passengers, wiperFluid properties -- carOne. 
//The age, miles, and value properties come from carOne, because they were not overwritten by carTwo.