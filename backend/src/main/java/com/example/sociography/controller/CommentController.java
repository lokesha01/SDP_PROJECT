package com.example.sociography.controller;

import com.example.sociography.model.Comment;
import com.example.sociography.model.Photographer;
import com.example.sociography.model.Picture;
import com.example.sociography.repository.CommentRepository;
import com.example.sociography.repository.PhotographerRepository;
import com.example.sociography.repository.PictureRepository;
import com.example.sociography.service.CommentService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/pictures/{pictureId}/comments")
public class CommentController {

    private final CommentService commentService;
    private final PictureRepository pictureRepository;
    private final PhotographerRepository photographerRepository;
    private final CommentRepository commentRepository;

    public CommentController(CommentService commentService,
                             PictureRepository pictureRepository,
                             PhotographerRepository photographerRepository,
                             CommentRepository commentRepository) {
        this.commentService = commentService;
        this.pictureRepository = pictureRepository;
        this.photographerRepository = photographerRepository;
        this.commentRepository = commentRepository;
    }

    @GetMapping
    public List<Comment> getCommentsByPictureId(@PathVariable int pictureId) {
        return commentService.getCommentsByPictureId(pictureId);
    }
    
    @PostMapping
    public Comment addComment(@PathVariable int pictureId, @RequestBody Comment comment) {
        Picture picture = pictureRepository.findById(pictureId)
                .orElseThrow(() -> new RuntimeException("Picture not found"));
        Photographer photographer = photographerRepository.findById(picture.getPhotographer().getId())
                .orElseThrow(() -> new RuntimeException("Photographer not found"));

        comment.setPicture(picture);
        comment.setPhotographer(photographer);
        comment.setTimestamp(LocalDateTime.now());

        return commentRepository.save(comment);
    }

    @DeleteMapping("/{commentId}")
    public void deleteComment(@PathVariable int commentId) {
        commentRepository.deleteById(commentId);
    }
}
