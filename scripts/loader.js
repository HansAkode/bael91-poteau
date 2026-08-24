export async function chargerElement(element) {

    // Récupère le chemin du fichier
    const fichier = element.dataset.include;

    // S'il n'y a pas de fichier à charger
    if (!fichier) {
        return;
    }


    // Demande le fichier au serveur
    const response = await fetch(fichier);


    // Vérifie si le fichier existe
    if (!response.ok) {
        throw new Error(
            `Impossible de charger : ${fichier}`
        );
    }


    // Transforme la réponse en texte HTML
    const html = await response.text();


    // Met le HTML dans la zone
    element.innerHTML = html;


    // Cherche les composants présents
    // dans le HTML que nous venons d'insérer
    const enfants = element.querySelectorAll(
        "[data-include]"
    );


    // Charge chaque composant trouvé
    for (const enfant of enfants) {

        await chargerElement(enfant);

    }
}



export async function chargerToutesLesPages() {

    // Cherche toutes les zones data-include
    // présentes dans index.html
    const elements = document.querySelectorAll(
        "[data-include]"
    );


    // Charge chaque zone
    for (const element of elements) {

        await chargerElement(element);

    }


    console.log("✅ Toutes les pages sont chargées");
}