class Article {
    constructor() {
        this.divContainer = document.createElement("div");
        this.divRight = document.createElement("div");
        this.divLeft = document.createElement("div");
        this.title = document.createElement("h2");
        this.content = document.createElement("p");
        this.author = document.createElement("p");
        this.date = document.createElement("p");
        this.image = document.createElement("img");
        this.source = document.createElement("p");
    }

    init(title, content, author, date, img, source) {
        if(img === null) {
            img = "./build/images/default.png";
        }
        this.title.innerHTML = title;
        this.content.innerHTML = content;
        this.author.innerHTML = author;
        this.date.innerHTML = (new Date(date)).toLocaleString();
        this.image.src = img;
        this.source.innerHTML = source;

        this.divContainer.style.cssText =
            "width: 50%; display: flex; flex-wrap: nowrap; margin: 2rem auto; border: 1px solid darkgrey;" +
            "border-radius: 5px";

        this.divRight.style.cssText = "width: 60%;";
        this.divLeft.style.cssText = "width: 40%";

        this.image.style.cssText = "width: 100%; padding: 2rem";
        this.title.style.cssText = "font-size: 3.4rem; padding: 1rem 2rem";
        this.content.style.cssText = "font-size: 2.8rem; padding: 1rem 2rem";
        this.author.style.cssText = "font-size: 2rem; padding: 1rem 2rem";
        this.date.style.cssText = "font-size: 2rem; padding: 1rem 2rem";
        this.source.style.cssText = "font-size: 2rem; padding: 1rem 2rem";

        this.divRight.appendChild(this.source);
        this.divRight.appendChild(this.title);
        this.divRight.appendChild(this.content);
        this.divRight.appendChild(this.author);
        this.divRight.appendChild(this.date);
        this.divLeft.appendChild(this.image);

        this.divContainer.appendChild(this.divRight);
        this.divContainer.appendChild(this.divLeft);
        document.getElementById("divArticles").appendChild(this.divContainer);
    }
}
export {Article};