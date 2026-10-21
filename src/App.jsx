import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { PageOneEnvelope } from './components/PageOneEnvelope';
import { PageThreeDressCodeEvents } from './components/PageThreeDressCodeEvents';
import { Footer } from './components/Footer';
import { GoldFoilParticles } from './components/GoldFoilParticles';
import { weddingAudio } from './utils/audioPlayer';
import { Volume2, VolumeX } from 'lucide-react';

export function App() {
  const getInitialPage = () => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'page-2' || hash === 'page-3') {
        return 'page-2';
      }
      if (hash === 'page-1') {
        return 'page-1';
      }
    }
    return 'page-1';
  };

  const [activePage, setActivePage] = useState(getInitialPage);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const unsubscribe = weddingAudio.subscribe((playing) => {
      setIsPlayingAudio(playing);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'page-2' || hash === 'page-3') {
        setActivePage('page-2');
      } else if (hash === 'page-1') {
        setActivePage('page-1');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId) => {
    const targetPage = (pageId === 'page-3') ? 'page-2' : pageId;
    setActivePage(targetPage);
    window.location.hash = `#${targetPage}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleAudio = () => {
    const newState = weddingAudio.toggle();
    setIsPlayingAudio(newState);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#122A16] text-[#F7F9F5] selection:bg-[#ADEBB3] selection:text-[#122A16] relative">
      
      {/* 1. Ambient Floating Botanical Leaves & Mint Gold Particles */}
      <GoldFoilParticles />

      {/* 2. Header Navigation Bar (Page 1 | Page 2) */}
      <Navigation 
        activePage={activePage} 
        onNavigate={handleNavigate} 
      />

      {/* 3. Main Page Content View */}
      <main className="flex-1 w-full relative z-10">
        {activePage === 'page-1' && (
          <PageOneEnvelope onNavigate={handleNavigate} />
        )}

        {activePage === 'page-2' && (
          <PageThreeDressCodeEvents onNavigate={handleNavigate} />
        )}
      </main>

      {/* 4. Minimal Elegant Footer */}
      <Footer 
        activePage={activePage} 
        onNavigate={handleNavigate} 
      />

      {/* 5. Floating Audio Ambient Player Toggle */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={handleToggleAudio}
          className={`flex items-center space-x-2 px-3.5 py-2 rounded-full border shadow-xl transition-all duration-300 backdrop-blur-md cursor-pointer ${
            isPlayingAudio 
              ? 'bg-[#285233] text-[#ADEBB3] border-[#ADEBB3] ring-2 ring-[#ADEBB3]/40' 
              : 'bg-[#1B3B21]/90 text-[#F7F9F5] border-[#ADEBB3]/60 hover:bg-[#1B3B21] hover:border-[#ADEBB3]'
          }`}
          aria-label={isPlayingAudio ? "Mute ambient wedding music" : "Play ambient wedding music"}
          title={isPlayingAudio ? "Mute ambient wedding music" : "Play ambient wedding music"}
        >
          {isPlayingAudio ? (
            <>
              <Volume2 className="w-4 h-4 text-[#ADEBB3] animate-pulse" />
              <span className="font-serif text-[11px] tracking-wider uppercase font-semibold hidden sm:inline text-[#ADEBB3]">
                Music Playing
              </span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-[#ADEBB3]" />
              <span className="font-serif text-[11px] tracking-wider uppercase font-semibold hidden sm:inline">
                Play Music
              </span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}

export default App;
