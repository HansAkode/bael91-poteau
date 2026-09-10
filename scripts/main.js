import { chargerToutesLesPages } from "./loader.js";
import { initialiserNuTypeView } from "./nuTypeView.js";
import { initialiserGeometrieTypeView } from "./nuTypeView.js";
import { chargerToutesLesUnites } from "./fonctions.js";
import { ajouterToutesLesBarres } from "./fonctions.js";
import { afficherToutesFormules } from "./formulesPoteau.js";
import { valeurDeK } from "./affichageVariables.js";
import { dureeDesCharges } from "./affichageVariables.js";
import { visibiliteParSection } from "./affichageVariables.js";


async function main() {

    console.log("🚀 Démarrage");

    await chargerToutesLesPages();
    console.log("📄 HTML complètement chargé");


    initialiserNuTypeView();
    initialiserGeometrieTypeView();

    await ajouterToutesLesBarres();
    await chargerToutesLesUnites();

    afficherToutesFormules();
    valeurDeK();
    dureeDesCharges();
    visibiliteParSection();
    
    console.log("✅ Application prête");
}


main();