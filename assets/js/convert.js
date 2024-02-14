function convertToHex() {
    const decimalInput = document.getElementById('decimalInput').value;
    const hexOutput = document.getElementById('hexOutput');
  
    if (isNaN(decimalInput)) {
      hexOutput.textContent = 'Please enter a valid number.';
      return;
    }
  
    const num = parseInt(decimalInput, 10);
    if (num < 0) {
      hexOutput.textContent = 'Negative numbers not supported.';
      return;
    }
  
    const hexString = decimalToHex(num);
    hexOutput.textContent = `Hexadecimal representation: ${hexString}`;
  }
  
  function decimalToHex(num) {
    if (num === 0) return '0';
  
    let hex = '';
    const hexChars = '0123456789abcdef';
  
    while (num > 0) {
      hex = hexChars[num % 16] + hex;
      num = Math.floor(num / 16);
    }
  
    return hex;
  }