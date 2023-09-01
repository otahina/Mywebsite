// Modal code
  function showModal(modalId) {
    var modal = document.getElementById(`${modalId}-modal`);
    modal.style.display = 'block';
  }

  function hideModal(modalId) {
    var modal = document.getElementById(`${modalId}-modal`);
    modal.style.display = 'none';
  }

  var sections = ['about-me', 'skills', 'projects', 'career', 'contacts'];

  sections.forEach(function(section) {
    document.getElementById(`${section}-button`).addEventListener('click', function() {
      showModal(section);
    });

    var closeModalElement = document.getElementById(`${section}-modal`).querySelector('.close');
    if (closeModalElement) {
      closeModalElement.addEventListener('click', function() {
        hideModal(section);
      });
    } else {
      console.warn(`No .close element found in ${section}-modal`);
    }
  });

// Bubbles

const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach(bubble => {
  const size = Math.random() * 200;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${5 + Math.random() * 5}s`; // Random duration between 2s and 5s
});

// Button hover

const buttonIds = ['about-me-button', 'skills-button', 'projects-button', 'career-button', 'contacts-button'];

buttonIds.forEach(buttonId => {
  const button = document.querySelector(`#${buttonId}`);
  const box = button.previousElementSibling; // gets the sibling element that comes before the button

  button.addEventListener('mouseenter', function() {
    box.classList.add('hover');
  });

  button.addEventListener('mouseleave', function() {
    box.classList.remove('hover');
  });
});
