
var tellmommy = require("tellmommy-services");

exports.handler = (event, context, callback) => {
    if (event.action == "register") {
        tellmommy.register(event, callback);
    } else if (event.action == "login") {
        tellmommy.login(event, callback);
    } else {
        callback("Unexpected action " + event.action);
    }
};