export const scrollUtils = {
    handleNavbarScroll: (simpleBar, config) => {
        const scrollPosition = simpleBar.getScrollElement().scrollTop;

        if (scrollPosition > 100) {
            // Agregar clase de navbar colapsada
            config.navbar.classList.add("scrolled");
        } else {
            // Quitar clase de navbar colapsada
            config.navbar.classList.remove("scrolled");
        }
    },

    getCurrentSection: (config) => {
        let maxVisibility = 0;
        let mostVisibleSection = null;

        config.sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
            const visibility = visibleHeight / windowHeight;

            if (visibility > maxVisibility) {
                maxVisibility = visibility;
                mostVisibleSection = section;
            }
        });

        return mostVisibleSection;
    },

    updateActiveMenuItem: (config) => {
        const currentSection = scrollUtils.getCurrentSection(config);
        if (!currentSection) return;

        const currentSectionId = currentSection.id;

        // Actualizar clases de los elementos del menú
        config.menuItems.forEach((item) => {
            const href = item.getAttribute("href").substring(1);
            if (href === currentSectionId) {
                item.classList.add("is-active"); // Marcar como activo
            } else {
                item.classList.remove("is-active"); // Quitar el activo de los demás
            }
        });
    },

    updateViewportHeight: (config) => {
        const viewportHeight = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${viewportHeight}px`);

        config.scrollContainer.style.height = `calc(var(--vh, 1vh) * 100)`;
        config.sections.forEach((section) => {
            section.style.height = `calc(var(--vh, 1vh) * 89)`;
        });
        config.home.style.height = `calc(var(--vh, 1vh) * 100)`;
    },
};
