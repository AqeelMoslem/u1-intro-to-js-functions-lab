/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


// Exercise 2: `isAdult()`


/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult=(number) =>{
    if(number>= 18)
    {
        return 'Adult'
    }else { return 'Minor'}
}

console.log('Exercise 2 Result:', isAdult(21));

// Exercise 3: `isCharAVowel()`


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel=(char)=>{
    if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u' )
    {
        return true;
    }else {return false;} 
}


console.log('Exercise 3 Result:', isCharAVowel("a"));


// Exercise 4: `generateEmail()`


/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail=(name,domain) => {
    return `${name}@${domain}`
    }



console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

// Exercise 5: `greetUser()`


/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser=(name , time_of_day)=>{
   switch (time_of_day) {
    case 'morning':
        return `Good ${time_of_day},${name}!`
        break;
         case 'afternoon':
        return `Good ${time_of_day},${name}!`
        break;
         case 'evening':
        return `Good ${time_of_day},${name}!`
        break;
   
    default:
        break;
   }
}


console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


// Exercise 6: `maxOfThree()`


/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree=(number1,number2,number3)=>{
     array=[number1,number2,number3]
    let big= array [0]
    for(let i=1;i<=array.length;i++){
        if (array[i] > big){ 
            big=array[i];
        }
    }
    return big;
}   


console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));


// Exercise 7: `calculateTip()`


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip=(bill,tip)=>{

    let calc=(tip/100 )* bill
return calc
}

console.log('Exercise 7 Result:', calculateTip(50, 20));


// Exercise 8: `convertTemperature()`

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

const convertTemperature=(temp,cel)=>{
    if(cel === 'C'|| cel ==='c'){
        return `${((temp*1.8 )+ 32) (Fahrenheit) } (Fahrenheit)`
    } else {
        return `${((temp-32) * (5/9)) } (Celsius)` 
    }
}


console.log('Exercise 8 Result:', convertTemperature(32, "C"));


// Exercise 9: `basicCalculator()`

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator=(num1,num2,oper)=>{
    switch (oper) {
        
        case 'add':
            return num1+num2;
            break;
        case 'subtract':
            return num1-num2;
            break;
        case 'multiply':
            return num1*num2;
            break;
        case 'divide':
            return num1/num2;
            break;

    
        default:
            return ("the operation wrong")
            break;
    }
}


console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

const calculateGrade=(Grad) =>{
    if(Grad<60){return 'F'}
    else if(Grad>=60&& Grad<70) { return 'D'}
    else if(Grad>=70&& Grad<80) { return 'C'}
    else if(Grad>=80&& Grad<90) { return 'B'}
    else if(Grad>=90 && Grad<100) { return 'A'}
    else {return ('wrong Grade')}
}


console.log('Exercise 10 Result:', calculateGrade(85));

