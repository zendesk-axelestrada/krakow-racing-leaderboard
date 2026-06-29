import React from 'react';
import { formatLapTime } from '../data/kartingData';

export default function PodiumSection({ topThree }) {
  if (!topThree || topThree.length === 0) {
    return null;
  }

  const podiumOrder = [
    topThree[1], // 2nd place (left)
    topThree[0], // 1st place (center)
    topThree[2], // 3rd place (right)
  ].filter(Boolean);

  const heights = ['h-28', 'h-36', 'h-24'];
  const medals = ['🥈', '🥇', '🥉'];
  const positionBg = [
    'from-gray-400/20 to-gray-500/20 border-gray-400/30',
    'from-yellow-500/20 to-yellow-600/20 border-yellow-500/40',
    'from-orange-600/20 to-orange-700/20 border-orange-600/30',
  ];

  return (
    <div className="mb-16">
      <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
        <div className="flex items-end justify-center gap-6 max-w-4xl mx-auto">
          {podiumOrder.map((result, index) => {
            if (!result) return null;
            const isWinner = index === 1;
            return (
              <div
                key={result.participantId}
                className={`flex flex-col items-center ${isWinner ? 'scale-105' : ''}`}
                style={{ flex: isWinner ? '1.1' : '1' }}
              >
                {/* Driver Card */}
                <div className={`bg-gradient-to-br ${positionBg[index]} border-2 rounded-xl p-5 mb-4 w-full backdrop-blur-sm hover:scale-105 transition-transform duration-200`}>
                  {/* Medal Badge */}
                  <div className="text-center mb-3">
                    <span className="text-4xl">{medals[index]}</span>
                  </div>

                  {/* Avatar */}
                  <div className="relative mb-4">
                    <img
                      src={result.participant.avatarUrl}
                      alt={result.participant.name}
                      className="w-20 h-20 rounded-full mx-auto border-4 border-white/20"
                    />
                  </div>

                  {/* Driver Info */}
                  <h4 className="text-white font-bold text-center mb-1 text-lg">
                    {result.participant.name}
                  </h4>
                  <p className="text-white/50 text-xs text-center mb-1 uppercase tracking-wide font-semibold">
                    {result.participant.racingName}
                  </p>
                  <p className="text-white/60 text-xs text-center mb-3">
                    {result.participant.department}
                  </p>

                  {/* Time */}
                  <div className="text-center bg-black/30 rounded-lg py-2 px-3">
                    <div className="text-white/50 text-xs uppercase mb-1">Best Lap</div>
                    <span className={`font-mono font-bold text-xl ${isWinner ? 'text-racing-red' : 'text-white'}`}>
                      {formatLapTime(result.bestLapTime)}
                    </span>
                  </div>
                </div>

                {/* Podium Stand */}
                <div
                  className={`${heights[index]} w-full bg-gradient-to-b ${positionBg[index]} border-t-4 ${positionBg[index].split(' ')[2]} rounded-t-lg flex items-start justify-center pt-3 font-bold text-white/80 text-lg backdrop-blur-sm`}
                >
                  {index === 0 ? 'P2' : index === 1 ? 'P1' : 'P3'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
