import { useState } from 'react';
import TrackSelector from './components/TrackSelector';
import LeaderboardTable from './components/LeaderboardTable';
import { tracks, getBestLapsForTrack } from './data/kartingData';

function App() {
  const [selectedTrackId, setSelectedTrackId] = useState(tracks[0]?.id || null);

  if (!selectedTrackId) {
    return (
      <div className="min-h-screen bg-racing-darker flex items-center justify-center">
        <p className="text-racing-light-gray text-xl">No tracks configured.</p>
      </div>
    );
  }

  const selectedTrack = tracks.find((t) => t.id === selectedTrackId);
  const results = getBestLapsForTrack(selectedTrackId);

  return (
    <div className="min-h-screen bg-racing-darker">
      {/* Header - F1 Style */}
      <header className="bg-gradient-to-b from-racing-dark to-racing-darker border-b border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/krakow-racing-leaderboard/zendesk-logo.png"
                alt="Zendesk"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">
                  Kraków Racing
                </h1>
                <p className="text-white/50 text-sm font-medium tracking-wider">
                  Karting Championship
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Track Selector */}
        <TrackSelector
          tracks={tracks}
          selectedTrackId={selectedTrackId}
          onSelectTrack={setSelectedTrackId}
        />

        {/* Leaderboard Title - F1 Style */}
        <div className="mb-6">
          <div className="flex items-baseline gap-4">
            <h2 className="text-4xl font-black text-white tracking-tight">
              Driver standings
            </h2>
          </div>
          <div className="h-1 w-20 bg-purple-500 mt-2"></div>
        </div>

        {/* Leaderboard Table */}
        <LeaderboardTable results={results} />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-white/40 text-sm">
            #krakow-racing • Season 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
