package com.example.sociography.controller;

import com.example.sociography.model.Like;
import com.example.sociography.model.Picture;
import com.example.sociography.model.Photographer;
import com.example.sociography.repository.LikeRepository;
import com.example.sociography.repository.PictureRepository;
import com.example.sociography.repository.PhotographerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/pictures/{pictureId}/likes")
public class LikeController {

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private PictureRepository pictureRepository;

    @Autowired
    private PhotographerRepository photographerRepository;

    @GetMapping
    public List<Like> getLikes(@PathVariable int pictureId) {
        return likeRepository.findByPictureId(pictureId);
    }

    @PostMapping
    public Like addLike(@PathVariable int pictureId, @RequestBody Like like) {
        Picture picture = pictureRepository.findById(pictureId)
                .orElseThrow(() -> new RuntimeException("Picture not found"));
        Photographer photographer = photographerRepository.findById(like.getPhotographer().getId())
                .orElseThrow(() -> new RuntimeException("Photographer not found"));

        like.setPicture(picture);
        like.setPhotographer(photographer);
        like.setTimestamp(LocalDateTime.now());

        // Increase the like count for the picture
        picture.setLikes(picture.getLikes() + 1);
        pictureRepository.save(picture);

        return likeRepository.save(like);
    }

    @DeleteMapping
    public void removeLike(@PathVariable int pictureId, @RequestParam int photographerId) {
        Like like = likeRepository.findByPictureIdAndPhotographerId(pictureId, photographerId)
                .orElseThrow(() -> new RuntimeException("Like not found"));

        likeRepository.delete(like);

        // Decrease the like count for the picture
        Picture picture = pictureRepository.findById(pictureId)
                .orElseThrow(() -> new RuntimeException("Picture not found"));
        picture.setLikes(picture.getLikes() - 1);
        pictureRepository.save(picture);
    }
}
