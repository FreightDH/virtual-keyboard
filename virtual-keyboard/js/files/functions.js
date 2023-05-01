export function runOnKeys(callback, ...codes) {
  let pressedKeys = new Set();

  document.addEventListener('keydown', function (event) {
    pressedKeys.add(event.code);

    for (let code of codes) {
      if (!pressedKeys.has(code)) {
        return;
      }
    }

    pressedKeys.clear();
    callback();
  });

  document.addEventListener('keyup', function (event) {
    pressedKeys.delete(event.code);
  });
}

const textarea = document.querySelector('.textarea__input');
export const getCaretPosition = () => { return { "start": textarea.selectionStart, "end": textarea.selectionEnd } }