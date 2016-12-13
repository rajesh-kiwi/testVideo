var React = require("react");
var HomeStore = require("../stores/HomeStore");
var HomeActions = require("../actions/HomeActions");

function getAppState() {
    return {
        videoUrl: "",
        videoList: HomeStore.getVideoList()
    };
}

var Product = React.createClass({
    getInitialState: function() {
        return getAppState();
    },
    componentDidMount: function() {
        this.bindEvents();
        HomeActions.getVideoList();
    },
    componentWillUnmount: function() {
       this.removeEvents();
    },
    bindEvents: function(){
        HomeStore.addChangeListener('change', this._onChange);
    },
    removeEvents: function(){
        HomeStore.removeChangeListener('change', this._onChange);
    },
    _onChange: function() {
        console.log("on change evt", getAppState());
        this.setState(getAppState());
    },
    setIframeUrl: function(url) {
        console.log(url);
        url = url.replace("watch?v=", "v/");
        this.setState({videoUrl: url});
    },
    render: function() {
        var that = this;
        var html = this.state.videoList.map(function(video, index){
            return(
                <div key={index} style={{ "border" : "1px solid black", padding: "5px", width:"30%"}}>
                    <span style={{"margin": "0px 20px 0px 5px"}}>{video.name}</span>
                    <a href="#" style={{color: "blue"}} onClick={that.setIframeUrl.bind(null, video.url)}>{video.url}</a><br />
                </div>
            )
        });
        return(
            <div>
                <iframe src={this.state.videoUrl}>
                    <p>Your browser does not support iframes.</p>
                </iframe>
                {html}
            </div>
        )
    }
});

module.exports = Product;