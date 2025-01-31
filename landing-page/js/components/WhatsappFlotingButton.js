export const floatingButtons = {
    getCopyleftHeight: (config) => config.copyleftContainer.offsetHeight,

    isInFooterSection: (config) => {
        const rect = config.footer.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= windowHeight * 0.8;
    },

    handleFloatingButtons: (config) => {
        const isInFooter = floatingButtons.isInFooterSection(config);

        if (isInFooter) {
            const copyleftHeight = floatingButtons.getCopyleftHeight(config);
            config.whatsappContainer.style.bottom = `${copyleftHeight + 10}px`;
        } else {
            config.whatsappContainer.style.bottom = "20px";
        }

        config.whatsappContainer.style.transition = "bottom 0.3s ease";
    },
};
