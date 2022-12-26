const mongoose = require('mongoose');

ClubSchema = new mongoose.Schema({
    clubName: { type: String, required: true },
    clubImage: { type: String },
    clubMembers: [String],
    clubProjects: [String],
    clubPassbook: [{
        passbookName: { type: String, required: true },
        passbookBalance: { type: Number, required: true },
        passbookOrder: { type: Number, required: true }
    }],
    clubIntro: String,
    clubAnnounce: [{
        establisher: { type: String, required: true },
        info: { type: String, required: true },
        date: { type: String, required: true },
        id: { type: Number, required: true }
    }],
    clubApplication: [{
        applicant: { type: String, required: true },
        date: { type: String, required: true },
        reason: { type: String }
    }]
}, {
    timestamps: true,
    toObject: {
        versionKey: true,
        transform: (doc, ret, options) => {
            ret.id = doc._id;
            delete ret._id;
            return ret;
        }
    }
})

module.exports = mongoose.model('Club', ClubSchema);