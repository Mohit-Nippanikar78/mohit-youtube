import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  styled,
} from '@mui/material';
import {
  MoreVert,
  WatchLater,
  PlaylistAdd,
  Block,
  Flag,
} from '@mui/icons-material';
import { formatDistanceToNow } from 'date-fns';
import { Video } from '../types';

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  cursor: 'pointer',
  '&:hover': {
    '& .video-thumbnail': {
      transform: 'scale(1.05)',
      transition: 'transform 0.3s ease-in-out',
    },
  },
}));

const ThumbnailContainer = styled(Box)({
  position: 'relative',
  paddingTop: '56.25%', // 16:9 aspect ratio
  overflow: 'hidden',
  borderRadius: 12,
  marginBottom: 8,
});

const Thumbnail = styled(CardMedia)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
});

const Duration = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 8,
  right: 8,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: 'white',
  padding: '2px 4px',
  borderRadius: 4,
  fontSize: '0.8rem',
}));

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    }
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  return (
    <StyledCard
      onClick={() => navigate(`/watch/${video.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ThumbnailContainer>
        <Thumbnail
          className="video-thumbnail"
          image={video.thumbnail}
          title={video.title}
        />
        <Duration>{video.duration}</Duration>
      </ThumbnailContainer>

      <CardContent sx={{ p: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <Avatar
            src={video.channel.avatar}
            alt={video.channel.name}
            sx={{ width: 36, height: 36, mr: 1.5 }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 500,
                fontSize: '1rem',
                lineHeight: 1.2,
                mb: 0.5,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {video.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: '0.9rem' }}
            >
              {video.channel.name}
              {video.channel.verified && ' ✓'}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: '0.9rem' }}
            >
              {`${formatViews(video.views)} views • ${formatDistanceToNow(new Date(video.publishedAt))} ago`}
            </Typography>
          </Box>
          <IconButton
            size="small"
            onClick={handleClick}
            sx={{ opacity: isHovered || Boolean(anchorEl) ? 1 : 0 }}
          >
            <MoreVert />
          </IconButton>
        </Box>
      </CardContent>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={(e) => e.stopPropagation()}
      >
        <MenuItem onClick={handleClose}>
          <WatchLater sx={{ mr: 2 }} /> Save to Watch Later
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <PlaylistAdd sx={{ mr: 2 }} /> Save to Playlist
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Block sx={{ mr: 2 }} /> Not Interested
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Flag sx={{ mr: 2 }} /> Report
        </MenuItem>
      </Menu>
    </StyledCard>
  );
};

export default VideoCard; 