// Bible data with all books and their chapter counts
const bibleData = {
    law: [
        { name: "Genesis", chapters: 50, verses: verseData["Genesis"] },
        { name: "Exodus", chapters: 40, verses: verseData["Exodus"] },
        { name: "Leviticus", chapters: 27, verses: verseData["Leviticus"] },
        { name: "Numbers", chapters: 36, verses: verseData["Numbers"] },
        { name: "Deuteronomy", chapters: 34, verses: verseData["Deuteronomy"] }
    ],
    history: [
        { name: "Joshua", chapters: 24, verses: verseData["Joshua"] },
        { name: "Judges", chapters: 21, verses: verseData["Judges"] },
        { name: "Ruth", chapters: 4, verses: verseData["Ruth"] },
        { name: "1 Samuel", chapters: 31, verses: verseData["1 Samuel"] },
        { name: "2 Samuel", chapters: 24, verses: verseData["2 Samuel"] },
        { name: "1 Kings", chapters: 22, verses: verseData["1 Kings"] },
        { name: "2 Kings", chapters: 25, verses: verseData["2 Kings"] },
        { name: "1 Chronicles", chapters: 29, verses: verseData["1 Chronicles"] },
        { name: "2 Chronicles", chapters: 36, verses: verseData["2 Chronicles"] },
        { name: "Ezra", chapters: 10, verses: verseData["Ezra"] },
        { name: "Nehemiah", chapters: 13, verses: verseData["Nehemiah"] },
        { name: "Esther", chapters: 10, verses: verseData["Esther"] }
    ],
    wisdom: [
        { name: "Job", chapters: 42, verses: verseData["Job"] },
        { name: "Psalms", chapters: 150, verses: verseData["Psalms"] },
        { name: "Proverbs", chapters: 31, verses: verseData["Proverbs"] },
        { name: "Ecclesiastes", chapters: 12, verses: verseData["Ecclesiastes"] },
        { name: "Song of Solomon", chapters: 8, verses: verseData["Song of Solomon"] }
    ],
    majorProphets: [
        { name: "Isaiah", chapters: 66, verses: verseData["Isaiah"] },
        { name: "Jeremiah", chapters: 52, verses: verseData["Jeremiah"] },
        { name: "Lamentations", chapters: 5, verses: verseData["Lamentations"] },
        { name: "Ezekiel", chapters: 48, verses: verseData["Ezekiel"] },
        { name: "Daniel", chapters: 12, verses: verseData["Daniel"] }
    ],
    minorProphets: [
        { name: "Hosea", chapters: 14, verses: verseData["Hosea"] },
        { name: "Joel", chapters: 3, verses: verseData["Joel"] },
        { name: "Amos", chapters: 9, verses: verseData["Amos"] },
        { name: "Obadiah", chapters: 1, verses: verseData["Obadiah"] },
        { name: "Jonah", chapters: 4, verses: verseData["Jonah"] },
        { name: "Micah", chapters: 7, verses: verseData["Micah"] },
        { name: "Nahum", chapters: 3, verses: verseData["Nahum"] },
        { name: "Habakkuk", chapters: 3, verses: verseData["Habakkuk"] },
        { name: "Zephaniah", chapters: 3, verses: verseData["Zephaniah"] },
        { name: "Haggai", chapters: 2, verses: verseData["Haggai"] },
        { name: "Zechariah", chapters: 14, verses: verseData["Zechariah"] },
        { name: "Malachi", chapters: 4, verses: verseData["Malachi"] }
    ],
    gospels: [
        { name: "Matthew", chapters: 28, verses: verseData["Matthew"] },
        { name: "Mark", chapters: 16, verses: verseData["Mark"] },
        { name: "Luke", chapters: 24, verses: verseData["Luke"] },
        { name: "John", chapters: 21, verses: verseData["John"] }
    ],
    ntHistory: [
        { name: "Acts", chapters: 28, verses: verseData["Acts"] }
    ],
    epistles: [
        { name: "Romans", chapters: 16, verses: verseData["Romans"] },
        { name: "1 Corinthians", chapters: 16, verses: verseData["1 Corinthians"] },
        { name: "2 Corinthians", chapters: 13, verses: verseData["2 Corinthians"] },
        { name: "Galatians", chapters: 6, verses: verseData["Galatians"] },
        { name: "Ephesians", chapters: 6, verses: verseData["Ephesians"] },
        { name: "Philippians", chapters: 4, verses: verseData["Philippians"] },
        { name: "Colossians", chapters: 4, verses: verseData["Colossians"] },
        { name: "1 Thessalonians", chapters: 5, verses: verseData["1 Thessalonians"] },
        { name: "2 Thessalonians", chapters: 3, verses: verseData["2 Thessalonians"] },
        { name: "1 Timothy", chapters: 6, verses: verseData["1 Timothy"] },
        { name: "2 Timothy", chapters: 4, verses: verseData["2 Timothy"] },
        { name: "Titus", chapters: 3, verses: verseData["Titus"] },
        { name: "Philemon", chapters: 1, verses: verseData["Philemon"] },
        { name: "Hebrews", chapters: 13, verses: verseData["Hebrews"] },
        { name: "James", chapters: 5, verses: verseData["James"] },
        { name: "1 Peter", chapters: 5, verses: verseData["1 Peter"] },
        { name: "2 Peter", chapters: 3, verses: verseData["2 Peter"] },
        { name: "1 John", chapters: 5, verses: verseData["1 John"] },
        { name: "2 John", chapters: 1, verses: verseData["2 John"] },
        { name: "3 John", chapters: 1, verses: verseData["3 John"] },
        { name: "Jude", chapters: 1, verses: verseData["Jude"] }
    ],
    prophecy: [
        { name: "Revelation", chapters: 22, verses: verseData["Revelation"] }
    ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeDateInputs();
    renderBookSelection();
    setupEventListeners();
});

