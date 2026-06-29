# 📝 Example: How to Update the Leaderboard

This guide shows you **exactly** how to update the leaderboard after a karting session.

## Scenario: Krakow Office Karting Event

**Date**: July 5, 2026  
**Location**: GO Karting Center  
**Participants**: 5 drivers from different teams

---

## Step 1: Add New Participants

Open `src/data/kartingData.js` and add the new drivers to the `participants` array:

```javascript
export const participants = [
  // Existing participants...
  {
    id: 'p1',
    name: 'Jan Kowalski',
    email: 'jan.kowalski@zendesk.com',
    department: 'Engineering',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jan'
  },
  {
    id: 'p2',
    name: 'Anna Nowak',
    email: 'anna.nowak@zendesk.com',
    department: 'Product',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna'
  },
  {
    id: 'p3',
    name: 'Piotr Wiśniewski',
    email: 'piotr.wisniewski@zendesk.com',
    department: 'Data Science',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Piotr'
  },
  
  // ✨ ADD NEW PARTICIPANTS HERE ✨
  {
    id: 'p4',
    name: 'Katarzyna Lewandowska',
    email: 'katarzyna.lewandowska@zendesk.com',
    department: 'Design',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Katarzyna'
  },
  {
    id: 'p5',
    name: 'Tomasz Woźniak',
    email: 'tomasz.wozniak@zendesk.com',
    department: 'Sales',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tomasz'
  },
];
```

💡 **Avatar Tip**: Change the `seed=` parameter to the person's name for unique avatars!

---

## Step 2: Add Race Results

Find the `tracks` array and add a new event to GO Karting Center:

```javascript
export const tracks = [
  {
    id: 'track1',
    name: 'GO Karting Center',
    website: 'https://gokarting.com.pl/',
    location: 'Kraków, Poland',
    events: [
      // Existing events...
      {
        date: '2026-06-15',
        results: {
          'p1': 42.345,
          'p2': 43.120,
          'p3': 41.890,
        }
      },
      {
        date: '2026-06-22',
        results: {
          'p1': 41.980,
          'p2': 42.750,
          'p3': 42.100,
        }
      },
      
      // ✨ ADD NEW EVENT HERE ✨
      {
        date: '2026-07-05',  // Today's race!
        results: {
          'p1': 40.567,  // Jan - NEW RECORD! 🎉
          'p2': 42.890,  // Anna
          'p3': 41.234,  // Piotr
          'p4': 43.456,  // Katarzyna (new driver)
          'p5': 44.123,  // Tomasz (new driver)
        }
      }
    ]
  },
];
```

---

## Step 3: Save and Check

1. **Save the file** (`Cmd+S` or `Ctrl+S`)

2. **Check the dev server** (if running):
   - The page automatically refreshes
   - Jan should now be #1 with 40.567s! 🏆

3. **Or restart the dev server**:
   ```bash
   npm run dev
   ```

---

## What Happens Automatically?

The app automatically:

✅ Calculates each driver's **best lap** across all events  
✅ Sorts the leaderboard from **fastest to slowest**  
✅ Updates the **podium** with the top 3  
✅ Shows the **date** when each record was set  

In this example:
- **Jan** (40.567s on July 5) → 🥇 1st place
- **Piotr** (41.234s on July 5) → 🥈 2nd place  
- **Anna** (42.750s on June 22) → 🥉 3rd place

---

## Adding a Second Track

Let's add a new track in Warsaw:

```javascript
export const tracks = [
  // Existing track (GO Karting Center)...
  
  // ✨ ADD NEW TRACK HERE ✨
  {
    id: 'track2',
    name: 'Speed Arena Warsaw',
    website: 'https://speedarena.pl',
    location: 'Warsaw, Poland',
    events: [
      {
        date: '2026-07-10',
        results: {
          'p1': 38.123,  // Different track = different times
          'p2': 39.456,
          'p4': 37.890,  // Katarzyna is fastest here!
        }
      }
    ]
  }
];
```

Now users can select "Speed Arena Warsaw" from the track selector dropdown!

---

## Real-World Workflow

After each karting event:

1. **Collect lap times** from the track (usually printed or emailed)

2. **Open** `src/data/kartingData.js`

3. **Add new drivers** (if any) to `participants`

4. **Add event** to the appropriate track's `events` array:
   ```javascript
   {
     date: 'YYYY-MM-DD',
     results: {
       'driver_id': lap_time_in_seconds,
       'driver_id': lap_time_in_seconds,
       // ...
     }
   }
   ```

5. **Save**, **commit**, and **deploy**:
   ```bash
   git add src/data/kartingData.js
   git commit -m "Add lap times for July 5 event"
   git push
   npm run deploy
   ```

Done! 🎉

---

## Tips & Tricks

### Converting Lap Times

If the track gives you times in `MM:SS.mmm` format:

- **42.345 seconds** → `42.345`
- **1:02.890** (1 minute 2.89 seconds) → `62.890` (60 + 2.89)

### Handling Non-Participants

If someone raced but isn't a Zendesk employee:
- Add them to `participants` with a guest department
- Or just don't include them in `results`

### Multiple Races Same Day

If there are multiple sessions on the same day:
- Add separate events with different times: `2026-07-05T10:00`, `2026-07-05T14:00`
- Or keep only the best time

### Driver Didn't Finish

If a driver didn't complete a lap:
- Simply don't include their ID in that event's `results`

---

## Before and After

### Before (Initial Data)
- 3 drivers
- 2 events at GO Karting Center
- Best time: 41.890s (Piotr)

### After (Updated Data)
- **5 drivers** (added 2 new)
- **3 events** at GO Karting Center
- **2 tracks** (added Warsaw)
- **New best time**: 40.567s (Jan) 🏆

---

**That's it!** The beauty of this system is that you only update one file and everything else updates automatically.

Questions? Check [README.md](./README.md) or [QUICKSTART.md](./QUICKSTART.md)
