window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  //timer
  function countTimer(deadline) {

    let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

    let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor(timeRemaining / 60 / 60);
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }



    timerHours.textContent = hours;
    timerMinutes.textContent = minutes;
    timerSeconds.textContent = seconds;

    if (timeRemaining < 0) {
      clearInterval(idTimer);

      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }

  }
  countTimer();

  let idTimer = setInterval(countTimer, 1000, '1 octoder 2019');

  //menu 
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItem = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };
    closeBtn.addEventListener('click', handlerMenu);

    btnMenu.addEventListener('click', handlerMenu);
    menuItem.forEach((elem) => elem.addEventListener('click', handlerMenu));
  };

  toggleMenu();

  //popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popUpClose = document.querySelector('.popup-close'),
      poppup = document.querySelector('.popup-content');

    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
      });
    });
    popUpClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });
    let start = Date.now(); // запомнить время начала


    poppup.onclick = function () {
      let start = Date.now();

      let timer = setInterval(function () {
        let timePassed = Date.now() - start;

        poppup.style.left = timePassed / 5 + 'px';

        if (timePassed > 2000) {
          clearInterval(timer);

        }

      }, 20);
    };

  };

  togglePopUp();






});