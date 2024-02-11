class Knit extends HTMLElement{
    constructor() {
        super();
    }
}
customElements.define('knit-stitch', Knit);

class KnitTemplate extends HTMLElement{
    constructor() {
        super();
    }
}
customElements.define('knit-template', KnitTemplate);

class KnitRow extends HTMLElement{
    static observedAttributes = ["row"];
    constructor() {
        super();
    }
    get stitches(){
        return this.querySelectorAll("knit-stitch");
    }

    connectedCallback() {
        document.documentElement.style.setProperty('--stitches-count', `${this.stitches.length}`);
    }
    attributeChangedCallback(name, _oldValue, value) {
        if (name !== "row") return;
            this.style.setProperty("--row", value);
    }
}
customElements.define('knit-row', KnitRow);
