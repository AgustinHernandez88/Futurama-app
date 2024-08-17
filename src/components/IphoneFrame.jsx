import React from 'react';

const IphoneFrame = () => {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <div style={styles.frameContainer}>
          <img src="/images/frame.png" alt="iPhone Frame" style={styles.frameImage} />
          <video 
            src="/videos/frame.mp4" 
            style={styles.video} 
            autoPlay 
            loop 
            muted 
            playsInline 
            controls={false}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '44vh',
    backgroundColor: '#000000',
    padding: '10px 0',
    position: 'relative', 
    zIndex: 10, 
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    backgroundColor: '#000000',
  },
  frameContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '1000px',
    aspectRatio: '19/9',
  },
  frameImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  video: {
    position: 'absolute',
    top: '8%',
    left: '2%', 
    width: '100%', 
    height: '87%', 
    borderRadius: '90px',
  }
};

export default IphoneFrame;
