// import React, { useState, useEffect } from 'react';
// import {
//   Grid, Typography, Button, Divider, Dialog, DialogTitle, DialogContent, DialogActions, TextField
// } from '@mui/material';
// import { Chip, Grid as JoyGrid, Typography as JoyTypography, Sheet } from '@mui/joy';
// import ProfileAvatar from '../common/ProfileAvatar';
// import DribbbleShot from '../common/DribbbleShot';
// import UploadDialog from './UploadDialog'; // Import the new UploadDialog component
// import { useAuth } from '../common/AuthContext'; // Import useAuth for authentication

// const About = () => {
//   const { authState } = useAuth();
//   const [profileData, setProfileData] = useState({
//     imageUrl: '',
//     altText: 'Profile Picture',
//     name: '',
//     email: '',
//     bio: '',
//     contactDetails: '',
//     likesCount: 0,
//     contactedCount: 0,
//   });
//   const [images, setImages] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState(profileData);
//   const [contactRequestSent, setContactRequestSent] = useState(false);
//   const [isFollowing, setIsFollowing] = useState(false); 

//   useEffect(() => {
//     if (!authState) return;
//     const token = authState.token;
//     const email = authState.email;
//     console.log(email,token)
//     // Fetch profile data
//     fetch(`http://localhost:8080/photographers/email/${email}`, {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       },
//       credentials: 'include',
//     })
//       .then(response => response.json())
//       .then(data => {
//         setProfileData(data.photographer);
//         setFormData(data.photographer);
//       })
//       .catch(error => console.error('Error fetching profile data:', error));

//     // Fetch images
//     fetch(`http://localhost:8080/photographers/${email}/pictures`, {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       },
//       credentials: 'include',
//     })
//       .then(response => response.json())
//       .then(data => {
//         const imagesWithBase64 = data.map(image => ({
//           ...image,
//           picture: convertToBase64(image.picture)
//         }));
//         setImages(imagesWithBase64);
//       })
//       .catch(error => console.error('Error fetching pictures:', error));
//   }, [authState]);

