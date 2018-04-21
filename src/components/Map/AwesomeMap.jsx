import React, { Component } from "react";
import HEREMap from "react-here-maps";


function AwesomeMap({ ...props }) {
    const center = {
        lat: 51.5,
        lng: 0,
    };
    return (
        <HEREMap
            appId={'win78216@gmail.com'}
            appCode={'killer190'}
            center={center}
            zoom={8}
            hidpi={true}
        />
    );
}

export default (AwesomeMap);