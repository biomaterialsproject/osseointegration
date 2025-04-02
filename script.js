// Funzione per mostrare o nascondere i sottotitoli di un episodio
function toggleSubtitles(subtitleId) {
    var subtitle = document.getElementById(subtitleId);
    if (subtitle.style.display === "none" || subtitle.style.display === "") {
        subtitle.style.display = "block"; // Mostra i sottotitoli
    } else {
        subtitle.style.display = "none"; // Nascondi i sottotitoli
    }
}

// Funzione per caricare il contenuto in base alla sezione cliccata
function loadPage(page) {
    // Rimuovi la classe "active" da tutte le voci di navigazione
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Aggiungi la classe "active" alla voce cliccata
    document.getElementById('nav' + page).classList.add('active');

    // Cambia il contenuto in base alla sezione selezionata
    const content = document.getElementById('content');

    // File da caricare in base alla sezione
    let fileToLoad = '';

    if (page === 1) {
        fileToLoad = 'home.html'; // Carica il contenuto da home.html
    } else if (page === 2) {
        fileToLoad = 'due.html'; // Carica il contenuto da due.html
    } else if (page === 3) {
        fileToLoad = 'tre.html'; // Carica il contenuto da tre.html
    } else if (page === 4) {
        fileToLoad = 'quattro.html'; // Carica il contenuto da quattro.html
    }

    // Carica il contenuto usando fetch
    fetch(fileToLoad)
        .then(response => response.text())
        .then(data => {
            content.innerHTML = data; // Imposta il contenuto del file HTML nella pagina
        })
        .catch(error => {
            console.error('Errore nel caricamento del file:', error);
            content.innerHTML = '<p>Impossibile caricare il contenuto. Riprova più tardi.</p>';
        });
}
