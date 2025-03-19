# YouTube Clone

A modern YouTube clone built with React, TypeScript, and Material-UI. This project demonstrates the implementation of a video-sharing platform with features similar to YouTube.

## Features

- 🎨 Modern and responsive UI with Material-UI
- 🌙 Dark/Light mode toggle
- 🎥 Video playback with ReactPlayer
- ♾️ Infinite scroll for video loading
- 🏷️ Category-based filtering
- 🔍 Search functionality
- 📱 Mobile-responsive design
- 🎯 Related videos suggestions
- 👤 Channel information
- 💬 Video descriptions
- 👍 Like/Dislike functionality
- 📋 Playlists and Watch Later
- 🔔 Notifications (UI only)

## Tech Stack

- React 18
- TypeScript
- Material-UI v5
- React Router v6
- React Player
- Date-fns
- Framer Motion
- React Infinite Scroll Component

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/youtube-clone.git
cd youtube-clone
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx      # Top navigation bar
│   ├── Sidebar.tsx     # Side navigation menu
│   └── VideoCard.tsx   # Video thumbnail card
├── pages/              # Page components
│   ├── Home.tsx        # Home page with video grid
│   ├── Watch.tsx       # Video playback page
│   └── ...            # Other pages
├── types/              # TypeScript interfaces
│   └── index.ts       # Type definitions
├── App.tsx            # Main application component
└── index.tsx          # Application entry point
```

## Features in Detail

### Home Page
- Responsive video grid layout
- Category filtering
- Infinite scroll for loading more videos
- Hover effects on video cards

### Video Page
- Video playback with controls
- Channel information and subscribe button
- Like/Dislike functionality
- Video description with show more/less
- Related videos sidebar

### Navigation
- Persistent sidebar with categories
- Top navigation with search
- Dark/Light mode toggle
- User menu

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspired by YouTube
- Icons from Material-UI
- Sample images from Picsum Photos
