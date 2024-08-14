import React, { useState, useEffect } from 'react';
import Box from '@mui/joy/Box';
import PostCard from './PostCard'; // Adjust the path as necessary
import DribbbleShotDialog from './DribbbleShotDialog'; // Adjust the path as necessary
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import axios from 'axios';
import { getToken } from './AuthService';
import { useAuth } from './AuthContext';

const convertToBase64 = (data) => {
  return `data:image/png;base64,${data}`;
};

const SocialMediaFeed = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedRequests, setSelectedRequests] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const {authState} = useAuth();

  useEffect(() => {
    fetchPosts(page);
    fetchPendingRequests(); // Fetch pending requests when the component mounts
  }, [page]);

  const fetchPosts = async (page) => {
    setLoading(true);
    const token = getToken();
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(`http://localhost:8080/pictures/page?page=${page}&size=7`, config);
      const data = response.data;
      const convertedPosts = data.content.map((post) => ({
        ...post,
        base64Src: convertToBase64(post.picture),
      }));
      setPosts((prevPosts) => [...prevPosts, ...convertedPosts]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  const fetchPendingRequests = async () => {
    const token = getToken();
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };

    try {
      const photographerId = localStorage.getItem('photographerId');;
      const response = await axios.get(`http://localhost:8080/api/requests/photographer/${photographerId}/PENDING`, config);
      const requestsData = response.data;
      setSelectedRequests(requestsData);
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };

  const handleOpenDialog = (photo) => {
    setSelectedPhoto(photo);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedPhoto(null);
  };

  const handleConfirmRequest = (index) => {
    const updatedRequests = selectedRequests.filter((_, i) => i !== index);
    setSelectedRequests(updatedRequests);
    // Implement API call to confirm the request
  };

  const handleRejectRequest = (index) => {
    const updatedRequests = selectedRequests.filter((_, i) => i !== index);
    setSelectedRequests(updatedRequests);
    // Implement API call to reject the request
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Box sx={{ display: 'flex', position: 'relative', mt: 3 }}>
        {/* Posts Section */}
        <Box
          sx={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(830px, 1fr))',
            gap: 2,
            p: 2,
          }}
        >
          {posts.map((post) => (
            <PostCard
              key={post.id}
              src={post.base64Src || post.src}
              description={post.description}
              location={post.location}
              date={post.timestamp}
              likes={post.likes}
              author={post.photographer?.name}
              avatar={convertToBase64(post.photographer?.profilePic)}
              category={post.category}
              comments={post.comments}
              onClick={() => handleOpenDialog(post)}
            />
          ))}
          {loading && <Typography>Loading more posts...</Typography>}
        </Box>

        {/* Requests Section */}
        <Box
          sx={{
            width: '260px',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderLeft: '1px solid',
            borderColor: 'divider',
            position: 'sticky',
            top: '72px',
          }}
        >
          <Typography variant="h6" component="div" sx={{ mb: 2 }}>
            Requests
          </Typography>
          {Array.isArray(selectedRequests) && selectedRequests.length > 0 ? (
            selectedRequests.map((request, index) => (
              <Card
                key={index}
                variant="outlined"
                orientation="horizontal"
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  ml: 3,
                  mb: 2,
                  '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                }}
              >
                <AspectRatio ratio="1" sx={{ width: 50 }}>
                  <Avatar
                    src={convertToBase64(request.partner.profilePic)}
                    alt={request.partner.name}
                    loading="lazy"
                  />
                </AspectRatio>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', p: 1, flexGrow: 1 }}>
                  <Typography level="body2" noWrap>{request.partner.name}</Typography>
                  <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                    <Button size="small" variant="contained" color="success" onClick={() => handleConfirmRequest(index)}>
                      Confirm
                    </Button>
                    <Button size="small" variant="outlined" color="error" onClick={() => handleRejectRequest(index)}>
                      Reject
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography>No requests available.</Typography>
          )}
        </Box>
      </Box>

      {selectedPhoto && (
        <DribbbleShotDialog
          open={dialogOpen}
          handleClose={handleCloseDialog}
          image={selectedPhoto.base64Src || selectedPhoto.src}
          description={selectedPhoto.description}
          location={selectedPhoto.location}
          date={selectedPhoto.timestamp}
          likes={selectedPhoto.likes}
          author={selectedPhoto.photographer?.name}
          avatar={convertToBase64(selectedPhoto.photographer?.profilePic)}
          category={selectedPhoto.category}
          comments={selectedPhoto.comments}
          id={selectedPhoto.id}
          photographerId={authState.photographerId}
        />
      )}
    </Box>
  );
};

export default SocialMediaFeed;
