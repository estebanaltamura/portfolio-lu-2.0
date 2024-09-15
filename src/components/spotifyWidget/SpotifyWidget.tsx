import React from 'react';

const SpotifyWidget = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0px',
        width: '100%',
        marginTop: '40px',
      }}
    >
      <iframe
        src="https://open.spotify.com/embed/playlist/6zHnSUxg6kGrwSohX1cca1?si=a576faf75ec74ee3"
        width="100%" // Set width to 100% to take full width of the container
        height="700" // Set height to 700px
        frameBorder="0"
        allow="encrypted-media"
        title="Spotify Playlist"
        style={{ borderRadius: '12px', backgroundColor: '#FAFAFA' }} // Optional: Add some border radius for a better look
      ></iframe>
    </div>
  );
};

export default SpotifyWidget;
