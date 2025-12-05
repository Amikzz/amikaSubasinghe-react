import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMusic, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
// Import the audio file
import musicFile from "../assets/backgroundmusic.mp3";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio instance
    audioRef.current = new Audio(musicFile);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5; // Set a reasonable default volume

    // Attempt autoplay
    // Browsers block autoplay without interaction.
    // We try, if it fails, we catch it and wait for user to click the button.
    const playPromise = audioRef.current.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Autoplay blocked. Waiting for user interaction.", error);
          setIsPlaying(false);
        });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-10 left-10 z-[100]">
      <motion.button
        onClick={togglePlay}
        className="w-12 h-12 bg-[#111111]/80 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-main hover:border-main/50 transition-colors shadow-lg shadow-main/10 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              {/* Visualizer Effect using icons */}
              <FaVolumeUp className="text-xl group-hover:text-white transition-colors" />
            </motion.div>
          ) : (
            <motion.div
              key="muted"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <FaVolumeMute className="text-xl text-zinc-500 group-hover:text-white transition-colors" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ring Pulse Animation when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border border-main/30"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Label Tooltip */}
      <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none">
        <motion.span
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: isPlaying ? 0 : -20, opacity: isPlaying ? 0 : 1 }}
          className="text-white/50 text-xs font-syne whitespace-nowrap bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm"
        >
          Turn On Sound
        </motion.span>
      </div>
    </div>
  );
};

export default BackgroundMusic;
