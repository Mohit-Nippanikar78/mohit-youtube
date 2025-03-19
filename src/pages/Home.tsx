import { useState, useEffect } from 'react';
import { Box, Grid, Typography, Chip, styled } from '@mui/material';
import VideoCard from '../components/VideoCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Video } from '../types';

const CategoryChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  '&.MuiChip-root': {
    borderRadius: 8,
    fontWeight: 500,
  },
}));

const categories = [
  'All',
  'Music',
  'Gaming',
  'Live',
  'News',
  'Sports',
  'Learning',
  'Fashion',
  'Beauty',
  'Science',
  'Technology',
  'Entertainment',
  'Comedy',
  'Podcasts',
];

// Mock data - replace with actual API call
const fetchVideos = async (page: number): Promise<Video[]> => {
  // Simulating API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: `video-${page}-1`,
          title: 'Amazing Video Title That Is Quite Long And Might Need Two Lines',
          description: 'Video description here',
          thumbnail: `https://picsum.photos/seed/${page}-1/320/180`,
          videoUrl: 'https://example.com/video.mp4',
          views: 1234567,
          likes: 12345,
          duration: '12:34',
          publishedAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
          channel: {
            id: 'channel-1',
            name: 'Channel Name',
            avatar: `https://picsum.photos/seed/avatar-${page}-1/50/50`,
            subscribers: 1000000,
            verified: true,
          },
          tags: ['tag1', 'tag2'],
        },
        // Add more mock videos as needed
      ]);
    }, 1000);
  });
};

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [videos, setVideos] = useState<Video[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreVideos = async () => {
    try {
      const newVideos = await fetchVideos(page);
      if (newVideos.length === 0) {
        setHasMore(false);
      } else {
        setVideos((prev) => [...prev, ...newVideos]);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
      setHasMore(false);
    }
  };

  useEffect(() => {
    loadMoreVideos();
  }, []);

  return (
    <Box sx={{ py: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          pb: 2,
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
        }}
      >
        {categories.map((category) => (
          <CategoryChip
            key={category}
            label={category}
            onClick={() => setSelectedCategory(category)}
            color={selectedCategory === category ? 'primary' : 'default'}
            variant={selectedCategory === category ? 'filled' : 'outlined'}
          />
        ))}
      </Box>

      <InfiniteScroll
        dataLength={videos.length}
        next={loadMoreVideos}
        hasMore={hasMore}
        loader={<Typography sx={{ textAlign: 'center', py: 2 }}>Loading...</Typography>}
        endMessage={
          <Typography sx={{ textAlign: 'center', py: 2 }}>
            No more videos to load.
          </Typography>
        }
      >
        <Grid container spacing={2}>
          {videos.map((video) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={video.id}>
              <VideoCard video={video} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
};

export default Home; 