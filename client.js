// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  let money = employees.reviewRating;
  let eNumber = employees.employeeNumber
//   Those who have a rating of a 2 or below should not receive a bonus.
for()
if(money <= 2){
  console.log("Do not give bonus");
}
// Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
else if(money === 3){
  console.log()// 4% of annualSalary
}
// Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
else if (money === 4){
  console.log() // 6%
}
// Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
else if (money === 5){
  console.log() //10%
}
// If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
if(eNumber ===)
// However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.

// No bonus can be above 13% or below 0% total.
}
employees.bonusPrecentage = 0
calculateIndividualEmployeeBonus('atticus')
