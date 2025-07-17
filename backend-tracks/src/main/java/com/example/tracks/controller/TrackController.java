package com.example.tracks.controller;

import com.example.tracks.dto.TrackRequest;
import com.example.tracks.model.Track;
import com.example.tracks.service.TrackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/tracks")
public class TrackController {
	
    @Autowired
    private TrackService trackService;

    @PostMapping
    public ResponseEntity<Track> createTrack(@RequestBody TrackRequest trackRequest) {
        Track createTrack = trackService.createTrack(trackRequest);
        return new ResponseEntity<>(createTrack, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Track>> getAllTracks() {
        List<Track> tracks = trackService.getAllTracks();
        return new ResponseEntity<>(tracks, HttpStatus.OK);
    }

    @GetMapping("/sorted")
    public ResponseEntity<List<Track>> getTracksSorted() {
        List<Track> sortedTracks = trackService.getTrackSortedByTitle();
        return new ResponseEntity<>(sortedTracks, HttpStatus.OK);
    }

    @DeleteMapping("/{trackId}")
    public ResponseEntity<Void> deleteTrack(@PathVariable Long trackId) {
        trackService.deleteTrack(trackId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{trackId}")
    public ResponseEntity<Track> updateTrack(@PathVariable Long trackId, @RequestBody TrackRequest trackRequest) {
        Track updatedTrack = trackService.updateTrack(trackId, trackRequest);
        return new ResponseEntity<>(updatedTrack, HttpStatus.OK);
    }
}
