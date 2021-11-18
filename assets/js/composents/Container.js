import {Title} from "./Title";
import {Footer} from "./Footer";
import {Articles} from "./Articles";

class Container {
    constructor() {
        this.divContainer = document.createElement("div");
        this.title = new Title();
        this.footer = new Footer();
        this.article = new Articles();
    }

    init() {
        this.divContainer.style.cssText = "width: 100%;";
        document.body.appendChild(this.divContainer);

        this.title.init(this.divContainer);
        this.article.init(this.divContainer);
        this.footer.init(this.divContainer);
    }
}

export {Container};