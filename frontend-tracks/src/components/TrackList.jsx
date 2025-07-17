import React, { useEffect, useState } from "react";
import axios from "axios";

const TrackList = ({ newTrack }) => {
  const [tracks, setTrack] = useState([]);
  const [trackEnEdicion, setTrackEnEdicion] = useState(null);
  const [formEdicion, setFormEdicion] = useState({
    titulo: "",
    albumName: "",
    releaseDate: "",
    playCount: "",
  });
  const [sortOrder, setSortOrder] = useState("default"); // 'default', 'asc', 'desc'

  useEffect(() => {
    loadTracks();
  }, []);

  useEffect(() => {
    if (newTrack) {
      setTrack((prev) => [...prev, newTrack]);
    }
  }, [newTrack]);

  const loadTracks = async () => {
    try {
      const res = await axios.get("http://localhost:8080/tracks");
      setTrack(res.data);
    } catch (error) {
      console.error("Error al cargar la nota", error);
    }
  };

  const deleteTracks = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/tracks/${id}`);
      setTrack(tracks.filter((track) => track.id !== id));
    } catch (error) {
      console.error("Error al eliminar la cancion", error);
    }
  };

  const editTracks = (track) => {
    setTrackEnEdicion(track.id);
    setFormEdicion({
      title: track.title,
      albumName: track.albumName,
      releaseDate: track.releaseDate,
      playCount: track.playCount,
    });
  };

  const cancelarEdicion = () => {
    setTrackEnEdicion(null);
    setFormEdicion({
      title: "",
      albumName: "",
      releaseDate: "",
      playCount: "",
    });
  };

  const guardarCambios = async (id) => {
    try {
      const res = await axios.put(`http://localhost:8080/tracks/${id}`, formEdicion);
      setTrack(tracks.map((track) => (track.id === id ? res.data : track)));
      cancelarEdicion();
    } catch (error) {
      console.error("Error al actualizar el track", error);
    }
  };

  const sortTracks = (order) => {
    setSortOrder(order);
    let sortedTracks = [...tracks];
    
    switch(order) {
        case 'asc':
            sortedTracks.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'desc':
            sortedTracks.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case 'playCount':
            sortedTracks.sort((a, b) => b.playCount - a.playCount);
            break;
        default:
            loadTracks();
            return;
    }
    
    setTrack(sortedTracks);
};

const loadSortedTracks = async () => {
    try {
        const res = await axios.get("http://localhost:8080/tracks/sorted");
        setTrack(res.data);
        setSortOrder('asc');
    } catch (error) {
        console.error("Error al cargar tracks ordenados", error);
    }
};

  return (
    <div className="card">
      <div className="card-header bg-info text-white">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <h3 className="card-title mb-0">🎵 Lista de Tracks</h3>
          <div className="btn-group" role="group" aria-label="Ordenar tracks">
            <button
              type="button"
              className={`btn btn-sm ${sortOrder === 'default' ? 'btn-light' : 'btn-outline-light'}`}
              onClick={() => sortTracks('default')}
              title="Orden original"
            >
              <i className="fas fa-list"></i>
            </button>
            <button
              type="button"
              className={`btn btn-sm ${sortOrder === 'asc' ? 'btn-light' : 'btn-outline-light'}`}
              onClick={() => sortTracks('asc')}
              title="Ordenar por título A-Z"
            >
              <i className="fas fa-sort-alpha-down"></i>
            </button>
            <button
              type="button"
              className={`btn btn-sm ${sortOrder === 'desc' ? 'btn-light' : 'btn-outline-light'}`}
              onClick={() => sortTracks('desc')}
              title="Ordenar por título Z-A"
            >
              <i className="fas fa-sort-alpha-up"></i>
            </button>
            <button
              type="button"
              className={`btn btn-sm ${sortOrder === 'playCount' ? 'btn-light' : 'btn-outline-light'}`}
              onClick={() => sortTracks('playCount')}
              title="Ordenar por reproducciones"
            >
              <i className="fas fa-chart-line"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        {tracks.length === 0 ? (
          <div className="alert alert-info text-center">
            <i className="fas fa-music"></i> No hay tracks disponibles. ¡Agrega
            el primero!
          </div>
        ) : (
          <div className="row">
            {tracks.map((track) => (
              <div key={track.id} className="col-12 mb-3">
                <div className="card border-left-primary shadow-sm">
                  <div className="card-body">
                    {trackEnEdicion === track.id ? (
                      // Edit mode
                      <div>
                        <div className="mb-2">
                          <input
                            type="text"
                            className="form-control mb-2"
                            value={formEdicion.title}
                            onChange={(e) =>
                              setFormEdicion({ ...formEdicion, title: e.target.value })
                            }
                            placeholder="Título"
                          />
                          <input
                            type="text"
                            className="form-control mb-2"
                            value={formEdicion.albumName}
                            onChange={(e) =>
                              setFormEdicion({ ...formEdicion, albumName: e.target.value })
                            }
                            placeholder="Álbum"
                          />
                          <input
                            type="date"
                            className="form-control mb-2"
                            value={formEdicion.releaseDate}
                            onChange={(e) =>
                              setFormEdicion({ ...formEdicion, releaseDate: e.target.value })
                            }
                          />
                          <input
                            type="number"
                            className="form-control mb-2"
                            value={formEdicion.playCount}
                            onChange={(e) =>
                              setFormEdicion({ ...formEdicion, playCount: e.target.value })
                            }
                            placeholder="Reproducciones"
                          />
                        </div>
                        <button
                          onClick={() => guardarCambios(track.id)}
                          className="btn btn-success btn-sm me-2"
                        >
                          <i className="fas fa-save"></i> Guardar
                        </button>
                        <button
                          onClick={cancelarEdicion}
                          className="btn btn-secondary btn-sm"
                        >
                          <i className="fas fa-times"></i> Cancelar
                        </button>
                      </div>
                    ) : (
                      // View mode
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h5 className="card-title text-primary mb-1">
                            🎤 {track.title}
                          </h5>
                          <p className="card-text mb-1">
                            <strong>Álbum:</strong> {track.albumName}
                          </p>
                          <p className="card-text mb-1">
                            <strong>Reproducciones:</strong>
                            <span className="badge bg-success ms-1">
                              {track.playCount}
                            </span>
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              <i className="fas fa-calendar"></i> Lanzado el{" "}
                              {track.releaseDate}
                            </small>
                          </p>
                        </div>
                        <div className="col-4 text-end">
                          <button
                            onClick={() => editTracks(track)}
                            className="btn btn-warning btn-sm me-2"
                            title="Editar track"
                          >
                            <i className="fas fa-edit"></i> Editar
                          </button>
                          <button
                            onClick={() => deleteTracks(track.id)}
                            className="btn btn-danger btn-sm"
                            title="Eliminar track"
                          >
                            <i className="fas fa-trash"></i> Eliminar
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackList;
