const Joi = require('@hapi/joi');

module.exports = {
    createProject: Joi.object().keys({
        projectName: Joi.string().required(),
        projectTheme: Joi.string().required(),
        projectBudget: Joi.number().required().min(0),
        projectStatus: Joi.string().required(),
        projectClub: Joi.string().required(),
        projectChecker: Joi.array().items(Joi.string()),
        projectRevenue: Joi.array().items(Joi.object())
    }),
    createRevenue: Joi.object().keys({
        projectName: Joi.string().required(),
        revenueTitle: Joi.string().required(),
        revenueTag: Joi.string().required(),
        revenueCost: Joi.number().required(),
        revenueDescription: Joi.string().required(),
        revenueEvidence: Joi.string().required(),           //這裡之後需要更改
        revenueYear: Joi.number().required(),
        revenueMonth: Joi.number().required().max(12).min(1),
        revenueDay: Joi.number().required().max(31).min(1),
        revenuePrincipal: Joi.string().required(),
    }),
    addMember: Joi.object().keys({
        projectName: Joi.string().required(),
        projectMember: Joi.array().required().items(Joi.string())
    }),
    endProject: Joi.object().keys({
        projectName: Joi.string().required()
    }),
    getRevenue: Joi.object().keys({
        projectName: Joi.string().required(),
        skip: Joi.string(),
        limit: Joi.string(),
        year: Joi.string(),
        month: Joi.string(),
        day: Joi.string()
    })
}