class Student {
  constructor(name,birthYear,weight,height){
    this.name = name;
    this.birthYear = birthYear;
    this.weight = weight;
    this.height = height;
  }
  

  getBMI(){
    return this.weight / this this.height ** 2;
  }
  
  getAge(){
    return new Date().getFullYear - this.birthYear;
  }
}

const generateNumber = (min, max) => {
  return Math.round(Math.random() * (max-min)) + min;
};

const thisYear = new Date().getFullYear();
const student = [];

for (let i = 1; i <= 20; i++) {
  const student = new Student('Student ' + i, generateNumber(1970, thisYear), generateNumber(40, 120), generateNumber(155, 190));
}

let averageBMI;
let averageAge;
let studentWIthMaxBMI;
let studentWIthMinBMI;
let youngest;
let oldest;


