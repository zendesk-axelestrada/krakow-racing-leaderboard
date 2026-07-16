import React, { useState } from 'react';
import {
  formatLapTime,
  formatDate,
  getEventDatesForTrack,
  getRaceResultsForEvent,
  getQualifyingForEvent,
} from '../data/kartingData';

const TABS = [
  { id: 'race', label: 'Race results' },
  { id: 'qualifying', label: 'Qualifying' },
];

function getPositionBadgeColor(position) {
  if (position === 1) return 'bg-yellow-400 text-racing-darker';
  if (position === 2) return 'bg-gray-300 text-racing-darker';
  if (position === 3) return 'bg-orange-600 text-white';
  return 'bg-white/10 text-white';
}

function DriverCell({ participant }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={participant.avatarUrl}
        alt={participant.name}
        className="w-10 h-10 rounded-full border-2 border-white/20"
      />
      <div>
        <div className="text-white font-bold text-base leading-tight">
          {participant.name}
        </div>
        <div className="text-white/50 text-xs uppercase tracking-wide font-medium">
          {participant.racingName || participant.name}
        </div>
      </div>
    </div>
  );
}

export default function RaceResultsTable({ trackId }) {
  const dates = getEventDatesForTrack(trackId);
  const [selectedDate, setSelectedDate] = useState(dates[0] || null);
  const [activeTab, setActiveTab] = useState('race');

  const raceResults = selectedDate ? getRaceResultsForEvent(trackId, selectedDate) : [];
  const qualifyingResults = selectedDate ? getQualifyingForEvent(trackId, selectedDate) : [];

  if (!selectedDate || raceResults.length === 0) {
    return (
      <div className="bg-racing-gray rounded-lg p-8 text-center">
        <p className="text-racing-light-gray text-lg">
          No results available for this event yet.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Day selector + tabs */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-5">
        {/* Tabs */}
        <div className="inline-flex bg-white/5 border border-white/10 rounded-lg p-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-md text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Day selector */}
        <div className="flex items-center gap-3">
          <span className="text-white/50 text-xs uppercase tracking-widest font-semibold">
            Race day
          </span>
          <div className="relative">
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-racing-dark text-white border-2 border-white/20 hover:border-purple-500 focus:border-purple-500 rounded-lg pl-4 pr-10 py-2.5 text-sm font-semibold cursor-pointer transition-all appearance-none focus:outline-none"
            >
              {dates.map((date) => (
                <option key={date} value={date}>
                  {formatDate(date)}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/60">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
        {activeTab === 'race' ? (
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
              </tr>
            </thead>
            <tbody>
              {raceResults.map((result) => (
                <tr
                  key={result.participantId}
                  className="border-b border-white/5 hover:bg-white/5 transition-all duration-150"
                >
                  <td className="py-4 px-4">
                    <div className={`w-8 h-8 rounded flex items-center justify-center font-bold text-sm ${getPositionBadgeColor(result.racePosition)}`}>
                      {result.racePosition}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <DriverCell participant={result.participant} />
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-white/70 text-sm font-medium">
                      {result.participant.department}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="text-left py-3 px-4 text-white/60 font-semibold uppercase tracking-wider text-xs w-16">
                  Grid
                </th>
                <th className="text-left py-3 px-6 text-white/60 font-semibold uppercase tracking-wider text-xs">
                  Driver
                </th>
                <th className="text-left py-3 px-6 text-white/60 font-semibold uppercase tracking-wider text-xs">
                  Team
                </th>
                <th className="text-right py-3 px-6 text-white/60 font-semibold uppercase tracking-wider text-xs">
                  Qualifying time
                </th>
              </tr>
            </thead>
            <tbody>
              {qualifyingResults.map((result) => (
                <tr
                  key={result.participantId}
                  className="border-b border-white/5 hover:bg-white/5 transition-all duration-150"
                >
                  <td className="py-4 px-4">
                    <div className={`w-8 h-8 rounded flex items-center justify-center font-bold text-sm ${getPositionBadgeColor(result.gridPosition)}`}>
                      {result.gridPosition}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <DriverCell participant={result.participant} />
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-white/70 text-sm font-medium">
                      {result.participant.department}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <span className={`font-mono font-bold text-lg ${result.gridPosition === 1 ? 'text-purple-500' : 'text-white'}`}>
                      {formatLapTime(result.qualifyingTime)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
