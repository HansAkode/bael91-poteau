
import { Valeurs } from "./valeurs.js";


const formules = {
    effortNormalNu: {
        formule: () => String.raw`N_u = 1.35G + 1.5Q = 1.35\times${Valeurs.chargeG?.valeur ?? ".."} + 1.5\times${Valeurs.chargeQ?.valeur ?? ".."}`,
        resultat: () => String.raw`N_u = ${Valeurs.nUConnuValeur?.valeur ?? ".."}\ MN`,
    },
    longueurFlambement: {
        formule: () => String.raw`l_f = k\,l_0`,
        resultat: () => String.raw`l_f = k\,l_0`,
    },
    lambdaRectangulaire: {
        formule: () => String.raw`\lambda = 2\sqrt{3}\; \displaystyle\frac{l_f}{a} 
        \;=\; 2\sqrt{3}\; \displaystyle\frac{k\,l_0}{a} 
        \;=\; 2\sqrt{3}\times\displaystyle\frac{${Valeurs.nUConnuValeur?.valeur ?? ".."} \times ${Valeurs.nUConnuValeur?.valeur ?? ".."}}
        {${Valeurs.nUConnuValeur?.valeur ?? ".."}}`,
        resultat: () => String.raw`\lambda = ${Valeurs.nUConnuValeur?.valeur ?? ".."}`,
    },
    k: {
        formule: () => String.raw`k =`,
        resultat: () => String.raw`k = ${Valeurs.nUConnuValeur?.valeur ?? ".."}`,
    },
    lambdaCirculaire: {
        formule: () => String.raw`\lambda = 4\; \displaystyle\frac{l_f}{D} 
        \;=\; 4\; \displaystyle\frac{k\,l_0}{D}
        \;=\;  4\times \displaystyle\frac{${Valeurs.nUConnuValeur?.valeur ?? ".."}\times ${Valeurs.nUConnuValeur?.valeur ?? ".."}}{${Valeurs.nUConnuValeur?.valeur ?? ".."}}`,
        resultat: () => String.raw`\lambda = ${Valeurs.nUConnuValeur?.valeur ?? ".."}`,
    },

    conditionLambda70: {
        formule: () => String.raw`\lambda \leq 70`,
        resultat: () => String.raw`\lambda \geq 70`,

    },
    conditionLambda50: {
        formule: () => String.raw`\lambda \leq 50`,
        resultat: () => String.raw`\lambda \geq 50`,

    },
    alphaLambdaInferieur50: {
        formule: () => String.raw`\displaystyle  \alpha \; =\; \frac{0.85}{1+0.2\displaystyle \left(\frac{\lambda}{35}\right)^2}
        \; =\; \frac{0.85}{1+0.2\displaystyle \left(\frac{${Valeurs.nUConnuValeur?.valeur ?? ".."}}{35}\right)^2}`,
        resultat: () => String.raw`\displaystyle \alpha = ${Valeurs.nUConnuValeur?.valeur ?? ".."}`,
    },

    alphaLambdaSuperieur50: {
        formule: () => String.raw`\displaystyle \alpha \;=\; 0.6\left(\frac{50}{\lambda}\right)^2 
        \;=\; 0.6\left(\frac{50}{${Valeurs.nUConnuValeur?.valeur ?? ".."}}\right)^2`,
        resultat: () => String.raw`\displaystyle \alpha = ${Valeurs.nUConnuValeur?.valeur ?? ".."}`,
    },

}




export function afficherToutesFormules() {

    for (const [id, formule] of Object.entries(formules)) {

        //ce id consiste à l'id de l'endroit où la formule sra affiché dans le pagerésultat
        const element = document.getElementById(id);

        const elementResultat = document.getElementById(`resultat${ id }`);

        if (element) {
            element.style.padding = "0% 0%"
            element.style.margin = "0% 2%"

            katex.render(formule.formule(), element, {
                throwOnError: false,
                displayMode: false
            });

            const katexElement = element.querySelector(".katex");

            if (katexElement) {
                katexElement.style.fontSize = ".95rem";
            }
        }

        if (elementResultat) {
            elementResultat.style.padding = "0% 0%"
            elementResultat.style.margin = "0% 2%"

            katex.render(formule.resultat(), elementResultat, {
                throwOnError: false,
                displayMode: false
            });

            const katexElement = elementResultat.querySelector(".katex");

            if (katexElement) {
                katexElement.style.fontSize = "0.95rem";
            }

        }

    }
}

