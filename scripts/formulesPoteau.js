
import { Valeurs } from "./valeurs.js";

const formules = {
    effortNormalNu: {
        formule: () => String.raw`N_u = 1.35G + 1.5Q = 1.35\times${Valeurs.chargeG?.valeur ?? ".."} + 1.5\times${Valeurs.chargeQ?.valeur ?? ".."}`,
        resultat: () => String.raw`N_u = ${Valeurs.nUConnuValeur?.valeur ?? ".."}\ MN`,
    },

    longueurFlambement: {
        formule: () => String.raw`l_f = k\,l_0`,
        resultat: () => String.raw`l_f = ${Valeurs.k?.valeur ?? ".."}\;m`,
    },

    lambdaRectangulaire: {
        formule: () => String.raw`\lambda = 2\sqrt{3}\; \displaystyle\frac{l_f}{a}
        \;=\; 2\sqrt{3}\; \displaystyle\frac{k\,l_0}{a}
        \;=\; 2\sqrt{3}\times\displaystyle\frac{${Valeurs.k?.valeur ?? ".."} \times ${Valeurs.l0?.valeur ?? ".."}}
        {${Valeurs.a?.valeur ?? ".."}}`,
        resultat: () => String.raw`\lambda = ${Valeurs.lambda?.valeur ?? ".."}`,
    },
    lambdaCarrer: {
        formule: () => String.raw`\lambda = 2\sqrt{3}\; \displaystyle\frac{l_f}{c}
        \;=\; 2\sqrt{3}\; \displaystyle\frac{k\,l_0}{c}
        \;=\; 2\sqrt{3}\times\displaystyle\frac{${Valeurs.k?.valeur ?? ".."} \times ${Valeurs.l0?.valeur ?? ".."}}
        {${Valeurs.c?.valeur ?? ".."}}`,
        resultat: () => String.raw`\lambda = ${Valeurs.lambda?.valeur ?? ".."}`,
    },
    k: {
        formule: () => String.raw`k = ${Valeurs.k?.valeur ?? ".."}`,
        resultat: () => String.raw`k = ${Valeurs.k?.valeur ?? ".."}`,
    },

    lambdaCirculaire: {
        formule: () => String.raw`\lambda = 4\; \displaystyle\frac{l_f}{D}
        \;=\; 4\; \displaystyle\frac{k\,l_0}{D}
        \;=\; 4\times \displaystyle\frac{${Valeurs.k?.valeur ?? ".."}\times ${Valeurs.l0?.valeur ?? ".."}}{${Valeurs.d?.valeur ?? ".."}}`,
        resultat: () => String.raw`\lambda = ${Valeurs.lambda?.valeur ?? ".."}`,
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
        formule: () => String.raw`\displaystyle
        \alpha \;=\; \frac{0.85}{1+0.2\displaystyle\left(\frac{\lambda}{35}\right)^2}
        \;=\; \frac{0.85}{1+0.2\displaystyle\left(\frac{${Valeurs.lambda?.valeur ?? ".."}}{35}\right)^2}`,
        resultat: () => String.raw`\displaystyle \alpha = ${Valeurs.alpha?.valeur ?? ".."}`,
    },

    alphaLambdaSuperieur50: {
        formule: () => String.raw`\displaystyle \alpha' = 0.6\left(\frac{50}{\lambda}\right)^2
        \;=\; 0.6\left(\frac{50}{${Valeurs.lambda?.valeur ?? ".."}}\right)^2`,
        resultat: () => String.raw`\displaystyle \alpha' = ${Valeurs.alpha?.valeur ?? ".."}`,
    },

    alphaApres90Jours: {
        formule: () =>
            String.raw`\displaystyle j\,>\,90 \;\;\text{alors}\;\; \alpha' = \alpha`,
        resultat: () => String.raw`\alpha' = ${Valeurs.alphaPrime?.valeur ?? ".."}`,
    },

    alphaAvant90Jours: {
        formule: () => String.raw`\displaystyle j\,<\,90 \;\;\text{alors}\;\;
        \alpha' \,=\, \frac{\alpha}{1.10}
        \,=\, \frac{${Valeurs.alpha?.valeur ?? ".."}}{1.10}`,
        resultat: () => String.raw`\alpha' = ${Valeurs.alphaPrime?.valeur ?? ".."}`,
    },

    alphaAvant28Jours: {
        formule: () => String.raw`\displaystyle j \,<\, 28 \;\;\text{alors}\;\;
        \alpha' \,=\, \frac{\alpha}{1.20}
        \,=\, \frac{${Valeurs.alpha?.valeur ?? ".."}}{1.20}`,
        resultat: () => String.raw`\alpha' = ${Valeurs.alphaPrime?.valeur ?? ".."}`,
    },

    BrRectangulaire: {
        formule: () => String.raw`\displaystyle B_r
        \,=\, (a-0.02)(b-0.02)
        \,=\, ( ${Valeurs.a?.valeur ?? ".."}-0.02)( ${Valeurs.b?.valeur ?? ".."}-0.02)`,
        resultat: () => String.raw`\displaystyle B_r = ${Valeurs.Br?.valeur ?? ".."} \;m^2`,
    },
    BrCarrer: {
        formule: () => String.raw`\displaystyle B_r
        \,=\, (c-0.02)\,^2
        \,=\, ( ${Valeurs.c?.valeur ?? ".."}-0.02)\,^2`,
        resultat: () => String.raw`\displaystyle B_r = ${Valeurs.Br?.valeur ?? ".."} \;m^2`,
    },

    BrCirculaire: {
        formule: () => String.raw`\displaystyle B_r
        \,=\, \frac{\pi(d-0.02)^2}{4}
        \,=\, \frac{\pi\times(${Valeurs.d?.valeur ?? ".."}-0.02)^2}{4}`,
        resultat: () => String.raw`\displaystyle B_r = ${Valeurs.Br?.valeur ?? ".."} \;m^2`,
    },

    Ath: {
        formule: () => String.raw`\displaystyle
        A_{th} \,\geq\,
        \left[
        \frac{N_u}{\alpha}
        -
        \frac{B_r\, f_{c28}}
        {0.9\,\gamma_b}
        \right]
        \frac{\gamma_s}{f_e}

        \,\geq\,

        \left[
        \frac{${Valeurs.nUConnuValeur?.valeur ?? ".."}}{${Valeurs.alpha?.valeur ?? ".."}}
        -
        \frac{${Valeurs.Br?.valeur ?? ".."}\times${Valeurs.fc28?.valeur ?? ".."}}
        {0.9\times${Valeurs.gammaB?.valeur ?? "1.5"}}
        \right]
        \times\frac{${Valeurs.gammaS?.valeur ?? "1.15"}}{${Valeurs.fe?.valeur ?? ".."}}`,

        resultat: () => String.raw`A_{th} \geq ${Valeurs.Ath?.valeur ?? ".."} \;cm^2`,
    },

    perimetreURectangle: {
        formule: () => String.raw`\displaystyle u = 2(a+b) = 2\times(${Valeurs.a?.valeur ?? ".."}+${Valeurs.b?.valeur ?? ".."})`,
        resultat: () => String.raw`u = ${Valeurs.u?.valeur ?? ".."} \;m`,
    },
    perimetreUCarrer: {
        formule: () => String.raw`\displaystyle u = 4\,c = 4\times${Valeurs.c?.valeur ?? ".."}`,
        resultat: () => String.raw`u = ${Valeurs.u?.valeur ?? ".."} \;m`,
    },
    perimetreUCirculaire: {
        formule: () => String.raw`\displaystyle u = \pi d = \pi\times${Valeurs.d?.valeur ?? ".."}`,
        resultat: () => String.raw`u = ${Valeurs.u?.valeur ?? ".."} \;m`,
    },

    A4u: {
        formule: () => String.raw`\displaystyle
        A_{4u} = 4u = 4\times${Valeurs.u?.valeur ?? ".."}`,

        resultat: () => String.raw`A_{4u} = ${Valeurs.A4u?.valeur ?? ".."} \;cm^2`,
    },

    A02Pourcent: {
        formule: () => String.raw`\displaystyle
        A_{0.2\%} = \frac{0.2B}{100} = \frac{0.2\times${Valeurs.B?.valeur ?? ".."}}{100}`,

        resultat: () => String.raw`A_{0.2\%} = ${Valeurs.A02Pourcent?.valeur ?? ".."} \;cm^2`,
    },

    Amin: {
        formule: () => String.raw`\displaystyle
        A_{\min} = \max(A_{4u},A_{0.2\%})
        \;\;\text{soit}\;\;
        A_{\min} = \max(${Valeurs.A4u?.valeur ?? ".."}\;,\;${Valeurs.A02Pourcent?.valeur ?? ".."})`,

        resultat: () => String.raw`A_{\min} = ${Valeurs.Amin?.valeur ?? ".."} \;cm^2`,
    },

    Asc: {
        formule: () => String.raw`
        A_{sc} = \max(A_{th},A_{\min})
        \;\;\text{soit}\;\;
        A_{sc} = \max(${Valeurs.Ath?.valeur ?? ".."}\;,\;${Valeurs.Amin?.valeur ?? ".."})`,

        resultat: () => String.raw`A_{sc} = ${Valeurs.Asc?.valeur ?? ".."} \;cm^2`,
    },

    limiteAsc: {
        formule: () => String.raw`Donc \;\; \displaystyle
        \frac{0.2B}{100}
        \leq
        A_{sc}
        \leq
        \frac{5B}{100}
        \;\;\text{est vérifié.}`,

        resultat: () => String.raw`Donc \;\; \displaystyle
        \frac{0.2B}{100}
        \leq
        A_{sc}
        \leq
        \frac{5B}{100}
        \;\;\text{n'est pas vérifié.}`,
    },

    A5Pourcent: {
        formule: () => String.raw`\displaystyle
        A_{5\%} = \frac{5B}{100} = \frac{5\times${Valeurs.B?.valeur ?? ".."}}{100}`,

        resultat: () => String.raw`A_{5\%} = ${Valeurs.A5Pourcent?.valeur ?? ".."} \;cm^2`,
    },

    BRectangulaire: {
        formule: () => String.raw`\displaystyle B
        \,=\, ab
        \,=\, ${Valeurs.a?.valeur ?? ".."}\times${Valeurs.b?.valeur ?? ".."}`,

        resultat: () => String.raw`\displaystyle B = ${Valeurs.B?.valeur ?? ".."} \;cm^2`,
    },
    BCarrer: {
        formule: () => String.raw`\displaystyle B
        \,=\, c^2
        \,=\, ${Valeurs.c?.valeur ?? ".."}^2`,
        resultat: () => String.raw`\displaystyle B = ${Valeurs.B?.valeur ?? ".."} \;cm^2`,
    },

    BCirculaire: {
        formule: () => String.raw`\displaystyle B
        \,=\, \frac{\pi d^2}{4}
        \,=\, \frac{\pi\times${Valeurs.d?.valeur ?? ".."}^2}{4}`,

        resultat: () => String.raw`\displaystyle B = ${Valeurs.B?.valeur ?? ".."} \;cm^2`,
    },

    verif02PourcentInf: {
        formule: () => String.raw`\displaystyle
        ${Valeurs.A02Pourcent?.valeur ?? ".."} \leq ${Valeurs.Asc?.valeur ?? ".."}
        \Rightarrow A_{0.2\%} \leq A_{sc}`,

        resultat: () => String.raw`\displaystyle
        ${Valeurs.A02Pourcent?.valeur ?? ".."} \leq ${Valeurs.Asc?.valeur ?? ".."}
        \Rightarrow A_{0.2\%} \geq A_{sc}`,
    },

    verif05PourcentInf: {
        formule: () => String.raw`\displaystyle
        ${Valeurs.A5Pourcent?.valeur ?? ".."} \leq ${Valeurs.Asc?.valeur ?? ".."}
        \Rightarrow A_{5\%} \leq A_{sc}`,

        resultat: () => String.raw`\displaystyle
        ${Valeurs.A5Pourcent?.valeur ?? ".."} \geq ${Valeurs.Asc?.valeur ?? ".."}
        \Rightarrow A_{5\%} \geq A_{sc}`,
    },
};


export function afficherToutesFormules() {

    for (const [id, formule] of Object.entries(formules)) {

        //ce id consiste à l'id de l'endroit où la formule sra affiché dans le pagerésultat
        const element = document.getElementById(id);

        const elementResultat = document.getElementById(`resultat${id}`);

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

