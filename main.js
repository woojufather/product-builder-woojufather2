document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const lottoNumbersDiv = document.getElementById('lottoNumbers');

    generateBtn.addEventListener('click', generateLottoNumbers);

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