document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad simple para cambiar entre categorías de menú
    const menuTabs = document.querySelectorAll('.menu__tab');
    const menuSections = document.querySelectorAll('.menu__category');
    
    menuTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // Remover clase activa de todas las pestañas
        menuTabs.forEach(t => t.classList.remove('active'));
        
        // Agregar clase activa a la pestaña seleccionada
        this.classList.add('active');
        
        // Mostrar la sección correspondiente
        const category = this.getAttribute('data-category');
        
        menuSections.forEach(section => {
          if (section.getAttribute('data-category') === category) {
            section.classList.add('active');
          } else {
            section.classList.remove('active');
          }
        });
      });
    });
    
    // Inicializar la primera pestaña como activa
    if (menuTabs.length > 0) {
      menuTabs[0].click();
    }
  });