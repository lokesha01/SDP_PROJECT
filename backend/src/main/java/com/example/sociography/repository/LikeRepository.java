package com.example.sociography.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sociography.model.Like;

public interface LikeRepository extends JpaRepository<Like, Integer> {
    List<Like> findByPictureId(int pictureId);
    Optional<Like> findByPictureIdAndPhotographerId(int pictureId, int photographerId);

}
