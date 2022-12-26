const mongoose = require('mongoose');

UserProfileSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    userPhoto: { type: String },
    participateClubID: [String],
    userGender: {type: String, enum: ['MALE', 'FEMALE']},
}, {
    timestamps: true,
    toObject: {
        versionKey: false,
        transform: (doc, ret, options) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.password;
            return ret;
        }
    }
})

module.exports = mongoose.model('UserProfile', UserProfileSchema);