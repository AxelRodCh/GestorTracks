package com.example.tracks.service.impl;

import com.example.tracks.dto.TrackRequest;
import com.example.tracks.model.Track;
import com.example.tracks.repository.TrackRepository;
import com.example.tracks.service.TrackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TrackServiceImpl implements TrackService {

    @Autowired
    private TrackRepository trackRepository;

    @Override
    public Track createTrack(TrackRequest trackRequest) {
        Track track = new Track(
            trackRequest.getTitle(),
            trackRequest.getAlbumName(),
            trackRequest.getReleaseDate(),
            trackRequest.getPlayCount()
        );
        return trackRepository.save(track);
    }

    @Override
    public List<Track> getAllTracks() {
        return trackRepository.findAll();
    }

    @Override
    public List<Track> getTrackSortedByTitle() {
        return trackRepository.findAllByOrderByTitleAsc();
    }

    @Override
    public void deleteTrack(Long id) {
        trackRepository.deleteById(id);
    }

    @Override
    public Track updateTrack(Long trackId, TrackRequest trackRequest) {
        Track existingTrack = trackRepository.findById(trackId)
            .orElseThrow(() -> new RuntimeException("Track not found with id: " + trackId));
        
        existingTrack.setTitle(trackRequest.getTitle());
        existingTrack.setAlbumName(trackRequest.getAlbumName());
        existingTrack.setReleaseDate(trackRequest.getReleaseDate());
        existingTrack.setPlayCount(trackRequest.getPlayCount());
        
        return trackRepository.save(existingTrack);
    }
}