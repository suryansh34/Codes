const course = {
    coursename: "javascript",
    price:"999",
    courseInstructor: "john"
}

//course.courseInstructor


const {courseInstructor: instructor, price: p /* this is used to give it a short name*/} = course
console.log(instructor,p)