
import { Valeurs } from "./valeurs.js";
import { ValeursCalculés } from "./valeurs.js";
import { afficherToutesFormules } from "./formulesPoteau.js";

export function valeurDeK() {
    const typeEncastrement = document.getElementById("encastrement");
    const nomDansValeurs = document.getElementById("k");

    typeEncastrement?.addEventListener("change", () => {
        const encasstrementSelelctionne = typeEncastrement.value;

        let valeurK;

        if (encasstrementSelelctionne === "simpleEncastre") {
            valeurK = 2;
        } else if (encasstrementSelelctionne === "doubleArticule") {
            valeurK = 1;
        } else if (encasstrementSelelctionne === "articuleEncastre") {
            valeurK = 0.707;
        } else if (encasstrementSelelctionne === "encastreArticule") {
            valeurK = 0.707;
        } else if (encasstrementSelelctionne === "doubleEncastre") {
            valeurK = 0.5;
        } else if (encasstrementSelelctionne === "etagesMultiples") {
            valeurK = 0.7;
        }


        console.log(valeurK);
        
        console.log(Valeurs);

        if (nomDansValeurs) {
            Valeurs[nomDansValeurs.id] = {
                valeur: valeurK,
                unite: null
            };
        }
        afficherToutesFormules();

    });



}


export function dureeDesCharges() {
    const repartitionDesCharges = document.getElementById("coefficientAlpha");
    const typechoisi = document.querySelectorAll("[data-choixcharges]");

    if (repartitionDesCharges.value === "default") {

        typechoisi.forEach((element) => {
            element.classList.add("invisible");
        });
    }

    repartitionDesCharges?.addEventListener("change", () => {
        console.log(repartitionDesCharges.value);

        for (const element of typechoisi) {
            if (repartitionDesCharges.value === element.dataset.choixcharges) {
                element.classList.remove("invisible");
            } else {
                element.classList.add("invisible");
            }
        }

    });
}

export function visibiliteParSection() {
    const choixSection = document.getElementById("typeSection");
    const typeAffichable = document.querySelectorAll("[data-section]");

     if (!choixSection) {
        console.error("typeSection introuvable");
        return;
    }

    if (choixSection.value === "default") {

        typeAffichable.forEach((element) => {
            element.classList.add("invisible");
        });
    }

    choixSection?.addEventListener("change", () => {
        const sectionSelectionnee = choixSection.value;

        for (const element of typeAffichable) {

            const sections = element.dataset.section.split(" ");

            if (sections.includes(sectionSelectionnee)) {
                element.classList.remove("invisible");
            } else {
                element.classList.add("invisible");
            }
        }

    });
}

/*

export function visibiliteParValeur() {

    const valeur = ValeursCalculés.lambda;
    const typeAffichable = document.querySelectorAll("[data-condition]");

    if (choixSection.value === "default") {

        typeAffichable.forEach((element) => {
            element.classList.add("invisible");
        });
    }

    choixSection?.addEventListener("change", () => {
        const sectionSelectionnee = choixSection.value;

        for (const element of typeAffichable) {
            if (element.dataset.section === sectionSelectionnee) {
                element.classList.remove("invisible");
            } else {
                element.classList.add("invisible");
            }
        }

    });
}

 */
