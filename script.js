document.getElementById('encryptButton').addEventListener('click', encryptText);
document.getElementById('decryptButton').addEventListener('click', decryptText);
document.getElementById('copyButton').addEventListener('click', copyToClipboard);

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const shuffledAlphabet = 'qwertyuiopasdfghjklzxcvbnm'; 

const encryptionMap = createMap(alphabet, shuffledAlphabet);
const decryptionMap = createMap(shuffledAlphabet, alphabet);

function createMap(source, target) {
    return Object.fromEntries([...source].map((char, index) => [char, target[index]]));
}

function encryptText() {
    const text = document.getElementById('text').value.toLowerCase();
    const encrypted = substituteLetters(text, encryptionMap);
    document.getElementById('encryptedText').value = encrypted;
}

function decryptText() {
    const text = document.getElementById('text').value.toLowerCase();
    const decrypted = substituteLetters(text, decryptionMap);
    document.getElementById('encryptedText').value = decrypted;
}

function copyToClipboard() {
    const encryptedTextArea = document.getElementById('encryptedText');
    encryptedTextArea.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles!');
}

function substituteLetters(str, map) {
    return str.split('').map(char => map[char] || char).join('');
}
