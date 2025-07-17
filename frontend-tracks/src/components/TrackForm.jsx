import React, { useState } from "react";
import axios from "axios";

const TrackForm = ({ onTrackCreada }) => {
    const [title, setTitle] = useState("");
    const [albumName, setAlbumName] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [playCount, setPlayCount] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTrack = { title, albumName, releaseDate, playCount };
        try{
            const res = await axios.post("http://localhost:8080/tracks" , newTrack);
            onTrackCreada(res.data);
            setTitle("");
            setAlbumName("");
            setReleaseDate("");
            setPlayCount("");
        }catch(error){
            console.log("Error al crear la nota", error);
        }
    };

    return (
        <div className="card">
            <div className="card-header bg-primary text-white">
                <h3 className="card-title mb-0">🎤 Crear Nuevo Track</h3>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Título</label>
                        <input
                            id="title"
                            type="text"
                            className="form-control"
                            placeholder="Título de la canción"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="albumName" className="form-label">Álbum</label>
                        <input
                            id="albumName"
                            type="text"
                            className="form-control"
                            placeholder="Nombre del álbum"
                            value={albumName}
                            onChange={(e) => setAlbumName(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="releaseDate" className="form-label">Fecha de Lanzamiento</label>
                        <input
                            id="releaseDate"
                            type="date"
                            className="form-control"
                            value={releaseDate}
                            onChange={(e) => setReleaseDate(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="playCount" className="form-label">Reproducciones</label>
                        <input
                            id="playCount"
                            type="number"
                            className="form-control"
                            placeholder="Número de reproducciones"
                            value={playCount}
                            onChange={(e) => setPlayCount(e.target.value)}
                            required
                            min="0"
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-success w-100">
                        <i className="fas fa-plus"></i> Guardar Track
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TrackForm;