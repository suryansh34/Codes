### ***Backend Notes:***





We are doing mongoose for ODM



famous tool is : MoonModler (



for data modeling in free:

eraser.io





\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*



##### ***Data Modelling:***





For practical approach of data modelling

we can use codesanbox

stackblitz



we will be using stackblitz

we have created a models folder

under it we have Todos, under this we have todo.models.js



first know how mongoose made its model

1\. import the mongoose

2\. built a schema ( using new schema)

3\. export a const and user



Note: the model of the mongoose get converted into smallcase and 's' / means plural in the databases.



we can make different field under the objects of schema ( mongoose documentation):

can be written as => username: String;

but we can write in this way -> username : {

&#x20;     type:String,

&#x20;     required: true,

&#x20;     unique:true,

&#x20;     lowercase:true

&#x20;   },



study more in documentation mongoose validation custom error messages





Timestamp:



we have createdAt, updatedAt





while writing a schema { we have different users on our site , so we make who created this schema , so we use createdBy ( Under this we have special type( mongoose.schema.Types.ObjectId) and refernce ( under this we give the same name that of the model name )





Note: we give the model name in singular form usually

nOte: in array order matter but not in objects





In MonogDB product Image is stored in buffer in databases but not convenient , so we use of in form of buckets to store the images and videos (there is a service ->  cloudnary)





Every Schema have their own Id ( using underscores , we will be going to study in the monogDB)









\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## ***Structure of the backend.***



we are making a production based projects ( backend of youtube)

so we are going to make it



we need

we have src , public

under the src we have controllers db middlewares modles routes utils



prettier helps multiple







\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*



\*\*\*How to connect database in MERN with debugging



NOte : be take care of\*\*\* try catch , promises , async await in databases

in production IIFE start with Semi-Colon



In Node their are different types of exit function each have their different codes for her we are using exit(1)

we have to set connection.host to prevent some issues.



to load as early as our site loads.

so this is done now
we have not using dbname
we are introducing a experimental features
-r dotenv/config --experimental-json-modules in package.json.



\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*



Custom api response and error handling

asynchronous method is completed it returns a promise , when db is connected use .then and catch



IN Express we take care of Request(request.params,request.body,request.cookies) and Resppons

we need cookie-parser and cors
Note: when we use middlewares we use app.use ( when we need configuration settings) not app.get , app.post

Middlewares: middleware is a function that runs between the incoming client request and the final server response.
for sending the data to frontend earlier we have (req,res) but we have four parameters (err,req,res,next)

What is asyncHandler?

asyncHandler is a higher-order function.

A higher-order function is a function that takes another function as an argument and possibly returns a new function.



Why is asyncHandler needed?

In Express.js, if an asynchronous function throws an error, you need to explicitly pass that error to the next function for the Express error-handling middleware to catch it. Without this, your server might crash or not handle the error properly.



Different Variations



Version 1: The normal function

const asyncHandler = () => {};

This is a simple function



Version 2: The higher-order function

const asyncHandler = (func) => {

&#x20; return () => {};

};

Takes a function (func) as an argument.

Returns a new function.



Version 3: The higher-order async function

const asyncHandler = (func) => {

&#x20; return async () => {};

};

Same as above, but the returned function is asynchronous (async).

Used when the inner function (func) involves asynchronous operations.


we have also made an ApiError.js and in this we make a class under it we make constructor and also we used super keyword for this instance and used a conditional and then exported this 

in ApiResponse.js statusCode is less than 400 

