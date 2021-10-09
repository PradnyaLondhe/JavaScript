// console.log("Hello from Day_3 Assignment");

let arr = ["Himanshu","Rohit","Viplav","Diane","Sumedh"];

console.log(arr.length);

// Print elements of array using while loop

let i = 0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}

// Print elements of array using do while loop

let j = 0;
do{
    console.log(arr[j]);
    j++;
}while(j<arr.length)  

// The grade example using ternary operator

// 75-100 - A
// 60-75 - B
// 35-60 - C
// Below 35 - F

let marks = 30;
let grade;

(marks>=75 && marks<=100) ? (grade = "A") 
    : (marks>=60 && marks < 75) ? (grade = "B")
    : (marks>=35 && marks < 60) ? (grade = "C")
    : (grade = "F");

console.log(`The candidate has scored ${marks} marks and secured ${grade} grade`);