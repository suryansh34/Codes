// student management system 


const students = [
    { name: "Suryansh", marks: 96},
    { name: "Yishuraj", marks: 48},
    { name: "Aman", marks: 65},
    { name: "Lokesh", marks: 42},
]

console.log(students.length); // calculate length of students

// show all students
const arr = students.forEach(students=> {
    console.log(students.name);
})
console.log("***********************");

const passedStudents = students.filter(students => students.marks >= 45);
console.log("Passed Students are: ")
console.log(passedStudents)

console.log("***********************");

const failedStudents = students.filter(students => students.marks < 45);
console.log("Failed Students are: ")
console.log(failedStudents)

console.log("***********************")
console.log("Topper of the class is: ");


const topper = students.reduce((top,student) => {
    return students.marks > top.marks ? student : top;
})
console.log(topper);

console.log("***********************")

console.log("Average Marks: ");
const total = students.reduce((sum,students)=>{
    return sum + students.marks;
},0)
const average = total / students.length;
console.log(average);

console.log("***********************")

console.log("Sort Students by Marks: ")

const sortedMarks = students.sort((a,b)=> a.marks - b.marks);
// tricks
/* 
for ascending order use a.marks - b.marks and for descending order use b.marks - a.marks .
*/
console.log(sortedMarks);

console.log("***********************")
console.log("Search Student by Name: ");

const findStudent = students.find(findStudent => findStudent.name == "Suryansh")
console.log(findStudent);


console.log("***********************")
console.log("Name of different students: ");

const 