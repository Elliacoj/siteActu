import $ from "jquery";
import {Article} from "./Article";
import { loremIpsum } from "lorem-ipsum";

class Articles {

    /**
     * Constructor
     */
    constructor() {
        this.divArticles = document.createElement("div");
    }

    /**
     * Init the div container
     * @param divContainer
     */
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

    /**
     * Adapt the container for one article
     */
    viewArticle() {
        let divArticle = document.querySelectorAll(".divArticle");
        let p = document.createElement("p");
        let width = divArticle[0].style.width;

        window.addEventListener('resize', function () {
            width = divArticle[0].style.width;
        }, false);

        p.style.cssText = "font-size: 2.8rem; padding: 4rem 3rem";

        p.innerHTML =
            loremIpsum({
                count: 5,
                paragraphLowerBound: 3,
                paragraphUpperBound: 7,
        });



        divArticle.forEach(function (e) {
            e.addEventListener("click", animation);

            function animation() {
                e.removeEventListener("click", animation);

                divArticle.forEach(function (b) {

                    if(b !== e && b.className === "divArticle visible") {
                        b.animate([
                                {
                                    opacity: 0,
                                    easing: 'ease-in',
                                }
                            ],
                            {
                                duration: 500,
                                easing: "linear",
                                fill: "forwards",
                            }
                        )
                        setTimeout(function () {
                            b.style.display = "none";
                            b.className = "divArticle hidden";
                        }, 500);
                    }
                    else if(b !== e) {
                        b.style.display = "flex";
                        b.className = "divArticle visible";
                        b.animate([
                                {
                                    opacity: 1,
                                    easing: 'ease-in',
                                }
                            ],
                            {
                                duration: 500,
                                easing: "linear",
                                fill: "forwards",
                            }
                        );
                    }
                    else {
                        if(window.matchMedia("(min-width: 700px)").matches) {
                            if(b.className === "divArticle visible") {
                                b.firstChild.childNodes[2].after(p);
                                b.animate([
                                        {
                                            width: "90%",
                                            easing: 'ease-in',
                                        }
                                    ],
                                    {
                                        duration: 500,
                                        easing: "linear",
                                        fill: "forwards",
                                    }
                                );
                                b.className = "divArticle visible view";
                            }
                            else {
                                b.firstChild.childNodes[3].remove();
                                b.animate([
                                        {
                                            width: width,
                                            easing: 'ease-in',
                                        }
                                    ],
                                    {
                                        duration: 500,
                                        easing: "linear",
                                        fill: "forwards",
                                    }
                                );
                                b.className = "divArticle visible";
                            }

                        }
                        else {
                            if(b.className === "divArticle visible") {
                                b.firstChild.childNodes[2].after(p);
                                b.className = "divArticle visible view";
                            }
                            else {
                                b.firstChild.childNodes[3].remove();
                                b.className = "divArticle visible";
                            }
                        }
                    }
                })
                setTimeout(function () {
                    e.addEventListener("click", animation);
                }, 600);
            }
        })
    }
}

export {Articles};