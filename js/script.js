window.onload = function() {
  // Fireworks code
  var fireworks = new Fireworks({
    target: 'fireworks',  // id of the element
    hue: 360,
    brightness: { min: 1, max: 40 },
    startDelay: 30,
    minDelay: 70,
    maxDelay: 100,
    acceleration: 0.5,
    intensity: 29.22,
    opacity: 0.3,
    friction: 1.00,
    gravity: 3.04,
    particles: 46,
    trace: 5,
    traceSpeed: 30,
    explosion: 3,
    autoresize: true,
    bound: { x: 0, y: 0, width: '100vw', height: '100vh' },
  });
  fireworks.start();

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
}