package com.example.sociography.service;

import com.example.sociography.model.Request;
import com.example.sociography.repository.RequestRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RequestService {

    @Autowired
    private RequestRepository requestRepository;

//    public List<Request> getRequestsByStatus(Long photographerId, String status) {
//        // Fetch requests based on photographerId and status
//        return requestRepository.findByPhotographerIdAndStatus(photographerId, status);
//    }
//}
public List<Request> getRequestsByStatus(Long photographerId, String status) {
    List<Request> requests = requestRepository.findByPhotographerIdAndStatus(photographerId, status);
    System.out.println("Fetched Requests: " + requests);
    return requests;
}
}
