import React from 'react';
import { formatLapTime, formatDate } from '../data/kartingData';

export default function LeaderboardTable({ results }) {
  if (!results || results.length === 0) {
    return (
      <div className="bg-racing-gray rounded-lg p-8 text-center">
        <p className="text-racing-light-gray text-lg">
          No results available for this track yet.
        </p>
      </div>
    );
  }

  const getPositionBadgeColor = (position) => {
    if (position === 1) return 'bg-yellow-400 text-racing-darker';
    if (position === 2) return 'bg-gray-300 text-racing-darker';
    if (position === 3) return 'bg-orange-600 text-white';
    return 'bg-white/10 text-white';
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-white/5 border-b border-white/10">
            <th className="text-left py-3 px-4 text-white/60 font-semibold uppercase tracking-wider text-xs w-16">
              Pos
            </th>
            <th className="text-left py-3 px-6 text-white/60 font-semibold uppercase tracking-wider text-xs">
              Driver
            </th>
            <th className="text-left py-3 px-6 text-white/60 font-semibold uppercase tracking-wider text-xs">
              Team
            </th>
            <th className="text-right py-3 px-6 text-white/60 font-semibold uppercase tracking-wider text-xs">
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => {
            const position = index + 1;
            return (
              <tr
                key={result.participantId}
                className="border-b border-white/5 hover:bg-white/5 transition-all duration-150"
              >
                {/* Position Badge */}
                <td className="py-4 px-4">
                  <div className={`w-8 h-8 rounded flex items-center justify-center font-bold text-sm ${getPositionBadgeColor(position)}`}>
                    {position}
                  </div>
                </td>

                {/* Driver Info */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={result.participant.avatarUrl}
                      alt={result.participant.name}
                      className="w-10 h-10 rounded-full border-2 border-white/20"
                    />
                    <div>
                      <div className="text-white font-bold text-base leading-tight">
                        {result.participant.name}
                      </div>
                      <div className="text-white/50 text-xs uppercase tracking-wide font-medium">
                        {result.participant.racingName || result.participant.name}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Team/Department */}
                <td className="py-4 px-6">
                  <div className="text-white/70 text-sm font-medium">
                    {result.participant.department}
                  </div>
                </td>

                {/* Best Lap Time */}
                <td className="py-4 px-6 text-right">
                  <div className="inline-flex flex-col items-end">
                    <span className={`font-mono font-bold text-lg ${position === 1 ? 'text-purple-500' : 'text-white'}`}>
                      {formatLapTime(result.bestLapTime)}
                    </span>
                    <span className="text-white/40 text-xs">
                      {formatDate(result.dateAchieved)}
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
