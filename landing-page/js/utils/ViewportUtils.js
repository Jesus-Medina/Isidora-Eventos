export const viewportUtils = {
    getViewportHeight: () => window.innerHeight * 0.01,

    updateViewportHeight: (config) => {
        const vh = viewportUtils.getViewportHeight();
        document.documentElement.style.setProperty("--vh", `${vh}px`);

        config.scrollContainer.style.height = `calc(var(--vh, 1vh) * 100)`;
        config.sections.forEach((section) => {
            section.style.height = `calc(var(--vh, 1vh) * 89)`;
        });
        config.home.style.height = `calc(var(--vh, 1vh) * 100)`;
    },
};
