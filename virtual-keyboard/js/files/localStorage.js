import { changeLanguage } from "./language.js";

function getLocalStorage() {
  const currentLanguage = localStorage.getItem('language');
	if (currentLanguage) { 
    if (currentLanguage === 'RU') changeLanguage();
	}
}

window.addEventListener('load', getLocalStorage);