// Set default dates (today and one year from today)
function initializeDateInputs() {
    const today = new Date();
    const oneYearLater = new Date(today);
    oneYearLater.setFullYear(today.getFullYear() + 1);
    
    document.getElementById('startDate').value = formatDateForInput(today);
    document.getElementById('endDate').value = formatDateForInput(oneYearLater);
}

function formatDateForInput(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Render book selection checkboxes
function renderBookSelection() {
    Object.keys(bibleData).forEach(category => {
        const categoryDiv = document.getElementById(category);
        const bookListDiv = categoryDiv.querySelector('.book-list');
        
        bibleData[category].forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.className = 'book-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `book-${book.name.replace(/\s/g, '-')}`;
            checkbox.value = book.name;
            checkbox.dataset.chapters = book.chapters;
            checkbox.dataset.category = category;
            
            const label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.textContent = `${book.name} (${book.chapters} ch)`;
            
            bookItem.appendChild(checkbox);
            bookItem.appendChild(label);
            bookListDiv.appendChild(bookItem);
        });
    });
}

// Setup event listeners
function setupEventListeners() {
    // Quick select buttons
    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', handleQuickSelect);
    });
    
    // Generate button
    document.getElementById('generateBtn').addEventListener('click', generateCalendar);
    
    // Export buttons
    document.getElementById('exportICS').addEventListener('click', exportToICS);
    document.getElementById('printView').addEventListener('click', openPrintView);
}

// Handle quick selection buttons
function handleQuickSelect(e) {
    const selectType = e.target.dataset.select;
    const checkboxes = document.querySelectorAll('.book-item input[type="checkbox"]');
    
    switch(selectType) {
        case 'all':
            checkboxes.forEach(cb => cb.checked = true);
            break;
        case 'ot':
            checkboxes.forEach(cb => {
                const category = cb.dataset.category;
                cb.checked = ['law', 'history', 'wisdom', 'majorProphets', 'minorProphets'].includes(category);
            });
            break;
        case 'nt':
            checkboxes.forEach(cb => {
                const category = cb.dataset.category;
                cb.checked = ['gospels', 'ntHistory', 'epistles', 'prophecy'].includes(category);
            });
            break;
        case 'clear':
            checkboxes.forEach(cb => cb.checked = false);
            break;
    }
}

// Generate the reading calendar
function generateCalendar() {
    const startDateValue = document.getElementById('startDate').value;
    const endDateValue = document.getElementById('endDate').value;
    
    // Parse dates in local timezone to avoid timezone issues
    const startDate = new Date(startDateValue + 'T00:00:00');
    const endDate = new Date(endDateValue + 'T00:00:00');
    
    // Validate dates
    if (!startDateValue || !endDateValue || startDate >= endDate) {
        alert('Please select valid start and end dates.');
        return;
    }
    
    // Get selected books
    const selectedBooks = [];
    document.querySelectorAll('.book-item input[type="checkbox"]:checked').forEach(cb => {
        const bookName = cb.value;
        const category = cb.dataset.category;
        
        // Find the book in bibleData to get verse information
        let bookData = null;
        if (bibleData[category]) {
            bookData = bibleData[category].find(book => book.name === bookName);
        }
        
        selectedBooks.push({
            name: bookName,
            chapters: parseInt(cb.dataset.chapters),
            verses: bookData ? bookData.verses : null
        });
    });
    
    if (selectedBooks.length === 0) {
        alert('Please select at least one book to read.');
        return;
    }
    
    // Calculate reading plan
    const readingPlan = calculateReadingPlan(selectedBooks, startDate, endDate);
    
    // Display results
    displayResults(readingPlan, selectedBooks, startDate, endDate);
}

