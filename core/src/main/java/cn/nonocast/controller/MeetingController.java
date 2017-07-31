package cn.nonocast.controller;

import cn.nonocast.model.Meeting;
import cn.nonocast.repository.MeetingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RepositoryRestController
@RequestMapping("/rest/meetings")
public class MeetingController {
    @Autowired
    private MeetingRepository meetingRepository;

    @RequestMapping(method= RequestMethod.GET, path="/{id}", produces = "application/hal+json")
    public ResponseEntity<Meeting> findOne(@PathVariable Long id) {
        Meeting meeting = meetingRepository.findOne(id);
        return new ResponseEntity<Meeting>(meeting, HttpStatus.OK);
    }
}