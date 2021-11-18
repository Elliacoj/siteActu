import $ from "jquery";
import {Article} from "./Article";

class Articles {
    constructor() {
        this.divArticles = document.createElement("div");
    }

    init(divContainer) {
        divContainer.appendChild(this.divArticles);
        this.divArticles.style.cssText = "width: 100%";
        this.divArticles.id = "divArticles";
        $.ajax({
            url: 'http://api.mediastack.com/v1/news',
            data: {
                access_key: '8f92de221cd41149c6531ad39fcd03a2',
                languages: 'fr,-en',
                countries: 'ca,fr',
                limit: 20,
                offset: 20,
            }
        }).done(function(data) {
            data.data.forEach(function (e) {
                console.log(e);
                let article = new Article();
                article.init(e.title, e.description, e.author, e.published_at, e.image, e.source);
            })
        });
    }
}

export {Articles};