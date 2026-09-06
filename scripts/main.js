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
    
    await ajouterToutesLesBarres();
    await chargerToutesLesUnites();
    
    await afficherToutesFormules();
    
    console.log("✅ Application prête");
}


main();