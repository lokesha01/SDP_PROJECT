//package com.example.sociography.repository;
//
//import java.util.List;
//
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//
//import com.example.sociography.model.Picture;
//
//public interface PictureRepository extends JpaRepository<Picture, Integer> {
//	
//	//for profile page
//    List<Picture> findByPhotographerId(int photographerId);
//    
//    @Query("SELECT COALESCE(SUM(p.likes), 0) FROM Picture p WHERE p.photographer.id = :photographerId")
//    int getTotalLikesByPhotographerId(@Param("photographerId") int photographerId);
//    
//    Page<Picture> findAll(Pageable pageable);
//
//}


//package com.example.sociography.repository;
//
//import java.util.List;
//
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//import org.springframework.stereotype.Repository;
//
//import com.example.sociography.model.Picture;
//
//public interface PictureRepository extends JpaRepository<Picture, Integer> {
//	
//	//for profile page
//    List<Picture> findByPhotographerId(int photographerId);
//    
//    @Query("SELECT COALESCE(SUM(p.likes), 0) FROM Picture p WHERE p.photographer.id = :photographerId")
//    int getTotalLikesByPhotographerId(@Param("photographerId") int photographerId);
//    
//    Page<Picture> findAll(Pageable pageable);
//    
//    @Query("SELECT p FROM pictures p WHERE p.pic_description LIKE %:keyword%")
//    List<Picture> findByDescriptionContaining(@Param("keyword") String keyword);
//
//}

package com.example.sociography.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.sociography.model.Picture;

@Repository
public interface PictureRepository extends JpaRepository<Picture, Integer> {

    // for profile page
    List<Picture> findByPhotographerId(int photographerId);

    @Query("SELECT COALESCE(SUM(p.likes), 0) FROM Picture p WHERE p.photographer.id = :photographerId")
    int getTotalLikesByPhotographerId(@Param("photographerId") int photographerId);

    Page<Picture> findAll(Pageable pageable);

    @Query("SELECT p FROM Picture p WHERE LOWER(p.description) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Picture> findByDescriptionContaining(@Param("keyword") String keyword);
}
