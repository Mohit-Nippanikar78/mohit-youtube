import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Box,
  styled,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  VideoCall,
  Apps,
  Notifications,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 16px',
}));

const SearchBox = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#f0f0f0',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#1f1f1f' : '#e0e0e0',
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(3),
  width: '40%',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Navbar = ({ darkMode, setDarkMode, sidebarOpen, setSidebarOpen }: NavbarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <StyledToolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            edge="start"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <img 
              src="/youtube-logo.png" 
              alt="YouTube" 
              height="20"
              style={{ marginRight: '8px' }}
            />
            YouTube
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', alignItems: 'center' }}>
          <SearchBox>
            <InputBase
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              fullWidth
              sx={{ ml: 2, flex: 1 }}
            />
            <IconButton type="submit" sx={{ p: '10px' }}>
              <SearchIcon />
            </IconButton>
          </SearchBox>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <IconButton>
            <VideoCall />
          </IconButton>
          <IconButton>
            <Apps />
          </IconButton>
          <IconButton>
            <Notifications />
          </IconButton>
          <IconButton
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <Avatar 
              alt="User"
              src="/default-avatar.png"
              sx={{ width: 32, height: 32 }}
            />
          </IconButton>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => navigate('/channel/me')}>Your Channel</MenuItem>
          <MenuItem onClick={() => navigate('/studio')}>YouTube Studio</MenuItem>
          <MenuItem onClick={() => navigate('/settings')}>Settings</MenuItem>
          <MenuItem>Sign Out</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar; 