var Api = require("../utils/Api.js");
var AppDispatcher = require("../dispatcher/AppDispatcher");
var AppConstants = require("../constants/AppConstants");

var getVideoList = function(){
    Api.getVideoList(function(result){
        loadVideoList(result);
    });
}

var loadVideoList = function(data) {
    AppDispatcher.handleAction({
        actionType: AppConstants.LOAD_LOCAL_VIDEOS,
        data: data
    })
}

module.exports = {
    getVideoList: getVideoList,
    loadVideoList: loadVideoList
};