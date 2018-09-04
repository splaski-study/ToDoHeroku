module.exports.serverConfig = {
    // protocol: 'https',
    protocol: 'http',
    // host: 'money-tracker-2018.herokuapp.com',
    host: 'https://todoapp-heroku.herokuapp.com',
    port: process.env.PORT || 8987,
    db_url: 'mongodb://test:qwe123@ds133632.mlab.com:33632/sandbox'
};