import {mongoose , Schema}  from "mongoose";

const Info = new Schema({
    FullName:{
        type:String,
        required:true
    },
    Gmail:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
        
    },
    ProfilePic:{
        type:Object,
    }
});

export default mongoose.model("UserInfo",Info);