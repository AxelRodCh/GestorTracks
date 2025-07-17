import React, { useState } from "react";
import TrackForm from "./components/TrackForm";
import TrackList from "./components/TrackList";

function App(){
  const [newTrack, setNewTrack] = useState(null);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">🎵 Gestor de Tracks</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <TrackForm onTrackCreada={setNewTrack} />
        </div>
        <div className="col-md-8">
          <TrackList newTrack={newTrack} />
        </div>
      </div>
    </div>
  );
}

export default App;
