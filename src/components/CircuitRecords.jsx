import React from 'react';
import { formatLapTime, formatDate, getCircuitRecords } from '../data/kartingData';

// Gold / silver / bronze trophy colors per podium position
const TROPHY_COLOR = {
  1: '#facc15', // gold
  2: '#d1d5db', // silver
  3: '#d97706', // bronze
};

function Trophy({ color }) {
  return (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M18 2H6v2H2v3a4 4 0 0 0 4 4c.28 0 .55-.03.81-.08A6 6 0 0 0 11 14.91V17H8v2h8v-2h-3v-2.09a6 6 0 0 0 4.19-3.99c.26.05.53.08.81.08a4 4 0 0 0 4-4V4h-4V2ZM4 7V6h2v3a2 2 0 0 1-2-2Zm16 0a2 2 0 0 1-2 2V6h2v1ZM8 21h8v1H8v-1Z" />
    </svg>
  );
}

export default function CircuitRecords({ trackId }) {
  const records = getCircuitRecords(trackId).slice(0, 3);

  if (records.length === 0) return null;

  return (
    <div className="mb-10">
      {/* Main section heading — matches the Fastest lap / GP Results style */}
      <div className="mb-6">
        <h2 className="text-4xl font-black text-white tracking-tight">
          Lap record
        </h2>
        <div className="h-1 w-20 bg-purple-500 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {records.map((record, index) => {
          const position = index + 1;
          return (
            <div
              key={record.participantId}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4 flex items-center gap-3"
            >
              <Trophy color={TROPHY_COLOR[position]} />
              <img
                src={record.participant.avatarUrl}
                alt={record.participant.name}
                className="w-10 h-10 rounded-full border-2 border-white/20 shrink-0"
              />
              <div className="min-w-0">
                <div className="text-white font-bold text-sm leading-tight truncate">
                  {record.participant.name}
                </div>
                <div className={`font-mono font-bold text-lg leading-tight ${position === 1 ? 'text-purple-500' : 'text-white'}`}>
                  {formatLapTime(record.bestLapTime)}
                </div>
                <div className="text-white/40 text-xs">
                  {formatDate(record.dateAchieved)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
