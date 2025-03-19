import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Watch from './pages/Watch';
import Channel from './pages/Channel';
import Search from './pages/Search';
import Library from './pages/Library';
import Trending from './pages/Trending';
import Subscriptions from './pages/Subscriptions';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#ff0000',
      },
      background: {
        default: darkMode ? '#0f0f0f' : '#f9f9f9',
        paper: darkMode ? '#1f1f1f' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Arial", sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ display: 'flex' }}>
          <Navbar 
            darkMode={darkMode} 
            setDarkMode={setDarkMode}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <Sidebar open={sidebarOpen} />
          <main style={{ 
            flexGrow: 1, 
            padding: '80px 20px 20px 20px',
            marginLeft: sidebarOpen ? '240px' : '0',
            transition: 'margin 0.3s ease-in-out'
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watch/:videoId" element={<Watch />} />
              <Route path="/channel/:channelId" element={<Channel />} />
              <Route path="/search" element={<Search />} />
              <Route path="/library" element={<Library />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App; 