const mongoose = require('mongoose');

RevenueSchema = new mongoose.Schema({
    revenueTitle: { type: String },
    revenueTag: { type: String },
    revenueCost: { type: Number },
    revenueDescription: { type: String },
    revenueEvidence: { type: String },           //這裡之後需要更改
    revenueYear: { type: Number },
    revenueMonth: { type: Number },
    revenueDay: { type: Number },
    revenuePrincipal: { type: String },
    revenuePassbook: { type: String },
    revenueComment: { type: String },
    revenueStatus: { type: String, enum: ['PENDING', 'APPROVED', 'REJECTED'] }
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

module.exports = mongoose.model('Revenue', RevenueSchema);