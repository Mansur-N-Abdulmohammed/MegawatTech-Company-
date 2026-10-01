async function changeLanguage(language) {
  const response = await fetch(`../languages/${language}.json`);

  const translations = await response.json();

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    console.log(element.dataset.i18n);
    element.textContent = translations[key];
  });

  document.documentElement.lang = language;
  document.documentElement.dir = language === 'en' ? 'ltr' : 'rtl';
}

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => {
    changeLanguage(button.dataset.language);
  });
  console.log(button);
});

// changeLanguage('en');

const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
});
