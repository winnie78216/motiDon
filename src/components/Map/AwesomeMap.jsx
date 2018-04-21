import React, { Component } from "react";


class AwesomeMap extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }

    componentDidMount = () => {
        console.log(this.myRef)
        var platform = new window.H.service.Platform({
            'app_id': 'NsjvkdO6HINUXCU1xAwV',
            'app_code': 'rvodtjJNT8Ywk8Bnp-Hxbw'
          });
        var defaultLayers = platform.createDefaultLayers();
        var maptypes = platform.createDefaultLayers();
        var map = new window.H.Map(
            this.myRef.current,
            maptypes.normal.map);
    }
    render() { 

    return (
        <div style={{height:100, width:100}} ref={this.myRef} > </div> 
    );
}
}

export default (AwesomeMap);