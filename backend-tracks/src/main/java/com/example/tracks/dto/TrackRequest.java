package com.example.tracks.dto;

import java.util.Date;

public class TrackRequest {
    
    private String title;
    private String albumName;
    private Date releaseDate;
    private Integer playCount;

    //Constructor
    public TrackRequest() {}

    public TrackRequest(String title, String albumName, Date releaseDate, Integer playCount) {
        this.title = title;
        this.albumName = albumName;
        this.releaseDate = releaseDate;
        this.playCount = playCount;
    }

    //Getters y setters
    
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getAlbumName() { return albumName; }
    public void setAlbumName(String albumName) { this.albumName = albumName; }

    public Date getReleaseDate() { return releaseDate; }
    public void setReleaseDate(Date releaseDate) {this.releaseDate = releaseDate; }

    public Integer getPlayCount() { return playCount; }
    public void setPlayCount(Integer playCount) { this.playCount = playCount; }
    
}
