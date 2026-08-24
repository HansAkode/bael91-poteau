import { chargerToutesLesPages } from "./loader.js";
import { initialiserNuTypeView } from "./nuTypeView.js";
import { initialiserGeometrieTypeView } from "./nuTypeView.js";
import { chargerToutesLesUnites } from "./fonctions.js";
import { ajouterToutesLesBarres } from "./fonctions.js";
import {afficherToutesFormules} from "./formulesPoteauLast.js";

async function main() {

    console.log("🚀 Démarrage");

    await chargerToutesLesPages();
    console.log("📄 HTML complètement chargé");


    await initialiserNuTypeView();
    await initialiserGeometrieTypeView();
    await afficherToutesFormules();
    await ajouterToutesLesBarres();
    await chargerToutesLesUnites();
    console.log("✅ Application prête");
}


main();