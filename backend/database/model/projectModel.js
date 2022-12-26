const mongoose = require('mongoose');

ProjectSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    projectTheme: { type: String, required: true },
    projectBudget: { type: Number, required: true },
    projectChecker: { type: [String] },
    projectClub: { type: String, required: true },
    projectStatus: { type: String, enum: ['ONGOING', 'DONE'], required: true },
    projectRevenue: { type: [String] },
    projectTotalExpanse: { type: Number, required: true },
    projectTotalIncome: { type: Number, required: true },
    userAuthorization: { type: Boolean },
    projectTags: [{ 
        tagName: String,
        tagCode: String
     }]
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

module.exports = mongoose.model('Project', ProjectSchema);