import React, { useEffect, useRef, useState } from 'react';

const MainLayout = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      setIsPlaying(true);
      window.removeEventListener('click', handleUserInteraction);
    };
    window.addEventListener('click', handleUserInteraction);
    return () => window.removeEventListener('click', handleUserInteraction);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch((err) => {
        console.log('Autoplay blocked:', err);
      });
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <div>
      <audio ref={audioRef} src={"./assets/bgMusic.mp3"} loop />
      {children}
    </div>
  );
};


export default MainLayout;
