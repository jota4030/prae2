const crypto = require('crypto').randomBytes(256).toString('hex');

var config = {
    db_uri:"mongodb://uapa_dev:qwerty1234@localhost:27017/uapa_db",
    db_database: "uapa_db",
    db_secret: crypto,
}

exports.get = function get() {
    return config;
}