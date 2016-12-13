var AppDispatcher = require("../dispatcher/AppDispatcher");
var AppConstants = require("../constants/AppConstants");

var EventEmitter = require('events').EventEmitter;
var merge = require('merge');

var _products = [], selectedProducts = [];
var showProductComponent = true, showCartComponent = false;

function loadVideoList(data){
    _products = data;
}

var ProductStore = merge(EventEmitter.prototype, {
    getVideoList: function() {
        return _products;  
    },
    emitChange: function(evt) {
        this.emit(evt);
    },
    addChangeListener: function(evt, callback) {
        this.on(evt, callback);
    },
    removeChangeListener: function(evt, callback) {
        this.removeListener(evt, callback);
    }
});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType) {
        case AppConstants.LOAD_LOCAL_VIDEOS:
            loadVideoList(action.data);
            break;
        default:
            return true;
    }
    ProductStore.emitChange('change');
    return true;
});

module.exports = ProductStore;