// Calculate daily reading assignments using verse-based distribution
function calculateReadingPlan(books, startDate, endDate) {
    // Calculate total verses and days
    const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    
    // Create list of all chapters with verse counts
    const allChapters = [];
    let totalVerses = 0;
    
    books.forEach(book => {
        for (let i = 1; i <= book.chapters; i++) {
            const verseCount = book.verses ? book.verses[i - 1] : 25; // Default to 25 if no verse data
            allChapters.push({
                reference: `${book.name} ${i}`,
                verses: verseCount,
                bookName: book.name
            });
            totalVerses += verseCount;
        }
    });
    
    const totalChapters = allChapters.length;
    
    // If we have more days than chapters, just do one chapter per day
    if (totalDays >= totalChapters) {
        const readingPlan = [];
        for (let i = 0; i < allChapters.length; i++) {
            const currentDate = new Date(startDate.getTime() + (i * 24 * 60 * 60 * 1000));
            readingPlan.push({
                date: currentDate,
                chapters: [allChapters[i].reference],
                dayNumber: i + 1,
                totalVerses: allChapters[i].verses
            });
        }
        return readingPlan;
    }
    
    // Calculate ideal distribution
    const targetVersesPerDay = totalVerses / totalDays;
    const chaptersPerDay = totalChapters / totalDays;
    
    // Use a more balanced distribution algorithm
    const readingPlan = [];
    let chapterIndex = 0;
    
    for (let dayNum = 0; dayNum < totalDays && chapterIndex < allChapters.length; dayNum++) {
        const currentDate = new Date(startDate.getTime() + (dayNum * 24 * 60 * 60 * 1000));
        const remainingDays = totalDays - dayNum;
        const remainingChapters = totalChapters - chapterIndex;
        
        // Calculate how many chapters we should ideally read today
        const targetChaptersToday = Math.ceil(remainingChapters / remainingDays);
        
        let todayChapters = [];
        let todayVerses = 0;
        let chaptersAddedToday = 0;
        
        // Add chapters for today
        while (chapterIndex < allChapters.length && chaptersAddedToday < targetChaptersToday) {
            const chapter = allChapters[chapterIndex];
            
            // For the last day, add all remaining chapters
            if (dayNum === totalDays - 1) {
                todayChapters.push(chapter.reference);
                todayVerses += chapter.verses;
                chapterIndex++;
                chaptersAddedToday++;
            }
            // If we haven't added any chapters yet, always add at least one
            else if (chaptersAddedToday === 0) {
                todayChapters.push(chapter.reference);
                todayVerses += chapter.verses;
                chapterIndex++;
                chaptersAddedToday++;
            }
            // If adding this chapter would keep us reasonably close to target verses
            else if (todayVerses + chapter.verses <= targetVersesPerDay * 1.3) {
                todayChapters.push(chapter.reference);
                todayVerses += chapter.verses;
                chapterIndex++;
                chaptersAddedToday++;
            }
            // If we're significantly under target and have few chapters, add it anyway
            else if (todayVerses < targetVersesPerDay * 0.7 && chaptersAddedToday < targetChaptersToday) {
                todayChapters.push(chapter.reference);
                todayVerses += chapter.verses;
                chapterIndex++;
                chaptersAddedToday++;
            }
            else {
                break;
            }
        }
        
        if (todayChapters.length > 0) {
            readingPlan.push({
                date: currentDate,
                chapters: todayChapters,
                dayNumber: dayNum + 1,
                totalVerses: todayVerses
            });
        }
    }
    
    // If there are any remaining chapters (shouldn't happen with the new algorithm)
    while (chapterIndex < allChapters.length) {
        const lastDay = readingPlan[readingPlan.length - 1];
        const chapter = allChapters[chapterIndex];
        lastDay.chapters.push(chapter.reference);
        lastDay.totalVerses += chapter.verses;
        chapterIndex++;
    }
    
    return readingPlan;
}

