import React from 'react';

export default function TrackSelector({ tracks, selectedTrackId, onSelectTrack }) {
  const selectedTrack = tracks.find(t => t.id === selectedTrackId);

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 mb-8">
      <div className="flex items-center justify-between flex-wrap gap-8">
        <div className="flex-1 min-w-[280px] max-w-md">
          <label className="block text-white/50 text-xs uppercase tracking-widest font-semibold mb-3">
            Select Circuit
          </label>

          <div className="relative">
            <select
              value={selectedTrackId}
              onChange={(e) => onSelectTrack(e.target.value)}
              className="w-full bg-racing-dark text-white border-2 border-white/20 hover:border-purple-500 focus:border-purple-500 rounded-lg px-4 py-3.5 text-base font-semibold cursor-pointer transition-all appearance-none focus:outline-none shadow-lg"
              style={{ paddingRight: '2.5rem' }}
            >
              {tracks.map((track) => (
                <option key={track.id} value={track.id}>
                  🏁 {track.name}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/60">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {selectedTrack && (
          <div className="flex items-center">
            <a
              href={selectedTrack.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all hover:scale-105 shadow-lg hover:shadow-purple-500/30"
            >
              <span>Visit Website</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
