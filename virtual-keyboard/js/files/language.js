/* eslint-disable no-param-reassign */
import { runOnKeys } from './functions.js';

const letters = {
  en: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[ {', '] }', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '; :', '\' "', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ', <', '. >', '/ ?'],
  ru: ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/ ?'],
};
const inputKeys = document.querySelectorAll('.key--input');
const languageKey = document.querySelector('.change-language');

export default function changeLanguage() {
  if (languageKey.textContent === 'EN') {
    inputKeys.forEach((key, index) => {
      key.textContent = letters.ru[index].toUpperCase();
    });
    languageKey.textContent = 'RU';
  } else {
    inputKeys.forEach((key, index) => {
      key.textContent = letters.en[index].toUpperCase();
    });
    languageKey.textContent = 'EN';
  }
  localStorage.setItem('language', languageKey.textContent);
  console.log(inputKeys);
}

runOnKeys(changeLanguage, 'ControlLeft', 'AltLeft');
languageKey.addEventListener('click', changeLanguage);
