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