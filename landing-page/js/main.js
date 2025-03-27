import { config } from "./config/config.js";
import { viewportUtils } from "./utils/ViewportUtils.js";
import { scrollUtils } from "./utils/ScrollUtils.js";
import { floatingButtons } from "./components/WhatsappFlotingButton.js";
import { menuEvents } from "./components/MenuEvents.js";
import { DOMReadyObserver } from "./services/DOMReadyObserver.js";
import { initializeNavResponsiveEvents } from "./utils/navbar-responsibe.js";



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
    viewportUtils.updateViewportHeight(config);
    scrollUtils.updateActiveMenuItem(config);
    scrollUtils.handleNavbarScroll(simpleBar, config);
    floatingButtons.handleFloatingButtons(config);
    menuEvents.initialize(config);

    // Agregar listeners
    simpleBarContentWrapper.addEventListener("scroll", () => {
        scrollUtils.updateActiveMenuItem(config);
        scrollUtils.handleNavbarScroll(simpleBar, config);
        floatingButtons.handleFloatingButtons(config);

    });

    window.addEventListener(
        "resize",
        debounce(() => {
            viewportUtils.updateViewportHeight(config);
            scrollUtils.updateActiveMenuItem(config);
            scrollUtils.handleNavbarScroll(simpleBar, config);
            floatingButtons.handleFloatingButtons(config);
        }, 200)
    );
};
