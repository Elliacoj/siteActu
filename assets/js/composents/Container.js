import {Title} from "./Title";
import {Footer} from "./Footer";
import {Articles} from "./Articles";
import {ButtonMode} from "./ButtonMode";
import {logPlugin} from "@babel/preset-env/lib/debug";

class Container {

    /**
     * Constructor
     */
    constructor() {
        this.divContainer = document.createElement("div");
        this.title = new Title();
        this.footer = new Footer();
        this.article = new Articles();
        this.button = new ButtonMode();
    }

    /**
     * Init the container
     */
    init() {
        this.divContainer.style.cssText = "width: 100%;";
        document.body.appendChild(this.divContainer);

        this.title.init(this.divContainer);
        this.article.init(this.divContainer);
        this.footer.init(this.divContainer);
        this.button.init(this.divContainer);
        this.button.click();

    }
}

export {Container};