import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
  styled,
} from '@mui/material';
import {
  Home,
  Whatshot,
  Subscriptions,
  VideoLibrary,
  History,
  OndemandVideo,
  WatchLater,
  ThumbUp,
  ExpandMore,
  YouTube,
  Settings,
  Flag,
  Help,
  Feedback,
} from '@mui/icons-material';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    border: 'none',
    top: '64px',
    height: 'calc(100% - 64px)',
  },
}));

interface SidebarProps {
  open: boolean;
}

const Sidebar = ({ open }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const mainItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Trending', icon: <Whatshot />, path: '/trending' },
    { text: 'Subscriptions', icon: <Subscriptions />, path: '/subscriptions' },
  ];

  const libraryItems = [
    { text: 'Library', icon: <VideoLibrary />, path: '/library' },
    { text: 'History', icon: <History />, path: '/history' },
    { text: 'Your Videos', icon: <OndemandVideo />, path: '/your-videos' },
    { text: 'Watch Later', icon: <WatchLater />, path: '/playlist/watch-later' },
    { text: 'Liked Videos', icon: <ThumbUp />, path: '/playlist/liked' },
    { text: 'Show More', icon: <ExpandMore />, path: '/show-more' },
  ];

  const subscriptionItems = [
    { text: 'Music', icon: <YouTube />, path: '/channel/music' },
    { text: 'Sports', icon: <YouTube />, path: '/channel/sports' },
    { text: 'Gaming', icon: <YouTube />, path: '/channel/gaming' },
    { text: 'News', icon: <YouTube />, path: '/channel/news' },
  ];

  const helpItems = [
    { text: 'Settings', icon: <Settings />, path: '/settings' },
    { text: 'Report History', icon: <Flag />, path: '/report' },
    { text: 'Help', icon: <Help />, path: '/help' },
    { text: 'Send Feedback', icon: <Feedback />, path: '/feedback' },
  ];

  const renderList = (items: any[]) => (
    <List>
      {items.map((item) => (
        <ListItem
          button
          key={item.text}
          onClick={() => navigate(item.path)}
          selected={location.pathname === item.path}
          sx={{
            borderRadius: '0 100px 100px 0',
            mx: 1,
            '&.Mui-selected': {
              backgroundColor: 'action.selected',
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 40 }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText 
            primary={item.text}
            primaryTypographyProps={{
              fontSize: '0.9rem',
              fontWeight: location.pathname === item.path ? 500 : 400,
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <StyledDrawer
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Box sx={{ overflow: 'auto', py: 1 }}>
        {renderList(mainItems)}
        <Divider sx={{ my: 1 }} />
        {renderList(libraryItems)}
        <Divider sx={{ my: 1 }} />
        <Box sx={{ px: 3, py: 1 }}>
          <Typography variant="body2" color="text.secondary">
            SUBSCRIPTIONS
          </Typography>
        </Box>
        {renderList(subscriptionItems)}
        <Divider sx={{ my: 1 }} />
        {renderList(helpItems)}
        <Box sx={{ p: 2 }}>
          <Typography variant="caption" color="text.secondary">
            © 2024 Google LLC
          </Typography>
        </Box>
      </Box>
    </StyledDrawer>
  );
};

export default Sidebar; 