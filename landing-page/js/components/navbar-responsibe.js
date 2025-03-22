// MenuEvents.js

// Selecciona los elementos necesarios
const social = document.querySelector("#social");
const open_menu = document.querySelector("#open");
const close_menu = document.querySelector("#close");
const hamburger_menu = document.querySelector("#hambuerger__menu");
const navbar = document.querySelector("#navbar");

// Función para abrir el menú
export function openMenu() {
    hamburger_menu.classList.remove("hide__item");
    open_menu.classList.add("hide__item");
    close_menu.classList.remove("hide__item");
    navbar.classList.add("navbar-wrapper-black");
}

// Función para cerrar el menú
export function closeMenu() {
    hamburger_menu.classList.add("hide__item");
    open_menu.classList.remove("hide__item");
    close_menu.classList.add("hide__item");
    navbar.classList.remove("navbar-wrapper-black");
}

// Función para inicializar los eventos del menú
export function initializeMenuEvents() {
    open_menu.addEventListener("click", openMenu);
    close_menu.addEventListener("click", closeMenu);

    // Selecciona todos los elementos <li> dentro del menú
    const menuItems = document.querySelectorAll(".navbar__menu .navbar__menu-item");

    // Agrega un evento de clic a cada elemento de la lista
    menuItems.forEach(item => {
        item.addEventListener("click", closeMenu);
    });
}
