package cn.nonocast.model;

import javax.persistence.*;

@Entity
public class Meeting {
    private @Id @GeneratedValue  Long id;

    private @Column(nullable=false) String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
