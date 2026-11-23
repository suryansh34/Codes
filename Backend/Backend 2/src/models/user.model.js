import mongoose, { ModifiedPathsSnapshot, Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //we will use cloudinary url ( similar to AWS Service )
      required: true,
    },
    coverImage: {
      type: String, //we will use cloudinary url ( similar to AWS Service )
    },
    watchhistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refershToken: {
      type: String,
    },
  },
  {
    timstamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAcessToken = function(){
    jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullName:this.fullName
    },
    process.env.ACCESS_TOKEN.SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
)
}
userSchema.methods.generateRefreshToken = function(){
    jwt.sign({
        _id:this._id,
    },
    process.env.REFRESH_TOKEN.SECRET,
    {
        expiresIn:process.env.REFRESTOKEN_EXPIRY
    }
)
}

export const User = mongoose.model("User", userSchema);
