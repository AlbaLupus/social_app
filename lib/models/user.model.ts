import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    id: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    image:String,
    bio:String,
    threads:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Thread'
        }
    ],//one user can have multiple refrences to threads that are stored in the Db
    onboarded: {type: Boolean, default: false,},
    communities:[{type:mongoose.Schema.Types.ObjectId, ref: 'Community'}],
});

const User = mongoose.models.User||mongoose.model('User', userSchema);

export default User;