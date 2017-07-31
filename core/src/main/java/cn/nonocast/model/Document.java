package cn.nonocast.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Document {
    private @Id @GeneratedValue Long id;

    private @Column(nullable=false) String title;

    private @Column(nullable=false) String path;

    private @Column(nullable=false) Long size;

    private @Column(nullable=false) String operatedBy;

    private @Column(nullable=false) Date updatedAt;

    private @ManyToOne @JoinColumn(name="meeting_id") @JsonIgnore Meeting meeting;

    public Document() {}

    public Document(String title, String path, Long size, String operatedBy, Date updatedAt) {
        this.title = title;
        this.path = path;
        this.size = size;
        this.operatedBy = operatedBy;
        this.updatedAt = updatedAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Long getSize() {
        return size;
    }

    public void setSize(Long size) {
        this.size = size;
    }

    public String getOperatedBy() {
        return operatedBy;
    }

    public void setOperatedBy(String operatedBy) {
        this.operatedBy = operatedBy;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Meeting getMeeting() {
        return meeting;
    }

    public void setMeeting(Meeting meeting) {
        this.meeting = meeting;
    }
}
