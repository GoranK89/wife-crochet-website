'use strict';

/*----------------*/
//LANGUAGE SWITCH//
/*---------------*/
const languageSwitch = document.querySelector('.language-switch');
const languageBtn = document.querySelectorAll('.language-btn');
const language1 = document.querySelector('.lang-1');
const chevronIcon = document.querySelector('.fa-chevron-down');

languageSwitch.addEventListener('click', function (e) {
  const clicked = e.target.closest('.language-btn');
  if (!clicked) return;
  languageBtn.forEach(btn => btn.classList.remove('btn-slovensko'));
  // Change font-awesome icon
  chevronIcon.classList.remove('fa-chevron-down');
  chevronIcon.classList.add('fa-chevron-up');
});

/*----------------*/
//TABBED COMPONENT//
/*---------------*/

const tabContainer = document.querySelector('.tab-component-btns');
const tabButtons = document.querySelectorAll('.btn-tab');
const tabContent = document.querySelectorAll('.tabs-content');

tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.btn-tab');

  // Guard clause
  if (!clicked) return;

  // Remove classes
  tabButtons.forEach(btn => btn.classList.remove('btn-tab-active'));
  tabContent.forEach(cnt => cnt.classList.remove('tabs-content-active'));

  // Active button
  clicked.classList.add('btn-tab-active');

  // Activate content
  document
    .querySelector(`.tabs-content-${clicked.dataset.tab}`) // Matching content number with HTML button data-tab
    .classList.add('tabs-content-active');
});
