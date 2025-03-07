
import React, { useEffect, useState } from "react";

// Define types for available sound effects
export type SoundEffectType = "click" | "switch" | "command";

// Audio elements cache
const audioCache: Record<SoundEffectType, HTMLAudioElement | null> = {
  click: null,
  switch: null,
  command: null,
};

// Preload audio files
const preloadAudio = () => {
  if (typeof window === "undefined") return;

  // Create and preload audio elements
  audioCache.click = new Audio("/sounds/click.mp3");
  audioCache.switch = new Audio("/sounds/switch.mp3");
  audioCache.command = new Audio("/sounds/command.mp3");

  // Load the audio files
  Object.values(audioCache).forEach(audio => {
    if (audio) {
      audio.load();
    }
  });
};

/**
 * Function to play a sound effect
 * @param type The type of sound effect to play
 */
export const playSoundEffect = (type: SoundEffectType) => {
  const audio = audioCache[type];
  
  if (audio) {
    // Create a clone to allow overlapping sounds
    const clone = audio.cloneNode() as HTMLAudioElement;
    clone.volume = 0.5; // Set volume to 50%
    clone.play().catch(err => {
      console.error("Error playing sound:", err);
    });
  }
};

/**
 * SoundEffects component to preload audio files
 */
export const SoundEffects: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      preloadAudio();
      setLoaded(true);
    }
  }, [loaded]);

  return null; // This component doesn't render anything
};

export default SoundEffects;
