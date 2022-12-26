const jwt = require('jsonwebtoken');

const getUserID = async (req) => {
    const token = req.headers.authorization.split(' ')[1];
    let userID = await jwt.verify(token, process.env.SECRET_KEY);
    console.log(userID);
    return userID.id
}

module.exports = getUserID;