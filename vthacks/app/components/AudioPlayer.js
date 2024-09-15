"use client";
import { useEffect, useState } from "react";

const AudioPlayer = ({ audioSrc }) => {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const newAudio = new Audio(audioSrc);
    setAudio(newAudio);

    const playAudioAfterInteraction = () => {
      newAudio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    };

    document.addEventListener("click", playAudioAfterInteraction, {
      once: true,
    });

    return () => {
      document.removeEventListener("click", playAudioAfterInteraction);
      newAudio.pause();
      newAudio.currentTime = 0;
    };
  }, [audioSrc]);

  return null;
};

export default AudioPlayer;
