import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let Doctor = new Scheme({
    _id: {
        type: String,
        required: true,
        alias: "id"
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    approved: {
        type: Boolean,
        required: true
    },
    deleted: {
        type: Boolean,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    mail: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    licenceId: {
        type: String,
        unique: true,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    medicineBranch: {
        type: String,
        required: true
    }
})
export default mongoose.model('Doctor', Doctor, 'doctors');

