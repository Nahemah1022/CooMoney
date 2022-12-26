let mongoose = require('mongoose');

const dbSetting = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

module.exports = async() => {
    try{
        mongoose.connect(process.env.DB_URL, dbSetting, (err) => {
            if(err) {
                console.log(err.message);
                res.send("Something goes wrong: database: dbConnect");
            }
            console.log("db connect success on DB_URL: ", process.env.DB_URL);
        })
    } catch (err) {
        console.log("Something went wrong : database: dbConnect");
    }
} 