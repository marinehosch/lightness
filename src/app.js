import { createPalette } from "./modules/utils.js"
import { isHexColor } from "./modules/utils.js";
import color from "./modules/color.js";
import * as colorConvert from "color-convert";


//{} une fonction du truc et pas tout le truc 

createPalette("#99aa23");

//faire les queryselector pour ajouter mes nuances dans le html
//prendre value...
//je fais pas de queryselector, je fais sur tout le doc car pas d'autre formulaire.
const input = document.querySelector("input");
const regex = new RegExp("/^#[0-9A-F]{6}$/i")
document.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("main").innerHTML = "";
    console.log(input.value);
    
    if (isHexColor(input.value)) {
        const palette = createPalette(input.value)
        

        palette.forEach(element => {
            let couleur = new color(element)
            couleur.display(document.querySelector("main"));
            document.querySelector("header").classList.add("minimized");
            

            //document.body.style.background =`linear-gradient(-45deg, #${convertHslToHex(palette[0])}, #${convertHslToHex(palette[Math.round(palette.length/2)])}, #${convertHslToHex(palette[palette.length-1])})`;

        });

        document.body.style.background = `linear-gradient=(-45deg, ${colorConvert.hsl.hex(palette[0])}, ${colorConvert.hsl.hex(palette[Math.round(palette.length/2)])}, ${colorConvert.hsl.hex(palette[palette.length-1])})`;
        document.body.style.backgroundSize = `400% 400%`;
        
    } else {
        console.log("erreur")
    }
})

