import React from 'react';

export default function TrackInfoBanner({ track }) {
  return (
    <div className="mb-12">
      <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-racing-red/20 border-2 border-racing-red/40 rounded-lg flex items-center justify-center text-3xl">
              🏁
            </div>
            <div>
              <div className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-1">
                Circuit
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight">
                {track.name}
              </h2>
              <p className="text-white/60 text-sm mt-1">📍 {track.location}</p>
            </div>
          </div>
          <a
            href={track.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-racing-red hover:bg-racing-red/80 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105"
          >
            <span>Track Website</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
