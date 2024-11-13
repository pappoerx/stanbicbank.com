const bankNumber = document.getElementById('bankNumberInput');
const bankSpan3 = document.getElementById('formheaderSpan');

bankNumber.addEventListener('blur', function() {
    if (bankNumber.value.trim() === '') {
        bankSpan3.style.display = 'block';
        bankNumber.style.borderBottom = '2px solid red';
    } else {
        bankSpan3.style.display = 'none';
        bankNumber.style.borderBottom = '2px solid #0033AA';
    }
});

const nextBtn = document.getElementById('nextButton');

function checkInput() {
    if (bankNumber.value !== '') {
        confirmButton.style.backgroundColor = '#0033AA';
    } else {
        nextBtn.style.backgroundColor = '#DBDBDB';
    }
}