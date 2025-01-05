
//Q1: Using the variable personsCreate a function called firstName that accept an objectand return all the first name of the person insides


let persons={
    firstName:"John", 
    firstName2:"ahlam",
    firstName3:"sara", 
    firstName4:"aseel",
    firstName5:"rama", 
}

function callValue(){
   return Object.values(persons);

}

callValue(persons)




console.log(Object.values(persons))


 //Q2:Create a function called objectToArray that accept an object and return an array othe keys and values in this object

 function  Person_array(firstName , age){

    this.firstName=firstName,
    this.age=age
 }

let person_array1= new Person_array( "sara", 25)
let person_array4= new Person_array( "ag", 2)


console.log(person_array1)
console.log(person_array4)


//Q3part1:Create a constructor function called Car that accepts the following parameters:

function  Cars(brand , model ,year){

    this.brand=brand,
    this.model=model,
    this.year=year
    this.getDetails = function() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    };
}
 let car1 = new Cars("Toyota", "Corolla", 2020);
 let car2 = new Cars("Honda", "Civic", 2021);
let car3 = new Cars("Ford", "Focus", 2019);


let arr=[ car1 ,car2 , car3]


for( let i=0 ; i<arr.length ; i++){
    console.log(arr[i].getDetails());

}


//Q3part2::Inside the constructor, define a method called getDetails that returns a string inthe following format:

//Q3part3:Create three instances of the Car object with different values for brand, model,and year.

//Q3part3:Store these instances in an array and loop through the array to print the details ofeach car using the getDetails method.