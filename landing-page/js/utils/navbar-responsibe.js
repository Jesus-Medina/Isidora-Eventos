// Función para abrir el menú
export function openMenu(config) {
    config.hamburger_menu.classList.remove("hide__item");
    config.open_menu.classList.add("hide__item");
    config.close_menu.classList.remove("hide__item");
    config.navbarResponsive.classList.add("navbar-wrapper-black");
}

// Función para cerrar el menú
export function closeMenu(config) {
    config.hamburger_menu.classList.add("hide__item");
    config.open_menu.classList.remove("hide__item");
    config.close_menu.classList.add("hide__item");
    config.navbarResponsive.classList.remove("navbar-wrapper-black");
}

// Función para inicializar los eventos del menú
export function initializeNavResponsiveEvents(config) {
    config.open_menu.addEventListener("click", () => openMenu(config));
    config.close_menu.addEventListener("click", () => closeMenu(config));

    // Selecciona todos los elementos <li> dentro del menú
    const menuItems = config.menuItems;

    // Agrega un evento de clic a cada elemento de la lista
    menuItems.forEach(item => {
        item.addEventListener("click", () => closeMenu(config));
    });
}
