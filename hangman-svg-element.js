import {TelepathicElement} from "../telepathic-element/telepathic-element.js";
export default class HangmanSvgElement extends TelepathicElement{
    constructor(){
        super();
        this.state = 6;
        this.word = "word";
    }

    static get observedAttributes() {
        return ['state','word'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log("Setting "+attrName+" to "+newVal);
        if(attrName == "state"){
            this.setState(newVal);
        }else{
            this[attrName] = newVal;
        }
    }
    async init(){
        window.hangman = this;       
        this.parts = this.$.querySelectorAll("g");
        console.log("parts: ",this.parts);
    }

    draw(i){
        let part = this.parts[i];
        console.log("found part: ",part);
        part.setAttribute("display","block");
    }
    clear(i){
        let part = this.parts[i];
        console.log("found part: ",part);
        part.setAttribute("display","none");
    }
    setState(state){
        console.log("setting state "+state+" on ",this);
        if(this.parts){
            for(let i=0; i <= this.parts.length -1; i++){
                let action = (i <= state) ? "draw" : "clear";
                this[action](i);
            }
        }
        this.state = state;
    }
}