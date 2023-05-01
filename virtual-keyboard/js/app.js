// function generateHTML() {
//   const textAreaWrapper = document.createElement('div');
//   const textAreaInput = document.createElement('textarea');\
//   textAreaWrapper.classList.add('textarea');
//   textAreaInput.classList.add('textarea__input');
//   textAreaWrapper.append(textAreaInput);
//   document.body.append(textAreaWrapper);

//   const keyboard = document.createElement('div');
//   keyboard.classList.add('keyboard');
// }

// generateHTML();
import './files/language.js';
import './files/mouseInput.js';
import './files/localStorage.js';
import { getCaretPosition } from './files/functions.js';

const textarea = document.querySelector('.textarea__input');
const keys = document.querySelectorAll('.key');

// Input from real keyboard
document.addEventListener('keydown', (event) => {
  const keyName = event.code;
  const key = Array.from(keys).find((element) => element.dataset.code === keyName);
  const text = textarea.value;
  const caretPosition = getCaretPosition();

  // Adding tab indent
  if (keyName === 'Tab') {
    textarea.value = `${text.slice(0, caretPosition.start)}\t${text.slice(caretPosition.end)}`;
    textarea.selectionStart = caretPosition.start + 1;
    textarea.selectionEnd = caretPosition.start + 1;
    event.preventDefault();
  }

  if (!key.classList.contains('key--service')) {
    // Selecting a symbol depending on the capslock and shift
    const keyValue = key.textContent;
    const capsKey = document.querySelector('.key--service[data-code="CapsLock"');
    const leftShiftKey = document.querySelector('.key--service[data-code="ShiftLeft"');
    const rightShiftKey = document.querySelector('.key--service[data-code="ShiftRight"');

    let inputSymbol = capsKey.classList.contains('active') ? keyValue.slice(0, 1) : keyValue.slice(0, 1).toLowerCase();
    if (leftShiftKey.classList.contains('active') || rightShiftKey.classList.contains('active')) {
      inputSymbol = keyValue.slice(-1);
    }

    textarea.value = `${text.slice(0, caretPosition.start)}${inputSymbol}${text.slice(caretPosition.end)}`;
    textarea.selectionStart = caretPosition.start + 1;
    textarea.selectionEnd = caretPosition.start + 1;
    event.preventDefault();
  }

  key.classList.add('active');
});

document.addEventListener('keyup', (event) => {
  const keyName = event.code;
  if (keyName !== 'Capslock') {
    const key = Array.from(keys).find((element) => element.dataset.code === keyName);
    key.classList.remove('active');
  }
});
