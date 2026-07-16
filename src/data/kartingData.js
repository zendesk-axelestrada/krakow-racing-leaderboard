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
    racingName: null,
    email: 'michal.perek@zendesk.com',
    department: 'Contact Center Engineering',
    avatarUrl: 'https://avatars.slack-edge.com/2026-05-20/11169883191410_e73b14baa199e42028a7_original.png'
  },
  {
    id: 'pawel',
    name: 'Paweł Słota',
    racingName: null,
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
    racingName: null,
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
    racingName: null,
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
        results: {
          'wojciech':   { qualifying: 0, racePosition: 1 },   // Arachne
          'axel':       { qualifying: 0, racePosition: 2 },   // Haqe
          'bartosz':    { qualifying: 0, racePosition: 3 },   // Bako
          'webster':    { qualifying: 0, racePosition: 4 },   // Webster
          'rafal':      { qualifying: 0, racePosition: 5 },   // R3fiX
          'kamil':      { qualifying: 0, racePosition: 6 },   // Jechanka
          'dominik':    { qualifying: 0, racePosition: 7 },   // ziajka
          'ilya':       { qualifying: 0, racePosition: 8 },   // Ilya
          'serhii':     { qualifying: 0, racePosition: 9 },   // Serhii
          'aleksander': { qualifying: 0, racePosition: 10 },  // Aleksander
          'michal':     { qualifying: 0, racePosition: 11 },  // Michał
          'pawel':      { qualifying: 0, racePosition: 12 },  // Paweł
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
