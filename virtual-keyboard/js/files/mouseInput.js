import { getCaretPosition } from './functions.js';

const textarea = document.querySelector('.textarea__input');
const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('click', () => {
    const text = textarea.value;
    const caretPosition = getCaretPosition();
    const capsKey = document.querySelector('.key--service[data-code="CapsLock"');
    const leftShiftKey = document.querySelector('.key--service[data-code="ShiftLeft"');
    const rightShiftKey = document.querySelector('.key--service[data-code="ShiftRight"');

    switch (key.dataset.code) {
      case 'CapsLock':
      case 'ShiftLeft':
      case 'ShiftRight': key.classList.toggle('active'); break;
      case 'Space': {
        textarea.value = `${text.slice(0, caretPosition.start)} ${text.slice(caretPosition.end)}`;
        textarea.selectionStart = caretPosition.start + 1;
        textarea.selectionEnd = caretPosition.start + 1;
        break;
      }
      case 'Enter': {
        textarea.value = `${text.slice(0, caretPosition.start)}\n${text.slice(caretPosition.end)}`;
        textarea.selectionStart = caretPosition.start + 1;
        textarea.selectionEnd = caretPosition.start + 1;
        break;
      }
      case 'Backspace': {
        // substring, because it doesn't support negative indexes
        textarea.value = `${text.substring(0, caretPosition.start - 1)}${text.substring(caretPosition.end)}`;
        textarea.selectionStart = caretPosition.start - 1;
        textarea.selectionEnd = caretPosition.start - 1;
        break;
      }
      case 'Delete': {
        textarea.value = text.slice(0, caretPosition.start) + text.slice(caretPosition.end + 1);
        textarea.selectionStart = caretPosition.end;
        textarea.selectionEnd = caretPosition.end;
        break;
      }
      case 'Tab': {
        textarea.value = `${text.slice(0, caretPosition.start)}\t${text.slice(caretPosition.end)}`;
        textarea.selectionStart = caretPosition.start + 1;
        textarea.selectionEnd = caretPosition.start + 1;
        break;
      }
      case 'ArrowUp': {
        if (leftShiftKey.classList.contains('active') || rightShiftKey.classList.contains('active')) {
          textarea.selectionStart = 0;
          textarea.selectionEnd = caretPosition.start;
        } else {
          textarea.selectionStart = 0;
          textarea.selectionEnd = 0;
        }
        break;
      }
      case 'ArrowLeft': {
        if (leftShiftKey.classList.contains('active') || rightShiftKey.classList.contains('active')) {
          if (textarea.selectionStart !== 0) {
            textarea.selectionStart = caretPosition.start - 1;
          } else {
            textarea.selectionStart = caretPosition.start;
          }
        } else {
          textarea.selectionStart = caretPosition.start - 1;
          textarea.selectionEnd = caretPosition.start - 1;
        }
        break;
      }
      case 'ArrowDown': {
        if (leftShiftKey.classList.contains('active') || rightShiftKey.classList.contains('active')) {
          textarea.selectionStart = caretPosition.start;
          textarea.selectionEnd = text.length;
        } else {
          textarea.selectionStart = text.length;
          textarea.selectionEnd = text.length;
        }
        break;
      }
      case 'ArrowRight': {
        if (leftShiftKey.classList.contains('active') || rightShiftKey.classList.contains('active')) {
          if (textarea.selectionEnd !== text.length) {
            textarea.selectionEnd = caretPosition.end + 1;
          } else {
            textarea.selectionEnd = caretPosition.end;
          }
        } else {
          textarea.selectionStart = caretPosition.start + 1;
          textarea.selectionEnd = caretPosition.start + 1;
        }
        break;
      }
      default: break;
    }

    if (!key.classList.contains('key--service')) {
      // Selecting a symbol depending on the capslock and shift
      const keyValue = key.textContent;

      let inputSymbol = capsKey.classList.contains('active') ? keyValue.slice(0, 1) : keyValue.slice(0, 1).toLowerCase();
      if (leftShiftKey.classList.contains('active') || rightShiftKey.classList.contains('active')) {
        inputSymbol = keyValue.slice(-1);
      }

      textarea.value = `${text.slice(0, caretPosition.start)}${inputSymbol}${text.slice(caretPosition.end)}`;
      textarea.selectionStart = caretPosition.start + 1;
      textarea.selectionEnd = caretPosition.start + 1;
    }

    textarea.focus();
  });
});
