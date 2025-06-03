import mongoose from 'mongoose';

const contactsSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    }, 
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

export default mongoose.model('Contacts', contactsSchema);