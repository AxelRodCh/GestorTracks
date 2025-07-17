package com.example.tracks.service;

import com.example.tracks.dto.TrackRequest;
import com.example.tracks.model.Track;
import java.util.List;

public interface TrackService {
    Track createTrack(TrackRequest trackRequest);
    List<Track> getAllTracks();
    List<Track> getTrackSortedByTitle();
    void deleteTrack(Long trackId);
    Track updateTrack(Long trackId, TrackRequest trackRequest);
}
