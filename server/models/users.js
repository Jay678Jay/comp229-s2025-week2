import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    created: {
        type: Date, 
        default: Date.now,
    },
    updated: {
        type: Date,   
        default: Date.now,
    },
});

export default mongoose.model('Users', usersSchema);