package com.example.sociography.controller;

import com.example.sociography.model.Partner;
import com.example.sociography.service.PartnerSignUpService;
import com.example.sociography.service.AuthService; // Import AuthService

import java.awt.PageAttributes.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/partners")
@CrossOrigin(origins = "http://localhost:3000/")
public class PartnerSignUpController {

    @Autowired
    private PartnerSignUpService partnerSignUpService;

    @Autowired
    private AuthService authService; // Add AuthService

//    @PostMapping("/signup")
//    public ResponseEntity<String> signUpPartner(@RequestBody Partner partner) {
//        try {
//            partnerSignUpService.signUpPartner(partner);
//            // Generate a token after successful signup
//            String token = authService.generateToken(partner.getId(),partner.getEmail(),"partner"); // Modify AuthService to add this method
//            return ResponseEntity.status(HttpStatus.CREATED).body("Partner signed up successfully! Token: " + token);
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
//        }
//    }
    
    @PostMapping(value = "/signup", consumes = org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<User> signUpPartner(
        @RequestParam("name") String name,
        @RequestParam("username") String username,
        @RequestParam("password") String password,
        @RequestParam("businessName") String businessName,
        @RequestParam("businessType") String businessType,
        @RequestParam("contactNo") String contactNo,
        @RequestParam("email") String email,
        @RequestParam(value = "profilePic", required = false) MultipartFile profilePic) {
        
        // Your sign-up logic here
        
        return ResponseEntity.ok().body("Partner registered successfully");
    }

}
