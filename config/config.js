// module.exports.server_port = 8987; // process.env.PORT || 3001;
// module.exports.db_url = 'mongodb://test:qwe123@ds133632.mlab.com:33632/sandbox';

module.exports.serverConfig = {
    // host: 'money-tracker-2018.herokuapp.com',
    host: 'localhost',
    port: process.env.PORT || 8987,
    db_url: 'mongodb://test:qwe123@ds133632.mlab.com:33632/sandbox'
};