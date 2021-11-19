class Title {

    /**
     * Constructor
     */
    constructor() {
        this.title = document.createElement("h1");
    }

    /**
     * Init title
     * @param divContainer
     */
    init(divContainer) {
        this.title.style.cssText = "width: 100%; text-align: center; text-decoration-line: underline; font-size: 4rem; padding: 2rem 0; margin-top: 2rem;";
        this.title.innerHTML = "ACTU LAND";

        divContainer.appendChild(this.title);
    }
}

export {Title};