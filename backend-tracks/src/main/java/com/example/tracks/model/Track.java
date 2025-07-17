package com.example.tracks.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tracks")
public class Track {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name= "track_title", nullable = false)
    private String title;

    @Column(name= "track_albumName", nullable = false)
    private String albumName;

    @Column(name="track_releaseDate", nullable= false)
    private Date releaseDate;

    @Column(name="track_playCount", nullable= false)
    private Integer playCount;

    //Contructores
    public Track() {}

    public Track(String title, String albumName, Date releaseDate, Integer playCount) {
        this.title = title;
        this.albumName = albumName;
        this.releaseDate = releaseDate;
        this.playCount = playCount;
    }

    //Getters y setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getAlbumName() { return albumName; }
    public void setAlbumName(String albumName) { this.albumName = albumName; }

    public Date getReleaseDate() { return releaseDate; }
    public void setReleaseDate(Date releaseDate) {this.releaseDate = releaseDate; }

    public Integer getPlayCount() { return playCount; }
    public void setPlayCount(Integer playCount) { this.playCount = playCount; }
    
}