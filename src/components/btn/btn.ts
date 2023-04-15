import { getApi } from "../../service/getApi";

export enum AttributeBtn{
    "btn_text" = "btn_text"
}

export default class AppBtn extends HTMLElement {
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
    
    attributeChangeCallback(
        propName:AttributeBtn,
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
              const data = await getApi();
        data.forEach((a:any) => {
            const btn = this.ownerDocument.createElement('button')
            btn.innerText=`${a}`
            btn.addEventListener('click',async () => {
                const jokes =  await fetch('https://api.chucknorris.io/jokes/random?category='+ a).then(res => res.json() )
                console.log(jokes)
                
            })
            this.shadowRoot?.appendChild(btn)

        });
    }
}

customElements.define('app-btn', AppBtn)