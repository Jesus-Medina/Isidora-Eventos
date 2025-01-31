export const menuEvents = {
    initialize: (config) => {
        config.menuItems.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                config.menuItems.forEach((link) => link.classList.remove("is-active"));
                e.target.classList.add("is-active");

                const targetSection = document.querySelector(e.target.getAttribute("href"));
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            });
        });
    },
};
