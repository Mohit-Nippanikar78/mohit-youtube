import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Button,
  IconButton,
  Divider,
  styled,
} from '@mui/material';
import {
  ThumbUp,
  ThumbDown,
  Share,
  PlaylistAdd,
  MoreHoriz,
} from '@mui/icons-material';
import ReactPlayer from 'react-player';
import { formatDistanceToNow } from 'date-fns';
import { Video } from '../types';
import VideoCard from '../components/VideoCard';

const ActionButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: 'none',
  gap: theme.spacing(1),
}));

const Description = styled(Typography)(({ theme }) => ({
  whiteSpace: 'pre-line',
  marginTop: theme.spacing(2),
}));

const Watch = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const [video, setVideo] = useState<Video | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<Video[]>([]);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    // Simulated API call to fetch video details
    const fetchVideoDetails = async () => {
      // Replace with actual API call
      const mockVideo: Video = {
        id: videoId || '',
        title: 'Sample Video Title',
        description: `This is a detailed description of the video.
        
It can contain multiple paragraphs and explain what the video is about in detail.

You can find timestamps and links below:
0:00 - Introduction
1:30 - Main Content
5:45 - Conclusion

Don't forget to like and subscribe!`,
        thumbnail: 'https://picsum.photos/seed/video/1280/720',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        views: 1234567,
        likes: 12345,
        duration: '10:30',
        publishedAt: new Date().toISOString(),
        channel: {
          id: 'channel-1',
          name: 'Channel Name',
          avatar: 'https://picsum.photos/seed/channel/50/50',
          subscribers: 1000000,
          verified: true,
        },
        tags: ['tag1', 'tag2'],
      };

      setVideo(mockVideo);
    };

    // Simulated API call to fetch related videos
    const fetchRelatedVideos = async () => {
      // Replace with actual API call
      const mockRelatedVideos: Video[] = Array(8).fill(null).map((_, index) => ({
        id: `related-${index}`,
        title: `Related Video ${index + 1}`,
        description: 'Related video description',
        thumbnail: `https://picsum.photos/seed/related-${index}/320/180`,
        videoUrl: 'https://example.com/video.mp4',
        views: Math.floor(Math.random() * 1000000),
        likes: Math.floor(Math.random() * 10000),
        duration: '8:24',
        publishedAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
        channel: {
          id: `channel-${index}`,
          name: `Channel ${index + 1}`,
          avatar: `https://picsum.photos/seed/channel-${index}/50/50`,
          subscribers: Math.floor(Math.random() * 1000000),
          verified: Math.random() > 0.5,
        },
        tags: ['related', `tag${index}`],
      }));

      setRelatedVideos(mockRelatedVideos);
    };

    fetchVideoDetails();
    fetchRelatedVideos();
  }, [videoId]);

  if (!video) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={8}>
        <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url={video.videoUrl}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
            controls
          />
        </Box>

        <Typography variant="h5" sx={{ mt: 2, fontWeight: 500 }}>
          {video.title}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar
              src={video.channel.avatar}
              alt={video.channel.name}
              sx={{ width: 40, height: 40 }}
            />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {video.channel.name}
                {video.channel.verified && ' ✓'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`${video.channel.subscribers.toLocaleString()} subscribers`}
              </Typography>
            </Box>
            <Button variant="contained" color="primary" sx={{ ml: 2 }}>
              Subscribe
            </Button>
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <ActionButton startIcon={<ThumbUp />}>
              {video.likes.toLocaleString()}
            </ActionButton>
            <ActionButton startIcon={<ThumbDown />}>Dislike</ActionButton>
            <ActionButton startIcon={<Share />}>Share</ActionButton>
            <ActionButton startIcon={<PlaylistAdd />}>Save</ActionButton>
            <IconButton>
              <MoreHoriz />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 2,
            p: 2,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {`${video.views.toLocaleString()} views • ${formatDistanceToNow(new Date(video.publishedAt))} ago`}
          </Typography>
          <Description variant="body1">
            {showFullDescription
              ? video.description
              : `${video.description.slice(0, 200)}...`}
          </Description>
          <Button
            onClick={() => setShowFullDescription(!showFullDescription)}
            sx={{ mt: 1 }}
          >
            {showFullDescription ? 'Show less' : 'Show more'}
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12} lg={4}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Related Videos
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {relatedVideos.map((relatedVideo) => (
            <VideoCard key={relatedVideo.id} video={relatedVideo} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Watch; 