function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        const displayInput = document.getElementById('display-pin');
        displayInput.value = parseInt(pinString);
    }
    else {
        return generatePin();
    }
};
document.getElementById('key-pad').addEventListener('click', function (event) {
    const key = event.target.innerText;
    const typedNumber = document.getElementById('typed-number');
    if (isNaN(key)) {
        if (key == 'C') {
            typedNumber.value = '';
        }
    }

    else {
        const currentNumber = typedNumber.value;
        const number = currentNumber + key;
        typedNumber.value = number;
    }
});

function verifyPin() {
    const typedNumber = document.getElementById('typed-number');
    const displayInput = document.getElementById('display-pin');
    const number = typedNumber.value;
    const displayPin = displayInput.value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');
    if (displayPin == number) {
        notifySuccess.style.display = 'block'
        notifyFail.style.display = '';

    }
    else {
        notifyFail.style.display = 'block'
        notifySuccess.style.display = '';
    }
    typedNumber.value = ''
}
