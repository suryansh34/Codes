// for each loop 


const coding = [ 'Javascript','C++','Python','C#',"Hypertext Markup Language"]

coding.forEach(function (val) {
    console.log(val);
    
})


// using arrow function 
const coding = [ 'Javascript','C++','Python','C#',"Hypertext Markup Language"]

coding.forEach((val) => {
    console.log(val);
    
})

// same for function:
const coding = [ 'Javascript','C++','Python','C#',"Hypertext Markup Language"]


function myName(Suryansh){
    console.log(Suryansh);
    
}

coding.forEach(myName)


// some more 

const coding = [ 'Javascript','C++','Python','C#',"Hypertext Markup Language"]

coding.forEach((val,index,arr)=> {
    console.log(`Value: ${val}, index: ${index}, arr: ${arr} `);
    
})
