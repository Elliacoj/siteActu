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
            let dataArticles = data.data;
            dataArticles.sort(function compare(a, b) {
                if (a.published_at < b.published_at)
                    return -1;
                if (a.published_at > b.published_at )
                    return 1;
                return 0;
            }).reverse();

            dataArticles.forEach(function (e) {
                let article = new Article();
                article.init(e.title, e.description, e.author, e.published_at, e.image, e.source);
            })
        });
    }
}

export {Articles};