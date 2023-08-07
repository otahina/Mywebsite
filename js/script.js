// Modal code
  function showModal(modalId) {
    var modal = document.getElementById(`${modalId}-modal`);
    modal.style.display = 'block';
  }

  function hideModal(modalId) {
    var modal = document.getElementById(`${modalId}-modal`);
    modal.style.display = 'none';
  }

  var sections = ['about-me', 'skills', 'projects', 'carrier', 'contacts'];

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

  const position = {
    x: Math.random() * window.innerWidth - size / 2,
    y: Math.random() * window.innerHeight - size / 2
  };
  bubble.style.setProperty('--x', `${position.x}px`);
  bubble.style.setProperty('--y', `${position.y}px`);

  bubble.style.setProperty('--random', Math.random());
});
