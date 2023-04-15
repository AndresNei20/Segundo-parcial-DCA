import "./components/export"
import { getApi } from "./service/getApi";
import {AttributeBtn} from './components/btn/btn'

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

 async connectedCallback() {
    const attrs = 
        this.render()
    }

    render() {
        const buttons = this.ownerDocument.createElement('app-btn');
        this.shadowRoot?.appendChild(buttons);
      
        const cardJoke = this.ownerDocument.createElement('app-card');
        this.shadowRoot?.appendChild(cardJoke);


    }
}

customElements.define('app-container', AppContainer)