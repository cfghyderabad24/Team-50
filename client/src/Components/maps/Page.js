
import { useState } from "react";
import Search from "./Search";
import GoogleMap from "./Googlemaps";

export default function Page() {
  const [coordinates, setCoordinates] = useState({ latitude: "43.793607699999995", longitude: "-79.3284823" });
  return (
    
    <div className="d-flex gap-1 search-map-wrap">
      <div className="w-25">
        <Search coordinates={coordinates} setCoordinates={setCoordinates}/>
      </div>
      <div className="w-75">
        <GoogleMap coordinates={coordinates}/>
      </div>
    </div>
  );
}