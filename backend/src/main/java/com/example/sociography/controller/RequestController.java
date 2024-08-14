package com.example.sociography.controller;

import com.example.sociography.model.Request;
import com.example.sociography.service.RequestService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/requests")
public class RequestController {

    @Autowired
    private RequestService requestService;

    @GetMapping("/photographer/{photographerId}/{status}")
    public ResponseEntity<User> getRequestsByStatus(
        @PathVariable("photographerId") Long photographerId,
        @PathVariable("status") String status) {

        // Fetch requests based on photographerId and status
        List<Request> requests = requestService.getRequestsByStatus(photographerId, status);
        return ResponseEntity.ok(requests);
    }
}