//   const convertToBase64 = (data) => {
//     // Convert binary data to Base64 string
//     return `data:image/png;base64,${data}`;
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleContactRequest = () => {
//     setContactRequestSent(true);
//     console.log('Contact request sent');
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSave = () => {
//     // Save the updated profile data
//     console.log(formData);
//     handleClose();
//   };

//   const handleFollow = () => {
//     setIsFollowing(!isFollowing); // Toggle the follow status
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <Grid container spacing={4} alignItems="center">
//         <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           <ProfileAvatar imageUrl={profileData.imageUrl} altText={profileData.altText} />
//         </Grid>
//         <Grid item xs={12} md={9}>
//           <Typography variant="h4" sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold' }}>
//             {profileData.name}
//           </Typography>
//           <Typography variant="body1" sx={{ fontFamily: 'League Spartan, sans-serif', marginBottom: '10px' }}>
//             {profileData.bio}
//           </Typography>
//           <Sheet
//             sx={{
//               bgcolor: 'background.level1',
//               borderRadius: 'sm',
//               p: 1.5,
//               my: 1.5,
//               display: 'flex',
//               gap: 2,
//               '& > div': { flex: 1 },
//             }}
//           >
//             <div>
//               <Typography level="body-xs" fontWeight="lg">
//                 Likes
//               </Typography>
//               <Typography fontWeight="lg">{profileData.likesCount}</Typography>
//             </div>
//             <div>
//               <Typography level="body-xs" fontWeight="lg">
//                 Contacted
//               </Typography>
//               <Typography fontWeight="lg">{profileData.contactedCount}</Typography>
//             </div>
//           </Sheet>
//           <Grid container spacing={2} sx={{ mt: 2 }}>
//             <Grid item>
//               <Button variant="contained" color="primary" sx={{ fontFamily: 'League Spartan, sans-serif' }} onClick={handleClickOpen}>
//                 Edit Profile
//               </Button>
//             </Grid>
//             <Grid item>
//               <Button
//                 variant="contained"
//                 color={isFollowing ? 'error' : 'primary'} // Change button color based on follow status
//                 sx={{ fontFamily: 'League Spartan, sans-serif' }}
//                 onClick={handleFollow}
//               >
//                 {isFollowing ? 'Unfollow' : 'Follow'}
//               </Button>
//             </Grid>
//             <Grid item>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 sx={{ fontFamily: 'League Spartan, sans-serif' }}
//                 onClick={handleContactRequest}
//                 disabled={contactRequestSent}
//               >
//                 {contactRequestSent ? 'Request Sent' : 'Contact Request'}
//               </Button>
//             </Grid>
//             <Grid item>
//               <UploadDialog
//                 onUploadStart={() => console.log('Upload started')}
//                 onUploadEnd={(success) => console.log(`Upload ${success ? 'succeeded' : 'failed'}`)}
//               />
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>

//       <Divider sx={{ marginY: 4, borderColor: 'black' }} />

//       <Grid container spacing={2}>
//         {images.map((image) => (
//           <Grid item xs={12} sm={6} md={4} key={image.id}>
//             <DribbbleShot
//               key={image.id}
//               image={image.picture} // Updated to use base64 image data
//               description={image.description}
//               location={image.location}
//               date={image.date}
//               likes={image.likes}
//               author={profileData.name}
//               avatar={profileData.imageUrl}
//               category={image.category}
//               initialComments={image.comments}
//             />
//           </Grid>
//         ))}
//       </Grid>

//       <Dialog open={open} onClose={handleClose} PaperProps={{ style: { borderRadius: '10px' } }}>
//         <DialogTitle>Edit Profile</DialogTitle>
//         <DialogContent>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Bio"
//                 name="bio"
//                 value={formData.bio}
//                 onChange={handleChange}
//                 multiline
//                 rows={4}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Contact Details"
//                 name="contactDetails"
//                 value={formData.contactDetails}
//                 onChange={handleChange}
//               />
//             </Grid>
//           </Grid>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSave} color="primary">
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default About;

import React, { useState, useEffect } from 'react';
import {
  Grid, Typography, Button, Divider, Dialog, DialogTitle, DialogContent, DialogActions, TextField
} from '@mui/material';
import ProfileAvatar from '../common/ProfileAvatar';
import DribbbleShot from '../common/DribbbleShot';
import UploadDialog from './UploadDialog';
import { useAuth } from '../common/AuthContext';
import { Sheet } from '@mui/joy';
import axios from 'axios';


const About = () => {
  const { authState } = useAuth();
  const [profileData, setProfileData] = useState({
    imageUrl: '',
    altText: 'Profile Picture',
    name: '',
    email: '',
    bio: '',
    contactDetails: '',
    likesCount: 0,
    contactedCount: 0,
  });
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(profileData);
  const [contactRequestSent, setContactRequestSent] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (!authState) return;
    const token = authState.token;
    const email = authState.email;
    console.log(email);

    // Fetch profile data
    fetch(`http://localhost:8080/photographers/email/${email}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // if (data.photographer.profilepic) {
        //   data.photographer.imageUrl = convertToBase64(data.photographer.profilepic);
        // }
        setProfileData(data.photographer);
        setFormData(data.photographer);
      })
      .catch(error => console.error('Error fetching profile data:', error));

      console.log(profileData);

    // Fetch images
    fetch(`http://localhost:8080/photographers/${email}/pictures`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        const imagesWithBase64 = data.map(image => ({
          ...image,
          picture: convertToBase64(image.picture)
        }));
        setImages(imagesWithBase64);
      })
      .catch(error => console.error('Error fetching pictures:', error));
  }, [authState]);

  const convertToBase64 = (data) => {
    return `data:image/png;base64,${data}`;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleContactRequest = () => {
    setContactRequestSent(true);
    console.log('Contact request sent');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = () => {
    console.log(formData);
    handleClose();
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const [error, setError] = useState(null);

  const handleProfileSave = async () => {
    try {
      const email = authState.email;
      const response = await fetch(`http://localhost:8080/photographers/email/${email}/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${authState.token}` },
        body: JSON.stringify(formData),
      });
      console.log(response);
  
      if (!response.ok) {
        throw new Error(`Error updating profile: ${response.status}`);
      }
  
      const data = await response.json();
      // Handle the response data
    } catch (error) {
      setError(error.message);
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div style={{ padding: '20px',overflowX:'hidden' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ProfileAvatar imageUrl={convertToBase64(profileData.profilePic)} altText={profileData.altText} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant="h4" sx={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 'bold' }}>
            {profileData.name}
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'League Spartan, sans-serif', marginBottom: '10px' }}>
            {profileData.bio}
          </Typography>
          <Sheet
            sx={{
              bgcolor: 'background.level1',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              '& > div': { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Likes
              </Typography>
              <Typography fontWeight="lg">{profileData.likesCount}</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Contacted
              </Typography>
              <Typography fontWeight="lg">{profileData.contactedCount}</Typography>
            </div>
          </Sheet>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item>
              {/* <Button variant="contained" color="primary" sx={{ fontFamily: 'League Spartan, sans-serif' }} onClick={handleClickOpen}>
                Edit Profile
              </Button> */}
              <Button variant="contained" color="primary" sx={{ fontFamily: 'League Spartan, sans-serif' }} onClick={handleClickOpen} aria-hidden={false}>
  Edit Profile
</Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color={isFollowing ? 'error' : 'primary'}
                sx={{ fontFamily: 'League Spartan, sans-serif' }}
                onClick={handleFollow}
              >
                {isFollowing ? 'Unfollow' : 'Follow'}
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                sx={{ fontFamily: 'League Spartan, sans-serif' }}
                onClick={handleContactRequest}
                disabled={contactRequestSent}
              >
                {contactRequestSent ? 'Request Sent' : 'Contact Request'}
              </Button>
            </Grid>
            <Grid item>
              <UploadDialog
                onUploadStart={() => console.log('Upload started')}
                onUploadEnd={(success) => console.log(`Upload ${success ? 'succeeded' : 'failed'}`)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Divider sx={{ marginY: 4, borderColor: 'black' }} />

      <Grid container spacing={2}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <DribbbleShot
              key={image.id}
              image={image.picture}
              description={image.description}
              location={image.location}
              date={image.date}
              likes={image.likes}
              author={profileData.name}
              avatar={profileData.imageUrl}
              category={image.category}
              initialComments={image.comments}
            />
          </Grid>
        ))}
      </Grid>

     
      <Dialog open={open} onClose={handleClose} PaperProps={{ style: { borderRadius: '10px' } }}>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="profile-picture-upload"
              type="file"
              onChange={handleProfilePicChange}
            />
            <label htmlFor="profile-picture-upload">
              <img
                src={formData.profilePic || '/default-profile-pic.png'}
                alt="Profile"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  cursor: 'pointer',
                }}
              />
            </label>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Bio"
              name="selfInfo"
              value={formData.selfInfo}
              onChange={handleChange}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => handleProfileSave(formData)} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
    </div>
  );
};

export default About;
