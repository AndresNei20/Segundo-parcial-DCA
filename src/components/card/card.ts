import { getApi } from "../../service/getApi";

export enum AttributeBtn{
    "btn_text" = "btn_text"
}

export default class AppCard extends HTMLElement {
    btn_text?:string;

    static get observedAttributes(){
        const attrs: Record<AttributeBtn, null> = {
            btn_text: null
        }
        return Object.keys(attrs)
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const data = await getApi();
        
        data.forEach((array:any) => {
            const btn = this.ownerDocument.createElement('button')
            btn.setAttribute(AttributeBtn.btn_text, array.category)
        });
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-card', AppCard)