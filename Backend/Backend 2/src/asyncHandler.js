//! doing with promises ( study and remove this bracket)
const asyncHandler =(requestHandler) => {
    (req,res,next) => Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
}

// for more standarization we write some more codes
// nodejs api error

export {asyncHandler}

//! this is try catch approach
// const asyncHandler = (fn) => async(req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (err) {
//         res.status(err.code || 500).json({
//             sucess:false,
//             message: err.message
//         })
        
//     }
// }

