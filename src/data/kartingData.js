/**
 * Karting Leaderboard Data Configuration
 *
 * This file contains all the core data for the leaderboard:
 * - Participants (drivers)
 * - Tracks (karting locations)
 * - Sessions (lap times per event)
 *
 * Easy to update: just modify the data structures below!
 */

// ============================================
// PARTICIPANTS
// ============================================
export const participants = [
  {
    id: 'axel',
    name: 'Axel Estrada',
    racingName: 'haqe',
    email: 'axel.estrada@zendesk.com',
    department: 'Product Design',
    avatarUrl: 'https://avatars.slack-edge.com/2026-01-09/10257347078579_4792e8e92d3a17c73a7f_original.jpg'
  },
  {
    id: 'wojciech',
    name: 'Wojciech Pająk',
    racingName: 'Arachne',
    email: 'wojciech.pajak@zendesk.com',
    department: 'Messaging Experience',
    avatarUrl: 'https://avatars.slack-edge.com/2025-07-09/9166868278134_a9603bca13836bf34e6b_original.jpg'
  },
  {
    id: 'webster',
    name: 'Webster Manyanga',
    racingName: 'Webster',
    email: 'webster.manyanga@zendesk.com',
    department: 'Contact Center Engineering',
    avatarUrl: 'https://avatars.slack-edge.com/2026-01-05/10215659597719_6cb464a4ce631ef35626_original.jpg'
  },
  {
    id: 'bartosz',
    name: 'Bartosz Krajka',
    racingName: 'Bako',
    email: 'bartosz.krajka@zendesk.com',
    department: 'Core Services Foundation',
    avatarUrl: 'https://avatars.slack-edge.com/2025-10-07/9644130839907_bd092ed686d42077a8fb_original.jpg'
  },
  {
    id: 'rafal',
    name: 'Rafał Rębilas',
    racingName: 'R3fiX',
    email: 'rafal.rebilas@zendesk.com',
    department: 'Employee Service',
    avatarUrl: 'https://avatars.slack-edge.com/2026-02-03/10429664317878_91e35a266a71c5f0b0bc_original.jpg'
  },
  {
    id: 'michal',
    name: 'Michał Perek',
    racingName: 'FastAsFcuk',
    email: 'michal.perek@zendesk.com',
    department: 'Contact Center Engineering',
    avatarUrl: 'https://avatars.slack-edge.com/2026-05-20/11169883191410_e73b14baa199e42028a7_original.png'
  },
  {
    id: 'pawel',
    name: 'Paweł Słota',
    racingName: 'ELP4BLITTO',
    email: 'pawel.slota@zendesk.com',
    department: 'WFM',
    avatarUrl: 'https://avatars.slack-edge.com/2026-06-02/11254730657507_0f73470e5e1fdeab2ba3_original.jpg'
  },
  {
    id: 'kamil',
    name: 'Kamil Zachradnik',
    racingName: 'Jechanka',
    email: 'kamil.zachradnik@zendesk.com',
    department: 'Employee Service',
    avatarUrl: 'https://avatars.slack-edge.com/2025-08-04/9318749130417_ce151a17533cf219bf0f_original.jpg'
  },
  {
    id: 'ilya',
    name: 'Ilya Demukh',
    racingName: 'demuux',
    email: 'ilya.demukh@zendesk.com',
    department: 'Employee Service',
    avatarUrl: 'https://avatars.slack-edge.com/2026-04-28/11012893332866_735ea17bad3880f96489_original.jpg'
  },
  {
    id: 'serhii',
    name: 'Serhii Parakhin',
    racingName: null,
    email: 'serhii.parakhin@zendesk.com',
    department: 'AI Agents',
    avatarUrl: 'https://avatars.slack-edge.com/2026-06-16/11369241229187_0e165dc1fa02b8e6bd6b_original.jpg'
  },
  {
    id: 'aleksander',
    name: 'Aleksander Janur',
    racingName: 'krzysio5',
    email: 'aleksander.janur@zendesk.com',
    department: 'Product Reliability',
    avatarUrl: 'https://avatars.slack-edge.com/2026-05-12/11102919648787_75183b1e41e7c0ccee9c_original.png'
  },
  {
    id: 'dominik',
    name: 'Dominik Ziajka',
    racingName: 'ziajka',
    email: 'dominik.ziajka@zendesk.com',
    department: 'Cloud Infrastructure',
    avatarUrl: 'https://avatars.slack-edge.com/2026-06-14/11354227731670_ba70c551c29f5518662a_original.jpg'
  },
  {
    id: 'dawid',
    name: 'Dawid Widyna',
    racingName: 'widyn',
    email: 'dawid.widyna@zendesk.com',
    department: 'WFM',
    avatarUrl: 'https://avatars.slack-edge.com/2026-06-02/11263802501905_bd9fdae809d1b6e73b59_original.jpg'
  },
  {
    id: 'grzegorz',
    name: 'Grzegorz Klocek',
    racingName: 'BlockForeman',
    email: 'grzegorz.klocek@zendesk.com',
    department: 'WFM',
    avatarUrl: 'https://avatars.slack-edge.com/2025-01-21/8347326970128_92bf73e6a880c37b1f5a_original.jpg'
  },
  {
    id: 'juliusz',
    name: 'Juliusz Kociński',
    racingName: 'Julczyk',
    email: 'juliusz.kocinski@zendesk.com',
    department: 'WFM',
    avatarUrl: 'https://avatars.slack-edge.com/2026-07-16/11632349783040_08ad68916bff7add16ff_original.jpg'
  },
];

