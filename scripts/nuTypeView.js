export function initialiserNuTypeView() {

    const select = document.getElementById("nuEtat");

    const nuConnu = document.getElementById("nuConnuBrut");

    const nuInconnu = document.getElementById("nuInconnuBrut");


    // Vérification
    if (!select || !nuConnu || !nuInconnu) {

        console.error(
            "❌ Éléments du Nu introuvables"
        );

        return;
    }


    function mettreAJour() {

        if (select.value === "connu") {

            nuConnu.classList.remove("hidden");

            nuInconnu.classList.add("hidden");

        } else {

            nuConnu.classList.add("hidden");

            nuInconnu.classList.remove("hidden");
        }
    }


    // État initial
    mettreAJour();


    // Surveille les changements
    select.addEventListener("change", mettreAJour);
}

export function initialiserGeometrieTypeView() {
    const choixSection = document.getElementById("typeSection");
    const typeAffichable = document.querySelectorAll("[data-sectionaspect]");

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

            const sections = element.dataset.sectionaspect.split(" ");

            if (sections.includes(sectionSelectionnee)) {
                element.classList.remove("invisible");
            } else {
                element.classList.add("invisible");
            }
        }

    });
}

/*
export function initialiserGeometrieTypeView() {

    const select = document.getElementById("typeSection");

    const typeRectangulaire = document.getElementById("rectangulaire");

    const typeCarrer = document.getElementById("carrer");

    const typeCirculaire = document.getElementById("circulaire");


    // Vérification
    if (!select || !typeRectangulaire || !typeCarrer || !typeCirculaire) {

        console.error(
            "❌ Éléments du Nu introuvables"
        );

        return;
    }


    function mettreAJour() {

        if (select.value === "re") {

            typeRectangulaire.classList.remove("hidden");

            typeCarrer.classList.add("hidden");

            typeCirculaire.classList.add("hidden");

        } else if (select.value === "ca") {
            typeRectangulaire.classList.add("hidden");

            typeCarrer.classList.remove("hidden");

            typeCirculaire.classList.add("hidden");

        } else {
            typeRectangulaire.classList.add("hidden");

            typeCarrer.classList.add("hidden");

            typeCirculaire.classList.remove("hidden");

        }
    }


    // État initial
    mettreAJour();


    // Surveille les changements
    select.addEventListener("change", mettreAJour);
}
*/
