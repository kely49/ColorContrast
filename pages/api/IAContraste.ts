function hexToRGB(hex: string): [number, number, number] {
    // Remueve el símbolo '#' si está presente
    hex = hex.replace(/^#/, '');

    // Divide el string en componentes de 2 caracteres
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return [r, g, b];
}

function luminance(r: number, g: number, b: number): number {
    const a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function contrastRatio(hexColor1: string, hexColor2: string): number {
    const [r1, g1, b1] = hexToRGB(hexColor1);
    const [r2, g2, b2] = hexToRGB(hexColor2);

    const lum1 = luminance(r1, g1, b1);
    const lum2 = luminance(r2, g2, b2);

    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);

    return (brightest + 0.05) / (darkest + 0.05);
}

export enum AccesibilityLevel {
    NotMet = 'Not Met',
    AA = 'AA',
    AAA = 'AAA'
  }
  
  export function accesibilityRatingAASmallText(contrastRatio: number): boolean {
    const aaRatio = 4.5;
    return contrastRatio >= aaRatio;
  }
  
  export function accesibilityRatingAAALargeText(contrastRatio: number): boolean {
    const aaaRatio = 4.5;
    return contrastRatio >= aaaRatio;
  }
  
  export function accesibilityRatingAALargeText(contrastRatio: number): boolean {
    const aaRatio = 3;
    return contrastRatio >= aaRatio;
  }
  
  export function accesibilityRatingAAASmallText(contrastRatio: number): boolean {
    const aaaRatio = 7;
    return contrastRatio >= aaaRatio;
  }