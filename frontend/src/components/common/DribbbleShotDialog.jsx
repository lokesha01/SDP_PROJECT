import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Box from '@mui/joy/Box';
import { Sheet } from '@mui/joy';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Fade from '@mui/material/Fade';

const DribbbleShotDialog = ({
  open,
  handleClose,
  image,
  description,
  location,
  date,
  likes,
  author,
  avatar,
  category = '',
  comments = [],
  newComment,
  handleCommentChange,
  handleAddComment,
}) => (
  <Dialog
    open={open}
    onClose={handleClose}
    maxWidth="md"
    fullWidth
    TransitionComponent={Fade}
    transitionDuration={{ enter: 800, exit: 400 }}
    sx={{
      '& .MuiDialog-paper': {
        width: 'calc(100vw - 100px)',
        height: 'calc(100vh - 100px)',
        maxWidth: '100vw',
        maxHeight: '100vh',
        borderRadius: '16px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      },
    }}
  >
    <DialogContent
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 0,
        boxSizing: 'border-box',
        height: '100%',
        overflow: 'hidden',
        position: 'relative', // Ensure positioning for close button
      }}
    >
      <Box
        sx={{
          flex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#333',
          overflow: 'hidden',
          height: '100%',
          width: '100%',
          position: 'relative',
        }}
      >
        <Sheet
          component="img"
          src={image}
          alt={description}
          loading="lazy"
          sx={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            filter: 'grayscale(50%)',
            transition: 'filter 0.5s ease-in-out',
            '&:hover': {
              filter: 'grayscale(0%)',
            },
          }}
        />
      </Box>

      <Divider orientation="vertical" flexItem />

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: 2,
          height: '100%',
          overflowY: 'auto',
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon sx={{ color: '#333' }} />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          <Avatar src={avatar} alt={author} sx={{ marginRight: 2, border: '2px solid #333' }} />
          <Typography color="#333" fontWeight={500} variant="h6">{author}</Typography>
        </Box>
        <Typography variant="h4" sx={{ marginBottom: 2, fontFamily: 'Cursive' }}>
          {description}
        </Typography>
        <Chip label={category} color="primary" size="small" sx={{ marginBottom: 2, width: 'fit-content' }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="h6"
            startDecorator={<LocationOnRoundedIcon />}
            fontSize="16px"
          >
            {location}
          </Typography>
          <Typography
            variant="h6"
            fontSize="16px"
          >
            {date}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          <FavoriteBorderIcon sx={{ marginRight: 1, color: '#333' }} />
          <Typography variant="body2" color="text.secondary">
            {likes} likes
          </Typography>
        </Box>
        <Divider sx={{ marginY: 2, borderColor: '#333' }} />
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          Comments
        </Typography>
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            maxHeight: '300px',
            marginBottom: 2,
          }}
        >
          <List>
            {comments.map((comment, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <Avatar src={comment.avatar} alt={comment.user} sx={{ marginRight: 2, border: '1px solid #333' }} />
                  <ListItemText
                    primary={comment.user}
                    primaryTypographyProps={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}
                    secondary={comment.text}
                    secondaryTypographyProps={{ fontSize: '12px', color: '#555' }}
                  />
                </ListItem>
                {index < comments.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Box>
        <Box sx={{ display: 'flex', marginTop: 0, marginBottom: 3 }}>
          <TextField
            fullWidth
            label="Add a comment"
            value={newComment}
            onChange={handleCommentChange}
            variant="outlined"
            size="small"
            sx={{ marginRight: 1, backgroundColor: '#fff', borderRadius: '4px' }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddComment}
            sx={{ backgroundColor: '#333', '&:hover': { backgroundColor: '#555' } }}
          >
            Post
          </Button>
        </Box>
      </Box>
    </DialogContent>
  </Dialog>
);

export default DribbbleShotDialog;