// Display the results
function displayResults(readingPlan, selectedBooks, startDate, endDate) {
    // Store the reading plan for export
    window.currentReadingPlan = readingPlan;
    
    // Show results section
    document.querySelector('.results-section').style.display = 'block';
    
    // Calculate totals and averages
    const totalChapters = selectedBooks.reduce((sum, book) => sum + book.chapters, 0);
    const totalVerses = readingPlan.reduce((sum, day) => sum + day.totalVerses, 0);
    const totalDays = readingPlan.length;
    const avgChaptersPerDay = (totalChapters / totalDays).toFixed(1);
    const avgVersesPerDay = Math.round(totalVerses / totalDays);
    
    // Calculate min and max verses per day
    const versesPerDay = readingPlan.map(day => day.totalVerses);
    const minVerses = Math.min(...versesPerDay);
    const maxVerses = Math.max(...versesPerDay);
    
    const summaryDiv = document.querySelector('.summary');
    summaryDiv.innerHTML = `
        <p><strong>Reading Plan Summary:</strong></p>
        <ul>
            <li>Books selected: ${selectedBooks.length}</li>
            <li>Total chapters: ${totalChapters}</li>
            <li>Total verses: ${totalVerses.toLocaleString()}</li>
            <li>Duration: ${totalDays} days</li>
            <li>Average chapters per day: ${avgChaptersPerDay}</li>
            <li>Average verses per day: ${avgVersesPerDay}</li>
            <li>Daily verse range: ${minVerses} - ${maxVerses} verses</li>
            <li>Start date: ${startDate.toLocaleDateString()}</li>
            <li>End date: ${endDate.toLocaleDateString()}</li>
        </ul>
    `;
    
    // Display calendar
    displayCalendar(readingPlan);
    
    // Scroll to results
    document.querySelector('.results-section').scrollIntoView({ behavior: 'smooth' });
}

// Display calendar view
function displayCalendar(readingPlan) {
    const calendarDiv = document.getElementById('calendarDisplay');
    calendarDiv.innerHTML = '';
    
    // Group readings by month
    const monthlyReadings = {};
    readingPlan.forEach(day => {
        const monthKey = `${day.date.getFullYear()}-${day.date.getMonth()}`;
        if (!monthlyReadings[monthKey]) {
            monthlyReadings[monthKey] = [];
        }
        monthlyReadings[monthKey].push(day);
    });
    
    // Display each month
    Object.keys(monthlyReadings).forEach(monthKey => {
        const [year, month] = monthKey.split('-').map(Number);
        const monthDiv = createMonthView(year, month, monthlyReadings[monthKey]);
        calendarDiv.appendChild(monthDiv);
    });
}

// Create month view
function createMonthView(year, month, readings) {
    const monthDiv = document.createElement('div');
    monthDiv.className = 'month-view';
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    
    const header = document.createElement('h3');
    header.textContent = `${monthNames[month]} ${year}`;
    monthDiv.appendChild(header);
    
    // Create calendar grid
    const grid = document.createElement('div');
    grid.className = 'calendar-grid';
    
    // Add day headers
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayHeaders.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        dayHeader.textContent = day;
        grid.appendChild(dayHeader);
    });
    
    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-day empty';
        grid.appendChild(emptyCell);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'calendar-day';
        
        const dayNumber = document.createElement('div');
        dayNumber.className = 'day-number';
        dayNumber.textContent = day;
        dayCell.appendChild(dayNumber);
        
        // Check if there's a reading for this day
        const reading = readings.find(r => r.date.getDate() === day);
        if (reading) {
            const readingDiv = document.createElement('div');
            readingDiv.className = 'day-reading';
            readingDiv.textContent = reading.chapters.join(', ');
            readingDiv.title = `${reading.totalVerses} verses`;
            dayCell.appendChild(readingDiv);
            dayCell.classList.add('has-reading');
            
            // Add verse count indicator
            const verseCount = document.createElement('div');
            verseCount.className = 'verse-count';
            verseCount.textContent = `${reading.totalVerses}v`;
            dayCell.appendChild(verseCount);
        }
        
        grid.appendChild(dayCell);
    }
    
    monthDiv.appendChild(grid);
    return monthDiv;
}

// Export to ICS format
function exportToICS() {
    if (!window.currentReadingPlan) {
        alert('Please generate a calendar first.');
        return;
    }
    
    let icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Bible Reading Calendar//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Bible Reading Plan
X-WR-TIMEZONE:UTC`;

    window.currentReadingPlan.forEach(day => {
        const uid = `${day.date.toISOString()}-bible@reading.plan`;
        const dtstamp = formatICSDate(new Date());
        const dtstart = formatICSDate(day.date) + 'T060000';
        const dtend = formatICSDate(day.date) + 'T063000';
        const summary = `Bible Reading: ${day.chapters.join(', ')}`;
        const description = `Today's reading: ${day.chapters.join(', ')}`;
        
        const event = `
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${dtstamp}
DTSTART:${dtstart}
DTEND:${dtend}
SUMMARY:${summary}
DESCRIPTION:${description}
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:Bible Reading Reminder
TRIGGER:PT0M
END:VALARM
END:VEVENT`;
        
        icsContent += event;
    });
    
    icsContent += '\nEND:VCALENDAR';
    
    // Download the file
    downloadFile(icsContent, 'bible-reading-plan.ics', 'text/calendar');
}

// Format date for ICS
function formatICSDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
}

// Download file helper
function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    URL.revokeObjectURL(url);
}

// Open print view
function openPrintView() {
    window.print();
}