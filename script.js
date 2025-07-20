// Bible data with all books and their chapter counts
const bibleData = {
    law: [
        { name: "Genesis", chapters: 50 },
        { name: "Exodus", chapters: 40 },
        { name: "Leviticus", chapters: 27 },
        { name: "Numbers", chapters: 36 },
        { name: "Deuteronomy", chapters: 34 }
    ],
    history: [
        { name: "Joshua", chapters: 24 },
        { name: "Judges", chapters: 21 },
        { name: "Ruth", chapters: 4 },
        { name: "1 Samuel", chapters: 31 },
        { name: "2 Samuel", chapters: 24 },
        { name: "1 Kings", chapters: 22 },
        { name: "2 Kings", chapters: 25 },
        { name: "1 Chronicles", chapters: 29 },
        { name: "2 Chronicles", chapters: 36 },
        { name: "Ezra", chapters: 10 },
        { name: "Nehemiah", chapters: 13 },
        { name: "Esther", chapters: 10 }
    ],
    wisdom: [
        { name: "Job", chapters: 42 },
        { name: "Psalms", chapters: 150 },
        { name: "Proverbs", chapters: 31 },
        { name: "Ecclesiastes", chapters: 12 },
        { name: "Song of Solomon", chapters: 8 }
    ],
    majorProphets: [
        { name: "Isaiah", chapters: 66 },
        { name: "Jeremiah", chapters: 52 },
        { name: "Lamentations", chapters: 5 },
        { name: "Ezekiel", chapters: 48 },
        { name: "Daniel", chapters: 12 }
    ],
    minorProphets: [
        { name: "Hosea", chapters: 14 },
        { name: "Joel", chapters: 3 },
        { name: "Amos", chapters: 9 },
        { name: "Obadiah", chapters: 1 },
        { name: "Jonah", chapters: 4 },
        { name: "Micah", chapters: 7 },
        { name: "Nahum", chapters: 3 },
        { name: "Habakkuk", chapters: 3 },
        { name: "Zephaniah", chapters: 3 },
        { name: "Haggai", chapters: 2 },
        { name: "Zechariah", chapters: 14 },
        { name: "Malachi", chapters: 4 }
    ],
    gospels: [
        { name: "Matthew", chapters: 28 },
        { name: "Mark", chapters: 16 },
        { name: "Luke", chapters: 24 },
        { name: "John", chapters: 21 }
    ],
    ntHistory: [
        { name: "Acts", chapters: 28 }
    ],
    epistles: [
        { name: "Romans", chapters: 16 },
        { name: "1 Corinthians", chapters: 16 },
        { name: "2 Corinthians", chapters: 13 },
        { name: "Galatians", chapters: 6 },
        { name: "Ephesians", chapters: 6 },
        { name: "Philippians", chapters: 4 },
        { name: "Colossians", chapters: 4 },
        { name: "1 Thessalonians", chapters: 5 },
        { name: "2 Thessalonians", chapters: 3 },
        { name: "1 Timothy", chapters: 6 },
        { name: "2 Timothy", chapters: 4 },
        { name: "Titus", chapters: 3 },
        { name: "Philemon", chapters: 1 },
        { name: "Hebrews", chapters: 13 },
        { name: "James", chapters: 5 },
        { name: "1 Peter", chapters: 5 },
        { name: "2 Peter", chapters: 3 },
        { name: "1 John", chapters: 5 },
        { name: "2 John", chapters: 1 },
        { name: "3 John", chapters: 1 },
        { name: "Jude", chapters: 1 }
    ],
    prophecy: [
        { name: "Revelation", chapters: 22 }
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
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    
    // Validate dates
    if (!startDate || !endDate || startDate >= endDate) {
        alert('Please select valid start and end dates.');
        return;
    }
    
    // Get selected books
    const selectedBooks = [];
    document.querySelectorAll('.book-item input[type="checkbox"]:checked').forEach(cb => {
        selectedBooks.push({
            name: cb.value,
            chapters: parseInt(cb.dataset.chapters)
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

// Calculate daily reading assignments
function calculateReadingPlan(books, startDate, endDate) {
    // Calculate total chapters and days
    const totalChapters = books.reduce((sum, book) => sum + book.chapters, 0);
    const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    
    // Create list of all chapters
    const allChapters = [];
    books.forEach(book => {
        for (let i = 1; i <= book.chapters; i++) {
            allChapters.push(`${book.name} ${i}`);
        }
    });
    
    // Calculate chapters per day
    const baseChaptersPerDay = Math.floor(totalChapters / totalDays);
    const extraChapters = totalChapters % totalDays;
    
    // Distribute chapters across days
    const readingPlan = [];
    let chapterIndex = 0;
    
    for (let dayNum = 0; dayNum < totalDays; dayNum++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + dayNum);
        
        const chaptersToday = baseChaptersPerDay + (dayNum < extraChapters ? 1 : 0);
        const todayChapters = allChapters.slice(chapterIndex, chapterIndex + chaptersToday);
        
        if (todayChapters.length > 0) {
            readingPlan.push({
                date: new Date(currentDate),
                chapters: todayChapters,
                dayNumber: dayNum + 1
            });
        }
        
        chapterIndex += chaptersToday;
    }
    
    return readingPlan;
}

// Display the results
function displayResults(readingPlan, selectedBooks, startDate, endDate) {
    // Store the reading plan for export
    window.currentReadingPlan = readingPlan;
    
    // Show results section
    document.querySelector('.results-section').style.display = 'block';
    
    // Display summary
    const totalChapters = selectedBooks.reduce((sum, book) => sum + book.chapters, 0);
    const totalDays = readingPlan.length;
    const avgChaptersPerDay = (totalChapters / totalDays).toFixed(1);
    
    const summaryDiv = document.querySelector('.summary');
    summaryDiv.innerHTML = `
        <p><strong>Reading Plan Summary:</strong></p>
        <ul>
            <li>Books selected: ${selectedBooks.length}</li>
            <li>Total chapters: ${totalChapters}</li>
            <li>Duration: ${totalDays} days</li>
            <li>Average chapters per day: ${avgChaptersPerDay}</li>
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
            dayCell.appendChild(readingDiv);
            dayCell.classList.add('has-reading');
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