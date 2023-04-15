import "./components/export"
import { getApi } from "./service/getApi";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

 connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('app-card');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)