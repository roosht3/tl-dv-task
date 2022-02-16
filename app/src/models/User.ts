import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
}, {
    timestamps: true
});


export default mongoose.model('User', userSchema);
