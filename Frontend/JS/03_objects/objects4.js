// de-structuring 
/*
de-structuring objects
*/
const course = {
    coursename: "javascript",
    price:"$99",
    courseInstructor: "john"
}

//course.courseInstructor


const {courseInstructor: instructor, price: p /* this is used to give it a short name*/} = course
console.log("Instructor: ",instructor,"   price: ",p)



/* API */


/*
 ---------This is json not object, it will also be given into an array type ( don't scare) 
 ------

{
    name:"Suryansh",
    branch:"Data Science",
    CGPA:"9.2"
}


this 
{
    {}
    {}
    {}
}

*/

// This is json
