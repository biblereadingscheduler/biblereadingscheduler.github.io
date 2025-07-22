# Bible Reading Calendar Generator

A simple, standalone tool to generate a personalized Bible reading calendar with daily reminders that can be imported into any calendar application.

## Features

- **Book Selection**: Choose from individual books, entire Old/New Testament, or the complete Bible
- **Flexible Date Range**: Set your own start and end dates for the reading plan
- **Verse-Based Distribution**: Smart algorithm that considers verse counts for balanced daily reading time
  - Takes into account that chapters vary greatly in length (e.g., Psalm 119 has 176 verses, while Psalm 117 has only 2)
  - Ensures more consistent daily reading time by balancing verse counts
  - Never splits individual chapters across multiple days
- **Visual Calendar**: Month-by-month calendar view showing:
  - Daily reading assignments
  - Verse count indicators (e.g., "176v") for each day
  - Color-coded reading days for easy visualization
- **ICS Export**: Export your reading plan as a .ics file with:
  - Daily events at 6:00 AM
  - Automatic reminders/alerts
  - Compatible with Mac Calendar, Google Calendar, Outlook, etc.
- **Print-Friendly**: Clean print layout for physical reference
- **Detailed Statistics**: 
  - Total verses across selected books
  - Average verses per day
  - Daily verse range (minimum and maximum)
  - Helps you understand the reading commitment

## How to Use

### Running the Tool

1. **Option 1 - Direct Opening (Simplest)**:
   - Navigate to the `bible-reading-calendar` folder
   - Double-click `index.html` to open in your browser

2. **Option 2 - Local Server** (if you encounter any issues):
   - Open Terminal
   - Navigate to the project directory: `cd /Users/yinuochen/Documents/Projects/bible-reading-calendar`
   - Run: `python3 -m http.server 8000`
   - Open your browser and go to: `http://localhost:8000`

### Creating Your Reading Plan

1. **Set Your Dates**:
   - Choose your start date (defaults to today)
   - Choose your end date (defaults to one year from today)

2. **Select Books**:
   - Use quick select buttons for common selections:
     - "Entire Bible" - All 66 books
     - "Old Testament" - Genesis through Malachi
     - "New Testament" - Matthew through Revelation
   - Or manually select individual books from the categorized lists

3. **Generate Calendar**:
   - Click the "Generate Calendar" button
   - Review the summary showing:
     - Total chapters and verses
     - Average chapters and verses per day
     - Daily verse range to help gauge reading time
   - View the visual calendar with reading assignments and verse counts

4. **Export Your Plan**:
   - Click "Export to Calendar (.ics)" to download the calendar file
   - Double-click the downloaded .ics file to import into your calendar app
   - Or click "Print View" to print a physical copy

### Calendar Import Instructions

#### Mac Calendar
1. Download the .ics file
2. Double-click the file
3. Choose which calendar to add the events to
4. Click "OK"

#### Google Calendar
1. Open Google Calendar
2. Click the gear icon → Settings
3. Click "Import & Export" in the left sidebar
4. Click "Select file from your computer"
5. Choose the downloaded .ics file
6. Select which calendar to add events to
7. Click "Import"

#### Outlook
1. Open Outlook
2. Go to File → Open & Export → Import/Export
3. Select "Import an iCalendar (.ics) file"
4. Browse to the downloaded .ics file
5. Choose to import as new calendar or add to existing

## Technical Details

- Pure HTML/CSS/JavaScript - no dependencies
- Runs entirely in your browser
- No data is sent to any server
- Calendar events include daily reminders at 6:00 AM
- Each reading is scheduled as a 30-minute event (6:00-6:30 AM)
- Includes complete verse count data for all 31,102 verses in the Bible
- Uses an intelligent distribution algorithm that:
  - Balances daily reading by verse count rather than chapter count
  - Ensures readings span the entire selected date range
  - Maintains chapter integrity (never splits chapters)

## Bible Book Categories

The tool organizes the 66 books of the Bible into these categories:

- **Law**: Genesis - Deuteronomy (5 books)
- **History**: Joshua - Esther (12 books)
- **Wisdom/Poetry**: Job - Song of Solomon (5 books)
- **Major Prophets**: Isaiah - Daniel (5 books)
- **Minor Prophets**: Hosea - Malachi (12 books)
- **Gospels**: Matthew - John (4 books)
- **NT History**: Acts (1 book)
- **Epistles**: Romans - Jude (21 books)
- **Prophecy**: Revelation (1 book)

## Tips

- For a one-year Bible reading plan, select "Entire Bible" with dates one year apart
- The verse-based algorithm ensures more consistent daily reading time:
  - A day with Psalm 119 (176 verses) won't have additional chapters
  - Days with shorter chapters (like 2 John, 3 John) will include more chapters
- Readings maintain book order (won't jump between books)
- The calendar shows verse counts for each day to help you plan your reading time
- Consider printing a backup copy of your calendar
- You can generate multiple plans for different book selections
- Average daily reading for the entire Bible over one year is approximately 85 verses

## Troubleshooting

If the calendar doesn't load properly:
1. Make sure JavaScript is enabled in your browser
2. Try using the Python server method instead of opening the file directly
3. Check that you've selected at least one book and valid dates

For best results, use a modern browser (Chrome, Firefox, Safari, Edge).