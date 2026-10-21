import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { OrnamentalDivider } from './FloralDecorations';
import { X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';

export const PhotoGallery = () => {
  const { gallery } = weddingConfig;
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Portraits', 'Candid', 'Celebrations', 'Moments'];

  const filteredPhotos = activeCategory === 'All'
    ? gallery
    : gallery.filter(p => p.category === activeCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const nextPhoto = () => {
    setLightboxIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevPhoto = () => {
    setLightboxIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <section id="gallery" className="py-10 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="font-serif text-[11px] uppercase tracking-[0.3em] text-[#6e1f2d] font-bold block mb-1">
            MOMENTS IN TIME
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#4e0309] font-normal">
            PHOTO GALLERY
          </h2>
          <OrnamentalDivider variant="flower" className="my-2.5" />
          <p className="font-serif italic text-xs sm:text-sm text-[#5a4246] max-w-md mx-auto font-light">
            Glimpses of quiet happiness, shared laughter, and memories framed forever.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full font-serif text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#4e0309] text-[#fdfcf9] shadow-sm font-semibold border border-[#c5a059]/40'
                    : 'bg-[#f2ece1]/60 text-[#5a4246] hover:bg-[#f2ece1] border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Editorial Grid in Luxury Card Container */}
        <div className="rounded-3xl bg-[#ffffff] border border-[#c5a059]/45 shadow-xl p-5 sm:p-7 relative overflow-hidden">
          {/* Inner hairline */}
          <div className="absolute inset-2.5 border border-[#c5a059]/25 rounded-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPhotos.map((photo, idx) => {
              const originalIdx = gallery.findIndex(p => p.id === photo.id);
              const isLarge = idx === 0 || idx === 3;

              return (
                <div
                  key={photo.id}
                  onClick={() => setLightboxIndex(originalIdx)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-[#c5a059]/35 bg-[#faf8f5] shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                    isLarge ? 'sm:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div className={`overflow-hidden ${isLarge ? 'aspect-[16/9]' : 'aspect-[4/3] sm:aspect-square'}`}>
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Romantic Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4e0309]/85 via-[#4e0309]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-[#fdfcf9]">
                    <div className="flex items-center space-x-2 text-[10px] font-serif uppercase tracking-[0.2em] text-[#f4e8cb] mb-1">
                      <span>{photo.category}</span>
                      <span>•</span>
                      <Eye className="w-3.5 h-3.5" />
                      <span>Tap to Expand</span>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl font-normal text-[#ffffff]">
                      {photo.title}
                    </h4>

                    <p className="font-serif italic text-xs text-[#f2ece1] opacity-90 line-clamp-1 mt-0.5 font-light">
                      "{photo.caption}"
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <div
              className="relative max-w-4xl max-h-[88vh] flex flex-col items-center bg-[#ffffff] rounded-3xl overflow-hidden p-3 shadow-2xl border border-[#c5a059]/40"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[70vh] overflow-hidden rounded-2xl bg-black">
                <img
                  src={gallery[lightboxIndex].url}
                  alt={gallery[lightboxIndex].title}
                  className="max-h-[70vh] w-auto object-contain mx-auto"
                />
              </div>

              <div className="text-center py-3.5 px-6">
                <span className="font-serif text-[10px] uppercase tracking-[0.2em] text-[#8f4a5a] block mb-0.5">
                  Photo {lightboxIndex + 1} of {gallery.length} • {gallery[lightboxIndex].category}
                </span>
                <h4 className="font-serif text-2xl text-[#4e0309] font-normal">
                  {gallery[lightboxIndex].title}
                </h4>
                <p className="font-serif italic text-xs sm:text-sm text-[#5a4246] mt-0.5 font-light">
                  "{gallery[lightboxIndex].caption}"
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
