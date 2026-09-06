
import { Valeurs } from "./valeurs.js";

import { afficherToutesFormules } from "./formulesPoteauLast.js";

export async function uniteType(typeDonnees) {
    const typeUnite = typeDonnees.dataset.typeunites;
    console.log("page trouver ");

    const unites = {
        sansUnite: ["aucune"],
        longueur: ["m", "dm", "cm", "mm"],
        surface: ["m²", "dm²", "cm²", "mm²"],
        volume: ["m³", "dm³", "cm³", "mm³"],
        force: ["N", "daN", "kN", "MN", "kgf", "tf"],
        moment: ["N·m", "daN·m", "kN·m", "MN·m"],
        contrainte: ["Pa", "kPa", "MPa", "GPa", "N/mm²"],
        chargeLineaire: ["N/m", "daN/m", "kN/m"],
        chargeSurfacique: ["N/m²", "daN/m²", "kN/m²", "kgf/m²"],
        chargeVolumique: ["N/m³", "daN/m³", "kN/m³"],
        masse: ["g", "kg", "t"],
        masseVolumique: ["kg/m³", "t/m³"],
    };
    function uniteListAdd(elements) {
        for (const element of elements) {
            const newUnite = document.createElement("option");

            newUnite.value = element;
            newUnite.textContent = element;

            typeDonnees.appendChild(newUnite);
        }
    };

    const listeUnites = unites[typeUnite];

    if (listeUnites) {
        uniteListAdd(listeUnites);
    } else {
        uniteListAdd(unites.sansUnite);
    }
}

export async function chargerToutesLesUnites() {
    const allData = document.querySelectorAll("[data-typeunites]");

    for (const element of allData) {
        await uniteType(element);
    }
}


export async function barreDonnees(ligneGridId) {
    const localisation = ligneGridId;
    if (!localisation) {
        return;
    }

    const leTitre = localisation.dataset.titre;
    const leUnitetype = localisation.dataset.titreunite;
    const nomDonnee = localisation.dataset.gridname;

    const gridBarre = document.createElement("div");

    const donneesGrid = document.createElement("h2");
    const valeurGrid = document.createElement("input");
    const uniteGrid = document.createElement("select");
    const donneesVide1 = document.createElement("div");
    const donneesVide2 = document.createElement("div");



    gridBarre.classList.add("grid", "grid-cols-[5%_40%_30%_20%_5%]", "grid-rows-1");
    donneesGrid.classList.add("p-0", "m-0", "flex", "items-center");
    valeurGrid.classList.add("border-1", "border-gray-300", "rounded-md", "mx-3", "p-1");
    uniteGrid.classList.add("border-1", "border-gray-300", "rounded-md", "p-1");

    gridBarre.append(donneesVide1, donneesGrid, valeurGrid, uniteGrid, donneesVide2);


    donneesGrid.textContent = leTitre;

    valeurGrid.type = "text";
    valeurGrid.placeholder = "";

    uniteGrid.dataset.typeunites = leUnitetype;

    localisation.appendChild(gridBarre);


    Valeurs[nomDonnee] = {
        valeur: null,
        unite: null
    };

    valeurGrid.addEventListener(
        "input",
        () => {

            const valeur = valeurGrid.value.trim();

            if (valeur === "") {
                Valeurs[nomDonnee].valeur = null;
            } else {
                Valeurs[nomDonnee].valeur = Number(valeur);
            }

            afficherToutesFormules();

        }
    );

    uniteGrid.addEventListener(
        "change", () => {
            Valeurs[nomDonnee].unite = uniteGrid.value;
            afficherToutesFormules();
        }
        
    );


}


export async function ajouterToutesLesBarres() {
    const allGridlineId = document.querySelectorAll("[data-gridname]");

    for (const element of allGridlineId) {
        await barreDonnees(element);
    }
}