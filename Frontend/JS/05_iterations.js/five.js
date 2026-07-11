// const coding = [ 'Javascript','C++','Python','C#',"Hypertext Markup Language"]

// coding.forEach((item) => {
//     console.log(item);    

// })



const coding = [ 'Javascript','C++','Python','C#',"Hypertext Markup Language"]

const values = coding.forEach((item) => {  
    console.log(item);     // this doessnot return the values 
    return item;

})

console.log(values);

// filter 

const myNums = [1,2,3,4,5,6,7,8,9,10]

myNums.filter((num)=> num > 4) // it returns , but do not give output 


// filter with arrow function 
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num)=> {
    return num > 4 // as we open scope  {} we need to return. (Explicit Function)
}) 


console.log(newNums);


// filter with foreach 


// question type  ---> where we push the element which is greater than 4 from one array to another array.
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = []

myNums.forEach((myNums)=>{
    if(myNums>4){
        newNums.push(myNums);
    }
    

})
console.log(newNums);


// some more examples

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//   const UserBooks = books.filter ((bk) => bk.genre === 'Non-Fiction')

//   const UserBooks = books.filter ((bk) => bk.publish >= 2000)

  const UserBooks = books.filter ((bk) => {return bk.publish >= 1995 && bk.genre ==='History'})


  console.log(UserBooks);
  