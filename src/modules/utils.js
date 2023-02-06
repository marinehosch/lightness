import * as colorConvert from "color-convert";

export const createPalette = (color)  => {
    let hsl = colorConvert.hex.hsl(color)
    let nuances = [];
    for (let i = 0; i < 100; i += 10) {
        nuances.push([hsl[0], hsl[1], i]);
    }    
    console.log(nuances) 
    return nuances
}

export const isHexColor = (hex) => /^#[0-9A-F]{6}$/i.test(hex);
export default createPalette;