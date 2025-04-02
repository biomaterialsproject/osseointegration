// Funzione per caricare il contenuto in base alla sezione cliccata
function loadPage(page) {
    // Mappa delle pagine ai file HTML corrispondenti
    const pages = {
        1: 'uno.html',
        2: 'due.html',
        3: 'tre.html',
        4: 'quattro.html'
    };

    // Rimuovi la classe "active" da tutte le voci di navigazione
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Aggiungi la classe "active" alla voce cliccata
    const navItem = document.getElementById('nav' + page);
    if (navItem) {
        navItem.classList.add('active');
    }

    // Ottieni il file corrispondente
    const fileToLoad = pages[page];

    if (!fileToLoad) {
        console.error('Pagina non trovata:', page);
        document.getElementById('content').innerHTML = '<p>Errore: Pagina non disponibile.</p>';
        return;
    }

    // Carica il contenuto usando fetch
    fetch(fileToLoad)
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore nel caricamento del file: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error(error);
            document.getElementById('content').innerHTML = '<p>Impossibile caricare il contenuto. Riprova più tardi.</p>';
        });
}
