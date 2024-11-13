const getName = document.getElementById('name');
const getPassword = document.getElementById('psword');
const confirmButton = document.getElementById('confirmb');

function checkInput() {
    if (getName.value !== '' && getPassword.value !== '') {
        confirmButton.style.backgroundColor = '#0033AA';
    } else {
        confirmButton.style.backgroundColor = '#DBDBDB';
    }
}

getName.addEventListener('input', checkInput);
getPassword.addEventListener('input', checkInput);


const modalDisplay = document.getElementById('displayModal');
const privacyNote = document.getElementById('modalLink');

privacyNote.addEventListener('click', function(event) {
    event.preventDefault();
    modalDisplay.style.display = 'flex';
});

function Close(){
    modalDisplay.style.display = 'none';
}


const span = document.getElementById('inputSpan');
const bankSpan = document.getElementById('inputSpan1');

getName.addEventListener('blur', function() {
    if (getName.value === '') {
        span.style.display = 'block';
        getName.style.borderBottomColor = 'red';
    } else if (getName.value !== '') {
        span.style.display = 'none';
        getName.style.borderBottom = '2px solid #0033AA';

    }

});

getPassword.addEventListener('blur', function() {
    if (getPassword.value === '') {
        bankSpan.style.display = 'block';
        getPassword.style.borderBottomColor = 'red';
    } else if (getPassword.value !== '') {
        bankSpan.style.display = 'none';
        getPassword.style.borderBottom = '2px solid #0033AA';

    }

});


