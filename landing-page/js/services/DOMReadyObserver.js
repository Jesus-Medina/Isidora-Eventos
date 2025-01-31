export const DOMReadyObserver = {
    /**
     * Espera hasta que un elemento hijo específico esté listo en el DOM.
     * @param {Element} parentElement - El elemento padre donde se observarán los cambios.
     * @param {string} targetSelector - El selector CSS del elemento que se espera.
     * @returns {Promise<Element>} - Una promesa que resuelve con el elemento cuando esté listo. y devuelve ese elemento
     */
    waitForElement(parentElement, targetSelector) {
        return new Promise((resolve, reject) => {
            if (!parentElement) {
                reject(new Error("El elemento padre no existe."));
                return; // Detiene la ejecución de la función
            }

            const targetElement = parentElement.querySelector(targetSelector);
            if (targetElement) {
                resolve(targetElement); // Ya está disponible retorna la promesa con exito
                return; // Detiene la ejecución de la función
            }

            // Usar MutationObserver para esperar a que aparezca
            const observer = new MutationObserver((mutations, obs) => {
                const targetElement = parentElement.querySelector(targetSelector);
                if (targetElement) {
                    obs.disconnect(); // Dejar de observar
                    resolve(targetElement); // Resolvemos la promesa
                }
            });

            observer.observe(parentElement, { childList: true, subtree: true });

            // Opcional: Configurar un tiempo de espera (timeout)
            setTimeout(() => {
                observer.disconnect();
                reject(new Error(`El elemento "${targetSelector}" no apareció a tiempo.`));
            }, 5000); // 5 segundos de timeout
        });
    },
};
