import React from 'react';
import sareeWallpaper from '../assets/sareeWallpaper.jpg'

function SareeCoverPromo() {
  return (
    <div style={{ position: 'relative', width: '95vw', height: '100vh', overflow: 'hidden' }}>
      <img src={sareeWallpaper} alt="Saree Wallpaper" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '5%',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '20px',
        borderRadius: '10px'
      }}>
        <h1>Super Savers</h1> <br />
        <h2>Buy 2 Get 1 Free</h2>
        <h5>Unstitched Material</h5>
      </div>
    </div>
  );
}

export default SareeCoverPromo;
