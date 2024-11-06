function isButton (ifButton) {
    let gamingButton = document.querySelector(ifButton);
  if (!gamingButton.classList.contains('is-toggled')) {
    turnOffPreviousButton();
    gamingButton.classList.add('is-toggled');

  } else {
    gamingButton.classList.remove('is-toggled');
  }   

  function turnOffPreviousButton () {
    const previousButton = document.querySelector('.is-toggled');

    if (previousButton) {
      previousButton.classList.remove('is-toggled');
    }

  }
}