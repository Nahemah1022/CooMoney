const jwt = require('jsonwebtoken');
const constants = require('../constants');

module.exports = async (req, res, next) => {
    let response = { ...constants.formatResponse };
    try{
        if(!req.headers.authorization){
            throw new Error(constants.validationResponse.TOKEN_MISSING);
        }
        const token = req.headers.authorization.split('Bearer')[1].trim();
        const decoded = await jwt.verify(token, process.env.SECRET_KEY||"my-secret");
        return next();
    } catch (err) {
        console.log("Something went wrong: tokenValidation", err);
        response.status = 401;
        response.message = err.message;
    }
    return res.status(response.status).send(response);
}