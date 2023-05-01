export function runOnKeys(callback, ...codes) {
  const pressedKeys = new Set();

  document.addEventListener('keydown', (event) => {
    pressedKeys.add(event.code);

    for (let i = 0; i < codes.length; i += 1) {
      if (!pressedKeys.has(codes[i])) {
        return;
      }
    }

    pressedKeys.clear();
    callback();
  });

  document.addEventListener('keyup', (event) => {
    pressedKeys.delete(event.code);
  });
}

const textarea = document.querySelector('.textarea__input');
export const getCaretPosition = () => ({
  start: textarea.selectionStart,
  end: textarea.selectionEnd,
});
