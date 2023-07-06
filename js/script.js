window.onload = function() {
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
