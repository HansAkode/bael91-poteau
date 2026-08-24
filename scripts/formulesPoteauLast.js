
import { Valeurs } from "./valeurs.js";


const formules = {
    effortNormalNu: {
        formule: () => String.raw`N_u = 1.35G + 1.5Q = 1.35\times${Valeurs.chargeG?.valeur ?? ""} + 1.5\times${Valeurs.chargeQ?.valeur ?? ""}`,
        resultat: () => String.raw`N_u = ${Valeurs.nUConnuValeur?.valeur ?? ""}\ MN`,
    },
}




export function afficherToutesFormules() {

    for (const [id, formule] of Object.entries(formules)) {

        //ce id consiste à l'id de l'endroit où la formule sra affiché dans le pagerésultat
        const element = document.getElementById(id);

        const elementResultat = document.getElementById(`resultat${id}`);

        if (element) {

            katex.render(formule.formule(), element, {
                throwOnError: false,
                displayMode: true
            });
        }

        if (elementResultat) {

            katex.render(formule.resultat(), elementResultat, {
                throwOnError: false,
                displayMode: true
            });

        }

    }
}

