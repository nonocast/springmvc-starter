package cn.nonocast.model;

import javax.persistence.*;

@Entity
public class User {
    private @Id @GeneratedValue Long id;

    private @Column(nullable=false) String name;

    private @Column String email;

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
