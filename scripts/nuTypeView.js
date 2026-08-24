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
