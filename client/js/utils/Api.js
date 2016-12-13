var $ = require("jquery");

var getVideoList = function(callback) {
    // ajax req.
    
    var videoList = [
        {url: "https://www.youtube.com/embed/XGSy3_Czz8k", name: "Song"},
		{url: "https://www.youtube.com/watch?v=vLPgScAbBMk", name: "Cricket match"},
    ];
    
    callback(videoList);
}

module.exports = {
    getVideoList: getVideoList
}