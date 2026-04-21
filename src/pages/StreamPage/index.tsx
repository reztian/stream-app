import React, { useState } from 'react';
import './StreamPage.css';
import logo from '../../assets/RR-logo.jpg';
interface FacebookVideoEmbedProps {
  videoUrl: string;
  width?: number;
  height?: number;
}

const FacebookVideoEmbed: React.FC<FacebookVideoEmbedProps> = ({
  videoUrl,
  width = 560,
  height = 315
}) => {
  const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=false&width=${width}`;

  return (
    <iframe
      src={embedUrl}
      width={width}
      height={height}
      style={{ border: 'none', overflow: 'hidden' }}
      scrolling="no"
      frameBorder="0"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      title="Facebook Video"
    />
  );
};

interface StreamCard {
  id: string;
  title: string;
  category: string;
  viewers: number;
  thumbnail: string;
  isLive: boolean;
}

const StreamPage: React.FC = () => {
  const [selectedStream, setSelectedStream] = useState<string>('featured');
  
  const featuredStream = {
    url: 'https://www.facebook.com/reel/4627735474180440',
    title: 'Live Gaming Session',
    category: 'Gaming',
    viewers: 2340
  };

  const streams: StreamCard[] = [
    {
      id: '1',
      title: 'Music Live Performance',
      category: 'Music',
      viewers: 1523,
      thumbnail: '🎵',
      isLive: true
    },
    {
      id: '2',
      title: 'Cooking Show',
      category: 'Cooking',
      viewers: 892,
      thumbnail: '👨‍🍳',
      isLive: true
    },
    {
      id: '3',
      title: 'Art & Design',
      category: 'Art',
      viewers: 456,
      thumbnail: '🎨',
      isLive: true
    },
    {
      id: '4',
      title: 'Tech Talk',
      category: 'Technology',
      viewers: 1205,
      thumbnail: '💻',
      isLive: true
    },
    {
      id: '5',
      title: 'Fitness Training',
      category: 'Sports',
      viewers: 567,
      thumbnail: '💪',
      isLive: true
    },
    {
      id: '6',
      title: 'Travel Vlog',
      category: 'Travel',
      viewers: 3421,
      thumbnail: '✈️',
      isLive: false
    }
  ];

  return (
    <div className="stream-page">
      {/* Header */}
      <header className="stream-header">
        <div className="header-content">
          <h1 className="app-title">
            <img src={logo} alt="R&R Empire" className="logo" style={{height: "20px", width: "20px"}} />
            R&R Empire
            
          </h1>
          <p className="header-subtitle">Your Ultimate Streaming Platform</p>
        </div>
        <div className="header-stats">
          <div className="stat">
            <span className="stat-value">12.5K</span>
            <span className="stat-label">Active Viewers</span>
          </div>
          <div className="stat">
            <span className="stat-value">847</span>
            <span className="stat-label">Live Streams</span>
          </div>
        </div>
      </header>

      {/* Featured Stream Section */}
      <section className="featured-section">
        <div className="section-title">
          <h2>Featured Stream</h2>
          <span className="live-badge">🔴 LIVE</span>
        </div>
        
        <div className="featured-container">
          <div className="featured-player">
            <FacebookVideoEmbed 
              videoUrl={featuredStream.url}
              width={800}
              height={450}
            />
          </div>
          
          <div className="featured-info">
            <h3>{featuredStream.title}</h3>
            <div className="stream-meta">
              <span className="category-badge">{featuredStream.category}</span>
              <span className="viewers-count">👥 {featuredStream.viewers.toLocaleString()} watching</span>
            </div>
            <p className="stream-description">
              Join us for an incredible streaming experience with high-quality content and interactive engagement with the community.
            </p>
            <button className="follow-btn">❤️ Follow Channel</button>
          </div>
        </div>
      </section>

      {/* Recommended Streams */}
      <section className="streams-grid-section">
        <div className="section-title">
          <h2>Recommended for You</h2>
          <button className="view-all-btn">View All →</button>
        </div>
        
        <div className="streams-grid">
          {streams.map((stream) => (
            <div key={stream.id} className={`stream-card ${stream.isLive ? 'live' : ''}`}>
              <div className="stream-thumbnail">
                <div className="thumbnail-emoji">{stream.thumbnail}</div>
                {stream.isLive && <span className="live-indicator">LIVE</span>}
              </div>
              
              <div className="stream-card-content">
                <h4 className="stream-title">{stream.title}</h4>
                <p className="stream-category">{stream.category}</p>
                <div className="stream-footer">
                  <span className="stream-viewers">👥 {stream.viewers.toLocaleString()}</span>
                  <button className="preview-btn" onClick={() => setSelectedStream(stream.id)}>
                    Preview →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Browse Categories</h2>
        <div className="categories-grid">
          {['Gaming', 'Music', 'Sports', 'Art', 'Cooking', 'Technology', 'Travel', 'Education'].map((category) => (
            <button key={category} className="category-button">
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="stream-footer-section">
        <div className="footer-content">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Community</h4>
            <ul>
              <li><a href="#creators">For Creators</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#safety">Safety</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#status">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 StreamHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default StreamPage;
