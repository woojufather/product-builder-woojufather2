document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const lottoNumbersDiv = document.getElementById('lottoNumbers');
    const themeToggleBtn = document.getElementById('themeToggle');
    const body = document.body;

    generateBtn.addEventListener('click', generateLottoNumbers);
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Theme initialization
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggleBtn.textContent = '☀️'; // Sun icon for light mode
        } else {
            body.classList.remove('dark-mode');
            themeToggleBtn.textContent = '🌙'; // Moon icon for dark mode
        }
    }

    function toggleTheme() {
        if (body.classList.contains('dark-mode')) {
            applyTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            applyTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    // Load saved theme or detect system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
    } else {
        applyTheme('light'); // Default to light if no preference
    }

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        
        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
        
        lottoNumbersDiv.innerHTML = ''; // Clear previous numbers
        sortedNumbers.forEach(num => {
            const span = document.createElement('span');
            span.classList.add('number');
            span.textContent = num.toString().padStart(2, '0'); // Format to 2 digits
            lottoNumbersDiv.appendChild(span);
        });
    }

    // Generate numbers on initial load
    generateLottoNumbers();
});