import React, { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { OrnamentalDivider } from './FloralDecorations';
import { X, Sparkles, Calendar, Heart, Eye } from 'lucide-react';

export const StoryGalleryModal = ({ isOpen, onClose }) => {
  const { ourStory, gallery, couple } = weddingConfig;
  const [activeTab, setActiveTab] = useState('story'); // 'story' | 'gallery'

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#ffffff] rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col p-6 shadow-2xl border border-[#c5a059]/40 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="flex items-center justify-between pb-3 border-b border-[#f0ebe1]">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-lg text-[#56040b] font-medium">
              {couple.groom.firstName} &amp; {couple.bride.firstName}
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 text-[#56040b] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-2 my-4">
          <button
            onClick={() => setActiveTab('story')}
            className={`px-4 py-1.5 rounded-full text-xs font-serif uppercase tracking-wider transition-all ${
              activeTab === 'story'
                ? 'bg-[#56040b] text-[#fdfcf9] shadow-sm'
                : 'bg-[#f0ebe1]/60 text-[#5a4246] hover:bg-[#f0ebe1]'
            }`}
          >
            📖 Our Story
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-4 py-1.5 rounded-full text-xs font-serif uppercase tracking-wider transition-all ${
              activeTab === 'gallery'
                ? 'bg-[#56040b] text-[#fdfcf9] shadow-sm'
                : 'bg-[#f0ebe1]/60 text-[#5a4246] hover:bg-[#f0ebe1]'
            }`}
          >
            📷 Photo Moments
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pr-1 py-2 space-y-6">
          {activeTab === 'story' ? (
            <div className="space-y-6">
              {ourStory.map((chap, idx) => (
                <div key={chap.title} className="flex gap-4 items-start p-3.5 rounded-2xl bg-[#fbf9f5] border border-[#f0ebe1]">
                  <img
                    src={chap.image}
                    alt={chap.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm"
                  />
                  <div>
                    <span className="text-[10px] font-serif uppercase tracking-widest text-[#8f4a5a] block">
                      {chap.year} • {chap.subtitle}
                    </span>
                    <h4 className="font-serif text-base text-[#56040b] font-medium mt-0.5">
                      {chap.title}
                    </h4>
                    <p className="text-xs font-sans text-[#524446] font-light leading-relaxed mt-1">
                      {chap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {gallery.map(photo => (
                <div key={photo.id} className="rounded-xl overflow-hidden border border-[#c5a059]/30 bg-[#fbf9f5] shadow-sm group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-2 text-center">
                    <p className="font-serif text-xs text-[#56040b] truncate">{photo.title}</p>
                    <p className="font-serif italic text-[10px] text-[#8f4a5a] truncate">"{photo.caption}"</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
