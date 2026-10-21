import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingAudio } from '../utils/audioPlayer';

export const MusicPlayer = ({ isPlaying, onToggle }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      <button
        onClick={onToggle}
        className="group relative flex items-center space-x-2.5 px-4 py-2.5 rounded-full bg-[#fdfcf9]/95 backdrop-blur-md border border-[#c5a059]/40 shadow-lg hover:shadow-xl hover:border-[#56040b]/50 transition-all duration-300 text-[#56040b] active:scale-95"
        title={isPlaying ? "Pause wedding melody" : "Play romantic wedding melody"}
        aria-label="Toggle background music"
      >
        {isPlaying ? (
          <div className="flex items-center space-x-1 h-4">
            <span className="w-1 bg-[#56040b] rounded-full animate-bounce [animation-delay:0ms] h-3" />
            <span className="w-1 bg-[#c5a059] rounded-full animate-bounce [animation-delay:150ms] h-4" />
            <span className="w-1 bg-[#56040b] rounded-full animate-bounce [animation-delay:300ms] h-2.5" />
            <span className="w-1 bg-[#8f4a5a] rounded-full animate-bounce [animation-delay:450ms] h-3.5" />
          </div>
        ) : (
          <Music className="w-4 h-4 text-[#8f4a5a] group-hover:text-[#56040b] transition-colors" />
        )}

        <span className="text-xs font-serif tracking-wider text-[#56040b] hidden sm:inline-block">
          {isPlaying ? "Romantic Melody" : "Play Music"}
        </span>

        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-[#56040b]" />
        ) : (
          <VolumeX className="w-4 h-4 text-[#8f4a5a] opacity-75" />
        )}

        {/* Subtle pulsing glow */}
        {isPlaying && (
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#c5a059]/20 to-[#8f4a5a]/20 -z-10 animate-pulse" />
        )}
      </button>
    </div>
  );
};
