class Footer {

    /**
     * Constructor
     */
    constructor() {
        this.footer = document.createElement("div");
    }

    /**
     * Init the container
     * @param divContainer
     */
    init(divContainer) {
        this.footer.innerHTML = "Copyright by Mister Jérôme";
        this.footer.style.cssText = "background-color: darkgrey; text-align: center; padding: 5rem 0; text-align: center; position: static; bottom: 0";

        divContainer.appendChild(this.footer);
    }
}
export {Footer};