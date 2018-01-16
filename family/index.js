
var tellmommy = require("tellmommy-services");

exports.handler = (event, context, callback) => {
    if (event.action == "addFamily") {
        tellmommy.addFamily(event, callback);
    } else if (event.action == "getFamily") {
        tellmommy.getFamily(event, callback);
    } else if (event.action == "getFamily") {
        tellmommy.getFamily(event, callback);
    } else if (event.action == "updateFamily") {
        tellmommy.updateFamily(event, callback);
    } else if (event.action == "removeFamily") {
        tellmommy.removeFamily(event, callback);
    } else if (event.action == "addChild") {
        tellmommy.addChild(event, callback);
    } else if (event.action == "editChild") {
        tellmommy.editChild(event, callback);
    } else if (event.action == "removeChild") {
        tellmommy.removeChild(event, callback);
    } else if (event.action == "setRewardSystem") {
        tellmommy.setRewardSystem(event, callback);
    } else if (event.action == "setWordsOfAffirmation") {
        tellmommy.setWordsOfAffirmation(event, callback);
    } else {
        callback("Unexpected action " + event.action);
    }
};