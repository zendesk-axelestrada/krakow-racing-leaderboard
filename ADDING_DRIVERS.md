# 🏎️ How to Add New Drivers to the Leaderboard

## Quick Add Process

When adding a new driver after a race, you only need to provide:
1. **Racing nickname** (e.g., "haqe", "Arachne")
2. **Email address** (e.g., "axel.estrada@zendesk.com")

Claude will automatically fetch from Slack:
- ✅ Full name
- ✅ Profile photo/avatar
- ✅ Job title (for department field)
- ✅ Timezone

---

## Example Request Format

```
Add driver with racing name "SpeedyGonzales" and email "john.doe@zendesk.com"
```

Or after a race:

```
Add these drivers:
- Racing name: FastLane, Email: jane.smith@zendesk.com
- Racing name: Nitro, Email: alex.wong@zendesk.com
```

---

## What Happens Behind the Scenes

### Step 1: Slack Lookup
Claude searches Slack using the email address to fetch:
```javascript
{
  name: "John Doe",
  avatarUrl: "https://avatars.slack-edge.com/...",
  timezone: "Europe/Warsaw"
}
```

### Step 2: Cerebro Team Lookup
Claude searches Cerebro to get the team/department:
```javascript
{
  teams: [
    {
      name: "Contact Center - Lithium",
      description: "Contact Center Feature Team"
    }
  ]
}
```

### Step 3: Add to Data File
Claude updates `src/data/kartingData.js`:
```javascript
{
  id: 'john',
  name: 'John Doe',              // From Slack
  racingName: 'SpeedyGonzales',  // From you
  email: 'john.doe@zendesk.com', // From you
  department: 'Contact Center - Lithium', // From Cerebro team
  avatarUrl: 'https://avatars.slack-edge.com/...' // From Slack
}
```

### Step 3: Add Race Results
Add their lap times to the track events:
```javascript
{
  date: '2026-07-05',
  results: {
    'axel': 29.100,
    'wojciech': 29.257,
    'john': 30.456  // New driver
  }
}
```

---

## Current Driver Data Format

Each participant in `src/data/kartingData.js` has:

```javascript
{
  id: 'unique-id',           // Lowercase, used for results mapping
  name: 'Full Name',         // From Slack profile
  racingName: 'Nickname',    // Racing pseudonym
  email: 'email@zendesk.com',// Zendesk email
  department: 'Job Title',   // From Slack title field
  avatarUrl: 'https://...'   // Slack avatar URL
}
```

---

## Data Source Mapping

| Source | Field | Leaderboard Field |
|--------|-------|-------------------|
| Slack | Name | `name` |
| Slack | Email | `email` |
| Slack | Profile Pic | `avatarUrl` |
| Cerebro | Team Name | `department` |
| User Input | *(custom)* | `racingName` |

---

## Adding Lap Times

After adding a driver, add their lap times:

```javascript
// In the track's events array
{
  date: '2026-07-05',
  sessionName: 'Race Day',
  results: {
    'driver_id': lap_time_in_seconds,
    // Example:
    'john': 30.456  // 30.456 seconds
  }
}
```

**Time Format:** Seconds as a decimal number
- `29.100` = 29 seconds and 100 milliseconds
- `32.456` = 32 seconds and 456 milliseconds

---

## Workflow Example

**You say:**
> "Add driver: Racing name is 'Turbo', email is maria.gonzalez@zendesk.com. Her best lap was 31.234 seconds on July 5th."

**Claude will:**
1. Search Slack for `maria.gonzalez@zendesk.com`
2. Get: Name = "Maria Gonzalez", Title = "Senior Product Manager", Avatar URL
3. Add to participants:
   ```javascript
   {
     id: 'maria',
     name: 'Maria Gonzalez',
     racingName: 'Turbo',
     email: 'maria.gonzalez@zendesk.com',
     department: 'Senior Product Manager',
     avatarUrl: 'https://avatars.slack-edge.com/...'
   }
   ```
4. Add lap time to July 5th event:
   ```javascript
   {
     date: '2026-07-05',
     results: {
       // ... existing drivers
       'maria': 31.234
     }
   }
   ```

---

## Benefits of This Approach

✅ **Always accurate** - Data comes directly from Slack  
✅ **Always up-to-date** - If someone changes their photo, we can re-fetch  
✅ **Minimal input** - You only provide nickname + email  
✅ **No manual copy-paste** - No need to download photos or find titles  
✅ **Consistent data** - Official Zendesk information  

---

## Current Drivers

| Racing Name | Email | Team (Department) |
|-------------|-------|-------------------|
| haqe | axel.estrada@zendesk.com | No Team |
| Arachne | wojciech.pajak@zendesk.com | Triss (Web Widget) |
| Webster | webster.manyanga@zendesk.com | Contact Center - Lithium |
| Bako | bartosz.krajka@zendesk.com | Ticketing Capabilities |

---

## Future: Updating Existing Drivers

If a driver changes their Slack photo or title:

**You say:**
> "Refresh Slack data for all drivers"

**Claude will:**
- Re-fetch all profiles from Slack
- Update avatars and departments
- Keep all race results intact

---

**That's it!** Just give me the racing name and email, and I'll handle the rest! 🏁
