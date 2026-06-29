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
];

// ============================================
// TRACKS
// ============================================
export const tracks = [
  {
    id: 'track1',
    name: 'GO Karting Center',
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
];

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
