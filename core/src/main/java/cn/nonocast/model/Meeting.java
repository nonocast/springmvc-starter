package cn.nonocast.model;

import javax.persistence.*;
import java.util.*;

@Entity
public class Meeting {
    private @Id @GeneratedValue Long id;

    private @Column(nullable=false) String title;

    private @Column(nullable=false) Date openedAt;

    private @Column String chairman;

    private @Column String description;

    private @Column(nullable=false) String operatedBy;

    private @Column(nullable=false) Date updatedAt;


    private @OneToMany(mappedBy = "meeting", fetch = FetchType.EAGER) List<Document> documents;

    public  Meeting() { }

    public Meeting(String title, Date openedAt, String chairman, String description, String operatedBy, Date updatedAt) {
        this.title = title;
        this.openedAt = openedAt;
        this.chairman = chairman;
        this.description = description;
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

    public Date getOpenedAt() {
        return openedAt;
    }

    public void setOpenedAt(Date openedAt) {
        this.openedAt = openedAt;
    }

    public String getChairman() {
        return chairman;
    }

    public void setChairman(String chairman) {
        this.chairman = chairman;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public List<Document> getDocuments() {
        return documents;
    }

    public void setDocuments(List<Document> documents) {
        this.documents = documents;
    }
}