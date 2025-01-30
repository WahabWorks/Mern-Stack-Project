import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength: [8, 'Name must be at least 3 characters long'], // Custom message for minlength
        maxlength: [20, 'Name cannot exceed 50 characters'], // Custom message for maxlength
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type: String,
        required:true,
        minlength: 8
    },
     role: {
      type: String,
    //   enum: ['admin', 'user'],
      default: 'user'
     },
     createdAt: {
      type: Date,
      default: Date.now
     },
     lastLogin: {
      type: Date
     }
},
{timestamps:true}
)

export default mongoose.Model("User",userSchema)