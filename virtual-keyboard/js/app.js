// function generateHTML() {
//   const textAreaWrapper = document.createElement('div');
//   const textAreaInput = document.createElement('textarea');
  
//   textAreaWrapper.classList.add('textarea');
//   textAreaInput.classList.add('textarea__input');
//   textAreaWrapper.append(textAreaInput);
//   document.body.append(textAreaWrapper);

//   const keyboard = document.createElement('div');
//   keyboard.classList.add('keyboard');
// }

// generateHTML();
const textarea = document.querySelector('.textarea__input');
const keyboard = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.key');
const inputKeys = document.querySelectorAll('.key--input');
const languageKey = document.querySelector('.change-language');

const letters = {
  "en": ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[ {', '] }', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '; :', '\' "', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ', <', '. >', '/ ?'],
  "ru": ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/ ?']
}

//! TODO: fix shift+cmd+arrow active state

document.addEventListener('keydown', function (event) {
  const keyName = event.code;
  const key = Array.from(keys).find(element => element.dataset.code === keyName);
  key.classList.add('active');
});

document.addEventListener('keyup', function (event) {
  const keyName = event.code;
  if (keyName !== 'Capslock') {
    const key = Array.from(keys).find(element => element.dataset.code === keyName);
    key.classList.remove('active');
  }
});

languageKey.addEventListener('click', function (event) {
  if (languageKey.textContent === 'EN') {
    inputKeys.forEach( (key, index) => {
      key.textContent = letters['ru'][index].toUpperCase();
    });
    languageKey.textContent = 'RU';
  } else {
    inputKeys.forEach( (key, index) => {
      key.textContent = letters['en'][index].toUpperCase();
    });
    languageKey.textContent = 'EN';
  }
});