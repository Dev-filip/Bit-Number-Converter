function bitToNumber() {
    const bitInput = document.getElementById('bitInput').value;
    const numberOutput = parseInt(bitInput, 2);
    if (isNaN(numberOutput)) {
        alert('Invalid input. Please enter only binary digits (0 and 1).');
    } else {
        document.getElementById('numberResult').value = numberOutput;
    }
}

function numberToBit() {
    const numberInput = document.getElementById('numberInput').value;
    const bitOutput = Number(numberInput).toString(2);
    if (isNaN(numberInput) || numberInput === '') {
        alert('Invalid input. Please enter a number.');
    } else {
        document.getElementById('bitResult').value = bitOutput;
    }
}

function calculateSubnetMask() {
    const ipInput = document.getElementById('ipInput').value;
    const subnetInput = document.getElementById('subnetInput').value;
    const ipParts = ipInput.split('.').map(Number);
    if (ipParts.length !== 4 || ipParts.some(part => isNaN(part) || part < 0 || part > 255) || isNaN(subnetInput) || subnetInput < 0 || subnetInput > 32) {
        alert('Invalid IP address or subnet. Please check your input.');
        return;
    }
    const maskBits = Array(32).fill(0).map((_, i) => i < subnetInput ? 1 : 0).join('');
    const maskOctets = maskBits.match(/.{1,8}/g).map(octet => parseInt(octet, 2)).join('.');
    document.getElementById('maskResult').value = maskOctets;
}

function convert() {
    const fromBase = document.getElementById('fromBase').value;
    const toBase = document.getElementById('toBase').value;
    const inputValue = document.getElementById('inputValue').value;

    let number;
    try {
        number = parseInt(inputValue, fromBase);
        if (isNaN(number)) {
            throw new Error('Invalid input');
        }
    } catch (e) {
        alert('Invalid input. Please enter a valid number for the selected base.');
        return;
    }

    const resultValue = number.toString(toBase);
    document.getElementById('resultValue').value = resultValue.toUpperCase();
}

function resetInputs() {
    document.getElementById('fromBase').value = '2';
    document.getElementById('toBase').value = '2';
    document.getElementById('inputValue').value = '';
    document.getElementById('resultValue').value = '';
    document.getElementById('ipInput').value = '';
    document.getElementById('subnetInput').value = '';
    document.getElementById('maskResult').value = '';
}

function swapBases() {
    const fromBase = document.getElementById('fromBase');
    const toBase = document.getElementById('toBase');
    const inputValue = document.getElementById('inputValue');
    const resultValue = document.getElementById('resultValue');

    const tempBase = fromBase.value;
    fromBase.value = toBase.value;
    toBase.value = tempBase;

    const tempValue = inputValue.value;
    inputValue.value = resultValue.value;
    resultValue.value = tempValue;
}

// Created by: Filip with love <3