// ============================================
// TRACKS
// ============================================
export const tracks = [
  {
    id: 'track1',
    name: 'GO Karting Center',
    type: 'fastest-lap', // Classic leaderboard: ranked by best lap time
    website: 'https://gokarting.com.pl/',
    location: 'Kraków, Poland',
    events: [
      {
        date: '2026-08-06',
        sessionName: 'Summer Sprint',
        // Three heats (18:00, 18:20, 19:00). Best lap per driver across all heats.
        results: {
          'dawid':      28.859,  // widyn - Best time!
          'kamil':      28.924,  // Jechanka
          'rafal':      29.234,  // R3fiX
          'axel':       29.520,  // haqe
          'pawel':      29.635,  // ELP4BLITTO
          'aleksander': 30.311,  // krzysio5
          'grzegorz':   30.534,  // BlockForeman
          'juliusz':    30.741,  // Julczyk
        }
      },
      {
        date: '2026-06-28',
        sessionName: 'Wasęg',
        results: {
          'axel': 29.100,      // haqe - Best time!
          'wojciech': 29.257,  // Arachne
          'webster': 32.081,   // Webster
          'bartosz': 32.173,   // Bako
        }
      }
    ]
  },
  {
    id: 'track2',
    name: 'WRT Kapelanka',
    type: 'race', // Grand Prix format: qualifying session + race, ranked by race finish
    website: 'https://www.wrt.com.pl/',
    location: 'Kraków, Poland',
    events: [
      {
        // Event not started yet — placeholder data, randomly assigned.
        date: '2026-07-16',
        sessionName: 'Grand Prix',
        // For race events, each result has a qualifying lap time (seconds)
        // and a race finishing position (1 = winner).
        // 8 drivers raced. Qualifying = best lap from qualifying session (#848);
        // racePosition = final finishing order from the race (#849).
        results: {
          'kamil':    { qualifying: 40.917, racePosition: 1 },  // Jechanka
          'rafal':    { qualifying: 41.592, racePosition: 2 },  // R3fiX
          'axel':     { qualifying: 41.577, racePosition: 3 },  // HAQE
          'michal':   { qualifying: 42.087, racePosition: 4 },  // FastAsFcuk
          'serhii':   { qualifying: 41.957, racePosition: 5 },  // Serhii
          'wojciech': { qualifying: 42.177, racePosition: 6 },  // Arachne
          'dominik':  { qualifying: 43.616, racePosition: 7 },  // ziajka
          'ilya':     { qualifying: 45.324, racePosition: 8 },  // demuux
        }
      }
    ]
  },
];

// F1-style points awarded by race finishing position (1st -> 10th)
const RACE_POINTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get the best lap time for each participant at a specific track
 * @param {string} trackId - The track ID
 * @returns {Array} Array of results with participant info and best lap
 */
export function getBestLapsForTrack(trackId) {
  const track = tracks.find(t => t.id === trackId);
  if (!track) return [];

  // Collect all lap times for each participant across all events
  const participantBestLaps = {};

  track.events.forEach(event => {
    Object.entries(event.results).forEach(([participantId, lapTime]) => {
      if (!participantBestLaps[participantId] || lapTime < participantBestLaps[participantId].time) {
        participantBestLaps[participantId] = {
          time: lapTime,
          date: event.date
        };
      }
    });
  });

  // Build results array with participant info
  const results = Object.entries(participantBestLaps).map(([participantId, bestLap]) => {
    const participant = participants.find(p => p.id === participantId);
    return {
      participantId,
      participant,
      bestLapTime: bestLap.time,
      dateAchieved: bestLap.date
    };
  });

  // Sort by best lap time (fastest first)
  results.sort((a, b) => a.bestLapTime - b.bestLapTime);

  return results;
}

/**
 * Get the best lap for each participant within a single event, ranked fastest first.
 * @param {string} trackId - The track ID
 * @param {string} date - The event date (ISO string)
 * @returns {Array} Array of results with participant info and best lap for that event
 */
