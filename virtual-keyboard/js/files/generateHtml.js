const labels = ['` ~', '1 !', '2 @', '3 #', '4 $', '5 %', '6 ^', '7 &', '8 *', '9 (', '0 )', '- _', '= +', '', 'del', 'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[ {', '] }', '\\ |', 'EN', 'caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '; :', '\' "', '', '', 'shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ', &lt;', '. >', '/ ?', 'shift', '^', '', 'ctrl', 'option', 'cmd', '', 'cmd', 'ctrl', '^', '^', '^'];
const dataCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Delete', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', '', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', '', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', '', 'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']

function generateHTML() {
  const textAreaWrapper = document.createElement('div');
  const textAreaInput = document.createElement('textarea');
  textAreaWrapper.classList.add('textarea');
  textAreaInput.classList.add('textarea__input');
  textAreaInput.setAttribute('autofocus', '');
  textAreaWrapper.append(textAreaInput);
  document.body.append(textAreaWrapper);

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  
  const keys = [];

  for (let i = 0; i < 67; i += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.setAttribute('data-code', dataCodes[i]);
    key.textContent = labels[i];

    switch (i) {
      case 13: key.classList.add('key--service'); key.classList.add('size-5'); break;
      case 14: key.classList.add('key--service'); break;
      case 15: key.classList.add('key--service'); key.classList.add('size-3'); break;
      case (i > 15 && i < 28): key.classList.add('key--input'); break;
      case 28: key.classList.add('size-3'); break;
      case 29: key.classList.add('key--service'); key.classList.add('change-language'); break;
      case 30: key.classList.add('key--service'); key.classList.add('size-4'); break;
      case (i > 30 && i < 42): key.classList.add('key--input'); break;
      case 42: key.classList.add('key--service'); key.classList.add('size-6'); break;
      case 43: key.classList.add('key--service'); key.classList.add('change-color'); break;
      case 44: key.classList.add('key--service'); key.classList.add('size-6'); break;
      case (i > 44 && i < 55): key.classList.add('key--input'); break;
      case 55: key.classList.add('key--service'); key.classList.add('size-4'); break;
      case 56: key.classList.add('key--service'); break;
      case 57: key.classList.add('change-color'); break;
      case 58: case 59: case 60: key.classList.add('key--service'); key.classList.add('size-2'); break;
      case 61: key.classList.add('key--service'); key.classList.add('size-7'); break;
      case 62: case 63: key.classList.add('key--service'); key.classList.add('size-3'); break;
      case 64: key.classList.add('key--service'); key.classList.add('arrow-left'); break;
      case 65: key.classList.add('key--service'); key.classList.add('arrow-down'); break;
      case 66: key.classList.add('key--service'); key.classList.add('arrow-right'); break;
    }

    keys.push(key);
  }

  for (let i = 0; i < 5; i += 1) {
    const row = document.createElement('div');
    row.classList.add('row');
    switch (i) {
      case 0: {
        for (let j = 0; j < 15; j+= 1) {
          row.append(keys[j])
        }
        break;
      }
      case 1: {
        for (let j = 15; j < 30; j+= 1) {
          row.append(keys[j])
        }
        break;
      }
      case 2: {
        for (let j = 30; j < 44; j+= 1) {
          row.append(keys[j])
        }
        break;
      }
      case 3: {
        for (let j = 44; j < 58; j+= 1) {
          row.append(keys[j])
        }
        break;
      }
      case 4: {
        for (let j = 58; j < 67; j+= 1) {
          row.append(keys[j])
        }
        break;
      }
    }
    keyboard.append(row);
  }

  document.body.append(keyboard);
}

generateHTML();