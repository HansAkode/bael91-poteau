

const formules = {

    // ==============================
    // CHARGES
    // ==============================

    combinaisonNu:
        String.raw`N_u = 1.35G + 1.5Q`,


    // ==============================
    // LONGUEUR DE FLAMBEMENT
    // ==============================

    longueurFlambement:
        String.raw`l_f = k\,l_0`,


    // ==============================
    // ÉLANCEMENT
    // ==============================

    lambdaRectangulaire:
        String.raw`\lambda = 2\sqrt{3}\frac{l_f}{a}`,

    lambdaCirculaire:
        String.raw`\lambda = 4\frac{l_f}{D}`,

    conditionLambda70:
        String.raw`\lambda \leq 70`,

    conditionLambda50:
        String.raw`\lambda \leq 50`,


    // ==============================
    // COEFFICIENT α
    // ==============================

    alphaLambdaInferieur50:
        String.raw`
        \alpha =
        \frac{0.85}
        {1+0.2\left(\frac{\lambda}{35}\right)^2}
        `,

    alphaLambdaSuperieur50:
        String.raw`
        \alpha =
        0.6\left(\frac{50}{\lambda}\right)^2
        `,


    // ==============================
    // CORRECTION DE α
    // ==============================

    alphaApres90Jours:
        String.raw`\alpha = \alpha`,

    alphaAvant90Jours:
        String.raw`\alpha = \frac{\alpha}{1.10}`,

    alphaAvant28Jours:
        String.raw`\alpha = \frac{\alpha}{1.20}`,


    // ==============================
    // SECTION RÉDUITE DU BÉTON
    // ==============================

    BrRectangulaire:
        String.raw`
        B_r = (a-0.02)(b-0.02)
        `,

    BrCirculaire:
        String.raw`
        B_r = \frac{\pi(d-0.02)^2}{4}
        `,


    // ==============================
    // SECTION D'ACIER THÉORIQUE
    // ==============================

    Ath:
        String.raw`
        A_{th} \geq
        \left[
        \frac{N_u}{\alpha}
        -
        \frac{B_r f_{c28}}
        {0.9\gamma_b}
        \right]
        \frac{\gamma_s}{f_e}
        `,


    // ==============================
    // ARMATURES MINIMALES
    // ==============================

    A4u:
        String.raw`
        A_{4u} = 4u
        `,

    A02Pourcent:
        String.raw`
        A_{0.2\%} = \frac{0.2B}{100}
        `,

    Amin:
        String.raw`
        A_{\min} =
        \max(A_{4u},A_{0.2\%})
        `,

    Asc:
        String.raw`
        A_{sc} =
        \max(A_{th},A_{\min})
        `,


    // ==============================
    // LIMITES DE L'ACIER
    // ==============================

    limiteAsc:
        String.raw`
        \frac{0.2B}{100}
        \leq
        A_{sc}
        \leq
        \frac{5B}{100}
        `,


    // ==============================
    // ARMATURES TRANSVERSALES
    // ==============================

    diametreCadres:
        String.raw`
        \phi_t >
        \frac{\phi_{\max}}{3}
        `,

    espacementCadres:
        String.raw`
        t \leq
        \inf
        \left(
        15\phi_{\min};
        40\,cm;
        a+10\,cm
        \right)
        `,

    nombreCours:
        String.raw`
        n_{\text{cours}} \geq 3
        `,


    // ==============================
    // COEFFICIENTS DE SÉCURITÉ
    // ==============================

    gammaB:
        String.raw`
        \gamma_b = 1.5
        `,

    gammaS:
        String.raw`
        \gamma_s = 1.15
        `,


    // ==============================
    // CONVERSION
    // ==============================

    conversionMNKN:
        String.raw`
        1\,MN = 10^3\,kN
        `
};

export function afficherFormules() {

    for (const [id, formule] of Object.entries(formules)) {

        const element = document.getElementById(id);

        if (element) {

            katex.render(formule, element, {
                throwOnError: false,
                displayMode: true
            });

        }

    }
}