const Joi = require('@hapi/joi');
const constants = require('../constants');

const validateObjectSchema = async (data, schema) => {
    try{
        await schema.validateAsync(data, { convert : false });
    } catch (error) {
        let err = error.details[0];
        return err;
    }
}

module.exports = {
    validateBody: schema => {
        return async (req, res, next) => {
            let response = { ...constants.formatResponse };
            let err = await validateObjectSchema(req.body, schema);
            if(err){
                response.message = constants.apiValidationResponse.BAD_REQUEST;
                response.data = err;
                return res.status(response.status).send(response);
            }
            return next();
        }
    },
    validateQueryParams: schema => {
        return async (req, res, next) => {
            let response = { ...constants.formatResponse };
            let err = await validateObjectSchema(req.query, schema);
            if(err){
                response.message = constants.apiValidationResponse.BAD_REQUEST;
                response.data = err;
                return res.status(response.status).send(response);
            }
            return next();
        }
    }
}