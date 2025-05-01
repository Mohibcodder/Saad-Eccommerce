'use client'
import React from 'react';
import Button from 'react-bootstrap/Button';

function MVideo(props) {
  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <video
        muted={props.muted}
        autoPlay={props.autoPlay}
        className="text-4xl text-center mt-4 mb-4 italic tracking-wide"
        style={{ width: '100%', height: 'auto' }}
        src={props.src} // Add the src for the video file here
        controls // Optional: Add controls if needed
      >
        {/* Fallback content if video is not supported */}
        Your browser does not support the video tag.
      </video>
      <div
        className="position-absolute"
        style={{
          bottom: '70px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Button
          style={{
            height: '44px',
            width: '190px',
            border: '1px solid black',
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '0px',
            letterSpacing: '0.005em',
            transition: 'background-color 0.2s ease all',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'black';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'black';
            e.currentTarget.style.color = 'white';
          }}
        >
          {props.Button}
        </Button>
      </div>
    </div>
  );
}

export default MVideo;
