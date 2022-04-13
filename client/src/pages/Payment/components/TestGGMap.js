import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 10.75948, lng: 106.6778 }}
        />
    );
}

const WrapperMap = withScriptjs(withGoogleMap(Map));

// const WrapperMap = () => {
//     return (
//         <div style={{ height: "100vh", width: "100%" }}>
//             <Map />
//         </div>
//     );
// };

export default function TestGGMap() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <WrapperMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
            a
        </div>
    );
}
