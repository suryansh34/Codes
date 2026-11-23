import mongoose from  "mongoose"

const doctorSchema = new mongoose.Schema({
  name : {
    type : String,
    reuired:true
  },
  salary: {
    type: String, //can be in $200 not 200 ( so used String)
    required:true,
  },
  qualification:{
    type: String,
    required:true,
  },
  experienceInYears: {
    type: Number,
    default : 0
  },
  worksInHospitals : [{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  }]
},{timestamps:true})

export const Doctor = mongoose.model("Doctor",doctorSchema)