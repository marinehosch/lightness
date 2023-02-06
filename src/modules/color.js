import * as colorConvert from "color-convert";

class color {
  constructor(arrayHsl) {
    this.arrayHsl = arrayHsl;
    this.hex = colorConvert.hsl.hex(arrayHsl);
  }

  #hex() {
    return this.#hex;
    }
    
    

  #generateElement() {
      return `<div class="color" data-color=#${this.hex} style="background-color: #${this.hex}">
            <p style="color: rgb(255, 255, 255)">#${this.hex}</p>
        </div>`;
    }

    #element() {
        return this.#generateElement
    }

    display(parent) {
        parent.insertAdjacentHTML("afterbegin", this.#generateElement());
    }
}

export default color; 