export function getBestLapsForEvent(trackId, date) {
  const track = tracks.find(t => t.id === trackId);
  if (!track) return [];

  const event = track.events.find(e => e.date === date);
  if (!event) return [];

  const results = Object.entries(event.results).map(([participantId, lapTime]) => {
    const participant = participants.find(p => p.id === participantId);
    return {
      participantId,
      participant,
      bestLapTime: lapTime,
      dateAchieved: event.date
    };
  });

  results.sort((a, b) => a.bestLapTime - b.bestLapTime);

  return results;
}

/**
 * Get the fastest laps ever set on a circuit, across all events — the circuit
 * records. Works for both track types: fastest-lap tracks use the raw lap time,
 * race tracks use each driver's best qualifying lap.
 * @param {string} trackId - The track ID
 * @returns {Array} Best lap per driver, fastest first
 */
export function getCircuitRecords(trackId) {
  const track = tracks.find(t => t.id === trackId);
  if (!track) return [];

  const participantBestLaps = {};

  track.events.forEach(event => {
    Object.entries(event.results).forEach(([participantId, value]) => {
      // Race tracks store { qualifying, racePosition }; fastest-lap tracks store a number.
      const lapTime = typeof value === 'number' ? value : value.qualifying;
      if (lapTime == null) return;
      if (!participantBestLaps[participantId] || lapTime < participantBestLaps[participantId].time) {
        participantBestLaps[participantId] = { time: lapTime, date: event.date };
      }
    });
  });

  const results = Object.entries(participantBestLaps).map(([participantId, bestLap]) => ({
    participantId,
    participant: participants.find(p => p.id === participantId),
    bestLapTime: bestLap.time,
    dateAchieved: bestLap.date
  }));

  results.sort((a, b) => a.bestLapTime - b.bestLapTime);
  return results;
}

/**
 * Get the ID of the track with the most recent event, so the app can open on
 * the latest race by default.
 * @returns {string|null} Track ID with the newest event date
 */
export function getLatestEventTrackId() {
  let latestTrackId = null;
  let latestDate = null;

  tracks.forEach(track => {
    track.events.forEach(event => {
      if (!latestDate || new Date(event.date) > new Date(latestDate)) {
        latestDate = event.date;
        latestTrackId = track.id;
      }
    });
  });

  return latestTrackId;
}

/**
 * Get the list of event dates available for a track (most recent first)
 * @param {string} trackId - The track ID
 * @returns {string[]} Array of ISO date strings
 */
export function getEventDatesForTrack(trackId) {
  const track = tracks.find(t => t.id === trackId);
  if (!track) return [];
  return track.events
    .map(e => e.date)
    .sort((a, b) => new Date(b) - new Date(a));
}

/**
 * Get the race results for a specific track event, ranked by finishing position.
 * Used for "race" type tracks that have qualifying + race data.
 * @param {string} trackId - The track ID
 * @param {string} date - The event date (ISO string)
 * @returns {Array} Ranked race results with participant info, qualifying time,
 *                  finishing position, and points
 */
export function getRaceResultsForEvent(trackId, date) {
  const track = tracks.find(t => t.id === trackId);
  if (!track) return [];

  const event = track.events.find(e => e.date === date);
  if (!event) return [];

  const results = Object.entries(event.results).map(([participantId, data]) => {
    const participant = participants.find(p => p.id === participantId);
    return {
      participantId,
      participant,
      qualifyingTime: data.qualifying,
      racePosition: data.racePosition,
      points: RACE_POINTS[data.racePosition - 1] || 0,
      date: event.date
    };
  });

  // Sort by race finishing position (winner first)
  results.sort((a, b) => a.racePosition - b.racePosition);

  return results;
}

/**
 * Get the qualifying order for a specific track event (fastest lap first).
 * @param {string} trackId - The track ID
 * @param {string} date - The event date (ISO string)
 * @returns {Array} Results ordered by qualifying time with grid position
 */
export function getQualifyingForEvent(trackId, date) {
  const results = getRaceResultsForEvent(trackId, date);
  const sorted = [...results].sort((a, b) => a.qualifyingTime - b.qualifyingTime);
  return sorted.map((r, index) => ({ ...r, gridPosition: index + 1 }));
}

/**
 * Format lap time for display
 * @param {number} seconds - Lap time in seconds
 * @returns {string} Formatted time string (e.g., "00:29.100")
 */
export function formatLapTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = (seconds % 60).toFixed(3);
  return `${minutes.toString().padStart(2, '0')}:${secs.padStart(6, '0')}`;
}

/**
 * Format date for display
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date (e.g., "Jun 15, 2026")
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}
