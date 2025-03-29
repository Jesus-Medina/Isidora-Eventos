import { config } from "./config/config.js";
import { viewportUtils } from "./utils/ViewportUtils.js";
import { scrollUtils } from "./utils/ScrollUtils.js";
import { scrollUtilsMenu } from "./utils/ScrollUtilsMenu.js";
import { floatingButtons } from "./components/WhatsappFlotingButton.js";
import { menuEvents } from "./components/MenuEvents.js";
import { DOMReadyObserver } from "./services/DOMReadyObserver.js";
import { initializeNavResponsiveEvents } from "./utils/navbar-responsibe.js";



// Detectar qué archivo HTML fue cargado
const currentPage = window.location.pathname.split("/").pop();

document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Inicializar SimpleBar
        const simpleBar = new SimpleBar(config.scrollContainer);

        // Esperar a que el wrapper de SimpleBar esté listo
        const simpleBarContentWrapper = await DOMReadyObserver.waitForElement(
            config.scrollContainer,
            ".simplebar-content-wrapper"
        );
        

        initializeApp(simpleBarContentWrapper, simpleBar);
    } catch (error) {
        console.error("Error durante la inicialización:", error);
    }
});

// Función principal de inicialización
const initializeApp = (simpleBarContentWrapper, simpleBar) => {
    // Inicializar utilidades y componentes
    initializeNavResponsiveEvents(config);
    console.log("current page: ", currentPage);
    console.log("scrollUtilsMenu:", scrollUtilsMenu);
    viewportUtils.updateViewportHeight(config);
    if (currentPage == "menu.html") {
        scrollUtilsMenu.updateActiveMenuItem(config);
        scrollUtilsMenu.handleNavbarScroll(simpleBar, config);
    } else {
        scrollUtils.updateActiveMenuItem(config);
        scrollUtils.handleNavbarScroll(simpleBar, config);
    }
    floatingButtons.handleFloatingButtons(config);
    menuEvents.initialize(config);

    // Agregar listeners
    simpleBarContentWrapper.addEventListener("scroll", () => {
        if (currentPage == "menu.html") {
            scrollUtilsMenu.updateActiveMenuItem(config);
            scrollUtilsMenu.handleNavbarScroll(simpleBar, config);
        } else {
            scrollUtils.updateActiveMenuItem(config);
            scrollUtils.handleNavbarScroll(simpleBar, config);
        }
        floatingButtons.handleFloatingButtons(config);

    });

    window.addEventListener(
        "resize",
        debounce(() => {
            viewportUtils.updateViewportHeight(config);
            if (currentPage == "menu.html") {
                scrollUtilsMenu.updateActiveMenuItem(config);
                scrollUtilsMenu.handleNavbarScroll(simpleBar, config);
            } else {
                scrollUtils.updateActiveMenuItem(config);
                scrollUtils.handleNavbarScroll(simpleBar, config);
            }
            floatingButtons.handleFloatingButtons(config);
        }, 200)
    );
};
