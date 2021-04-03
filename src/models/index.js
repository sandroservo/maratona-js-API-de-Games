const {connect} = require('mongoose');

const MONGODB_URL = process.env.DATABASE;

console.log(MONGODB_URL);

module.exports = () => {
    const options = {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false,
    };
    return connect(MONGODB_URL, options);
};