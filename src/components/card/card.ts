import { getApi } from "../../service/getApi";

export enum AttributeCard{
    "joke" = "joke"
}

export default class AppCard extends HTMLElement {
    joke?:string;

    static get observedAttributes(){
        const attrs: Record<AttributeCard, null> = {
            joke: null
        }
        return Object.keys(attrs)
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }
    
    attributeChangeCallback(
        propName:AttributeCard,
        _:unknown,
        newValue:string | undefined
    ){
        switch (propName) {
            default:
                this[propName] = newValue
                break;
        }

    }
    async connectedCallback() {
        this.render()
    }

    async render() {
        const cardJoke = this.ownerDocument.createElement('section')
        const text = this.ownerDocument.createElement('h1')
        text.innerText = `${this.joke}`
    }
}

customElements.define('app-card', AppCard)